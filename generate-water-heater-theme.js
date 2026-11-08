const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hot Water Heater Repair in Miami, FL | Miami Air Conditioning &amp; Heat Repair</title>
  <meta name="description" content="Professional hot water heater repair in Miami, FL. Diagnostic inspection and repair for electric, gas, and tankless water heaters. 25 years HVAC & mechanical experience.">
  <link rel="canonical" href="https://coolcomfortmiami.com/service-water-heater-repair.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="service-page">

  <!-- ==========================================================================
       1. TOP ANNOUNCEMENT BAR
       ========================================================================== -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <span class="top-bar-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <path d="m20 16-4-4 4-4"></path>
            <path d="m4 8 4 4-4 4"></path>
            <path d="m16 4-4 4-4-4"></path>
            <path d="m8 20 4-4 4 4"></path>
          </svg>
          24-Hour Emergency Service Across Miami-Dade, Broward &amp; Palm Beach County
        </span>
      </div>
      <div class="top-bar-right">
        <span class="top-bar-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          Licensed &amp; Insured #CMC1250482
        </span>
        <span class="top-bar-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
          Upfront Written Estimates
        </span>
        <span class="top-bar-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 16 14"></polyline>
          </svg>
          Same-Day Assessments
        </span>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       2. MAIN NAVIGATION HEADER
       ========================================================================== -->
  <header class="main-header" id="mainHeader">
    <div class="container">
      <a href="index.html" class="brand-logo" aria-label="Air Conditioning Repair Home">
        <div class="brand-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <path d="m20 16-4-4 4-4"></path>
            <path d="m4 8 4 4-4 4"></path>
            <path d="m16 4-4 4-4-4"></path>
            <path d="m8 20 4-4 4 4"></path>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-name">Air Conditioning Repair</span>
          <span class="brand-subtitle">MIAMI &amp; SOUTH FLORIDA</span>
        </div>
      </a>

      <!-- Desktop & Mobile Nav Menu with All Service Dropdowns -->
      <nav class="nav-menu" id="navMenu" aria-label="Main Navigation">
        <!-- 1. Air Conditioning -->
        <div class="nav-dropdown">
          <a href="service-ac-repair.html" class="nav-link">
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
          <a href="service-heating-repair.html" class="nav-link">
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
          <a href="service-water-heater-repair.html" class="nav-link active">
            Other Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="service-water-heater-repair.html" class="dropdown-item active-page" style="color: var(--primary-blue); font-weight: 700;">Hot Water Heater Repair &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Ductless Mini-Split Systems &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Thermostat &amp; Smart Controls &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Refrigerant Leak Detection &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Coil Cleaning &amp; Sanitization &rarr;</a>
          </div>
        </div>

        <!-- 6. About Us -->
        <a href="about.html" class="nav-link">About Us</a>
      </nav>

      <div class="header-actions">
        <a href="tel:3059026113" class="header-phone" aria-label="Call (305) 902-6113">
          <div class="phone-icon-pulse">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span class="phone-number">(305) 902-6113</span>
        </a>

        <a href="#quote-form" class="btn-cta-orange">
          Request Service
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>

        <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- ==========================================================================
         3. HERO SECTION
         ========================================================================== -->
    <section class="service-hero">
      <div class="container">
        <div class="service-hero-grid">
          <div class="service-hero-content">
            <div class="hero-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              RESIDENTIAL &amp; COMMERCIAL WATER HEATER REPAIR
            </div>

            <h1 class="service-hero-title">
              Hot Water Heater<br><span>Repair in Miami, FL</span>
            </h1>

            <p class="service-hero-sub">
              When your water heater stops producing hot water, takes too long to heat, or starts leaking around the tank, even everyday tasks become difficult. The problem may be a failed heating element, thermostat, electrical connection, gas-control component, valve, or an issue inside the tank. The right repair depends on the type of water heater and where the fault is occurring.
            </p>

            <p class="service-hero-sub" style="font-size: 1.02rem; margin-top: -10px; margin-bottom: 22px;">
              Miami Air Conditioning &amp; Heat Repair helps customers address water-heating problems in Miami and surrounding service areas. Whether you have no hot water, inconsistent temperatures, unusual tank noises, or a water heater that keeps shutting off, the first step is to identify what is causing the problem. If your water heater is not working properly, contact our team to discuss the symptoms and arrange an assessment.
            </p>

            <div class="service-hero-trust-grid">
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 16 14"></polyline></svg>
                <span>25 Years Experience</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Licensed #CMC1250482</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Electric, Gas &amp; Tankless</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                <span>Upfront Written Estimates</span>
              </div>
            </div>

            <div class="service-hero-actions">
              <a href="#quote-form" class="btn-cta-orange btn-lg">
                Request Water Heater Service &rarr;
              </a>
              <a href="tel:3059026113" class="btn-hero-dark-call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (305) 902-6113
              </a>
            </div>
          </div>

          <div class="service-hero-media">
            <div class="service-hero-wave-wrap">
              <img src="images/hero-water-heater-repair.jpg" alt="Certified technician diagnosing residential water heater in Miami FL" width="600" height="500">
              <div class="service-hero-wave-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         4. WATER HEATER REPAIR SERVICES IN MIAMI (7 Scope Cards)
         ========================================================================== -->
    <section class="service-overview-sec" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">DIAGNOSTIC &amp; REPAIR SCOPE</span>
          <h2 class="section-title">Water Heater Repair Services in Miami</h2>
          <p class="section-subtitle">
            A water heater can lose performance gradually or stop working without much warning. Some problems involve replaceable components, while others point to a leaking or deteriorating tank. Tankless units also have different operating components and diagnostic requirements from traditional storage-tank heaters.
          </p>
        </div>

        <p style="font-size: 1.05rem; color: var(--body-text); line-height: 1.65; max-width: 900px; margin: 0 auto 32px; text-align: center;">
          The service needed depends on the equipment installed at your property and the fault identified during assessment:
        </p>

        <div class="service-scope-cards-grid">
          <div class="service-scope-card">
            <div class="service-scope-num blue">1</div>
            <div>
              <h3 class="service-scope-card-title">No Hot Water</h3>
              <p class="service-scope-card-desc">Investigating heating, power, ignition, thermostat, or control problems preventing hot water delivery.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">2</div>
            <div>
              <h3 class="service-scope-card-title">Insufficient Hot Water</h3>
              <p class="service-scope-card-desc">Checking heating performance, temperature controls, tank capacity, and mineral sediment accumulation.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">3</div>
            <div>
              <h3 class="service-scope-card-title">Water Heater Leaks</h3>
              <p class="service-scope-card-desc">Identifying whether water is coming from a connection, valve, drain fitting, or the storage tank body itself.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">4</div>
            <div>
              <h3 class="service-scope-card-title">Electrical Heating Problems</h3>
              <p class="service-scope-card-desc">Assessing heating elements, upper/lower thermostats, high-limit resets, wiring, and breaker trips on electric units.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">5</div>
            <div>
              <h3 class="service-scope-card-title">Gas Water Heater Problems</h3>
              <p class="service-scope-card-desc">Investigating ignition, pilot assemblies, thermocouples, burner operation, and gas controls where gas service is offered.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">6</div>
            <div>
              <h3 class="service-scope-card-title">Tankless Water Heater Faults</h3>
              <p class="service-scope-card-desc">Assessing error codes, ignition, flow-related sensors, scale buildup, and electronic controls on on-demand units.</p>
            </div>
          </div>

          <div class="service-scope-card" style="grid-column: 1 / -1;">
            <div class="service-scope-num blue">7</div>
            <div>
              <h3 class="service-scope-card-title">Unusual Noises or Discolored Water</h3>
              <p class="service-scope-card-desc">Investigating mineral sediment popping, sacrificial anode rod deterioration, internal corrosion, and property plumbing causes.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--pale-blue-subtle); border-radius: var(--radius-md); padding: 24px 28px; text-align: center; max-width: 900px; margin: 36px auto 0;">
          <p style="font-size: 1.02rem; font-weight: 700; color: var(--primary-navy); margin: 0 0 16px;">
            Our aim is to identify whether the unit needs a component repair, corrective work, or a replacement assessment—not to recommend a new heater simply because one part has failed.
          </p>
          <a href="#quote-form" class="btn-cta-orange" style="display: inline-flex;">Schedule Diagnostic Assessment &rarr;</a>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         5. COMMON WATER HEATER PROBLEMS WE INSPECT & REPAIR (Sticky Left Layout)
         ========================================================================== -->
    <section class="service-problems-sec" id="problems" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="service-problems-layout">
          <!-- Sticky Left Diagnostic Column -->
          <div class="service-problems-intro">
            <span class="section-label">DIAGNOSTIC CRITERIA</span>
            <h2 class="section-title" style="margin-bottom: 14px;">Common Water Heater Problems We Inspect &amp; Repair</h2>
            <p style="font-size: 1.02rem; color: var(--body-text); line-height: 1.65; margin-bottom: 18px;">
              Explore the common operating faults below to see how our certified technicians diagnose and resolve each specific water heating issue.
            </p>
            <p style="font-size: 0.96rem; font-weight: 700; color: var(--primary-navy); margin-bottom: 10px;">
              Key inspection points:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Electric heating elements &amp; thermostats</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Temperature &amp; pressure relief valve (T&amp;P)</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Tank shell integrity &amp; fitting leaks</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Tankless heat exchanger scale &amp; sensors</span>
              </li>
            </ul>

            <div style="background: var(--white); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 20px;">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">Need Prompt Service?</h4>
              <p style="font-size: 0.92rem; color: var(--body-text); line-height: 1.55; margin-bottom: 14px;">
                Our certified technicians diagnose electric, gas, and tankless units across Miami.
              </p>
              <a href="tel:3059026113" class="btn-cta-orange" style="width: 100%; text-align: center; padding: 11px 18px; font-size: 0.94rem;">
                Call (305) 902-6113
              </a>
            </div>
          </div>

          <!-- Right Cards Grid (9 Distinct Theme Images) -->
          <div>
            <div class="service-problems-cards-grid">
              
              <!-- Problem 1: No Hot Water -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-no-hot-water.jpg" alt="Testing heating element and thermostat on water heater with no hot water" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">1. Why Is Your Water Heater Not Producing Hot Water?</h3>
                  <p class="service-problem-desc">
                    If you turn on a hot-water faucet and get only cold water, the heater may not be completing its heating cycle. The cause depends on whether you have an electric storage tank, a gas water heater, or a tankless system.
                  </p>
                  <p class="service-problem-desc">
                    On electric tanks, a tripped breaker, failed heating element, thermostat fault, or connection problem may interrupt heating. On gas models, the issue may involve ignition, pilot assembly, or gas control. Tankless units may stop due to ignition, flow restriction, or system errors.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We test power/fuel supply, thermostat controls, elements, pilot assemblies, and safety cutoffs to explain the appropriate repair.
                  </div>
                </div>
              </div>

              <!-- Problem 2: Lukewarm Water -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-lukewarm.jpg" alt="Diagnosing water heater only producing lukewarm water in Miami" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">2. Why Does Your Water Heater Only Produce Lukewarm Water?</h3>
                  <p class="service-problem-desc">
                    If the water gets warm but never reaches the temperature you expect, or starts hot and quickly turns cold, the heater may be struggling to maintain output. Possible causes include a failed heating element, thermostat problem, sediment occupying tank space, a damaged dip tube mixing cold and hot water, or demand exceeding capacity.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We evaluate how quickly temperature drops, check if all fixtures are affected, and test upper/lower heating controls.
                  </div>
                </div>
              </div>

              <!-- Problem 3: Taking Too Long to Heat -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-slow-recovery.jpg" alt="Testing slow water heater recovery time and sediment buildup" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">3. Is Your Water Heater Taking Too Long to Heat?</h3>
                  <p class="service-problem-desc">
                    Longer heating times can disrupt showers, laundry, and daily routines. On electric tank heaters, one failed heating element reduces recovery speed. Sediment can also insulate the tank bottom and interfere with heat transfer. On tankless systems, scaling or flow restrictions may be responsible.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We distinguish a repairable component problem from an equipment-condition or capacity-matching issue.
                  </div>
                </div>
              </div>

              <!-- Problem 4: Leaking Around Tank -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-tank-leak.jpg" alt="Inspecting water leak around base, valves, and water heater fittings" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">4. Why Is Your Water Heater Leaking?</h3>
                  <p class="service-problem-desc">
                    Water around a water heater should never be ignored. However, not every leak means the tank has failed. Water may come from loose connections, drain valves, temperature and pressure relief valves, or connected pipes.
                  </p>
                  <p class="service-problem-desc">
                    If water escapes from a connection or replaceable valve, it can be repaired. If the storage tank itself has corroded through, replacing the unit is required because outer sealing cannot reliably fix a tank failure.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Safety Rule:</strong> Never cap or block a relief valve discharge pipe. Shut off water and power safely if pooling water is present.
                  </div>
                </div>
              </div>

              <!-- Problem 5: Popping or Rumbling Noises -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-popping-noise.jpg" alt="Inspecting mineral sediment accumulation and popping sounds in tank" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">5. Why Is Your Water Heater Making Popping Noises?</h3>
                  <p class="service-problem-desc">
                    Popping, crackling, or rumbling sounds from a storage tank can be associated with mineral sediment collecting at the bottom. As the heater operates, water trapped beneath sediment produces noise as it heats. Other causes include element issues or water pressure changes.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We assess operating condition and sediment buildup to determine whether flushing, component repair, or replacement is suitable.
                  </div>
                </div>
              </div>

              <!-- Problem 6: Rusty or Smelly Water -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-rusty-water.jpg" alt="Evaluating rusty water discoloration and sacrificial anode rod condition" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">6. Why Is Your Hot Water Rusty, Discolored, or Smelly?</h3>
                  <p class="service-problem-desc">
                    If hot water looks brown or rusty or has an unusual odor, the cause may involve corrosion, sediment, the anode rod, or a water-quality issue. On a storage tank, the anode rod helps protect the tank from corrosion; as it deteriorates, the tank becomes vulnerable to internal corrosion.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We check whether discoloration occurs only with hot water or also cold water, and inspect the anode rod and connection fittings.
                  </div>
                </div>
              </div>

              <!-- Problem 7: Tripping Breaker -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-tripped-breaker.jpg" alt="Testing electric water heater electrical elements for circuit breaker trips" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">7. Why Does Your Water Heater Keep Tripping the Breaker?</h3>
                  <p class="service-problem-desc">
                    An electric water heater that repeatedly trips its breaker may have an electrical fault, such as a damaged heating element shorting to ground, wiring problem, or thermostat fault causing excessive current draw.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Critical Warning:</strong> Do not bypass the breaker or install a larger breaker. Leave the unit off and arrange a professional electrical assessment.
                  </div>
                </div>
              </div>

              <!-- Problem 8: Pilot Light Going Out -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-pilot-out.jpg" alt="Gas water heater pilot assembly and thermocouple voltage testing" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">8. Why Does a Gas Water Heater Pilot Light Keep Going Out?</h3>
                  <p class="service-problem-desc">
                    On gas water heaters, a pilot light that repeatedly goes out prevents the burner from heating water. The issue may involve the thermocouple or flame sensor, pilot assembly, gas supply, venting, or a safety control.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Safety Mandate:</strong> If you smell gas, do not attempt to relight the heater. Leave the area immediately and contact gas emergency services.
                  </div>
                </div>
              </div>

              <!-- Problem 9: Tankless Error Code -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-waterheater-tankless-error.jpg" alt="Diagnosing error code and scaling on modern tankless water heater" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">9. Why Is Your Tankless Water Heater Showing an Error Code?</h3>
                  <p class="service-problem-desc">
                    Tankless heaters heat water as it flows, so operating issues differ from storage tanks. A flashing code or sudden shutdown may indicate an ignition fault, water-flow sensor restriction, mineral scale buildup inside the heat exchanger, or temperature sensor errors.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We cross-reference the displayed error code with manufacturer service protocols and evaluate flow sensors and heat exchanger condition.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         6. WHAT WATER HEATER COMPONENTS MAY NEED REPAIR? (7 Component Cards)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">PRECISION REPLACEMENTS</span>
          <h2 class="section-title">What Water Heater Components May Need Repair?</h2>
          <p class="section-subtitle">
            Different water heater designs use different heating and control components. The correct repair depends on the model and the fault identified during assessment.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-top: 36px;">
          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Heating Elements</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">Electric storage-tank heaters use heating elements to warm water. A failed element can cause no hot water, slow recovery, or insufficient hot water. Elements and electrical supplies must be checked before replacement.</p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Thermostats &amp; Temperature Controls</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">A faulty thermostat can prevent the heater from maintaining the intended temperature or cause inconsistent heating. Controls and associated components are assessed together.</p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Anode Rod</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">The anode rod helps protect the inside of a storage tank from corrosion. If deteriorated, its condition and the tank's overall state should be considered before deciding if replacement is appropriate.</p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Temperature &amp; Pressure Relief Valve</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">The T&amp;P valve is a safety device designed to release water when temperature or pressure conditions require it. If it discharges or leaks, the cause needs assessment; it must never be capped or disabled.</p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Drain Valve &amp; Water Connections</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">Leaks around the bottom or sides of the heater may originate from a drain valve, connection, or fitting. The source should be traced before deciding which part needs repair.</p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Gas Ignition &amp; Burner Components</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">On gas models, pilot assemblies, ignition components, flame sensors, and gas controls can affect heating. These components require appropriate gas-appliance service.</p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px; grid-column: 1 / -1;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin-bottom: 8px;">Tankless Sensors &amp; Flow Components</h3>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">Tankless units use sensors and electronic controls to regulate heating as water moves through the system. Error codes or inconsistent temperatures require checks of flow, sensors, scale buildup, or internal parts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         7. HOW OUR WATER HEATER REPAIR SERVICE WORKS (6-Step Process)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: var(--pale-blue-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">METHODOLOGY</span>
          <h2 class="section-title">How Does Our Water Heater Repair Service Work?</h2>
          <p class="section-subtitle">
            The repair process begins with the actual problem and the type of heater installed at your property. Traditional electric tanks, gas storage heaters, and tankless units do not use the same components or diagnostic procedures.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 24px; margin-top: 36px;">
          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">1</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Understand the Problem</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              We discuss what you are experiencing: no hot water, lukewarm water, a leak, unusual noise, a tripped breaker, or a tankless error code. We also establish whether it affects every fixture or one area.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">2</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Identify the Equipment</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The heater's type, model, fuel source, approximate age, and installation location help determine which components and operating conditions need attention.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">3</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Assess the Reported Fault</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The relevant heating components, controls, valves, connections, or tankless operating conditions are assessed according to the equipment and symptoms.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">4</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Explain Recommended Work</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              Once the cause is identified, the repair requirements and available options are explained clearly, including whether the tank's condition makes repair practical.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">5</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Proceed with Agreed Work</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The repair proceeds according to the agreed scope and applicable trade and safety requirements, using precision OEM or exact-match replacement components.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">6</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Check Relevant Operation</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              After the work, the appropriate heating and operating functions are checked to confirm that the reported problem has been addressed and water heats reliably.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         8. REPAIR VS REPLACE COMPARISON (Theme Palette Cards)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">DECISION GUIDE</span>
          <h2 class="section-title">Should You Repair or Replace Your Water Heater?</h2>
          <p class="section-subtitle">
            A water heater that stops heating does not always need to be replaced. A failed thermostat, heating element, valve, or another replaceable component may be repairable if the tank and remaining equipment are in suitable condition.
          </p>
        </div>

        <div class="comparison-grid" style="margin-top: 36px;">
          <!-- Repair Card -->
          <div class="comparison-card accent">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px;">When Is Water Heater Repair a Practical Option?</h3>
            <p style="color: var(--body-text); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
              Repair is often the logical choice when:
            </p>
            <ul class="service-checklist" style="margin-bottom: 16px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The problem is limited to a replaceable component (element, thermostat, valve)</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The storage tank is not leaking through its outer shell or body</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The heater is otherwise in reasonable overall operating condition</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Suitable replacement parts are readily available</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The repair cost is proportionate to the unit's remaining useful life</span>
              </li>
            </ul>
            <p style="font-size: 0.9rem; color: var(--muted-text); margin: 0; background: var(--light-gray); padding: 12px; border-radius: var(--radius-sm);">
              <em>Example:</em> A failed heating element on an otherwise sound electric water heater is a practical repair compared to replacing the whole unit.
            </p>
          </div>

          <!-- Replace Card -->
          <div class="comparison-card navy">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px;">When Should You Consider Water Heater Replacement?</h3>
            <p style="color: var(--body-text); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
              Replacement may be the better option when:
            </p>
            <ul class="service-checklist" style="margin-bottom: 16px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The storage tank itself is leaking or corroded through the body</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The heater has recurring, compounding operational problems</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Major components have failed on an older or outdated unit</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Parts are obsolete, discontinued, or difficult to obtain</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The heater no longer meets the property's hot-water demand</span>
              </li>
            </ul>
            <p style="font-size: 0.9rem; color: var(--muted-text); margin: 0; background: var(--light-gray); padding: 12px; border-radius: var(--radius-sm);">
              <em>Critical:</em> Once the tank shell has failed, replacing external fittings will not resolve the problem. The decision is based on equipment condition—not age alone.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         9. RECENT LOCAL PROJECTS SHOWCASE (NEW DEDICATED THEME IMAGES)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">MIAMI CASE STUDIES</span>
          <h2 class="section-title">Recent Water Heater Repairs Across Miami Communities</h2>
          <p class="section-subtitle">
            See how our certified technicians resolved complex electric, gas, and tankless issues across local residential and condominium properties.
          </p>
        </div>

        <div class="service-projects-grid" style="margin-top: 36px;">
          <!-- Project 1 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-waterheater-miamibeach.jpg" alt="Oceanfront tankless water heater descaling in Miami Beach condo" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Miami Beach &bull; Luxury High-Rise</div>
              <h3 class="service-project-title">Tankless Error Code &amp; Descaling Service</h3>
              <p class="service-project-desc">
                Diagnosed error code 11 (ignition failure) and severe mineral scaling in an oceanfront condominium unit. Performed heat exchanger flush and cleaned flame sensor to restore full endless hot water.
              </p>
              <span class="service-project-metric">FLOW RATE: 6.2 GPM &bull; RESTORED</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-waterheater-coralgables.jpg" alt="Dual 4500W heating element replacement in Coral Gables estate" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Coral Gables &bull; Historic Estate</div>
              <h3 class="service-project-title">Dual Heating Element &amp; Thermostat Rebuild</h3>
              <p class="service-project-desc">
                Homeowner experienced lukewarm water lasting only 5 minutes. Resistance testing confirmed a burnt lower 4500W element. Replaced both upper and lower elements and thermostats, saving owner from unnecessary tank replacement.
              </p>
              <span class="service-project-metric">WATER TEMP: 125°F STABLE</span>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-waterheater-kendall.jpg" alt="Heavy duty brass T&P relief valve retrofit in Kendall home" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Kendall &bull; Single-Family Home</div>
              <h3 class="service-project-title">T&amp;P Relief Valve &amp; Brass Drain Retrofit</h3>
              <p class="service-project-desc">
                Water pooling in garage was traced to a weeping temperature &amp; pressure relief valve and cracking plastic drain fitting. Replaced with heavy-duty brass valve and code-compliant copper discharge line.
              </p>
              <span class="service-project-metric">PRESSURE: 60 PSI STABLE</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         10. FREQUENTLY ASKED QUESTIONS (Split Sticky Layout)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="service-faq-split">
          <!-- Left Column: Sticky Title & Support Box -->
          <div class="service-faq-sidebar">
            <div class="faq-sticky-container">
              <span class="section-label">HELP &amp; ADVICE</span>
              <h2 class="section-title" style="margin-bottom: 16px;">Frequently Asked Questions About Water Heater Repair</h2>
              <p style="color: var(--body-text); font-size: 1rem; line-height: 1.6; margin-bottom: 24px;">
                Review clear, professional answers regarding water heater symptoms, leaks, electrical breaker issues, and repair versus replacement decisions.
              </p>

              <div style="background: var(--light-gray); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 22px;">
                <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">Need Immediate Assessment?</h4>
                <p style="color: var(--body-text); font-size: 0.9rem; line-height: 1.5; margin-bottom: 16px;">
                  Our certified technicians can inspect your electric, gas, or tankless water heater today.
                </p>
                <a href="tel:3059026113" class="btn-cta-orange" style="width: 100%; text-align: center; justify-content: center;">Call (305) 902-6113</a>
              </div>
            </div>
          </div>

          <!-- Right Column: Accordion Stack (9 FAQs) -->
          <div class="service-faq-accordion-stack">
            <!-- FAQ 1 -->
            <div class="faq-card open">
              <button class="faq-question-btn" aria-expanded="true">
                <span>Why is my water heater not heating the water?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse" style="max-height: 600px;">
                <div class="faq-answer-inner">
                  <p>Possible causes include a tripped breaker, failed heating element, thermostat problem, gas ignition fault, or a tankless system error. The cause depends on the type of water heater and needs to be assessed before a repair is recommended.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Can a leaking water heater be repaired?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>It depends on where the water is coming from. A leaking connection, drain valve, or relief-valve assembly may be repairable. A leak through the storage-tank body usually means the tank has failed and needs replacement.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why does my water heater run out of hot water so quickly?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Possible causes include a failed heating element, sediment accumulation, a damaged dip tube, insufficient tank capacity, or a tankless system that is not operating correctly. The heater and household hot-water demand should be considered together.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why is my water heater making popping or rumbling sounds?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Sediment at the bottom of a storage tank can create popping or rumbling noises as water heats. Other causes are possible, so the tank and heating components should be assessed before deciding whether flushing or repair is appropriate.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why does my electric water heater keep tripping the breaker?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>A damaged heating element, wiring fault, thermostat issue, or another electrical problem may cause repeated breaker trips. Leave the heater off if the breaker keeps tripping and arrange a professional assessment rather than repeatedly resetting it.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why does my gas water heater pilot light keep going out?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>A faulty pilot assembly, thermocouple or flame sensor, gas supply issue, venting problem, or safety control may be responsible. Gas-related faults should be assessed by an appropriately qualified professional.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Is it worth repairing an older water heater?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>It depends on the tank's condition, the failed component, parts availability, and the cost of repair compared with replacement. A relatively simple component failure may justify repair, while a corroded or leaking tank body generally calls for replacement.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 8 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Can a tankless water heater be repaired?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Many tankless problems can be assessed and may be repairable. The cause could involve ignition, flow sensors, scale buildup, temperature controls, or another internal component. The model and error code help determine the appropriate checks.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 9 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>How often should a water heater be maintained?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Maintenance requirements depend on the manufacturer, model, water conditions, and type of heater. Storage tanks and tankless systems have different maintenance needs. Follow the manufacturer's instructions and have the unit assessed if you notice noise, leaks, inconsistent temperatures, or other changes in operation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         11. ESTIMATE REQUEST FORM SECTION
         ========================================================================== -->
    <section class="section-block" id="quote-form" style="padding: 78px 0 84px; background: var(--pale-blue-subtle);">
      <div class="container">
        <div class="service-quote-layout">
          <div class="quote-info-panel">
            <span class="section-label">DIAGNOSTIC SERVICE</span>
            <h2 class="section-title">Request Hot Water Heater Repair in Miami, FL</h2>
            <p style="color: var(--body-text); font-size: 1.02rem; line-height: 1.65; margin-bottom: 20px;">
              No hot water, a leaking tank, or inconsistent water temperature can interrupt your daily routine. The right repair starts with identifying the heater type and finding the source of the problem.
            </p>
            <p style="font-weight: 700; color: var(--heading-navy); margin-bottom: 12px;">
              Contact Miami Air Conditioning &amp; Heat Repair to discuss your water heater issue. When you reach out, let us know:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Whether your heater is electric, gas, or tankless</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Whether you have no hot water, lukewarm water, a leak, or noise</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The approximate age and model of the unit, if available</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Whether the heater serves a single home, condo, or rental units</span>
              </li>
            </ul>
            <p style="font-size: 1.05rem; font-weight: 700; color: var(--primary-blue);">
              Call our team at (305) 902-6113 or submit this form to request service.
            </p>
          </div>

          <div class="quote-form-panel">
            <div class="form-wrapper">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--heading-navy); margin-bottom: 8px;">Book Water Heater Assessment</h3>
              <p style="color: var(--muted-text); font-size: 0.9rem; margin-bottom: 20px;">Complete this brief form to schedule your system diagnostic assessment.</p>

              <form id="waterHeaterForm" class="service-booking-form">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="e.g. Elena Gomez" required>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="(305) 555-0199" required>
                  </div>
                  <div class="form-group">
                    <label for="zipCode">Miami ZIP Code *</label>
                    <input type="text" id="zipCode" name="zipCode" placeholder="e.g. 33139" required>
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="heaterType">Water Heater Type</label>
                    <select id="heaterType" name="heaterType">
                      <option value="electric-tank">Electric Storage Tank</option>
                      <option value="gas-tank">Gas Storage Tank</option>
                      <option value="tankless">Tankless Water Heater</option>
                      <option value="heat-pump">Hybrid Heat Pump Water Heater</option>
                      <option value="unsure">Not Sure / Need Inspection</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="primaryIssue">Primary Issue</label>
                    <select id="primaryIssue" name="primaryIssue">
                      <option value="no-hot-water">No Hot Water At All</option>
                      <option value="lukewarm">Only Lukewarm / Runs Out Fast</option>
                      <option value="leaking">Water Leaking Around Tank</option>
                      <option value="breaker-trip">Tripping Circuit Breaker</option>
                      <option value="noise">Popping / Rumbling Noises</option>
                      <option value="discolored">Rusty or Smelly Water</option>
                      <option value="tankless-error">Tankless Error Code</option>
                      <option value="other">Other / General Diagnostic</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="notes">Symptoms / Notes (Optional)</label>
                  <textarea id="notes" name="notes" rows="3" placeholder="Describe symptoms, brand, or approximate age..."></textarea>
                </div>

                <button type="submit" class="btn-cta-orange" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 14px 20px;">
                  Submit Assessment Request &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ==========================================================================
       12. MAIN FOOTER
       ========================================================================== -->
  <footer class="main-footer" style="background: var(--primary-navy); color: #94A3B8; padding: 60px 0 30px; border-top: 1px solid rgba(255,255,255,0.08);">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 50px;">
        <div>
          <div class="brand-text" style="margin-bottom: 16px;">
            <span class="brand-name" style="color: #FFFFFF; font-size: 1.25rem; font-weight: 800; display: block;">Air Conditioning Repair</span>
            <span class="brand-subtitle" style="color: var(--bright-blue); font-size: 0.75rem; letter-spacing: 0.08em;">MIAMI &amp; SOUTH FLORIDA</span>
          </div>
          <p style="font-size: 0.9rem; line-height: 1.6; color: #94A3B8;">
            Dedicated HVAC &amp; mechanical services across Southeast Florida. Transparent diagnostics, certified technicians, and code-compliant installations.
          </p>
          <div style="margin-top: 16px; font-size: 0.85rem; color: var(--bright-blue);">
            Florida License #CMC1250482
          </div>
        </div>

        <div>
          <h4 style="color: #FFFFFF; font-size: 1rem; font-weight: 700; margin-bottom: 16px;">Air Conditioning</h4>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem;">
            <li style="margin-bottom: 10px;"><a href="service-ac-repair.html" style="color: #94A3B8; text-decoration: none;">AC Repair</a></li>
            <li style="margin-bottom: 10px;"><a href="service-ac-installation.html" style="color: #94A3B8; text-decoration: none;">AC Installation</a></li>
            <li style="margin-bottom: 10px;"><a href="service-ac-replacement.html" style="color: #94A3B8; text-decoration: none;">AC Replacement</a></li>
            <li style="margin-bottom: 10px;"><a href="service-ac-maintenance.html" style="color: #94A3B8; text-decoration: none;">AC Maintenance</a></li>
          </ul>
        </div>

        <div>
          <h4 style="color: #FFFFFF; font-size: 1rem; font-weight: 700; margin-bottom: 16px;">Heating Services</h4>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem;">
            <li style="margin-bottom: 10px;"><a href="service-heating-repair.html" style="color: #94A3B8; text-decoration: none;">Heating System Repair</a></li>
            <li style="margin-bottom: 10px;"><a href="service-gas-furnace-repair.html" style="color: #94A3B8; text-decoration: none;">Gas Furnace Repair</a></li>
            <li style="margin-bottom: 10px;"><a href="service-furnace-installation.html" style="color: #94A3B8; text-decoration: none;">Furnace Installation</a></li>
            <li style="margin-bottom: 10px;"><a href="service-furnace-replacement.html" style="color: #94A3B8; text-decoration: none;">Furnace Replacement</a></li>
            <li style="margin-bottom: 10px;"><a href="service-heat-pump-repair.html" style="color: #94A3B8; text-decoration: none;">Heat Pump Repair</a></li>
          </ul>
        </div>

        <div>
          <h4 style="color: #FFFFFF; font-size: 1rem; font-weight: 700; margin-bottom: 16px;">Contact Information</h4>
          <p style="font-size: 0.9rem; margin-bottom: 8px; color: #FFFFFF;">Miami Air Conditioning &amp; Heat Repair</p>
          <p style="font-size: 0.9rem; margin-bottom: 8px;">
            <a href="tel:3059026113" style="color: var(--bright-blue); text-decoration: none; font-weight: 700;">(305) 902-6113</a>
          </p>
          <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 12px;">Serving Miami-Dade, Broward &amp; Palm Beach Counties</p>
          <a href="#quote-form" class="btn-cta-orange" style="font-size: 0.85rem; padding: 8px 16px;">Request Service</a>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; text-align: center; font-size: 0.85rem; color: #94A3B8;">
        &copy; 2026 Miami Air Conditioning &amp; Heat Repair. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- ==========================================================================
       13. MOBILE FLOATING CALL BAR
       ========================================================================== -->
  <div class="mobile-sticky-action">
    <a href="tel:3059026113" class="btn-primary-blue mobile-sticky-call">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Call (305) 902-6113
    </a>
    <a href="#quote-form" class="btn-cta-orange mobile-sticky-quote">
      Get Service
    </a>
  </div>

  <script src="app.js"></script>
</body>
</html>
`;

fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/service-water-heater-repair.html', html, 'utf8');
fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/hot-water-heater-repair.html', html, 'utf8');
fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/water-heater-repair.html', html, 'utf8');
console.log('Successfully written service-water-heater-repair.html, hot-water-heater-repair.html, and water-heater-repair.html with site brand theme!');
