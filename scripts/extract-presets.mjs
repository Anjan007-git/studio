import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

// Find all CSS rules matching .framer-styles-preset-...
const presetRegex = /\.framer-styles-preset-([a-zA-Z0-9]+)\s*\{([^}]+)\}/g;

const presets = {};
let m;
while ((m = presetRegex.exec(html)) !== null) {
  const name = m[1];
  const css = m[2];
  presets[name] = css.trim();
}

console.log('Found presets count:', Object.keys(presets).length);
for (const [name, css] of Object.entries(presets)) {
  console.log(`\n=== Preset: ${name} ===`);
  console.log(css);
}

fs.writeFileSync('docs/research/style-presets.json', JSON.stringify(presets, null, 2));
