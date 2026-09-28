import fs from 'fs';

const map = JSON.parse(fs.readFileSync('docs/research/image-map.json', 'utf8'));
console.log("Downloaded images count:", Object.keys(map).length);

// Let's inspect the files in public/images
const files = fs.readdirSync('public/images');
console.log("Files in public/images:", files);
