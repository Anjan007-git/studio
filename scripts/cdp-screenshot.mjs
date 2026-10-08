import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const scratchDir = 'C:\\Users\\anjan\\.gemini\\antigravity-ide\\brain\\4b364e84-3a19-456e-a8cf-b62cff179325\\scratch';

async function captureViewport(name, width, height, isMobile = false) {
  const tmpProfile = path.join(scratchDir, `tmp_chrome_${Date.now()}`);
  const proc = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9223',
    `--user-data-dir=${tmpProfile}`,
    'http://localhost:3000/approach-preview'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9223/json');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    const WebSocket = (await import('ws')).default;
    const ws = new WebSocket(wsUrl);

    await new Promise((resolve) => ws.on('open', resolve));

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (data) => {
          const msg = JSON.parse(data.toString());
          if (msg.id === id) {
            ws.off('message', handler);
            resolve(msg.result);
          }
        };
        ws.on('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    // Set exact viewport
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile
    });

    // Wait a moment for layout to adapt
    await new Promise(r => setTimeout(r, 800));

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(shot.data, 'base64');
    const outPath = path.join(scratchDir, `${name}.png`);
    fs.writeFileSync(outPath, buffer);
    console.log(`Successfully saved ${name} (${width}x${height}) to ${outPath}`);

    ws.close();
    proc.kill();
    fs.rmSync(tmpProfile, { recursive: true, force: true });
  } catch (err) {
    console.error('Error:', err);
    proc.kill();
    try { fs.rmSync(tmpProfile, { recursive: true, force: true }); } catch (_) {}
  }
}

async function run() {
  await captureViewport('cdp_mobile_390', 390, 844, true);
  await captureViewport('cdp_mobile_360', 360, 800, true);
  await captureViewport('cdp_desktop_1440', 1440, 900, false);
}

run();
