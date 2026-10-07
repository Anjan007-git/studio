import fs from 'fs';

const html = fs.readFileSync('docs/research/original-dom.html', 'utf8');

const fontFamilies = new Set();
const fontSizes = new Set();
const fontColors = new Set();
const letterSpacings = new Set();
const fontWeights = new Set();
const lineHeights = new Set();

const ffRegex = /font-family:([^;\"}]+)/g;
let m;
while ((m = ffRegex.exec(html)) !== null) fontFamilies.add(m[1].trim());

const fsRegex = /font-size:([^;\"}]+)/g;
while ((m = fsRegex.exec(html)) !== null) fontSizes.add(m[1].trim());

const fwRegex = /font-weight:([^;\"}]+)/g;
while ((m = fwRegex.exec(html)) !== null) fontWeights.add(m[1].trim());

const lsRegex = /letter-spacing:([^;\"}]+)/g;
while ((m = lsRegex.exec(html)) !== null) letterSpacings.add(m[1].trim());

const lhRegex = /line-height:([^;\"}]+)/g;
while ((m = lhRegex.exec(html)) !== null) lineHeights.add(m[1].trim());

const colorRegex = /--extracted-r6o4lv:([^;\"}]+)/g;
while ((m = colorRegex.exec(html)) !== null) fontColors.add(m[1].trim());

const framerTextColor = /--framer-text-color:([^;\"}]+)/g;
while ((m = framerTextColor.exec(html)) !== null) fontColors.add(m[1].trim());

console.log('--- Font Families ---');
console.log(Array.from(fontFamilies));

console.log('--- Font Weights ---');
console.log(Array.from(fontWeights));

console.log('--- Letter Spacings ---');
console.log(Array.from(letterSpacings));

console.log('--- Line Heights ---');
console.log(Array.from(lineHeights));

console.log('--- Font Sizes ---');
console.log(Array.from(fontSizes));

console.log('--- Font Colors ---');
console.log(Array.from(fontColors));
