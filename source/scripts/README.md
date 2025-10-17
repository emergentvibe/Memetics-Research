# Screenshot Generator

Automated screenshot generation for software projects.

## Setup

```bash
# Install Puppeteer (only needed once)
npm install --save-dev puppeteer
```

## Usage

```bash
# Generate screenshots for all projects
node scripts/generate-screenshots.js
```

This will:
1. Launch a headless browser
2. Visit each project URL
3. Capture a 1200x630px screenshot
4. Save to `public/screenshots/`

## Screenshots Generated

- `vibe-recommendations.png`
- `emotion-explorer.png`
- `memetics-feed.png`
- `twitter-discourse.png`
- `film-night.png`

**Note:** `bluesky-sentiment.png` needs to be manually created since it's a GitHub repo. You can:
1. Visit the repo and screenshot the README
2. Use GitHub's social preview image
3. Create a custom preview graphic

## Troubleshooting

If screenshots fail:
- Check that URLs are accessible
- Increase timeout in script (default: 30s)
- Some sites may require authentication or have anti-bot protection
