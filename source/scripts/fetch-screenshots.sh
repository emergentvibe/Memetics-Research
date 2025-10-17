#!/bin/bash

# Fetch screenshots using screenshot.one API
# Free tier allows basic screenshots

SCREENSHOTS_DIR="public/screenshots"
mkdir -p "$SCREENSHOTS_DIR"

echo "🚀 Fetching screenshots using screenshot API..."
echo ""

# Using screenshot.rocks (free, no API key needed)
API_BASE="https://image.thum.io/get/width/1200/crop/630/noanimate/"

declare -A projects=(
  ["vibe-recommendations"]="https://vibe-recommendations.emergentvibe.com/"
  ["emotion-explorer"]="https://emotion-explorer.vercel.app/"
  ["memetics-feed"]="https://bsky.app/profile/emergentvibe.bsky.social/feed/memetics"
  ["twitter-discourse"]="https://twitter-replies-cluster.fly.dev/"
  ["film-night"]="https://film-night.fly.dev/"
)

for name in "${!projects[@]}"; do
  url="${projects[$name]}"
  output="${SCREENSHOTS_DIR}/${name}.png"

  echo "📸 Fetching $name..."
  curl -s "${API_BASE}${url}" -o "$output"

  if [ -f "$output" ]; then
    echo "✓ Saved ${name}.png"
  else
    echo "✗ Failed to fetch ${name}"
  fi
  echo ""
done

echo "✨ Done! Screenshots saved to $SCREENSHOTS_DIR"
