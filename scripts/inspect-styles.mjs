import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/research/sections-detailed.json', 'utf8'));
console.log('Styles of [0] Top Bar:', data[0].styles);
console.log('Styles of [1] Hero:', data[1].styles);
console.log('Styles of [3] Approach:', data[3].styles);
