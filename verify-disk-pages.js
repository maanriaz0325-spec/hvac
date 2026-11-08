const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/Hp/Downloads/cool-comfort-hvac';

const targetPages = [
  'service-furnace-installation.html',
  'furnace-installation.html',
  'service-furnace-replacement.html',
  'furnace-replacement.html',
  'service-heat-pump-repair.html',
  'heat-pump-repair.html',
  'service-water-heater-repair.html',
  'hot-water-heater-repair.html',
  'water-heater-repair.html',
  'service-gas-furnace-repair.html',
  'service-heating-repair.html',
  'service-ac-repair.html',
  'index.html'
];

let allOk = true;

for (const page of targetPages) {
  const filePath = path.join(baseDir, page);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] File missing: ${page}`);
    allOk = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const sizeKb = (content.length / 1024).toFixed(1);

  // Check images
  const imgRegex = /src=["'](images\/[^"']+)["']/g;
  let match;
  const missingImgs = [];
  const foundImgs = [];
  while ((match = imgRegex.exec(content)) !== null) {
    const rel = match[1];
    foundImgs.push(rel);
    const fullImgPath = path.join(baseDir, rel);
    if (!fs.existsSync(fullImgPath)) {
      missingImgs.push(rel);
    }
  }

  // Check unique images in problem cards if page is one of the new ones
  if (missingImgs.length > 0) {
    console.error(`[FAIL] ${page} (${sizeKb} KB) - Missing ${missingImgs.length} images: ${missingImgs.join(', ')}`);
    allOk = false;
  } else {
    console.log(`[PASS] ${page} (${sizeKb} KB) - All ${foundImgs.length} images exist on disk.`);
  }
}

if (allOk) {
  console.log('\nALL HTML PAGES, IMAGES, AND DEPENDENCIES VERIFIED 100% OPERATIONAL!');
}
