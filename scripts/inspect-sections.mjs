import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/research/sections-detailed.json', 'utf8'));
console.log('Keys/Array length:', Array.isArray(data) ? data.length : Object.keys(data));
if (Array.isArray(data)) {
  console.log('Sample item keys:', Object.keys(data[0]));
  data.forEach((item, idx) => {
    console.log(`[${idx}] name:`, item.name || item.id || item.selector || item.section);
  });
} else {
  console.log('Keys:', Object.keys(data).slice(0, 10));
}
