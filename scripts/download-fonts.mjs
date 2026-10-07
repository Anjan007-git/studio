import fs from 'fs';
import path from 'path';

const fontsDir = path.join(process.cwd(), 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const fonts = [
  { name: 'InterDisplay-Regular.woff2', url: 'https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2' },
  { name: 'InterDisplay-Medium.woff2', url: 'https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2' },
  { name: 'InterDisplay-SemiBold.woff2', url: 'https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2' },
  { name: 'InterDisplay-Bold.woff2', url: 'https://framerusercontent.com/assets/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2' },
  { name: 'Inter-Regular.woff2', url: 'https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2' },
  { name: 'Inter-Medium.woff2', url: 'https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2' },
  { name: 'Inter-Bold.woff2', url: 'https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2' }
];

async function download() {
  for (const f of fonts) {
    const dest = path.join(fontsDir, f.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already have ${f.name}`);
      continue;
    }
    console.log(`Downloading ${f.name}...`);
    try {
      const res = await fetch(f.url);
      if (!res.ok) {
        console.error(`Failed ${f.url} (${res.status})`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${f.name} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Error ${f.name}:`, e.message);
    }
  }
  console.log('Fonts download complete.');
}

download();
