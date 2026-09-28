import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.resolve('docs/research/chrome-profile');

if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir, { recursive: true });
}

const chrome = spawn(chromePath, [
  '--remote-debugging-port=9222',
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
]);

// Wait 2 seconds for Chrome to start
await new Promise(r => setTimeout(r, 2000));

try {
  // Get webSocketDebuggerUrl
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const versionData = await versionRes.json();
  console.log("CDP connected to:", versionData.Browser);

  // Create new target
  const newTabRes = await fetch('http://127.0.0.1:9222/json/new?https://mugenstudio.framer.website/', { method: 'PUT' });
  const target = await newTabRes.json();
  console.log("Target created:", target.id);

  const ws = new WebSocket(target.webSocketDebuggerUrl);

  let idCounter = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      callbacks.get(msg.id)(msg);
      callbacks.delete(msg.id);
    }
  };

  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      callbacks.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await send('Page.enable');
  await send('DOM.enable');
  await send('CSS.enable');
  await send('Runtime.enable');

  // Set viewport to 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  console.log("Waiting 6 seconds for Framer preloader and animations to settle...");
  await new Promise(r => setTimeout(r, 6000));

  // Take screenshot
  const screenshotRes = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });

  if (screenshotRes.result?.data) {
    const buf = Buffer.from(screenshotRes.result.data, 'base64');
    fs.writeFileSync('docs/design-references/original-loaded-full.png', buf);
    console.log("Saved full loaded screenshot to docs/design-references/original-loaded-full.png");
  }

  // Extract detailed section structures and computed styles
  const extractRes = await send('Runtime.evaluate', {
    expression: `(function() {
      // Find all sections or main containers
      const data = {
        title: document.title,
        bodyBg: getComputedStyle(document.body).backgroundColor,
        elements: []
      };

      // Query key sections
      const selectors = [
        'nav',
        'header',
        '[data-framer-name="Hero"]',
        '[data-framer-name="Approach"]',
        '[data-framer-name="Works"]',
        '[data-framer-name="Services"]',
        '[data-framer-name="Process"]',
        '[data-framer-name="Pricing"]',
        '[data-framer-name="FAQ"]',
        '[data-framer-name="Articles"]',
        '[data-framer-name="CTA"]',
        'footer'
      ];

      function extractBasic(el) {
        if (!el) return null;
        const cs = getComputedStyle(el);
        return {
          tag: el.tagName,
          framerName: el.getAttribute('data-framer-name'),
          classes: el.className,
          rect: el.getBoundingClientRect(),
          styles: {
            fontSize: cs.fontSize,
            fontFamily: cs.fontFamily,
            fontWeight: cs.fontWeight,
            color: cs.color,
            backgroundColor: cs.backgroundColor,
            lineHeight: cs.lineHeight,
            letterSpacing: cs.letterSpacing,
            display: cs.display,
            padding: cs.padding,
            margin: cs.margin,
            border: cs.border,
            borderRadius: cs.borderRadius,
            gap: cs.gap,
            maxWidth: cs.maxWidth
          },
          text: el.innerText ? el.innerText.slice(0, 300) : ''
        };
      }

      const allDivs = document.querySelectorAll('div, section, header, nav, footer, p, h1, h2, h3, a, button');
      // find elements with text or images
      const interesting = [];
      allDivs.forEach(el => {
        const fn = el.getAttribute('data-framer-name');
        if (fn) {
          interesting.push(extractBasic(el));
        }
      });

      return JSON.stringify({
        interesting: interesting.slice(0, 100),
        htmlPreview: document.body.innerHTML.slice(0, 5000)
      }, null, 2);
    })()`
  });

  if (extractRes.result?.result?.value) {
    fs.writeFileSync('docs/research/cdp-extracted.json', extractRes.result.result.value);
    console.log("Saved extracted data to docs/research/cdp-extracted.json");
  }

  ws.close();
} catch (e) {
  console.error("CDP execution error:", e);
} finally {
  chrome.kill();
}
