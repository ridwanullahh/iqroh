#!/usr/bin/env bash
# Deploys the Iqroh Next.js static app to Cloudflare Pages.
# Usage:
#   ./scripts/deploy-cloudflare-pages.sh
# Env vars:
#   CLOUDFLARE_API_TOKEN   (required)
#   CLOUDFLARE_ACCOUNT_ID (required)
#   CLOUDFLARE_PROJECT_NAME (optional, defaults to "iqroh")
set -euo pipefail

PROJECT_NAME="${CLOUDFLARE_PROJECT_NAME:-iqroh}"

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ] || [ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]; then
  echo "ERROR: CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID must be set in env." >&2
  exit 2
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

echo "[deploy] (1/2) Building static export..."
npm run build

if [ ! -d "out" ]; then
  echo "ERROR: build did not produce an out/ directory. Ensure next.config.mjs has output: 'export'." >&2
  exit 1
fi

# Create the project if it doesn't exist (needed on first deploy).
if ! npx wrangler pages project list 2>/dev/null | grep -q "^${PROJECT_NAME}\b"; then
  echo "[deploy]    creating project ${PROJECT_NAME} (first deploy)..."
  npx wrangler pages project create "${PROJECT_NAME}" --production-branch=main
fi

echo "[deploy] (2/2) Deploying out/ to Cloudflare Pages..."
npx wrangler pages deploy out \
  --project-name="${PROJECT_NAME}" \
  --branch=main \
  --commit-dirty=true

echo "[deploy] Done. Live URL: https://${PROJECT_NAME}.pages.dev"
