import { execFile } from 'child_process';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const args = [
  '--headless',
  '--disable-gpu',
  '--virtual-time-budget=10000',
  '--dump-dom',
  'https://mugenstudio.framer.website/'
];

execFile(chromePath, args, { maxBuffer: 1024 * 1024 * 50 }, (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Stdout length:", stdout.length);
  fs.writeFileSync('docs/research/original-dom.html', stdout, 'utf8');
  console.log("Written successfully to docs/research/original-dom.html");
});
