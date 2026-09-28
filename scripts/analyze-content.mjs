import fs from 'fs';

const contentPath = 'C:\\Users\\anjan\\.gemini\\antigravity-ide\\brain\\3a6f1ddc-87e1-4de6-b79a-af4abbb8587a\\.system_generated\\steps\\36\\content.md';
const raw = fs.readFileSync(contentPath, 'utf-8');

console.log("File length:", raw.length);

// Extract all text within HTML tags
const imgMatches = [...raw.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[0]);
console.log("Images found:", imgMatches.length);
imgMatches.slice(0, 15).forEach((img, i) => console.log(`Img ${i}:`, img));

// Extract all links
const linkMatches = [...raw.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi)];
console.log("Links found:", linkMatches.length);
linkMatches.slice(0, 20).forEach((l, i) => console.log(`Link ${i}: href="${l[1]}" text="${l[2].replace(/<[^>]+>/g, '').trim()}"`));

// Extract all h1, h2, h3, h4, p
const headings = [...raw.matchAll(/<(h[1-6]|p)[^>]*>(.*?)<\/\1>/gi)];
console.log("Headings/p found:", headings.length);
headings.slice(0, 30).forEach((h, i) => console.log(`${h[1]}: ${h[2].replace(/<[^>]+>/g, '').trim()}`));
