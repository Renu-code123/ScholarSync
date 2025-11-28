# ScholarSync

A lightweight, static web application to organize, tag, and cite academic research papers. Built with plain HTML, CSS and JavaScript for offline-first usage and easy deployment.

## Problem Statement
Researchers and students often struggle to manage large collections of papers, track notes, and generate citations without complex tools or subscriptions.

## Solution Approach
ScholarSync provides a simple client-side tool to:
- Add and categorize papers with metadata and tags
- Upload and preview PDFs
- Generate basic summaries and citations client-side
- Store data locally (LocalStorage) for privacy and offline access
- Offer a responsive UI with dark mode and accessible interactions

## Technology Stack
- HTML5, CSS3
- Vanilla JavaScript (no build step)
- PDF.js (CDN) for PDF text extraction
- Python  (— for backend services, scripts, or local APIs)
- Static hosting (Vercel, Netlify, GitHub Pages)

## Setup / Installation
No runtime dependencies or build tools required. To run locally:
1. Clone the repository:
   git clone <your-repo-url>
2. Open the project folder:
   c:\Users\RENU\Downloads\Scholarsync\Scholarsync
3. Serve files via a simple static server (recommended) or open index.html directly.

Optional (recommended) local server:
- Python 3:
  - python -m http.server 8000
  - Visit http://localhost:8000
- Node (http-server):
  - npm i -g http-server
  - http-server -c-1
  - Visit the printed local URL

## How to Run / Deploy
- Local: open index.html in a browser or use the local server above.
- Vercel: connect the repository in vercel.com (Static project). No build step required.
- GitHub Pages: push to a repo and enable Pages for the main branch (serve root).

## Notes
- The app stores data client-side (LocalStorage). For multi-device sync, add a backend or cloud sync.
- Filenames and links should be kept consistent (e.g., `Tag-Based-filtering.html`, `research ethics.html`) before deploying.
- For SPA-like routing, add a fallback rewrite (vercel.json) to serve index.html.

## Contributing
Open a PR with changes. Keep the project static and dependency-free where possible.

## License
Add a LICENSE file as needed.
