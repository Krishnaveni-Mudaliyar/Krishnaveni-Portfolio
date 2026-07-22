const fs = require('fs');
const path = require('path');

const baseUrl = 'https://krishnaveni-portfolio.vercel.app';
const routes = ['/', '/about', '/projects', '/blog', '/contact'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n  </url>`)
  .join('\n')}\n</urlset>\n`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log(`Sitemap written to ${outputPath}`);
