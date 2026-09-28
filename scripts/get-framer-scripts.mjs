async function main() {
  const res = await fetch('https://mugenstudio.framer.website/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  console.log("HTML length:", html.length);
  const scripts = [...html.matchAll(/src=["'](https:\/\/framerusercontent\.com\/[^"']+)["']/g)].map(m => m[1]);
  console.log("Scripts found:", scripts);
  
  const modulePreloads = [...html.matchAll(/href=["'](https:\/\/framerusercontent\.com\/[^"']+)["']/g)].map(m => m[1]);
  console.log("Preloads/links:", modulePreloads.filter(s => s.endsWith('.js') || s.endsWith('.mjs')));
}

main().catch(console.error);
