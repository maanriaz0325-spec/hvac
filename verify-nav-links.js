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
  'water-heater-repair.html'
];

let allValid = true;

for (const page of targetPages) {
  const filePath = path.join(baseDir, page);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match href="something.html"
  const hrefRegex = /href=["']([^"'#:]+\.html)(?:#[^"']*)?["']/g;
  let match;
  const missingHrefs = [];
  const foundHrefs = [];

  while ((match = hrefRegex.exec(content)) !== null) {
    const targetFile = match[1];
    foundHrefs.push(targetFile);
    const targetPath = path.join(baseDir, targetFile);
    if (!fs.existsSync(targetPath)) {
      missingHrefs.push(targetFile);
    }
  }

  const uniqueMissing = [...new Set(missingHrefs)];
  if (uniqueMissing.length > 0) {
    console.error(`[FAIL] ${page} has broken links: ${uniqueMissing.join(', ')}`);
    allValid = false;
  } else {
    console.log(`[PASS] ${page} - all ${foundHrefs.length} internal links point to valid files.`);
  }
}

if (allValid) {
  console.log('\nALL INTERNAL NAVIGATION AND HYPERLINKS VERIFIED 100% OK!');
}
