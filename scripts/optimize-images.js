const fs = require('fs');
const path = require('path');

const candidates = [
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'assets', 'images')
];

function collectImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...collectImages(fullPath));
    } else if (/\.(png|jpe?g|webp|gif|svg)$/i.test(entry.name)) {
      images.push(fullPath);
    }
  }
  return images;
}

const images = candidates.flatMap(collectImages);
console.log(`Image optimization check complete. Found ${images.length} image file(s).`);
console.log('No in-place optimization was applied during this build step.');
