import fs from 'fs';

let html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

// Unescape quotes in html attributes
html = html.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

const regex = /<([a-z0-9]+)[^>]*style="([^"]*(?:framer-font|font-family)[^"]*)"[^>]*>(.*?)<\/\1>/gi;

const results = [];
let match;
while ((match = regex.exec(html)) !== null) {
  const tag = match[1];
  const styleStr = match[2];
  const content = match[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  // Parse style properties
  const styles = {};
  const declarations = styleStr.split(';');
  for (const decl of declarations) {
    const colonIdx = decl.indexOf(':');
    if (colonIdx !== -1) {
      const key = decl.slice(0, colonIdx).trim();
      const val = decl.slice(colonIdx + 1).trim();
      styles[key] = val;
    }
  }

  const fontFamily = styles['--framer-font-family'] || styles['font-family'];
  const fontSize = styles['--framer-font-size'] || styles['font-size'];
  const fontWeight = styles['--framer-font-weight'] || styles['font-weight'];
  const letterSpacing = styles['--framer-letter-spacing'] || styles['letter-spacing'];
  const lineHeight = styles['--framer-line-height'] || styles['line-height'];
  let textColor = styles['--framer-text-color'] || styles['color'] || styles['--extracted-r6o4lv'];
  if (textColor && textColor.includes('rgb(')) {
    const rgbMatch = textColor.match(/rgb\([^\)]+\)/);
    if (rgbMatch) textColor = rgbMatch[0];
  } else if (textColor && textColor.includes('#')) {
    const hexMatch = textColor.match(/#[0-9a-fA-F]+/);
    if (hexMatch) textColor = hexMatch[0];
  }

  results.push({
    tag,
    text: content.slice(0, 100),
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textColor,
  });
}

console.log('Sample styled text items:');
results.slice(0, 20).forEach((r, i) => {
  console.log(`[${i}] "${r.text}"`);
  console.log(`    font: ${r.fontFamily} | sz: ${r.fontSize} | wt: ${r.fontWeight} | ls: ${r.letterSpacing} | lh: ${r.lineHeight} | col: ${r.textColor}`);
});

fs.writeFileSync('docs/research/extracted-text-styles.json', JSON.stringify(results, null, 2));
