import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

// Search for all CSS blocks that define .framer-styles-preset-...
// Notice the selector contains .framer-styles-preset-<id>
const regex = /\.framer-styles-preset-([a-zA-Z0-9]+)[^{]*\{([^}]+)\}/g;

const presets = {};
let m;
while ((m = regex.exec(html)) !== null) {
  const presetId = m[1];
  const css = m[2].trim();
  if (!presets[presetId]) presets[presetId] = [];
  presets[presetId].push(css);
}

console.log('Total unique preset IDs:', Object.keys(presets).length);

for (const [id, rules] of Object.entries(presets)) {
  console.log(`\n================ PRESET: ${id} ===============`);
  rules.forEach((rule, idx) => {
    console.log(`--- rule ${idx} ---`);
    rule.split(';').map(s => s.trim()).filter(Boolean).forEach(decl => {
      if (decl.includes('font') || decl.includes('letter') || decl.includes('line') || decl.includes('color') || decl.includes('text')) {
        console.log('  ', decl);
      }
    });
  });
}

fs.writeFileSync('docs/research/extracted-presets.json', JSON.stringify(presets, null, 2));
