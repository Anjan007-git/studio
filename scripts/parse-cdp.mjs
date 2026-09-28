import fs from 'fs';

const data = JSON.parse(fs.readFileSync('docs/research/cdp-extracted.json', 'utf8'));

// Let's run a script via CDP to extract the rest of the sections!
