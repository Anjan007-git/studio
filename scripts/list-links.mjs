import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

// Find all <a> tags with href
const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi)];
console.log("Total links:", links.length);
const uniqueLinks = new Map();
links.forEach(l => {
  const href = l[1];
  const text = l[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!uniqueLinks.has(href)) {
    uniqueLinks.set(href, []);
  }
  uniqueLinks.get(href).push(text);
});

for (const [href, texts] of uniqueLinks.entries()) {
  console.log(`Href: ${href} -> [${[...new Set(texts)].join(' | ')}]`);
}
