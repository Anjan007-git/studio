import fs from 'fs';

const map = JSON.parse(fs.readFileSync('docs/research/image-map.json', 'utf8'));
const entries = Object.entries(map).filter(([k, v]) => k.startsWith('https:'));
console.log(`Total URLs: ${entries.length}`);
entries.forEach(([url, localPath]) => {
  console.log(`${localPath} <- ${url}`);
});
