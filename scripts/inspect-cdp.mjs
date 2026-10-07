import fs from 'fs';

const cdp = JSON.parse(fs.readFileSync('docs/research/cdp-extracted.json', 'utf8'));
console.log('CDP keys:', Object.keys(cdp));
if (Array.isArray(cdp)) {
  console.log('CDP length:', cdp.length);
  console.log('Sample:', cdp[0]);
} else {
  for (const k of Object.keys(cdp)) {
    console.log(k, typeof cdp[k], Array.isArray(cdp[k]) ? cdp[k].length : Object.keys(cdp[k]).slice(0, 5));
  }
}
