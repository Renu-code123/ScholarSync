# Deploying ScholarSync (static) to Vercel

This project is pure static HTML/CSS/JS and requires no server runtime.

Quick options:

1) Deploy via Vercel web (recommended)
- Push this repo to GitHub/GitLab/Bitbucket.
- Sign in at https://vercel.com and "Import Project".
- Select this repository and follow defaults. Vercel will detect static files and deploy.

2) Deploy via Vercel CLI
- Install (if not already): `npm i -g vercel`
- From repo root: `vercel` (follow prompts) or `vercel --prod` to deploy production.

Notes
- No npm install or build step required for static HTML pages.
- `vercel.json` provided to enforce clean URLs and caching headers.
- If you use client-side routing or single-page app behavior, adjust `routes` in vercel.json accordingly.

Troubleshooting
- 404s: ensure links use relative paths (e.g. `index.html` or `/index.html`) and that files are committed.
- Cache issues: HTML files served with no-cache by default in vercel.json; browser caching may still require hard refresh.
