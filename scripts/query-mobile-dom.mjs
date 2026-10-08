import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const scratchDir = 'C:\\Users\\anjan\\.gemini\\antigravity-ide\\brain\\4b364e84-3a19-456e-a8cf-b62cff179325\\scratch';
const profile = path.join(scratchDir, 'mobile_profile_check2');
if (!fs.existsSync(profile)) fs.mkdirSync(profile, { recursive: true });

const proc = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  `--user-data-dir=${profile}`,
  '--remote-debugging-port=9226',
  '--window-size=390,844',
  'http://localhost:3000/approach-preview'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9226/json');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    const WebSocket = (await import('ws')).default;
    const ws = new WebSocket(wsUrl);

    ws.on('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            try {
              const h2 = document.querySelector('h2');
              const words = Array.from(document.querySelectorAll('.approach-word')).map(w => ({
                text: w.innerText,
                top: w.offsetTop,
                left: w.offsetLeft,
                width: w.offsetWidth
              }));
              return {
                innerWidth: window.innerWidth,
                outerWidth: window.outerWidth,
                h2FontSize: getComputedStyle(h2).fontSize,
                words: words.slice(0, 10)
              };
            } catch (err) {
              return { err: err.message, stack: err.stack };
            }
          })()`,
          returnByValue: true
        }
      }));
    });

    ws.on('message', (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.id === 1) {
        console.log('DOM RESULT:', msg.result.result.value);
        ws.close();
        proc.kill();
        try { fs.rmSync(profile, { recursive: true, force: true }); } catch (_) {}
        process.exit(0);
      }
    });
  } catch (e) {
    console.error(e);
    proc.kill();
    process.exit(1);
  }
}, 3000);
