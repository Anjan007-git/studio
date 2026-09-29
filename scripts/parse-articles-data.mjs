import fs from 'fs';

const rawData = JSON.parse(fs.readFileSync('docs/framer_routes_summary.json', 'utf8'));

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

const articles = {};

for (const slug of articleSlugs) {
  const url = `/articles/${slug}`;
  const item = rawData[url];
  if (!item) {
    console.log(`Missing ${url}`);
    continue;
  }

  const p = item.p || [];
  const title = item.title || (item.h1 && item.h1[0]) || '';
  const description = item.description || '';
  const h1 = (item.h1 && item.h1[0]) || title;
  const h2 = item.h2 || [];
  const h3 = item.h3 || [];

  // In p array, find metadata:
  // e.g. readTime is usually "X min read"
  let readTime = '4 min read';
  let category = 'Strategy';
  let date = '2025';
  let author = 'Alex West';
  let authorRole = 'Creative Director';

  for (let i = 0; i < Math.min(p.length, 25); i++) {
    const text = p[i];
    if (text.includes('min read')) {
      readTime = text.trim();
    } else if (['Strategy', 'Trends', 'Psychology', 'Process', 'Design'].includes(text.trim())) {
      category = text.trim();
    } else if (text.match(/^[A-Z][a-z]{2}\s+\d{1,2},\s+2025/)) {
      date = text.trim();
    } else if (['Alex West', 'Sarah Park', 'David Torres', 'Emma Wright'].includes(text.trim())) {
      author = text.trim();
      if (p[i + 1] && ['Creative Director', 'Project Manager', 'Developer', 'Senior Designer'].includes(p[i + 1].trim())) {
        authorRole = p[i + 1].trim();
      }
    }
  }

  // Find all article content paragraphs
  // Starting after the introductory block (usually after "Subscribe to our newsletter" or "Deep dives into design thinking...")
  let contentStartIndex = -1;
  for (let i = 0; i < p.length; i++) {
    if (p[i].includes('Deep dives into design thinking') || p[i].includes('Subscribe to our newsletter')) {
      contentStartIndex = i + 1;
      break;
    }
  }

  if (contentStartIndex === -1) contentStartIndex = 15;

  const contentParagraphs = [];
  const pullQuotes = [];

  for (let i = contentStartIndex; i < p.length; i++) {
    const text = p[i];
    // Stop at footer / site links
    if (text === 'Follow us to keep in touch.' || text === 'Based in' || text === 'contact@mugen.design' || text === 'Your next project deserves world-class design.') {
      break;
    }
    // Pull quote
    if (text.startsWith('"') || text.startsWith('“') || (text.startsWith('—') && contentParagraphs.length > 0)) {
      pullQuotes.push(text);
    }
    contentParagraphs.push(text);
  }

  articles[slug] = {
    slug,
    title,
    h1,
    description,
    category,
    readTime,
    date,
    author,
    authorRole,
    headingsH2: h2,
    headingsH3: h3,
    pullQuotes,
    content: contentParagraphs,
    allParagraphs: p
  };
}

fs.writeFileSync('src/lib/articles-data.json', JSON.stringify(articles, null, 2));
console.log('Saved src/lib/articles-data.json with', Object.keys(articles).length, 'articles.');
