import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('docs/research/all-text-styles.json', 'utf8'));

function parseStyle(s) {
  const parts = s.split(';');
  const out = {};
  for (const p of parts) {
    const idx = p.indexOf(':');
    if (idx !== -1) {
      out[p.slice(0, idx).trim()] = p.slice(idx + 1).trim();
    }
  }
  return out;
}

const analyzed = raw.map(item => {
  const st = parseStyle(item.style);
  return {
    text: item.text,
    tag: item.tag,
    fontFamily: st['--framer-font-family'] || st['font-family'],
    fontSize: st['--framer-font-size'] || st['font-size'],
    fontWeight: st['--framer-font-weight'] || st['font-weight'],
    letterSpacing: st['--framer-letter-spacing'] || st['letter-spacing'],
    lineHeight: st['--framer-line-height'] || st['line-height'],
    color: st['--framer-text-color'] || st['color'] || st['--extracted-r6o4lv'],
    textTransform: st['--framer-text-transform'] || st['text-transform'],
  };
});

fs.writeFileSync('docs/research/parsed-typography.json', JSON.stringify(analyzed, null, 2));

console.log('Total analyzed:', analyzed.length);
// Print some key elements:
const keyTerms = [
  'MUGEN', 'Toronto', 'Our Work', 'design studio', 'Since', '100+ Happy', 'Alex West',
  'Projects', 'Quantum', 'Why choose us', 'Revenue generated', 'Services', 'Brand Identity',
  'Process', 'Listen &amp; Learn', 'Pricing', 'Growth', 'Scale', 'Custom',
  'Testimonials', 'FAQ', 'Articles', 'Let\'s create', 'Newsletter'
];

for (const term of keyTerms) {
  const found = analyzed.find(a => a.text.toLowerCase().includes(term.toLowerCase()));
  if (found) {
    console.log(`\nKEY: ${term}`);
    console.log(`Text: "${found.text}"`);
    console.log(`Tag: <${found.tag}> | Font: ${found.fontFamily} | Size: ${found.fontSize} | Weight: ${found.fontWeight} | LS: ${found.letterSpacing} | LH: ${found.lineHeight} | Color: ${found.color} | Transform: ${found.textTransform}`);
  }
}
