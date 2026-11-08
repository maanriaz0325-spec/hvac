const http = require('http');
const fs = require('fs');
const path = require('path');

const urls = [
  '/service-furnace-installation.html',
  '/furnace-installation.html',
  '/service-furnace-replacement.html',
  '/furnace-replacement.html',
  '/service-heat-pump-repair.html',
  '/heat-pump-repair.html',
  '/service-water-heater-repair.html',
  '/hot-water-heater-repair.html',
  '/water-heater-repair.html',
  '/index.html',
  '/about.html',
  '/service-ac-repair.html',
  '/service-heating-repair.html',
  '/service-gas-furnace-repair.html'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Extract all images
        const imgRegex = /src=["'](images\/[^"']+)["']/g;
        let match;
        const missingImages = [];
        while ((match = imgRegex.exec(data)) !== null) {
          const imgRel = match[1];
          const imgPath = path.join('c:/Users/Hp/Downloads/cool-comfort-hvac', imgRel);
          if (!fs.existsSync(imgPath)) {
            missingImages.push(imgRel);
          }
        }
        resolve({
          url,
          status: res.statusCode,
          size: data.length,
          missingImages: Array.from(new Set(missingImages))
        });
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing all pages on http://localhost:3000 ...');
  let hasError = false;
  for (const url of urls) {
    const res = await checkUrl(url);
    if (res.error) {
      console.log(`[FAIL] ${res.url}: ${res.error}`);
      hasError = true;
    } else if (res.status !== 200) {
      console.log(`[FAIL] ${res.url}: Status ${res.status}`);
      hasError = true;
    } else if (res.missingImages.length > 0) {
      console.log(`[FAIL] ${res.url}: Missing images: ${res.missingImages.join(', ')}`);
      hasError = true;
    } else {
      console.log(`[OK] ${res.url}: HTTP ${res.status}, Size ${res.size} bytes - All images valid!`);
    }
  }
  if (!hasError) {
    console.log('\nALL 14 URLS AND IMAGES VERIFIED PERFECTLY WITH ZERO MISSING ASSETS!');
  }
}

run();
