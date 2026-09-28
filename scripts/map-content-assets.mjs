import fs from 'fs';

async function main() {
  const res = await fetch('https://mugenstudio.framer.website/');
  const html = await res.text();
  
  // Find chunks
  const chunkRegex = /https:\/\/framerusercontent\.com\/sites\/5q4CGHjKOVIREb2dTuoona\/[a-zA-Z0-9_\.-]+\.m?js/g;
  const chunks = [...new Set(html.match(chunkRegex) || [])];

  const associations = [];

  for (const chunk of chunks) {
    try {
      const cRes = await fetch(chunk);
      const text = await cRes.text();
      
      const keywords = ['Sarah Park', 'Alex West', 'Quantum', 'Warpspeed', 'Cubekit', 'Magnolia', 'Ephemeral', 'Global Bank', 'minimalism', 'psychology', 'Elena'];
      for (const kw of keywords) {
        if (text.includes(kw)) {
          // find any image hashes near this keyword
          const index = text.indexOf(kw);
          const snippet = text.slice(Math.max(0, index - 800), Math.min(text.length, index + 800));
          const imgs = snippet.match(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(?:png|jpg|jpeg|svg|webp)/g) || [];
          if (imgs.length > 0) {
            associations.push({ kw, imgs: [...new Set(imgs)] });
          }
        }
      }
    } catch (e) {}
  }

  console.log("Associations found:");
  console.log(JSON.stringify(associations, null, 2));
}

main().catch(console.error);
