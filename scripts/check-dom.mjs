import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');
console.log("HTML length:", html.length);

// Check if sections are in the DOM
const keywords = [
  'MUGEN',
  'Toronto',
  'Our Work',
  'We\'ve reimagined',
  'Traditional agencies',
  'Alex West',
  'Quantum',
  'Warpspeed',
  'Why choose us',
  'Full-spectrum',
  'A proven process',
  'Built to scale',
  'Everything else',
  'Strategies & insights'
];

for (const kw of keywords) {
  const count = (html.match(new RegExp(kw, 'gi')) || []).length;
  console.log(`${kw}: ${count} occurrences`);
}
