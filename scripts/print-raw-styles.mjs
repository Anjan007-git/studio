import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

const regex = /<p [^>]*style="([^"]+)"[^>]*>(.*?)<\/p>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null && count < 15) {
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  if (text.length > 0) {
    console.log(`\n--- Item ${count} ---`);
    console.log(`Text: ${text}`);
    console.log(`Raw style: ${m[1]}`);
    count++;
  }
}
