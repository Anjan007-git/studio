import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.resolve('docs/research/chrome-profile-4');

if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir, { recursive: true });
}

const chrome = spawn(chromePath, [
  '--remote-debugging-port=9225',
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const newTabRes = await fetch('http://127.0.0.1:9225/json/new?https://mugenstudio.framer.website/', { method: 'PUT' });
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

  await new Promise(r => setTimeout(r, 3000));

  // Scroll down smoothly through all sections so all animations trigger
  for (let y = 0; y <= 18000; y += 1000) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y});` });
    await new Promise(r => setTimeout(r, 200));
  }

  // Key scroll positions to screenshot
  const positions = [
    { name: '1-hero', y: 0 },
    { name: '2-approach', y: 1100 },
    { name: '3-projects', y: 2400 },
    { name: '4-why-choose-us', y: 4400 },
    { name: '5-services-top', y: 6000 },
    { name: '6-services-mid', y: 7500 },
    { name: '7-process', y: 10000 },
    { name: '8-pricing', y: 12000 },
    { name: '9-testimonials-faq', y: 14000 },
    { name: '10-articles-cta-footer', y: 16500 }
  ];

  for (const pos of positions) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${pos.y});` });
    await new Promise(r => setTimeout(r, 600));

    const ss = await send('Page.captureScreenshot', { format: 'png' });
    if (ss.result?.data) {
      fs.writeFileSync(`docs/design-references/${pos.name}.png`, Buffer.from(ss.result.data, 'base64'));
      console.log(`Saved docs/design-references/${pos.name}.png`);
    }
  }

  // Also click hamburger menu to capture the navigation overlay
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
  await new Promise(r => setTimeout(r, 500));
  
  // Find hamburger button and click it
  await send('Runtime.evaluate', {
    expression: `(function() {
      const hamburger = document.querySelector('[data-framer-name="Hamburger Container"], nav button, [aria-label*="menu"]');
      if (hamburger) hamburger.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 1000));

  const navMenuSs = await send('Page.captureScreenshot', { format: 'png' });
  if (navMenuSs.result?.data) {
    fs.writeFileSync('docs/design-references/nav-overlay.png', Buffer.from(navMenuSs.result.data, 'base64'));
    console.log("Saved docs/design-references/nav-overlay.png");
  }

  ws.close();
} catch (e) {
  console.error("Error:", e);
} finally {
  chrome.kill();
}
