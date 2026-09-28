import fs from 'fs';

async function main() {
  const url = 'https://framerusercontent.com/sites/5q4CGHjKOVIREb2dTuoona/searchIndex-SUOnRB261hjf.json';
  const res = await fetch(url);
  const data = await res.json();
  console.log("Search index keys:", Object.keys(data));
  fs.writeFileSync('docs/research/searchIndex.json', JSON.stringify(data, null, 2));
  console.log("Saved to docs/research/searchIndex.json");
}

main().catch(console.error);
