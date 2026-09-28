import fs from 'fs';

const files = fs.readdirSync('public/images').filter(f => f.endsWith('.svg'));
for (const f of files) {
  const content = fs.readFileSync(`public/images/${f}`, 'utf8');
  console.log(`=== ${f} ===`);
  console.log(content.slice(0, 300));
}
