import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.resolve('docs/research/chrome-profile-menu');

if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir, { recursive: true });
}

const chrome = spawn(chromePath, [
  '--remote-debugging-port=9226',
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const newTabRes = await fetch('http://127.0.0.1:9226/json/new?https://mugenstudio.framer.website/', { method: 'PUT' });
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

  await new Promise(r => setTimeout(r, 4000));

  // Find the exact hamburger button element
  const clickRes = await send('Runtime.evaluate', {
    expression: `(function() {
      // Find hamburger
      const el = document.querySelector('[data-framer-name="Hamburger Container"]') ||
                 document.querySelector('[data-framer-name="Closed"]') ||
                 document.querySelector('.framer-1f274ig');
      if (el) {
        el.click();
        const btn = el.querySelector('div, button, a') || el;
        btn.click();
        return "Clicked: " + el.className;
      }
      return "Not found";
    })()`
  });
  console.log("Click result:", clickRes.result?.result?.value);

  await new Promise(r => setTimeout(r, 1200));

  const ss = await send('Page.captureScreenshot', { format: 'png' });
  if (ss.result?.data) {
    fs.writeFileSync('docs/design-references/menu-opened.png', Buffer.from(ss.result.data, 'base64'));
    console.log("Saved menu-opened.png");
  }

  // Also extract menu items HTML
  const menuDom = await send('Runtime.evaluate', {
    expression: `(function() {
      const nav = document.querySelector('[data-framer-name*="Navigation"], [data-framer-name*="Menu"], [data-framer-name*="Drawer"], [data-framer-name*="Modal"]');
      return nav ? nav.outerHTML : document.body.innerHTML.slice(0, 10000);
    })()`
  });
  fs.writeFileSync('docs/research/menu-dom.html', menuDom.result?.result?.value || '');

  ws.close();
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
}
