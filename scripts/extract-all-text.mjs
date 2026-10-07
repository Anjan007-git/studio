import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

// Let's find all rich text containers and their paragraph / span children, and also buttons / badges
// In Framer, rich text containers have data-framer-component-type="RichTextContainer"
// Or class="framer-text"

const blocks = [];

// Match all elements with class="framer-text" or inline styles containing font
const elemRegex = /<(?:p|span|h[1-6]|div|a)[^>]*?(?:class="[^"]*framer-text[^"]*"|style="[^"]*(?:font-|--framer-font|--extracted-)[^"]*")[^>]*>(.*?)<\/(?:p|span|h[1-6]|div|a)>/gi;

// Also look at computed framer styles in <style> or inline style attributes
const tagRegex = /<([a-z0-9]+)\s+([^>]*style="([^"]+)"[^>]*)>(.*?)<\/\1>/gi;

let m;
const collected = [];

while ((m = tagRegex.exec(html)) !== null) {
  const [full, tag, attrs, styleStr, inner] = m;
  const text = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!text || text.length === 0) continue;

  if (styleStr.includes('font') || styleStr.includes('color') || styleStr.includes('text-')) {
    collected.push({
      text,
      tag,
      style: styleStr
    });
  }
}

console.log('Total text elements with font/color/text styles:', collected.length);

// Print grouped by unique text
const seen = new Set();
const unique = [];
for (const item of collected) {
  if (!seen.has(item.text)) {
    seen.add(item.text);
    unique.push(item);
  }
}

console.log('Unique text snippets:', unique.length);

fs.writeFileSync('docs/research/all-text-styles.json', JSON.stringify(unique, null, 2));

unique.slice(0, 40).forEach((u, i) => {
  console.log(`\n#${i}: "${u.text}"`);
  console.log(`   Style: ${u.style.slice(0, 200)}...`);
});
