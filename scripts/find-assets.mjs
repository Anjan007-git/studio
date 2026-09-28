import fs from 'fs';

const contentPath = 'C:\\Users\\anjan\\.gemini\\antigravity-ide\\brain\\3a6f1ddc-87e1-4de6-b79a-af4abbb8587a\\.system_generated\\steps\\36\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

const jsMatches = [...content.matchAll(/https:\/\/framerusercontent\.com\/[^\s"']+\.m?js/g)].map(m => m[0]);
console.log('JS bundles:', [...new Set(jsMatches)]);
