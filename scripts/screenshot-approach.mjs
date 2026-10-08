import { execFile } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const scratchDir = 'C:\\Users\\anjan\\.gemini\\antigravity-ide\\brain\\4b364e84-3a19-456e-a8cf-b62cff179325\\scratch';

function takeScreenshot(name, width, height) {
  const outputPath = path.join(scratchDir, `${name}.png`);
  const profileDir = path.join(scratchDir, `prof_${name}`);
  if (!fs.existsSync(profileDir)) fs.mkdirSync(profileDir, { recursive: true });

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--user-data-dir=${profileDir}`,
    `--window-size=${width},${height}`,
    '--virtual-time-budget=3000',
    `--screenshot=${outputPath}`,
    'http://localhost:3000/approach-preview'
  ];

  return new Promise((resolve) => {
    execFile(chromePath, args, (err) => {
      if (err) {
        console.error(`Error taking ${name}:`, err);
      } else {
        console.log(`Saved ${name} (${width}x${height}) to ${outputPath}`);
      }
      try { fs.rmSync(profileDir, { recursive: true, force: true }); } catch (_) {}
      resolve();
    });
  });
}

async function run() {
  await takeScreenshot('final_mobile_390', 390, 844);
  await takeScreenshot('final_desktop_1440', 1440, 900);
}

run();
