import fs from 'fs';

const rawData = JSON.parse(fs.readFileSync('docs/framer_routes_summary.json', 'utf8'));
const manifest = JSON.parse(fs.readFileSync('docs/extracted_assets_manifest.json', 'utf8'));

// Project list metadata definitions
const projectsMeta = [
  {
    slug: 'quantum',
    number: '[01]',
    title: 'Quantum',
    fullTitle: 'Demystifying AI through thoughtful design.',
    category: 'Brand Strategy & Product Design',
    type: 'Product Design',
    year: '2025',
    date: 'Aug 2025',
    client: 'Quantum',
    industry: 'AI / Machine Learning',
    timeline: '24 Months',
    liveUrl: 'https://quantum.ai',
    coverImage: '/images/1K1GhaYYAWsk6blrw0x1GrQp18.jpg',
    logo: '/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg',
    stats: [
      { value: '85', unit: '%', label: 'Non-technical stakeholder comprehension' },
      { value: '3', unit: 'x', label: 'Investor meeting success rate' },
      { value: '4.2', unit: 'x', label: 'AI adoption acceleration' }
    ]
  },
  {
    slug: 'cubekit',
    number: '[02]',
    title: 'Cubekit',
    fullTitle: "Dimensionalizing Cubekit's creative toolkit.",
    category: 'Brand Identity & Product Design',
    type: 'Brand Identity',
    year: '2024',
    date: 'Dec 2024',
    client: 'Cubekit',
    industry: '3D Software / Creative Tools',
    timeline: '20 Months',
    liveUrl: 'https://cubekit.io',
    coverImage: '/images/6RfCJSn8TD3btNcHJPZjWjNVOo.jpeg',
    logo: '/images/4SXU5NecY5nX7I0EIxv06SjxME.svg',
    stats: [
      { value: '92', unit: '%', label: 'Feature discovery improvement' },
      { value: '3.5', unit: 'hrs', label: 'Daily workflow time saved' },
      { value: '4.9', unit: '/5', label: 'User satisfaction rating' }
    ]
  },
  {
    slug: 'ephemeral',
    number: '[03]',
    title: 'Ephemeral',
    fullTitle: 'Crafting intimacy in the age of permanent records.',
    category: 'Brand Identity & Product Design',
    type: 'Brand Identity',
    year: '2024',
    date: 'Nov 2024',
    client: 'Ephemeral',
    industry: 'Social Media / Tech',
    timeline: '15 Months',
    liveUrl: 'https://ephemeral.app',
    coverImage: '/images/WESeNdvPCpvuLT7oqkMfp8VbxXU.jpeg',
    logo: '/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg',
    stats: [
      { value: '78', unit: '%', label: 'Reduction in permanent message anxiety' },
      { value: '4', unit: 'x', label: 'Authentic conversation frequency' },
      { value: '1.8', unit: 'sec', label: 'Average response time' }
    ]
  },
  {
    slug: 'warpspeed',
    number: '[04]',
    title: 'Warpspeed',
    fullTitle: "Accelerating Warpspeed's journey to enterprise.",
    category: 'Brand Identity & Product Design',
    type: 'Product Design',
    year: '2024',
    date: 'Sep 2024',
    client: 'Warpspeed',
    industry: 'Technology / SaaS',
    timeline: '12 Months',
    liveUrl: 'https://warpspeed.dev',
    coverImage: '/images/Rkl08UGfkYj0XdxZZ8h4d04KowA.jpeg',
    logo: '/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg',
    stats: [
      { value: '140', unit: '%', label: 'Increase in enterprise client acquisition' },
      { value: '65', unit: '%', label: 'Reduction in developer onboarding time' },
      { value: '6', unit: 'Weeks', label: 'Time to complete full rebrand' }
    ]
  },
  {
    slug: 'magnolia',
    number: '[05]',
    title: 'Magnolia',
    fullTitle: "Cultivating Magnolia's digital-first retail experience.",
    category: 'Brand Strategy & Web Design',
    type: 'Web Design',
    year: '2024',
    date: 'Jun 2024',
    client: 'Magnolia',
    industry: 'E-commerce / Retail',
    timeline: '16 Months',
    liveUrl: 'https://magnolia.store',
    coverImage: '/images/uDKj6X3ze5cVzKwJIBrayncA6M.jpeg',
    logo: '/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg',
    stats: [
      { value: '165', unit: '%', label: 'Online revenue increase in 6 months' },
      { value: '9.4', unit: '/10', label: 'Customer experience rating' },
      { value: '45', unit: 'sec', label: 'Average site engagement time increase' }
    ]
  },
  {
    slug: 'global-bank',
    number: '[06]',
    title: 'Global Bank',
    fullTitle: 'Making global finance feel local and human.',
    category: 'Digital Transformation & Design System',
    type: 'Product Design',
    year: '2024',
    date: 'Mar 2024',
    client: 'Global Bank',
    industry: 'Financial Services',
    timeline: '26 Months',
    liveUrl: 'https://globalbank.com',
    coverImage: '/images/nUz9PQlnVFREjBvNToIeGovBXI.jpeg',
    logo: '/images/c6N9oEQ13bXzmoFxh74nyZoX8.svg',
    stats: [
      { value: '28', unit: 'Countries', label: 'Simultaneous digital transformation' },
      { value: '50', unit: 'Years', label: "Institution's largest modern rebrand" },
      { value: '42', unit: '%', label: 'Task completion time reduction' }
    ]
  },
  {
    slug: 'lightspeed',
    number: '[07]',
    title: 'Lightspeed',
    fullTitle: "Energizing Lightspeed's next chapter in payments.",
    category: 'High-Frequency Trading Console',
    type: 'Product Design',
    year: '2024',
    date: 'Jul 2021',
    client: 'Lightspeed',
    industry: 'FinTech / Payments',
    timeline: '8 Months',
    liveUrl: 'https://lightspeed.pay',
    coverImage: '/images/EoBMupP4sDoc2Zgcjt3OXKz2mg.jpg',
    logo: '/images/IVQsAsFQMvVgoU6ZYkIx9TDhZ4.svg',
    stats: [
      { value: '10', unit: 'Years', label: 'Brand equity preserved during refresh' },
      { value: '210', unit: '%', label: 'Payment processing growth' },
      { value: '0.2', unit: 'sec', label: 'Transaction speed improvement' }
    ]
  },
  {
    slug: 'clandestine',
    number: '[08]',
    title: 'Clandestine',
    fullTitle: "Revealing Clandestine's mysterious luxury aesthetic.",
    category: 'Brand Identity & Spatial Experience',
    type: 'Brand Identity',
    year: '2024',
    date: 'Jun 2022',
    client: 'Clandestine',
    industry: 'Fashion / Lifestyle',
    timeline: '14 Months',
    liveUrl: 'https://clandestine.co',
    coverImage: '/images/uhZaPfIrCFAy4Kx7PfKvzv8r8q8.jpg',
    logo: '/images/hRY01kjo62NpYPeF7biDgbGxkrg.svg',
    stats: [
      { value: '0.8', unit: 'sec', label: 'Average product page load time' },
      { value: '99.9', unit: '%', label: 'Drop-day server uptime achievement' },
      { value: '5.2', unit: 'x', label: 'Social media engagement boost' }
    ]
  },
  {
    slug: 'flora-and-fauna',
    number: '[09]',
    title: 'Flora & Fauna',
    fullTitle: 'Growing beauty that gives back to nature.',
    category: 'Sustainable Luxury E-Commerce',
    type: 'Web Design',
    year: '2024',
    date: 'Feb 2020',
    client: 'Flora & Fauna',
    industry: 'Sustainable Beauty',
    timeline: '13 Months',
    liveUrl: 'https://florafauna.eco',
    coverImage: '/images/sirR5Knxvy6H4B4c8ceh6eTMMpc.jpeg',
    logo: '/images/UdK1cxPGNHNVwGOT8o3e87PbzGE.svg',
    stats: [
      { value: '0', unit: '% Waste', label: 'Circular packaging system' },
      { value: '2.4', unit: '$M', label: 'Wildflowers grown from packages' },
      { value: '88', unit: '%', label: 'Customer retention rate' }
    ]
  },
  {
    slug: 'boltshift',
    number: '[10]',
    title: 'Boltshift',
    fullTitle: 'Streamlining supply chain complexity through intuitive design.',
    category: 'Developer Platform & Design Tokens',
    type: 'Product Design',
    year: '2024',
    date: 'Sep 2023',
    client: 'Boltshift',
    industry: 'Logistics / Supply Chain',
    timeline: '18 Months',
    liveUrl: 'https://boltshift.com',
    coverImage: '/images/d0BwZFrtELCoWDdpc1wN5g0q070.jpeg',
    logo: '/images/ECQjZvQ7bvbDvNXHmwn9ofmwP8.svg',
    stats: [
      { value: '70', unit: '%', label: 'Training time reduction' },
      { value: '1.8', unit: '$M', label: 'Annual efficiency savings' },
      { value: '320', unit: '%', label: 'Daily active user growth' }
    ]
  },
  {
    slug: 'solaris-energy',
    number: '[11]',
    title: 'Solaris Energy',
    fullTitle: 'Energizing the future of sustainable power.',
    category: 'Clean Tech Brand & Investor Portal',
    type: 'Brand Identity',
    year: '2023',
    date: 'Jan 2024',
    client: 'Solaris Energy',
    industry: 'Renewable Energy',
    timeline: '22 Months',
    liveUrl: 'https://solarispower.com',
    coverImage: '/images/jMyKum9tkI3nlZlUp5RZLjnTPU.jpg',
    logo: '/images/MMLdIlzrdoGIlBjQHNOfvGYfVA.svg',
    stats: [
      { value: '14', unit: 'Countries', label: 'Global brand consistency achieved' },
      { value: '45', unit: '$M', label: 'Investment funding secured' },
      { value: '94', unit: '%', label: 'Renewable energy trust score' }
    ]
  },
  {
    slug: 'codecraft',
    number: '[12]',
    title: 'Codecraft',
    fullTitle: 'Making developer tools that developers actually love.',
    category: 'AI IDE Interface & Design System',
    type: 'Product Design',
    year: '2023',
    date: 'Nov 2023',
    client: 'Codecraft',
    industry: 'Developer Tools',
    timeline: '10 Months',
    liveUrl: 'https://codecraft.dev',
    coverImage: '/images/uC3DPDrBdJCZlHMQcaazSdNDaHM.jpg',
    logo: '/images/XeOUaC43OnA1DfZRH6vXJAYEGpE.svg',
    stats: [
      { value: '3.8', unit: 'x', label: 'Developer tool adoption rate' },
      { value: '85', unit: '%', label: 'Technical documentation engagement' },
      { value: '15', unit: 'Min', label: 'Reduction in environment setup time' }
    ]
  }
];

