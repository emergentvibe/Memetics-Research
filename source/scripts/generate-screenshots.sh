#!/bin/bash

# Simple screenshot generator using screenshot.one API (free tier)
# Alternative: use screenshotmachine.com or similar

SCREENSHOTS_DIR="public/screenshots"

# Create directory if it doesn't exist
mkdir -p "$SCREENSHOTS_DIR"

echo "🚀 Generating screenshots..."
echo ""

# Array of projects
declare -A projects=(
  ["vibe-recommendations"]="https://vibe-recommendations.emergentvibe.com/"
  ["emotion-explorer"]="https://emotion-explorer.vercel.app/"
  ["memetics-feed"]="https://bsky.app/profile/emergentvibe.bsky.social/feed/memetics"
  ["twitter-discourse"]="https://twitter-replies-cluster.fly.dev/"
  ["film-night"]="https://film-night.fly.dev/"
)

# Simple approach: Open each URL in browser and wait for user to screenshot
echo "📸 Manual Screenshot Instructions:"
echo "=================================="
echo ""
echo "Please take screenshots of the following projects:"
echo ""

for name in "${!projects[@]}"; do
  url="${projects[$name]}"
  echo "• $name"
  echo "  URL: $url"
  echo "  Save as: $SCREENSHOTS_DIR/${name}.png"
  echo ""
done

echo "💡 Tips:"
echo "  - Use browser viewport: 1200x630px"
echo "  - Take full page screenshots if possible"
echo "  - Save as PNG format"
echo ""
echo "Or use a screenshot service like:"
echo "  - https://www.screenshotmachine.com/"
echo "  - https://screenshotone.com/"
echo "  - Browser extensions like 'Full Page Screen Capture'"
