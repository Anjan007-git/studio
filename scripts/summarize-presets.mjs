import fs from 'fs';

const presets = JSON.parse(fs.readFileSync('docs/research/extracted-presets.json', 'utf8'));

const summary = {};
for (const [id, rules] of Object.entries(presets)) {
  const merged = {};
  for (const r of rules) {
    r.split(';').map(s => s.trim()).filter(Boolean).forEach(decl => {
      const idx = decl.indexOf(':');
      if (idx !== -1) {
        const k = decl.slice(0, idx).trim();
        const v = decl.slice(idx + 1).trim();
        merged[k] = v;
      }
    });
  }
  summary[id] = {
    fontFamily: merged['--framer-font-family'],
    fontSize: merged['--framer-font-size'],
    fontWeight: merged['--framer-font-weight'],
    letterSpacing: merged['--framer-letter-spacing'],
    lineHeight: merged['--framer-line-height'],
    color: merged['--framer-text-color'],
    transform: merged['--framer-text-transform']
  };
}

console.log(JSON.stringify(summary, null, 2));
fs.writeFileSync('docs/research/presets-summary.json', JSON.stringify(summary, null, 2));
