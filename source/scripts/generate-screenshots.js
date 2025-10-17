const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, '../public/screenshots');

// Create screenshots directory if it doesn't exist
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const projects = [
  {
    name: 'vibe-recommendations',
    url: 'https://vibe-recommendations.emergentvibe.com/',
  },
  {
    name: 'emotion-explorer',
    url: 'https://emotion-explorer.vercel.app/',
  },
  {
    name: 'memetics-feed',
    url: 'https://bsky.app/profile/emergentvibe.bsky.social/feed/memetics',
  },
  {
    name: 'twitter-discourse',
    url: 'https://twitter-replies-cluster.fly.dev/',
  },
  {
    name: 'film-night',
    url: 'https://film-night.fly.dev/',
  },
];

async function captureScreenshot(browser, project) {
  console.log(`Capturing ${project.name}...`);

  const page = await browser.newPage();

  try {
    // Set viewport to 1200x630 (good aspect ratio for cards)
    await page.setViewport({ width: 1200, height: 630 });

    // Navigate to the URL with a timeout
    await page.goto(project.url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait a bit for any animations or lazy loading
    await page.waitForTimeout(2000);

    // Take screenshot
    const screenshotPath = path.join(screenshotsDir, `${project.name}.png`);
    await page.screenshot({
      path: screenshotPath,
      type: 'png'
    });

    console.log(`✓ Saved ${project.name}.png`);
  } catch (error) {
    console.error(`✗ Failed to capture ${project.name}:`, error.message);
  } finally {
    await page.close();
  }
}

async function generateAllScreenshots() {
  console.log('🚀 Starting screenshot generation...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const project of projects) {
      await captureScreenshot(browser, project);
    }

    console.log('\n✨ All screenshots generated successfully!');
    console.log(`📁 Saved to: ${screenshotsDir}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

// For bluesky-sentiment (GitHub repo), create a placeholder
function createGitHubPlaceholder() {
  console.log('Creating placeholder for bluesky-sentiment...');
  // You'll need to manually screenshot this one or use GitHub's social preview
  console.log('Note: bluesky-sentiment links to GitHub - screenshot manually or use repo social preview');
}

generateAllScreenshots().then(() => {
  createGitHubPlaceholder();
});
