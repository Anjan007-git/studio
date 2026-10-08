import { spawn } from 'child_process';
import http from 'http';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const proc = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9222',
  '--window-size=390,844',
  'http://localhost:3000/approach-preview'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
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
            const h2 = document.querySelector('h2');
            const words = Array.from(document.querySelectorAll('.approach-word')).map(w => ({
              text: w.textContent,
              left: Math.round(w.getBoundingClientRect().left),
              right: Math.round(w.getBoundingClientRect().right),
              top: Math.round(w.getBoundingClientRect().top),
            }));
            return {
              windowWidth: window.innerWidth,
              h2Rect: h2.getBoundingClientRect(),
              h2FontSize: getComputedStyle(h2).fontSize,
              words: words.slice(0, 10)
            };
          })()`,
          returnByValue: true
        }
      }));
    });

    ws.on('message', (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.id === 1) {
        console.log('EVAL RESULT:', JSON.stringify(msg.result.result.value, null, 2));
        ws.close();
        proc.kill();
        process.exit(0);
      }
    });
  } catch (err) {
    console.error('Error:', err);
    proc.kill();
    process.exit(1);
  }
}, 2500);
