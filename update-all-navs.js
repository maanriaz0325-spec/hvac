const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Hp/Downloads/cool-comfort-hvac';

const files = [
  'index.html',
  'about.html',
  'about-us.html',
  'service-ac-repair.html',
  'service-ac-installation.html',
  'service-ac-replacement.html',
  'service-ac-maintenance.html',
  'service-heating-repair.html',
  'service-gas-furnace-repair.html',
  'service-furnace-installation.html',
  'service-furnace-replacement.html',
  'service-heat-pump-repair.html',
  'service-water-heater-repair.html',
  'ac-repair.html',
  'ac-installation.html',
  'ac-replacement.html',
  'ac-maintenance.html',
  'heating-repair.html',
  'gas-furnace-repair.html',
  'furnace-installation.html',
  'furnace-replacement.html',
  'heat-pump-repair.html',
  'hot-water-heater-repair.html',
  'water-heater-repair.html'
];

function getNavForPage(filename) {
  const isAC = filename.includes('ac-') || (filename === 'index.html');
  const isHeating = filename.includes('heating') || filename.includes('furnace') || filename.includes('heat-pump');
  const isOther = filename.includes('water-heater');
  const isAbout = filename.includes('about');

  const acActive = isAC && filename !== 'index.html' ? ' active' : (filename === 'index.html' ? ' active' : '');
  const heatingActive = isHeating ? ' active' : '';
  const otherActive = isOther ? ' active' : '';
  const aboutActive = isAbout ? ' active' : '';

  return `      <!-- Desktop & Mobile Nav Menu with All Service Dropdowns -->
      <nav class="nav-menu" id="navMenu" aria-label="Main Navigation">
        <!-- 1. Air Conditioning -->
        <div class="nav-dropdown">
          <a href="service-ac-repair.html" class="nav-link${acActive}">
            Air Conditioning
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="service-ac-repair.html" class="dropdown-item">AC Repair &rarr;</a>
            <a href="service-ac-installation.html" class="dropdown-item">AC Installation &rarr;</a>
            <a href="service-ac-replacement.html" class="dropdown-item">AC Replacement &rarr;</a>
            <a href="service-ac-maintenance.html" class="dropdown-item">AC Maintenance &amp; Tune-Up &rarr;</a>
            <a href="service-ac-repair.html#emergency" class="dropdown-item">Emergency AC Service &rarr;</a>
          </div>
        </div>

        <!-- 2. Heating Services -->
        <div class="nav-dropdown">
          <a href="service-heating-repair.html" class="nav-link${heatingActive}">
            Heating Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="service-heating-repair.html" class="dropdown-item">Heating System Repair &rarr;</a>
            <a href="service-gas-furnace-repair.html" class="dropdown-item">Gas Furnace Repair &rarr;</a>
            <a href="service-furnace-installation.html" class="dropdown-item">Furnace Installation &rarr;</a>
            <a href="service-furnace-replacement.html" class="dropdown-item">Furnace Replacement &rarr;</a>
            <a href="service-heat-pump-repair.html" class="dropdown-item">Heat Pump Repair &rarr;</a>
          </div>
        </div>

        <!-- 3. Indoor Air Quality -->
        <div class="nav-dropdown">
          <a href="index.html#services" class="nav-link">
            Indoor Air Quality
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="index.html#services" class="dropdown-item">Air Duct Cleaning &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Dehumidifier Installation &rarr;</a>
            <a href="index.html#services" class="dropdown-item">UV Air Purifiers &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Air Filtration Systems &rarr;</a>
          </div>
        </div>

        <!-- 4. Commercial HVAC -->
        <div class="nav-dropdown">
          <a href="index.html#services" class="nav-link">
            Commercial HVAC
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="index.html#services" class="dropdown-item">Commercial AC Repair &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Rooftop Packaged Units &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Commercial Heating Solutions &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Preventive Maintenance Plans &rarr;</a>
          </div>
        </div>

        <!-- 5. Other Services -->
        <div class="nav-dropdown">
          <a href="service-water-heater-repair.html" class="nav-link${otherActive}">
            Other Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="service-water-heater-repair.html" class="dropdown-item">Hot Water Heater Repair &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Ductless Mini-Split Systems &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Thermostat &amp; Smart Controls &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Refrigerant Leak Detection &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Coil Cleaning &amp; Sanitization &rarr;</a>
          </div>
        </div>

        <!-- 6. About Us -->
        <a href="about.html" class="nav-link${aboutActive}">About Us</a>
      </nav>`;
}

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  const navRegex = /<nav class="nav-menu"[\s\S]*?<\/nav>/;
  if (navRegex.test(content)) {
    const newNav = getNavForPage(file);
    content = content.replace(navRegex, newNav);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`Updated nav in ${file}`);
  } else {
    console.log(`No nav tag found in ${file}`);
  }
}
console.log(`Total files updated: ${updatedCount}`);
