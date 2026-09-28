import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/research/searchIndex.json', 'utf8'));

console.log("=== /studio ===");
console.log(JSON.stringify(data['/studio'], null, 2).slice(0, 1500));

console.log("\n=== /contact ===");
console.log(JSON.stringify(data['/contact'], null, 2).slice(0, 1500));

console.log("\n=== /projects ===");
console.log(JSON.stringify(data['/projects'], null, 2).slice(0, 1500));
