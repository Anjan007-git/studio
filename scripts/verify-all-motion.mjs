import puppeteer from 'puppeteer-core';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const routes = [
  '/studio',
  '/projects',
  '/projects/quantum',
  '/articles',
  '/articles/the-science-of-first-impressions',
  '/pricing',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let errors = [];

  for (const vp of viewports) {
    console.log(`\n=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    await page.setViewport({ width: vp.width, height: vp.height });

    for (const route of routes) {
      const url = `http://localhost:3000${route}`;
      process.stdout.write(`Testing ${route}... `);

      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
        // Wait a small bit for initial entrance animation
        await new Promise((r) => setTimeout(r, 600));

        // Scroll down to trigger scroll reveals
        await page.evaluate(() => window.scrollBy(0, 600));
        await new Promise((r) => setTimeout(r, 400));
        await page.evaluate(() => window.scrollBy(0, 1000));
        await new Promise((r) => setTimeout(r, 400));

        // Check main content visibility
        const mainState = await page.evaluate(() => {
          const main = document.querySelector('main');
          if (!main) return { ok: false, reason: 'No main element' };
          const rect = main.getBoundingClientRect();
          const style = window.getComputedStyle(main);
          return {
            ok: style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0',
            height: rect.height,
          };
        });

        // Check if transition curtain is stuck
        const curtainStuck = await page.evaluate(() => {
          const curtain = document.querySelector('.pointer-events-auto');
          // If a full-screen fixed overlay is blocking clicks
          const fixedElements = Array.from(document.querySelectorAll('div.fixed.inset-0')).filter(
            el => window.getComputedStyle(el).pointerEvents === 'auto'
          );
          return fixedElements.length > 0;
        });

        if (!mainState.ok || mainState.height === 0) {
          errors.push(`${vp.name} ${route}: main content not visible or 0 height`);
          console.log(`FAIL (main visibility)`);
        } else if (curtainStuck) {
          errors.push(`${vp.name} ${route}: transition overlay stuck`);
          console.log(`FAIL (curtain stuck)`);
        } else {
          console.log(`OK (h: ${Math.round(mainState.height)}px)`);
        }
      } catch (err) {
        errors.push(`${vp.name} ${route}: ${err.message}`);
        console.log(`ERROR: ${err.message}`);
      }
    }
  }

  // Test interactive navigation and page transition
  console.log(`\n=== Testing Page Transition Navigation & Back/Forward ===`);
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 600));

  // Click first project card
  const projectLink = await page.$('a[href^="/projects/"]');
  if (projectLink) {
    console.log('Clicking project link...');
    await projectLink.click();
    await new Promise((r) => setTimeout(r, 1200));
    const currentUrl = page.url();
    console.log(`Navigated to: ${currentUrl}`);

    // Test back button
    console.log('Testing browser Back...');
    await page.goBack();
    await new Promise((r) => setTimeout(r, 1200));
    console.log(`Back to: ${page.url()}`);

    // Test forward button
    console.log('Testing browser Forward...');
    await page.goForward();
    await new Promise((r) => setTimeout(r, 1200));
    console.log(`Forward to: ${page.url()}`);
  }

  await browser.close();

  console.log('\n=======================================');
  if (errors.length === 0) {
    console.log('ALL TESTS PASSED! Zero errors across all viewports and routes.');
  } else {
    console.log(`Found ${errors.length} issues:`);
    errors.forEach(e => console.log(' - ' + e));
    process.exit(1);
  }
}

run();
