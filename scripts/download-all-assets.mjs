import fs from 'fs';
import path from 'path';

async function main() {
  const res = await fetch('https://mugenstudio.framer.website/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  
  // Extract all framer image URLs
  const imgRegex = /https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(?:png|jpg|jpeg|svg|webp)/g;
  const found = new Set(html.match(imgRegex) || []);

  console.log(`Found ${found.size} unique image URLs directly in HTML.`);

  // Also check some chunk files
  const chunkRegex = /https:\/\/framerusercontent\.com\/sites\/5q4CGHjKOVIREb2dTuoona\/[a-zA-Z0-9_\.-]+\.m?js/g;
  const chunks = [...new Set(html.match(chunkRegex) || [])];
  console.log(`Checking ${chunks.length} chunks for more images...`);

  for (const chunk of chunks.slice(0, 15)) {
    try {
      const cRes = await fetch(chunk);
      const cText = await cRes.text();
      const cImages = cText.match(imgRegex);
      if (cImages) {
        cImages.forEach(img => found.add(img));
      }
    } catch (e) {
      console.warn("Failed fetching chunk:", chunk);
    }
  }

  console.log(`Total unique image URLs discovered: ${found.size}`);
  
  const targetDir = path.resolve('public/images');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const map = {};
  for (const imgUrl of found) {
    const filename = path.basename(imgUrl.split('?')[0]);
    const dest = path.join(targetDir, filename);
    map[imgUrl] = `/images/${filename}`;
    map[filename] = `/images/${filename}`;

    if (!fs.existsSync(dest)) {
      try {
        console.log(`Downloading ${filename}...`);
        const imgRes = await fetch(imgUrl);
        const arrayBuf = await imgRes.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(arrayBuf));
      } catch (err) {
        console.error(`Failed to download ${imgUrl}:`, err.message);
      }
    }
  }

  fs.writeFileSync('docs/research/image-map.json', JSON.stringify(map, null, 2));
  console.log("Assets downloaded and mapping saved to docs/research/image-map.json");
}

main().catch(console.error);
