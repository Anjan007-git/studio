import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.resolve('docs/research/chrome-profile-3');

if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir, { recursive: true });
}

const chrome = spawn(chromePath, [
  '--remote-debugging-port=9224',
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${userDataDir}`,
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const newTabRes = await fetch('http://127.0.0.1:9224/json/new?https://mugenstudio.framer.website/', { method: 'PUT' });
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

  // Scroll all the way down through the whole page
  console.log("Scrolling through entire page...");
  for (let i = 0; i < 40; i++) {
    await send('Runtime.evaluate', { expression: `window.scrollBy(0, 800);` });
    await new Promise(r => setTimeout(r, 250));
  }

  // Capture bottom half screenshot
  const screenshot2 = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });

  if (screenshot2.result?.data) {
    fs.writeFileSync('docs/design-references/original-page-complete.png', Buffer.from(screenshot2.result.data, 'base64'));
    console.log("Saved original-page-complete.png!");
  }

  // Get total document height
  const heightRes = await send('Runtime.evaluate', {
    expression: `document.documentElement.scrollHeight`
  });
  console.log("Total scrollHeight:", heightRes.result?.result?.value);

  ws.close();
} catch (e) {
  console.error("Error:", e);
} finally {
  chrome.kill();
}
