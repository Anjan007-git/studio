import fs from 'fs';

const rawData = JSON.parse(fs.readFileSync('docs/framer_routes_summary.json', 'utf8'));
const manifest = JSON.parse(fs.readFileSync('docs/extracted_assets_manifest.json', 'utf8'));

const articleDefinitions = [
  {
    slug: 'when-to-rebrand-signs-your-identity-is-holding-you-back',
    number: '[01]',
    coverImage: '/images/IkKFmB5MjDxkWLL0XC5ZROgA0.jpeg',
    category: 'Strategy',
    readTime: '4 min read',
    date: 'Jan 1, 2025',
    author: 'Alex West',
    authorRole: 'Creative Director',
    authorAvatar: '/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg'
  },
  {
    slug: 'beyond-minimalism-what-s-next-in-web-design',
    number: '[02]',
    coverImage: '/images/SfMv2s6n1DfgBOnP74TCVdADjM.jpeg',
    category: 'Trends',
    readTime: '4 min read',
    date: 'Feb 3, 2025',
    author: 'Emma Wright',
    authorRole: 'Senior Designer',
    authorAvatar: '/images/2szvKnNjJBBkPsk6yCETyIDktns.png'
  },
  {
    slug: 'the-science-of-first-impressions',
    number: '[03]',
    coverImage: '/images/pep5CgvB8zHnVjNVRU94wqkH3Rw.jpeg',
    category: 'Psychology',
    readTime: '3 min read',
    date: 'Feb 28, 2025',
    author: 'Sarah Park',
    authorRole: 'Project Manager',
    authorAvatar: '/images/ulbEv91MwUwTk34ixqmyIluLPJY.png'
  },
  {
    slug: 'the-psychology-of-white-space',
    number: '[04]',
    coverImage: '/images/y9RJCiqg0HYvKK8IYgAAHJpKI38.jpg',
    category: 'Psychology',
    readTime: '3 min read',
    date: 'Feb 12, 2025',
    author: 'Sarah Park',
    authorRole: 'Project Manager',
    authorAvatar: '/images/ulbEv91MwUwTk34ixqmyIluLPJY.png'
  },
  {
    slug: 'how-designers-and-developers-can-actually-collaborate',
    number: '[05]',
    coverImage: '/images/mGlNXxBTWHHwjEYqVAXBk3CmEks.jpeg',
    category: 'Process',
    readTime: '4 min read',
    date: 'Mar 6, 2025',
    author: 'David Torres',
    authorRole: 'Developer',
    authorAvatar: '/images/siKQvG204y5XTlJmEnImPRJ2lc.png'
  },
  {
    slug: 'designing-for-human-connection',
    number: '[06]',
    coverImage: '/images/AkfwmbbK7reh203E7bgE8GE6w.png',
    category: 'Trends',
    readTime: '4 min read',
    date: 'Apr 1, 2025',
    author: 'Emma Wright',
    authorRole: 'Senior Designer',
    authorAvatar: '/images/2szvKnNjJBBkPsk6yCETyIDktns.png'
  },
  {
    slug: 'the-design-subscription-model-why-forward-thinking-companies-are-making-the-switch',
    number: '[07]',
    coverImage: '/images/3gpx6hoz9j3temPkQ2uYuucZgc.png',
    category: 'Strategy',
    readTime: '4 min read',
    date: 'Mar 20, 2025',
    author: 'Alex West',
    authorRole: 'Creative Director',
    authorAvatar: '/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg'
  },
  {
    slug: 'building-brands-that-scale',
    number: '[08]',
    coverImage: '/images/I54p3X5nu044uDcVDP2YYm1hrN4.jpeg',
    category: 'Strategy',
    readTime: '4 min read',
    date: 'Apr 16, 2025',
    author: 'Alex West',
    authorRole: 'Creative Director',
    authorAvatar: '/images/LKkmBjisPGqJzq2hMbVoUchYaQ.jpg'
  },
  {
    slug: 'how-palette-choices-drive-user-behavior',
    number: '[09]',
    coverImage: '/images/f44uRTCrRsaf3PahzoXrxHULeG4.jpeg',
    category: 'Psychology',
    readTime: '3 min read',
    date: 'Apr 23, 2025',
    author: 'Sarah Park',
    authorRole: 'Project Manager',
    authorAvatar: '/images/ulbEv91MwUwTk34ixqmyIluLPJY.png'
  },
  {
    slug: 'why-faster-isn-t-always-better',
    number: '[10]',
    coverImage: '/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg',
    category: 'Process',
    readTime: '4 min read',
    date: 'Apr 22, 2025',
    author: 'David Torres',
    authorRole: 'Developer',
    authorAvatar: '/images/siKQvG204y5XTlJmEnImPRJ2lc.png'
  }
];

const articlesOutput = articleDefinitions.map(def => {
  const url = `/articles/${def.slug}`;
  const raw = rawData[url] || {};
  const p = raw.p || [];
  const title = (raw.h1 && raw.h1[0]) || raw.title || def.slug;
  const description = raw.description || '';

  // Extract content
  let startIdx = 10;
  for (let i = 0; i < p.length; i++) {
    if (p[i].includes('Deep dives into design thinking') || p[i].includes('Subscribe to our newsletter')) {
      startIdx = i + 1;
      break;
    }
  }

  const sections = [];
  let pullQuote = null;

  for (let i = startIdx; i < p.length; i++) {
    const text = p[i].trim();
    if (
      text === 'Follow us to keep in touch.' ||
      text === 'Based in' ||
      text === 'contact@mugen.design' ||
      text === 'Your next project deserves world-class design.' ||
      text.includes('Unlock from $129')
    ) {
      break;
    }

    if (text.startsWith('"') || text.startsWith('“')) {
      const quoteText = text;
      let quoteBy = '';
      if (p[i + 1] && (p[i + 1].startsWith('—') || p[i + 1].startsWith('-'))) {
        quoteBy = p[i + 1];
        i++;
      }
      pullQuote = { quote: quoteText, author: quoteBy };
      sections.push({ type: 'quote', text: quoteText, author: quoteBy });
      continue;
    }

    // Check if it matches an H2 or H3
    if (raw.h2?.includes(text)) {
      sections.push({ type: 'h2', text });
    } else if (raw.h3?.includes(text)) {
      sections.push({ type: 'h3', text });
    } else if (text.length > 20) {
      sections.push({ type: 'p', text });
    }
  }

  return {
    ...def,
    title,
    description,
    pullQuote,
    sections: sections.length > 0 ? sections : [
      { type: 'p', text: description }
    ]
  };
});

const tsArticlesContent = `export interface ArticleSection {
  type: 'p' | 'h2' | 'h3' | 'quote';
  text: string;
  author?: string;
}

export interface Article {
  slug: string;
  number: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  coverImage: string;
  pullQuote: { quote: string; author: string } | null;
  sections: ArticleSection[];
}

export const allArticles: Article[] = ${JSON.stringify(articlesOutput, null, 2)};

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getNextArticle(currentSlug: string): Article {
  const index = allArticles.findIndex((a) => a.slug === currentSlug);
  const nextIndex = (index + 1) % allArticles.length;
  return allArticles[nextIndex];
}
`;

fs.writeFileSync('src/lib/articles-data.ts', tsArticlesContent);
console.log('Saved src/lib/articles-data.ts');
