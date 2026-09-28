import { execFile } from 'child_process';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputPath = path.resolve('docs/design-references/original-full.png');

const args = [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  `--screenshot=${outputPath}`,
  '--window-size=1440,8000',
  '--virtual-time-budget=10000',
  'https://mugenstudio.framer.website/'
];

execFile(chromePath, args, (err) => {
  if (err) {
    console.error("Screenshot error:", err);
  } else {
    console.log("Screenshot saved to:", outputPath);
  }
});
