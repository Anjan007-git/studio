import fs from 'fs';

const cdp = JSON.parse(fs.readFileSync('docs/research/cdp-extracted.json', 'utf8'));
console.log('Sample interesting entries:');
cdp.interesting.slice(0, 10).forEach(item => {
  console.log({
    tag: item.tag,
    text: item.text?.slice(0, 40),
    fontFamily: item.fontFamily,
    fontSize: item.fontSize,
    fontWeight: item.fontWeight,
    color: item.color,
    letterSpacing: item.letterSpacing,
    lineHeight: item.lineHeight
  });
});
