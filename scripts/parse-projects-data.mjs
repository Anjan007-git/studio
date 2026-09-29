import fs from 'fs';

const rawData = JSON.parse(fs.readFileSync('docs/framer_routes_summary.json', 'utf8'));

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

const projects = {};

for (const slug of projectSlugs) {
  const url = `/projects/${slug}`;
  const item = rawData[url];
  if (!item) {
    console.log(`Missing ${url}`);
    continue;
  }

  // Parse p array
  const p = item.p || [];
  
  // Title / Heading
  const h1 = (item.h1 && item.h1[0]) || '';
  const title = item.title || '';
  const description = item.description || '';

  // Extract metadata
  // In p array, look for "Services", "Date", "Client", "Industry", "Timeline"
  function findAfter(label) {
    const idx = p.indexOf(label);
    if (idx !== -1 && idx + 1 < p.length) {
      return p[idx + 1];
    }
    return '';
  }

  // Find multiple services
  let services = [];
  const servIdx = p.indexOf('Services');
  if (servIdx !== -1) {
    let i = servIdx + 1;
    while (i < p.length && !['Date', 'Client', 'Industry', 'Timeline', 'View live'].includes(p[i])) {
      services.push(p[i]);
      i++;
    }
  }

  const date = findAfter('Date');
  const client = findAfter('Client');
  const industry = findAfter('Industry');
  const timeline = findAfter('Timeline');

  // Find Challenge, Solution, Process
  function extractSection(secName, stopNames) {
    const idx = p.indexOf(secName);
    if (idx === -1) return { subtitle: '', content: [] };
    const subtitle = p[idx + 1] || '';
    const content = [];
    let i = idx + 2;
    while (i < p.length && !stopNames.includes(p[i])) {
      content.push(p[i]);
      i++;
    }
    return { subtitle, content };
  }

  const challenge = extractSection('The Challenge', ['The Solution', 'Data visualization', 'Marketing website', 'The Process', 'By the numbers']);
  const solution = extractSection('The Solution', ['Data visualization', 'Marketing website', 'The Process', 'By the numbers']);
  const process = extractSection('The Process', ['By the numbers', 'Explaining AI', 'Latest projects']);

  // Numbers / Metrics
  const byTheNumbersIdx = p.indexOf('By the numbers');
  let metrics = [];
  if (byTheNumbersIdx !== -1) {
    // Collect next items until quote or Latest projects
    let i = byTheNumbersIdx + 1;
    while (i < p.length && !p[i].includes('“') && !p[i].includes('"') && p[i] !== 'Latest projects' && i < byTheNumbersIdx + 12) {
      if (p[i] === '%' || p[i] === 'x' || p[i] === '+' || p[i].match(/^\d/)) {
        // value or unit
      }
      i++;
    }
  }

  // Testimonial
  let quote = '';
  let quoteAuthor = '';
  let quoteRole = '';
  for (let j = 0; j < p.length; j++) {
    if (p[j].length > 60 && (p[j].includes('Mugen') || p[j].includes('design') || p[j].includes('team') || p[j].includes('brand')) && j > 15) {
      if (p[j + 1] && (p[j + 1].includes('CEO') || p[j + 1].includes('Founder') || p[j + 1].includes('Director') || p[j + 2]?.includes('CEO') || p[j + 2]?.includes('Founder') || p[j + 2]?.includes('Director'))) {
        quote = p[j];
        quoteAuthor = p[j + 1];
        quoteRole = p[j + 2] || '';
        break;
      }
    }
  }

  projects[slug] = {
    slug,
    title,
    h1,
    description,
    services,
    date,
    client: client || slug.toUpperCase(),
    industry,
    timeline,
    challenge,
    solution,
    process,
    quote,
    quoteAuthor,
    quoteRole,
    allParagraphs: p
  };
}

fs.writeFileSync('src/lib/projects-data.json', JSON.stringify(projects, null, 2));
console.log('Saved src/lib/projects-data.json with', Object.keys(projects).length, 'projects.');
