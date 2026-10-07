import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

// Match each RichTextContainer and its inner paragraphs / spans
const rtcRegex = /<div[^>]*data-framer-component-type="RichTextContainer"[^>]*style="([^"]*)"[^>]*>(.*?)<\/div>/gis;

// Better yet, find all tags that have class="framer-text" or style containing --framer-font
const pRegex = /<(?:p|span|h[1-6]|div)[^>]*style="([^"]*--framer-[^"]*)"[^>]*>(.*?)<\/(?:p|span|h[1-6]|div)>/gis;

const items = [];
let m;
while ((m = pRegex.exec(html)) !== null) {
  const styleStr = m[1].replace(/&quot;/g, '"');
  const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!text) continue;

  const styles = {};
  styleStr.split(';').forEach(decl => {
    const idx = decl.indexOf(':');
    if (idx !== -1) {
      styles[decl.slice(0, idx).trim()] = decl.slice(idx + 1).trim();
    }
  });

  items.push({
    text,
    fontFamily: styles['--framer-font-family'] || styles['font-family'],
    fontSize: styles['--framer-font-size'] || styles['font-size'],
    fontWeight: styles['--framer-font-weight'] || styles['font-weight'],
    letterSpacing: styles['--framer-letter-spacing'] || styles['letter-spacing'],
    lineHeight: styles['--framer-line-height'] || styles['line-height'],
    color: styles['--framer-text-color'] || styles['color'] || styles['--extracted-r6o4lv'],
    textTransform: styles['--framer-text-transform'] || styles['text-transform'],
    styleStr
  });
}

console.log('Found elements with --framer- styles:', items.length);
fs.writeFileSync('docs/research/framer-typography-items.json', JSON.stringify(items, null, 2));

items.slice(0, 30).forEach((it, i) => {
  console.log(`\n[${i}] "${it.text.slice(0, 50)}"`);
  console.log(`    font: ${it.fontFamily} | sz: ${it.fontSize} | wt: ${it.fontWeight} | ls: ${it.letterSpacing} | lh: ${it.lineHeight} | col: ${it.color}`);
});
