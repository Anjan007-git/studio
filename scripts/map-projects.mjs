import fs from 'fs';

async function main() {
  const res = await fetch('https://mugenstudio.framer.website/');
  const html = await res.text();
  
  const chunkRegex = /https:\/\/framerusercontent\.com\/sites\/5q4CGHjKOVIREb2dTuoona\/[a-zA-Z0-9_\.-]+\.m?js/g;
  const chunks = [...new Set(html.match(chunkRegex) || [])];

  const projects = ['Quantum', 'Cubekit', 'Ephemeral', 'Warpspeed', 'Magnolia', 'Global Bank'];
  const projectMap = {};

  for (const chunk of chunks) {
    try {
      const cRes = await fetch(chunk);
      const text = await cRes.text();
      for (const p of projects) {
        let pos = 0;
        while ((pos = text.indexOf(p, pos)) !== -1) {
          const snippet = text.slice(Math.max(0, pos - 1200), Math.min(text.length, pos + 1200));
          const imgs = snippet.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(?:png|jpg|jpeg|svg|webp)/g) || [];
          if (!projectMap[p]) projectMap[p] = new Set();
          imgs.forEach(i => projectMap[p].add(i));
          pos += p.length;
        }
      }
    } catch (e) {}
  }

  const result = {};
  for (const k in projectMap) {
    result[k] = [...projectMap[k]];
  }

  console.log("Project images map:");
  console.log(JSON.stringify(result, null, 2));
  fs.writeFileSync('docs/research/projects-map.json', JSON.stringify(result, null, 2));
}

main().catch(console.error);
