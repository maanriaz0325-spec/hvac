const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Furnace Replacement in Miami, FL | Miami Air Conditioning &amp; Heat Repair</title>
  <meta name="description" content="Professional residential furnace replacement in Miami, FL. Assess aging equipment, matched AC changeouts, and gas or electric heating solutions. 25 years HVAC experience.">
  <link rel="canonical" href="https://coolcomfortmiami.com/service-furnace-replacement.html">
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
            <polyline points="12 6 12 12 16 14"></polyline>
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
          <a href="service-heating-repair.html" class="nav-link active">
            Heating Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="service-heating-repair.html" class="dropdown-item">Heating System Repair &rarr;</a>
            <a href="service-gas-furnace-repair.html" class="dropdown-item">Gas Furnace Repair &rarr;</a>
            <a href="service-furnace-installation.html" class="dropdown-item">Furnace Installation &rarr;</a>
            <a href="service-furnace-replacement.html" class="dropdown-item active-page" style="color: var(--primary-blue); font-weight: 700;">Furnace Replacement &rarr;</a>
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
          <a href="service-water-heater-repair.html" class="nav-link">
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
        <a href="about.html" class="nav-link">About Us</a>
      </nav>

      <div class="header-actions">
        <a href="tel:+18336843425" class="header-phone" aria-label="Call (833) 684-3425">
          <div class="phone-icon-pulse">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span class="phone-number">(833) 684-3425</span>
        </a>

        <a href="#quote-form" class="btn-cta-orange">
          Request Estimate
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
              RESIDENTIAL HEATING CHANGEOUT SPECIALISTS
            </div>

            <h1 class="service-hero-title">
              Furnace Replacement<br><span>in Miami, FL</span>
            </h1>

            <p class="service-hero-sub">
              If your existing furnace is aging, breaking down frequently, or struggling to heat your home during cooler winter stretches, it may be time to consider replacing it. Miami Air Conditioning &amp; Heat Repair provides residential furnace replacement in Miami, FL, for homeowners who need to replace an outdated heating unit, an inefficient system, or a furnace that has reached the end of its reliable service life.
            </p>

            <p class="service-hero-sub" style="font-size: 1.02rem; margin-top: -10px; margin-bottom: 22px;">
              Whether your furnace has suffered a major equipment failure, requires repairs that no longer make financial sense, or is being updated as part of a complete HVAC upgrade, our certified technicians assess your existing setup and explain your replacement options. With 25 years of HVAC experience, we focus on equipment compatibility, proper sizing, and safe, code-compliant installation so your new system delivers reliable heating when you need it.
            </p>

            <div class="service-hero-trust-grid">
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 16 14"></polyline></svg>
                <span>25 Years HVAC Experience</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Licensed #CMC1250482</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Certified HVAC Technicians</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                <span>Upfront Written Estimates</span>
              </div>
            </div>

            <div class="service-hero-actions">
              <a href="#quote-form" class="btn-cta-orange btn-lg">
                Request Replacement Estimate &rarr;
              </a>
              <a href="tel:+18336843425" class="btn-hero-dark-call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (833) 684-3425
              </a>
            </div>
          </div>

          <div class="service-hero-media">
            <div class="service-hero-wave-wrap">
              <img src="images/hero-furnace-replacement.jpg" alt="Certified HVAC technician replacing residential furnace in Miami FL" width="600" height="500">
              <div class="service-hero-wave-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         4. RESIDENTIAL FURNACE REPLACEMENT SERVICES IN MIAMI (6 Scope Cards)
         ========================================================================== -->
    <section class="service-overview-sec" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">CHANGEOUT SCOPE</span>
          <h2 class="section-title">Residential Furnace Replacement Services in Miami</h2>
          <p class="section-subtitle">
            Replacing a furnace requires more than removing the old unit and setting a new one in place. The replacement equipment must be compatible with your home's electrical service, gas supply (if applicable), duct system, and cooling equipment.
          </p>
        </div>

        <p style="font-size: 1.05rem; color: var(--body-text); line-height: 1.65; max-width: 900px; margin: 0 auto 32px; text-align: center;">
          Our residential furnace replacement services include:
        </p>

        <div class="service-scope-cards-grid">
          <div class="service-scope-card">
            <div class="service-scope-num blue">1</div>
            <div>
              <h3 class="service-scope-card-title">Complete Furnace Replacement</h3>
              <p class="service-scope-card-desc">Full removal of outdated or failed furnaces and precision installation of modern, energy-efficient gas or electric heating units.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">2</div>
            <div>
              <h3 class="service-scope-card-title">Gas-to-Electric Conversions</h3>
              <p class="service-scope-card-desc">Transitioning from aging gas furnaces to modern high-efficiency electric air handlers or heat pump heating systems.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">3</div>
            <div>
              <h3 class="service-scope-card-title">Matched AC &amp; Furnace Changeouts</h3>
              <p class="service-scope-card-desc">Coordinated replacement of both air conditioning and heating components to ensure optimal SEER2 efficiency and blower pairing.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">4</div>
            <div>
              <h3 class="service-scope-card-title">Ductwork &amp; Airflow Evaluation</h3>
              <p class="service-scope-card-desc">Static pressure testing and transition ductwork modifications to guarantee proper CFM airflow distribution across all rooms.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">5</div>
            <div>
              <h3 class="service-scope-card-title">Manual J Capacity Sizing</h3>
              <p class="service-scope-card-desc">Exact BTU load calculation based on Miami's climate, ensuring your new furnace never short cycles or wastes energy.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">6</div>
            <div>
              <h3 class="service-scope-card-title">Safe Removal &amp; EPA Disposal</h3>
              <p class="service-scope-card-desc">Clean, careful disconnection and eco-friendly disposal of old equipment in strict compliance with Miami-Dade municipal codes.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--pale-blue-subtle); border-radius: var(--radius-md); padding: 24px 28px; text-align: center; max-width: 900px; margin: 36px auto 0;">
          <p style="font-size: 1.02rem; font-weight: 700; color: var(--primary-navy); margin: 0 0 16px;">
            Ready to explore furnace replacement options for your Miami home? Contact our team for an honest evaluation and upfront estimate.
          </p>
          <a href="#quote-form" class="btn-cta-orange" style="display: inline-flex;">Schedule In-Home Assessment &rarr;</a>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         5. 6 SIGNS YOUR MIAMI PROPERTY MAY NEED A NEW FURNACE (Sticky Left Layout)
         ========================================================================== -->
    <section class="service-problems-sec" id="signs" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="service-problems-layout">
          <!-- Sticky Left Diagnostic Column -->
          <div class="service-problems-intro">
            <span class="section-label">DIAGNOSTIC CRITERIA</span>
            <h2 class="section-title" style="margin-bottom: 14px;">6 Signs Your Miami Property May Need a New Furnace</h2>
            <p style="font-size: 1.02rem; color: var(--body-text); line-height: 1.65; margin-bottom: 18px;">
              Knowing when to replace a furnace rather than repair it can save you money, improve comfort, and prevent unexpected heating failures. These indicators help evaluate your system.
            </p>
            <p style="font-size: 0.96rem; font-weight: 700; color: var(--primary-navy); margin-bottom: 10px;">
              Key evaluation factors:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Equipment age beyond 15–20 years</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Compounding, frequent repair costs</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Heat exchanger cracks &amp; safety hazards</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Matched cooling performance compatibility</span>
              </li>
            </ul>

            <div style="background: var(--white); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 20px;">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">Need An Honest Assessment?</h4>
              <p style="font-size: 0.92rem; color: var(--body-text); line-height: 1.55; margin-bottom: 14px;">
                We verify whether component repair or equipment replacement offers greater long-term value for your property.
              </p>
              <a href="#quote-form" class="btn-cta-orange" style="width: 100%; text-align: center; padding: 11px 18px; font-size: 0.94rem;">
                Request Assessment &rarr;
              </a>
            </div>
          </div>

          <!-- Right Cards Grid (6 Distinct Theme Images) -->
          <div>
            <div class="service-problems-cards-grid">
              
              <!-- Sign 1: Age of the Equipment -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/replace-furnace-age.jpg" alt="Evaluating age and useful life of residential furnace in Miami" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">1. Age of the Equipment</h3>
                  <p class="service-problem-desc">
                    Most furnaces have a useful service life of 15 to 20 years. In Miami, where furnaces are used less frequently than in colder climates, systems may physically last longer, but internal components deteriorate over time, and replacement parts can become difficult or impossible to source.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Technical Benchmark:</strong> Units over 15 years old should be assessed for heat exchanger corrosion, motor wear, and declining electrical safety before investing in major repairs.
                  </div>
                </div>
              </div>

              <!-- Sign 2: Frequent or Expensive Repairs -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/replace-furnace-repairs.jpg" alt="Cost comparison of frequent furnace repairs versus replacement" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">2. Frequent or Expensive Repairs</h3>
                  <p class="service-problem-desc">
                    If you find yourself calling for heating repairs every winter or if a single repair estimate approaches a significant percentage of the cost of a new unit, replacement is often the more economical choice over the lifespan of the equipment.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Rule of Thumb:</strong> When a repair exceeds 50% of the replacement cost on an older unit, replacement delivers superior financial value and multi-year warranty protection.
                  </div>
                </div>
              </div>

              <!-- Sign 3: Uneven Heating Across Rooms -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/replace-furnace-uneven.jpg" alt="Diagnosing uneven heating and airflow imbalances in living areas" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">3. Uneven Heating Across Rooms</h3>
                  <p class="service-problem-desc">
                    When some rooms stay chilly while others are adequately heated, your furnace's blower motor, heat exchanger, or overall capacity may be declining. Ductwork condition can also contribute to this problem, which is why a thorough assessment is essential.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Technical Diagnostic:</strong> Static pressure testing reveals whether the issue stems from an undersized blower motor or ductwork distribution limitations.
                  </div>
                </div>
              </div>

              <!-- Sign 4: Frequent Cycling or Unusual Operation -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/replace-furnace-cycling.jpg" alt="Analyzing furnace short cycling and flame sensor trip issues" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">4. Frequent Cycling or Unusual Operation</h3>
                  <p class="service-problem-desc">
                    A furnace that turns on and off rapidly (short-cycling) or runs continuously without reaching the thermostat's set temperature may have internal component problems, an incorrect size for the home, or a failing control system.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Inspection Focus:</strong> High-limit safety switch testing, burner staging review, and thermostat heat anticipator calibration.
                  </div>
                </div>
              </div>

              <!-- Sign 5: Cracked Heat Exchanger or Safety Concerns -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/replace-furnace-exchanger.jpg" alt="Inspecting heat exchanger for cracks and combustion chamber safety" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">5. Cracked Heat Exchanger or Safety Concerns</h3>
                  <p class="service-problem-desc">
                    On a gas furnace, a cracked or rusted heat exchanger is a serious safety concern that can allow combustion gases, including carbon monoxide, into your living areas. In most cases, a cracked heat exchanger warrants replacing the furnace rather than attempting a costly repair.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Safety Mandate:</strong> Cracks in the combustion shell compromise life safety; replacing the furnace is the only code-approved course of action.
                  </div>
                </div>
              </div>

              <!-- Sign 6: Replacing an Aging Matched AC System -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/replace-furnace-matched-ac.jpg" alt="Replacing matched central AC and furnace system together" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">6. Replacing an Aging Matched AC System</h3>
                  <p class="service-problem-desc">
                    Because central air conditioning and furnace equipment share the blower, ductwork, and electrical controls, replacing an old AC system often makes it practical to replace the furnace at the same time for matched performance, shared warranties, and reduced installation labor.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Efficiency Advantage:</strong> Matched AHRI-certified pairings guarantee that modern SEER2 efficiency ratings are fully achieved.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         6. WHAT IS INVOLVED IN REPLACING A FURNACE? (5-Step Engineering Workflow)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">METHODOLOGY</span>
          <h2 class="section-title">What Is Involved in Replacing a Furnace?</h2>
          <p class="section-subtitle">
            A furnace replacement is a multi-step process that requires careful planning, technical knowledge, and adherence to manufacturer specifications and local building codes.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 24px; margin-top: 36px;">
          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">1</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Initial Assessment &amp; Sizing</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              We inspect the existing furnace, evaluate the installation space, review the available utility connections (gas, electrical, or both), and assess the property's heating requirements to recommend appropriate replacement options.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">2</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Safe Disconnection &amp; Removal</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The old furnace is safely disconnected from its electrical supply, gas line (if applicable), flue venting, and ductwork connections. The old equipment is removed from the property and disposed of properly.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">3</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Equipment Positioning &amp; Mounting</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The new furnace is positioned, leveled, and secured according to manufacturer clearances and local installation guidelines. Transition ductwork is modified or adapted as needed to ensure proper fit and airflow.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">4</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Utility &amp; Safety Connections</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              Electrical wiring, control connections, thermostat integration, and gas piping (where applicable) are completed. On gas units, exhaust venting, combustion air supply, and safety controls are verified and pressure-tested.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px; grid-column: 1 / -1;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">5</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Startup, Testing &amp; Commissioning</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The system is energized and put through complete heating and safety cycles. We check ignition, burner operation, temperature rise across the heat exchanger, airflow, thermostat communication, and safety switch operation before completing the job.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         7. ELECTRIC VS. GAS FURNACE REPLACEMENT IN SOUTH FLORIDA (Comparison Grid)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: var(--pale-blue-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">EQUIPMENT OPTIONS</span>
          <h2 class="section-title">Electric vs. Gas Furnace Replacement in South Florida</h2>
          <p class="section-subtitle">
            Most residential heating systems in Miami use either electric heat (often built into an air handler or packaged system) or natural gas/propane furnaces. Understanding the differences helps you choose the right replacement.
          </p>
        </div>

        <div class="comparison-grid" style="margin-top: 36px;">
          <!-- Electric Card -->
          <div class="comparison-card accent">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px;">Electric Furnace &amp; Air Handler Units</h3>
            <p style="color: var(--body-text); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
              Electric heating is the most common heating arrangement in South Florida homes. Electric heating elements (heat strips) are typically housed within the indoor air handler that also serves the central air conditioner.
            </p>
            <ul class="service-checklist" style="margin-bottom: 16px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Lower upfront equipment and installation costs</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>No combustion gases, venting, or carbon monoxide risks</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Simpler mechanical construction with fewer moving components</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Direct integration with heat pump outdoor condensers</span>
              </li>
            </ul>
            <p style="font-size: 0.9rem; color: var(--muted-text); margin: 0; background: var(--light-gray); padding: 12px; border-radius: var(--radius-sm);">
              <em>Best For:</em> The majority of South Florida homes that prioritize air conditioning performance and require heating for only short winter periods.
            </p>
          </div>

          <!-- Gas Card -->
          <div class="comparison-card navy">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 12px;">Gas Furnaces (Natural Gas or Propane)</h3>
            <p style="color: var(--body-text); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
              Gas furnaces are less common in Miami than in northern states, but many homes with existing gas utility service rely on gas-fired heating for its warmth and rapid heating delivery.
            </p>
            <ul class="service-checklist" style="margin-bottom: 16px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Produces higher supply air temperatures than electric resistance heat</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Heats homes quickly even during unseasonably cold temperatures</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Requires dedicated gas lines, exhaust flue venting, and safety switches</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Higher AFUE ratings (up to 96%–98% for condensing models)</span>
              </li>
            </ul>
            <p style="font-size: 0.9rem; color: var(--muted-text); margin: 0; background: var(--light-gray); padding: 12px; border-radius: var(--radius-sm);">
              <em>Best For:</em> Properties with established gas connections where homeowners prefer rapid, higher-temperature warm air delivery.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         8. RECENT LOCAL PROJECTS SHOWCASE (NEW DEDICATED THEME IMAGES)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">MIAMI CASE STUDIES</span>
          <h2 class="section-title">Recent Furnace Replacement Projects in Miami</h2>
          <p class="section-subtitle">
            See how our certified technicians resolved complex heating changeouts across South Florida neighborhoods with precision engineering.
          </p>
        </div>

        <div class="service-projects-grid" style="margin-top: 36px;">
          <!-- Project 1 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-furnace-replace-brickell.jpg" alt="High-rise matched AC and heating changeout in Brickell Miami" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Brickell &bull; Luxury High-Rise</div>
              <h3 class="service-project-title">Matched AC &amp; Furnace Air Handler Swap</h3>
              <p class="service-project-desc">
                Engineered a tight mechanical closet horizontal changeout, replacing an obsolete 18-year-old electric furnace and matched condenser with zero resident disruption.
              </p>
              <span class="service-project-metric">PERMIT #MI-2026-784 &bull; COMPLETED</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-furnace-replace-aventura.jpg" alt="Variable speed dual stage furnace replacement in Aventura estate" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Aventura &bull; Residential Estate</div>
              <h3 class="service-project-title">Variable-Speed Dual-Stage Furnace Retrofit</h3>
              <p class="service-project-desc">
                Upgraded an inefficient heating setup to a 97% AFUE high-efficiency furnace with an ultra-quiet ECM blower, eliminating cold draft zones across a 3,800 sq ft home.
              </p>
              <span class="service-project-metric">ENERGY SAVINGS: 38% &bull; COMPLETED</span>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-furnace-replace-doral.jpg" alt="Dual fuel heat pump and electric auxiliary conversion in Doral FL" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Doral &bull; Single-Family Home</div>
              <h3 class="service-project-title">Heat Pump &amp; Auxiliary Heating Modernization</h3>
              <p class="service-project-desc">
                Transitioned a failing, rusted furnace into an efficient modern heat pump system with auxiliary heating strips, passing county inspections on the first visit.
              </p>
              <span class="service-project-metric">FINAL INSPECTION PASSED</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         9. FREQUENTLY ASKED QUESTIONS (Split Sticky Layout)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="service-faq-split">
          <!-- Left Column: Sticky Title & Support Box -->
          <div class="service-faq-sidebar">
            <div class="faq-sticky-container">
              <span class="section-label">HELP &amp; ADVICE</span>
              <h2 class="section-title" style="margin-bottom: 16px;">Frequently Asked Questions About Furnace Replacement</h2>
              <p style="color: var(--body-text); font-size: 1rem; line-height: 1.6; margin-bottom: 24px;">
                Review clear answers to common questions regarding furnace lifespans, repair versus replacement costs, and installation timelines in Miami.
              </p>

              <div style="background: var(--white); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 22px;">
                <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">Have More Questions?</h4>
                <p style="color: var(--body-text); font-size: 0.9rem; line-height: 1.5; margin-bottom: 16px;">
                  Speak directly with our senior technicians about your heating equipment requirements.
                </p>
                <a href="tel:+18336843425" class="btn-cta-orange" style="width: 100%; text-align: center; justify-content: center;">Call (833) 684-3425</a>
              </div>
            </div>
          </div>

          <!-- Right Column: Accordion Stack (12 FAQs) -->
          <div class="service-faq-accordion-stack">
            <!-- FAQ 1 -->
            <div class="faq-card open">
              <button class="faq-question-btn" aria-expanded="true">
                <span>How do I know if my furnace needs replacement or just a repair?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse" style="max-height: 600px;">
                <div class="faq-answer-inner">
                  <p>The decision usually comes down to three factors: the age of the equipment, the frequency and cost of repairs, and the overall condition of major components like the heat exchanger or blower motor. If your furnace is over 15 years old and needs a repair that costs a significant portion of a replacement, replacing it is often the more practical long-term choice. Our technicians provide an honest assessment of whether repair or replacement makes better financial sense.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>How long does a furnace typically last in Miami?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>In South Florida, furnaces generally last between 15 and 20 years. Because heating systems are used less frequently in Miami than in colder climates, the equipment may experience less runtime wear, but high humidity and infrequent use can still cause corrosion, electrical component degradation, and mechanical issues over time.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Should I replace my air conditioner and furnace at the same time?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>In many cases, yes. Central AC and furnace systems often share the indoor air handler, blower motor, ductwork, and controls. Replacing both at once ensures matched equipment, optimized efficiency, and lower overall installation labor compared to replacing them separately.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>How long does a furnace replacement take?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>A standard residential furnace replacement typically takes between 4 and 8 hours. More complex installations, such as switching from gas to electric or modifying ductwork transitions, may require additional time. We provide an estimated timeline before work begins.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Can I switch from a gas furnace to an electric system?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Yes. Many Miami homeowners choose to switch from gas to electric heating when replacing an older furnace. This conversion requires evaluating your home's electrical panel capacity to handle the electrical demand of heat strips or a heat pump system.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>What size furnace do I need for my Miami home?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Furnace sizing depends on your home's square footage, insulation, ceiling height, window placement, and local climate conditions. Because Miami has mild winters, heating loads are relatively small compared to cooling loads. Our technicians perform heat load calculations to ensure the replacement unit is appropriately sized.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>What is the difference between an 80% and a 90%+ AFUE furnace?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>AFUE (Annual Fuel Utilization Efficiency) measures how efficiently a gas furnace converts fuel into heat. An 80% AFUE furnace converts 80% of its fuel into heat and exhausts 20%, while a 90%+ condensing furnace converts at least 90%. In South Florida's warm climate, an 80% unit often provides the right balance between cost and performance.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 8 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Will a new furnace lower my energy bills?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Yes. Newer furnaces feature more efficient blower motors (such as variable-speed ECM motors) and higher fuel efficiency than older models. An efficient blower motor also reduces electricity use during the cooling season because the central AC shares the same blower.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 9 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Do I need a permit to replace a furnace in Miami?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Yes. HVAC equipment replacements in Miami-Dade and Broward counties typically require a mechanical permit to ensure the installation complies with Florida Building Code and safety regulations. We manage the permitting process as part of our replacement service.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 10 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>What brands of furnaces do you install?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>We install equipment from leading, reliable HVAC manufacturers, including Carrier, Trane, Rheem, Goodman, Lennox, and York. We recommend equipment based on your home's requirements, budget, and compatibility with existing components.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 11 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>What kind of warranty comes with a new furnace?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Most modern furnaces come with a manufacturer warranty that covers parts for 5 to 10 years and heat exchangers for 20 years or lifetime, depending on the brand and registration. We also provide our own workmanship warranty covering the installation.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 12 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>How do I get an estimate for furnace replacement?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Contact Miami Air Conditioning &amp; Heat Repair by phone at (833) 684-3425 or through our online request form below. We will arrange a convenient time for an in-home evaluation, assess your existing equipment and installation space, and provide a clear, written replacement estimate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         10. ESTIMATE REQUEST FORM SECTION
         ========================================================================== -->
    <section class="section-block" id="quote-form" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="service-quote-layout">
          <div class="quote-info-panel">
            <span class="section-label">UPFRONT ESTIMATES</span>
            <h2 class="section-title">Request a Furnace Replacement Estimate in Miami, FL</h2>
            <p style="color: var(--body-text); font-size: 1.02rem; line-height: 1.65; margin-bottom: 20px;">
              Don't wait for your aging heating system to fail completely during a cold snap. Contact Miami Air Conditioning &amp; Heat Repair to arrange an in-home evaluation of your existing furnace and receive a clear, upfront estimate for equipment replacement.
            </p>
            <p style="font-weight: 700; color: var(--heading-navy); margin-bottom: 12px;">
              When you contact us, tell us about your project:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Whether your existing furnace is electric, natural gas, or propane</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The age of your equipment and any current operating issues</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Whether you are replacing just the furnace or your complete AC and heating system</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Your preferred timeline and any specific comfort or efficiency goals</span>
              </li>
            </ul>
            <p style="font-size: 1.05rem; font-weight: 700; color: var(--primary-blue);">
              Call our team at (833) 684-3425 or submit this form to get started.
            </p>
          </div>

          <div class="quote-form-panel">
            <div class="form-wrapper">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--heading-navy); margin-bottom: 8px;">Book Replacement Consultation</h3>
              <p style="color: var(--muted-text); font-size: 0.9rem; margin-bottom: 20px;">Complete this brief form to schedule your in-home equipment assessment.</p>

              <form id="furnaceReplaceForm" class="service-booking-form">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="e.g. David Martinez" required>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="(305) 555-0199" required>
                  </div>
                  <div class="form-group">
                    <label for="zipCode">Miami ZIP Code *</label>
                    <input type="text" id="zipCode" name="zipCode" placeholder="e.g. 33133" required>
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="systemType">Current System Type</label>
                    <select id="systemType" name="systemType">
                      <option value="electric">Electric Furnace / Air Handler</option>
                      <option value="gas">Natural Gas Furnace</option>
                      <option value="heatpump">Heat Pump System</option>
                      <option value="unsure">Not Sure / Need Inspection</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="projectScope">Replacement Scope</label>
                    <select id="projectScope" name="projectScope">
                      <option value="furnace-only">Furnace Only Replacement</option>
                      <option value="ac-and-furnace">Complete AC &amp; Furnace Upgrade</option>
                      <option value="gas-to-electric">Gas-to-Electric Conversion</option>
                      <option value="assessment">Not Sure / Want Options</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="notes">Current Equipment Issues / Notes (Optional)</label>
                  <textarea id="notes" name="notes" rows="3" placeholder="Approximate age of system, unusual noises, failure symptoms..."></textarea>
                </div>

                <button type="submit" class="btn-cta-orange" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 14px 20px;">
                  Submit Replacement Request &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ==========================================================================
       11. MAIN FOOTER
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
            <li style="margin-bottom: 10px;"><a href="service-furnace-replacement.html" style="color: var(--bright-blue); font-weight: 700; text-decoration: none;">Furnace Replacement</a></li>
            <li style="margin-bottom: 10px;"><a href="service-heat-pump-repair.html" style="color: #94A3B8; text-decoration: none;">Heat Pump Repair</a></li>
          </ul>
        </div>

        <div>
          <h4 style="color: #FFFFFF; font-size: 1rem; font-weight: 700; margin-bottom: 16px;">Contact Information</h4>
          <p style="font-size: 0.9rem; margin-bottom: 8px; color: #FFFFFF;">Miami Air Conditioning &amp; Heat Repair</p>
          <p style="font-size: 0.9rem; margin-bottom: 8px;">
            <a href="tel:+18336843425" style="color: var(--bright-blue); text-decoration: none; font-weight: 700;">(833) 684-3425</a>
          </p>
          <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 12px;">Serving Miami-Dade, Broward &amp; Palm Beach Counties</p>
          <a href="#quote-form" class="btn-cta-orange" style="font-size: 0.85rem; padding: 8px 16px;">Request Estimate</a>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; text-align: center; font-size: 0.85rem; color: #94A3B8;">
        &copy; 2026 Miami Air Conditioning &amp; Heat Repair. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- ==========================================================================
       12. MOBILE FLOATING CALL BAR
       ========================================================================== -->
  <div class="mobile-sticky-action">
    <a href="tel:+18336843425" class="btn-primary-blue mobile-sticky-call">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Call (833) 684-3425
    </a>
    <a href="#quote-form" class="btn-cta-orange mobile-sticky-quote">
      Get Estimate
    </a>
  </div>

  <script src="app.js"></script>
</body>
</html>
`;

fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/service-furnace-replacement.html', html, 'utf8');
fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/furnace-replacement.html', html, 'utf8');
console.log('Successfully written service-furnace-replacement.html and furnace-replacement.html with site brand theme!');