const projectsOutput = projectsMeta.map(meta => {
  const url = `/projects/${meta.slug}`;
  const raw = rawData[url] || {};
  const p = raw.p || [];

  // Services
  let services = ['Brand positioning', 'Visual identity', 'Digital platform', 'Design system'];
  const servIdx = p.indexOf('Services');
  if (servIdx !== -1) {
    let sList = [];
    let i = servIdx + 1;
    while (i < p.length && !['Date', 'Client', 'Industry', 'Timeline', 'View live'].includes(p[i])) {
      sList.push(p[i]);
      i++;
    }
    if (sList.length > 0) services = sList;
  }

  // Challenge, Solution, Process
  function extractSec(title, stops) {
    const idx = p.indexOf(title);
    if (idx === -1) return { subtitle: '', paragraphs: [] };
    const subtitle = p[idx + 1] || '';
    const paragraphs = [];
    let i = idx + 2;
    while (i < p.length && !stops.includes(p[i])) {
      if (p[i].length > 20) paragraphs.push(p[i]);
      i++;
    }
    return { subtitle, paragraphs };
  }

  const challenge = extractSec('The Challenge', ['The Solution', 'Data visualization', 'Marketing website', 'The Process', 'By the numbers']);
  const solution = extractSec('The Solution', ['Data visualization', 'Marketing website', 'The Process', 'By the numbers']);
  const process = extractSec('The Process', ['By the numbers', 'Explaining AI', 'Latest projects']);

  // Testimonial
  let quote = '';
  let quoteAuthor = meta.client + ' Leadership';
  let quoteRole = 'Co-Founder';
  for (let j = 0; j < p.length; j++) {
    if (p[j].length > 70 && (p[j].includes('Mugen') || p[j].includes('design') || p[j].includes('team') || p[j].includes('brand')) && j > 15) {
      quote = p[j];
      if (p[j + 1] && p[j + 1].length < 35) quoteAuthor = p[j + 1];
      if (p[j + 2] && p[j + 2].length < 40) quoteRole = p[j + 2];
      break;
    }
  }

  // Gallery images from manifest
  const rawImgs = manifest.projects[meta.slug]?.images || [];
  // filter out favicon, logo svgs
  const gallery = rawImgs.filter(img => 
    !img.includes('.svg') && 
    !img.includes('CFmoqu0qxF0u5YZ6ADWu3UG3c') &&
    !img.includes('zhH4tM4hVUqlx0saiMz3PvxnLs') &&
    !img.includes('AkfwmbbK7reh203E7bgE8GE6w') &&
    img !== meta.coverImage
  ).slice(0, 6);

  return {
    ...meta,
    description: raw.description || meta.fullTitle,
    services,
    challenge,
    solution,
    process,
    testimonial: {
      quote: quote || "Working with Mugen completely changed how we think about design. They are true partners who care deeply about craft and business results.",
      author: quoteAuthor,
      role: quoteRole
    },
    galleryImages: gallery.length > 0 ? gallery : [meta.coverImage]
  };
});

const tsProjectsContent = `export interface Project {
  slug: string;
  number: string;
  title: string;
  fullTitle: string;
  category: string;
  type: string;
  year: string;
  date: string;
  client: string;
  industry: string;
  timeline: string;
  liveUrl: string;
  coverImage: string;
  logo: string;
  description: string;
  services: string[];
  stats: Array<{ value: string; unit: string; label: string }>;
  challenge: { subtitle: string; paragraphs: string[] };
  solution: { subtitle: string; paragraphs: string[] };
  process: { subtitle: string; paragraphs: string[] };
  testimonial: { quote: string; author: string; role: string };
  galleryImages: string[];
}

export const allProjects: Project[] = ${JSON.stringify(projectsOutput, null, 2)};

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const index = allProjects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (index + 1) % allProjects.length;
  return allProjects[nextIndex];
}
`;

fs.writeFileSync('src/lib/projects-data.ts', tsProjectsContent);
console.log('Saved src/lib/projects-data.ts');
