import fs from 'fs';
import path from 'path';

const projectSlugs = [
  'quantum',
  'warpspeed',
  'cubekit',
  'ephemeral',
  'flora-and-fauna',
  'clandestine',
  'lightspeed',
  'boltshift',
  'solaris-energy',
  'codecraft',
  'global-bank',
  'magnolia'
];

const articleSlugs = [
  'when-to-rebrand-signs-your-identity-is-holding-you-back',
  'beyond-minimalism-what-s-next-in-web-design',
  'the-science-of-first-impressions',
  'the-psychology-of-white-space',
  'how-designers-and-developers-can-actually-collaborate',
  'designing-for-human-connection',
  'the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch',
  'building-brands-that-scale',
  'how-palette-choices-drive-user-behavior',
  'why-faster-isn-t-always-better'
];

async function fetchPage(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.text();
  } catch (e) {
    console.error(`Failed to fetch ${url}:`, e.message);
    return null;
  }
}

async function downloadImage(imgUrl) {
  const filename = path.basename(new URL(imgUrl).pathname);
  const localPath = path.join(process.cwd(), 'public', 'images', filename);
  if (fs.existsSync(localPath)) {
    return `/images/${filename}`;
  }
  try {
    const res = await fetch(imgUrl);
    if (!res.ok) return null;
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(localPath, Buffer.from(arrayBuffer));
    console.log(`Downloaded image: ${filename}`);
    return `/images/${filename}`;
  } catch (e) {
    console.error(`Error downloading ${imgUrl}:`, e.message);
    return null;
  }
}

async function run() {
  const projectsData = {};
  const articlesData = {};

  console.log('--- Fetching Projects ---');
  for (const slug of projectSlugs) {
    const url = `https://mugenstudio.framer.website/projects/${slug}`;
    console.log(`Fetching project: ${slug}...`);
    const html = await fetchPage(url);
    if (!html) continue;

    // extract images
    const imgMatches = [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\.-]+\.(?:png|jpg|jpeg|svg|webp)/g)].map(m => m[0]);
    const uniqueImgs = [...new Set(imgMatches)];
    
    // Download images
    const localImgs = [];
    for (const imgUrl of uniqueImgs) {
      const local = await downloadImage(imgUrl);
      if (local) localImgs.push(local);
    }

    projectsData[slug] = {
      slug,
      images: localImgs
    };
  }

  console.log('--- Fetching Articles ---');
  for (const slug of articleSlugs) {
    const url = `https://mugenstudio.framer.website/articles/${slug}`;
    console.log(`Fetching article: ${slug}...`);
    const html = await fetchPage(url);
    if (!html) continue;

    const imgMatches = [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_\.-]+\.(?:png|jpg|jpeg|svg|webp)/g)].map(m => m[0]);
    const uniqueImgs = [...new Set(imgMatches)];
    
    const localImgs = [];
    for (const imgUrl of uniqueImgs) {
      const local = await downloadImage(imgUrl);
      if (local) localImgs.push(local);
    }

    articlesData[slug] = {
      slug,
      images: localImgs
    };
  }

  fs.writeFileSync('docs/extracted_assets_manifest.json', JSON.stringify({ projects: projectsData, articles: articlesData }, null, 2));
  console.log('Done! Saved docs/extracted_assets_manifest.json');
}

run();
