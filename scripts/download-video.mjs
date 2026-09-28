import fs from 'fs';
import path from 'path';

async function main() {
  const url = 'https://framerusercontent.com/assets/FI7KKNq5etrzYN4Ag1Id3nm5c.mp4';
  const targetDir = path.resolve('public/videos');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const dest = path.join(targetDir, 'hero.mp4');
  console.log("Downloading hero video from", url);
  const res = await fetch(url);
  const buf = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buf));
  console.log("Hero video saved to", dest, "Size:", buf.byteLength);
}

main().catch(console.error);
