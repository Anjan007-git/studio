import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.resolve('docs/research/chrome-profile-2');

if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir, { recursive: true });
}

const chrome = spawn(chromePath, [
  '--remote-debugging-port=9223',
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const newTabRes = await fetch('http://127.0.0.1:9223/json/new?https://mugenstudio.framer.website/', { method: 'PUT' });
  const target = await newTabRes.json();
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
  await send('Runtime.enable');

  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  console.log("Waiting 5s for intro...");
  await new Promise(r => setTimeout(r, 5000));

  // Scroll down progressively to trigger all IntersectionObservers and animations
  console.log("Scrolling down progressively to trigger all scroll animations...");
  for (let i = 0; i < 20; i++) {
    await send('Runtime.evaluate', {
      expression: `window.scrollBy(0, 600);`
    });
    await new Promise(r => setTimeout(r, 400));
  }

  // Scroll back to top
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
  await new Promise(r => setTimeout(r, 1000));

  // Take full screenshot now that everything is triggered and visible!
  const fullScreenshot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });

  if (fullScreenshot.result?.data) {
    fs.writeFileSync('docs/design-references/original-scrolled-full.png', Buffer.from(fullScreenshot.result.data, 'base64'));
    console.log("Saved original-scrolled-full.png!");
  }

  // Extract all sections and their exact DOM structure & styles
  const allElements = await send('Runtime.evaluate', {
    expression: `(function() {
      const sections = [];
      const framerSections = document.querySelectorAll('section, [data-framer-name]');
      framerSections.forEach(s => {
        const name = s.getAttribute('data-framer-name');
        if (name && (
          name.includes('Hero') ||
          name.includes('Approach') ||
          name.includes('Works') ||
          name.includes('Projects') ||
          name.includes('Service') ||
          name.includes('Process') ||
          name.includes('Pricing') ||
          name.includes('FAQ') ||
          name.includes('Article') ||
          name.includes('CTA') ||
          name.includes('Top Bar') ||
          name.includes('Studio') ||
          name.includes('Person') ||
          name.includes('Quote') ||
          name.includes('Why')
        )) {
          const cs = getComputedStyle(s);
          sections.push({
            name,
            tag: s.tagName,
            rect: s.getBoundingClientRect(),
            styles: {
              background: cs.backgroundColor,
              color: cs.color,
              padding: cs.padding,
              margin: cs.margin,
              display: cs.display,
              flexDirection: cs.flexDirection,
              gridTemplateColumns: cs.gridTemplateColumns,
              gap: cs.gap,
              width: cs.width,
              maxWidth: cs.maxWidth
            },
            innerHTML: s.innerHTML.slice(0, 1000)
          });
        }
      });
      return JSON.stringify(sections, null, 2);
    })()`
  });

  if (allElements.result?.result?.value) {
    fs.writeFileSync('docs/research/sections-detailed.json', allElements.result.result.value);
    console.log("Saved sections-detailed.json");
  }

  ws.close();
} catch (e) {
  console.error("Deep inspect error:", e);
} finally {
  chrome.kill();
}
