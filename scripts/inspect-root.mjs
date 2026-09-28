import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/research/searchIndex.json', 'utf8'));
console.log("Root (/) data structure:");
console.log(JSON.stringify(data['/'], null, 2).slice(0, 3000));
