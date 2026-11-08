const fs = require('fs');
const css = fs.readFileSync('c:\\Users\\Hp\\Downloads\\cool-comfort-hvac\\styles.css', 'utf8');

const regex = /([^{]+)\{([^}]+)\}/g;
let match;
while ((match = regex.exec(css)) !== null) {
  const sel = match[1].trim();
  const body = match[2].trim();
  if (body.includes('overflow') && (sel.includes('problems-sec') || sel.includes('container') || sel.includes('main') || sel === 'body' || sel === 'html')) {
    console.log('RULE WITH OVERFLOW:', sel);
    console.log(body);
    console.log('---------------------------');
  }
}
