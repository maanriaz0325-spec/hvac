const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Furnace Installation in Miami, FL | Miami Air Conditioning &amp; Heat Repair</title>
  <meta name="description" content="Professional furnace installation in Miami, FL. Gas and electric furnace equipment selection, sizing, ductwork evaluation, and code-compliant installation. 25 years HVAC experience.">
  <link rel="canonical" href="https://coolcomfortmiami.com/service-furnace-installation.html">
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
          Same-Day Consultations
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
          <a href="service-water-heater-repair.html" class="nav-link">
            Other Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="service-water-heater-repair.html" class="dropdown-item">Hot Water Heater Repair &rarr;</a>
            <a href="index.html#services" class="dropdown-item">Pool Heater Repair &rarr;</a>
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
         3. HERO SECTION (Identical Standard)
         ========================================================================== -->
    <section class="service-hero">
      <div class="container">
        <div class="service-hero-grid">
          <div class="service-hero-content">
            <div class="hero-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              25+ YEARS HEATING &amp; COOLING EXPERIENCE
            </div>

            <h1 class="service-hero-title">
              Furnace Installation<br><span>in Miami, FL</span>
            </h1>

            <p class="service-hero-sub">
              Planning a new furnace installation for your property? Before choosing equipment, you need to know whether the system is suitable for your home's heating requirements, available utilities and existing ductwork. The wrong equipment choice or an installation that overlooks these details can create problems long after the work is finished.
            </p>

            <p class="service-hero-sub" style="font-size: 1.02rem; margin-top: -10px; margin-bottom: 22px;">
              At Miami Air Conditioning &amp; Heat Repair, our certified technicians help customers understand their equipment requirements and installation considerations before moving forward. Whether planning heating for a new property or an existing space, we ensure your furnace is sized, installed, and commissioned properly.
            </p>

            <div class="service-hero-trust-grid">
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
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
                Request Installation Estimate &rarr;
              </a>
              <a href="tel:+18336843425" class="btn-hero-dark-call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (833) 684-3425
              </a>
            </div>
          </div>

          <div class="service-hero-media">
            <div class="service-hero-wave-wrap">
              <img src="images/hero-furnace-installation.jpg" alt="Certified technician completing new furnace installation in Miami FL" width="600" height="500">
              <div class="service-hero-wave-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         4. NEW FURNACE INSTALLATION FOR MIAMI HOMES (4 Scope Cards)
         ========================================================================== -->
    <section class="service-overview-sec" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">PROJECT SCOPE</span>
          <h2 class="section-title">New Furnace Installation for Miami Homes</h2>
          <p class="section-subtitle">
            Installing a new furnace involves more than positioning equipment and connecting it to ductwork. The selected system must be appropriate for the property's heating demand, available utilities and installation conditions.
          </p>
        </div>

        <p style="font-size: 1.05rem; color: var(--body-text); line-height: 1.65; max-width: 900px; margin: 0 auto 32px; text-align: center;">
          A new installation may be needed when:
        </p>

        <div class="service-scope-cards-grid">
          <div class="service-scope-card">
            <div class="service-scope-num blue">1</div>
            <div>
              <h3 class="service-scope-card-title">Newly Constructed Homes</h3>
              <p class="service-scope-card-desc">Complete heating system design and initial installation for custom homes, modern developments, and spec builds across Miami-Dade.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">2</div>
            <div>
              <h3 class="service-scope-card-title">Properties Without Existing Furnaces</h3>
              <p class="service-scope-card-desc">Planning utility infrastructure, gas supply lines, or 240V dedicated electrical service for properties that previously lacked heating equipment.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">3</div>
            <div>
              <h3 class="service-scope-card-title">Additions &amp; Renovated Spaces</h3>
              <p class="service-scope-card-desc">Dedicated or zoned heating solutions tailored to guest houses, second-story expansions, and converted living spaces.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">4</div>
            <div>
              <h3 class="service-scope-card-title">Evaluating New Heating Setups</h3>
              <p class="service-scope-card-desc">Independent technical assessment helping homeowners determine whether gas, electric, or heat pump heating provides better long-term value.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--pale-blue-subtle); border-radius: var(--radius-md); padding: 24px 28px; text-align: center; max-width: 900px; margin: 36px auto 0;">
          <p style="font-size: 1.02rem; font-weight: 700; color: var(--primary-navy); margin: 0 0 16px;">
            If your project involves removing and replacing an existing furnace, see our <a href="service-furnace-replacement.html" style="color: var(--primary-blue); text-decoration: underline;">furnace replacement service</a> for changeout specifications.
          </p>
          <a href="#quote-form" class="btn-cta-orange" style="display: inline-flex;">Schedule Installation Assessment &rarr;</a>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         5. IS A FURNACE RIGHT FOR YOUR MIAMI PROPERTY? (Sticky Left Layout)
         ========================================================================== -->
    <section class="service-problems-sec" id="suitability" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="service-problems-layout">
          <!-- Sticky Left Diagnostic Column -->
          <div class="service-problems-intro">
            <span class="section-label">SYSTEM SUITABILITY</span>
            <h2 class="section-title" style="margin-bottom: 14px;">Is a Furnace Right for Your Miami Property?</h2>
            <p style="font-size: 1.02rem; color: var(--body-text); line-height: 1.65; margin-bottom: 18px;">
              Heating equipment should be selected according to the property, not simply because a particular system is common elsewhere. Miami has relatively mild winters, making infrastructure compatibility vital.
            </p>
            <p style="font-size: 0.96rem; font-weight: 700; color: var(--primary-navy); margin-bottom: 10px;">
              Core evaluation criteria:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Natural gas vs 240V electric availability</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>ACCA Manual J heating load calculation</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Existing supply and return duct capacity</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Exhaust venting and mechanical clearances</span>
              </li>
            </ul>

            <div style="background: var(--white); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 20px;">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">Need Professional Guidance?</h4>
              <p style="font-size: 0.92rem; color: var(--body-text); line-height: 1.55; margin-bottom: 14px;">
                We assess your property utilities and recommend the exact heating system setup that delivers dependable warmth and efficiency.
              </p>
              <a href="#quote-form" class="btn-cta-orange" style="width: 100%; text-align: center; padding: 11px 18px; font-size: 0.94rem;">
                Request Assessment &rarr;
              </a>
            </div>
          </div>

          <!-- Right Cards Grid -->
          <div>
            <div class="service-problems-cards-grid">
              
              <!-- Card 1: Gas Furnace Installation -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/furnace-install-gas.jpg" alt="Gas furnace installation and fuel supply line connection in Miami" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">Gas Furnace Installation</h3>
                  <p class="service-problem-desc">
                    Gas furnaces burn natural gas or propane to produce warmth. Depending on the model, installation involves fuel connections, sediment traps, combustion air intake, and exhaust flue venting.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Key Requirement:</strong> Requires active gas utility service, dedicated exhaust venting, and strict combustion clearance compliance.
                  </div>
                </div>
              </div>

              <!-- Card 2: Electric Furnace Installation -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/furnace-install-electric.jpg" alt="Electric furnace and resistance heating element installation in Miami" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">Electric Furnace Installation</h3>
                  <p class="service-problem-desc">
                    Electric furnaces use electrical resistance heating elements. They require no combustion fuel venting or gas piping, but their electrical service and breaker panel capacity must match unit specs.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Key Requirement:</strong> Requires dedicated 240V high-amperage electrical service and properly rated circuit breakers.
                  </div>
                </div>
              </div>

              <!-- Card 3: What Size Furnace Do You Need? -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/furnace-install-sizing.jpg" alt="ACCA Manual J furnace load calculation and equipment sizing" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">Accurate Capacity Sizing</h3>
                  <p class="service-problem-desc">
                    The goal is not to install the largest furnace available. An oversized unit in mild South Florida short-cycles frequently, causing temperature swings and premature component fatigue.
                  </p>
                  <div class="service-problem-solution">
                    <strong>ACCA Standard:</strong> Manual J heating load calculation based on square footage, ceiling heights, window ratings, and insulation.
                  </div>
                </div>
              </div>

              <!-- Card 4: Will Existing Ductwork Work? -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/furnace-install-ductwork.jpg" alt="Evaluating existing ductwork static pressure and CFM airflow capacity" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">Ductwork Compatibility Check</h3>
                  <p class="service-problem-desc">
                    Even suitable equipment cannot perform if supply and return ducts cannot support required CFM airflow. We inspect duct sizing, static pressure, and plenum transitions prior to installation.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Airflow Check:</strong> Static pressure testing verifies whether transitions need custom sheet metal modifications.
                  </div>
                </div>
              </div>

              <!-- Card 5: Comparing Furnace Efficiency -->
              <div class="service-problem-box" style="grid-column: 1 / -1;">
                <div class="service-problem-frame">
                  <img src="images/furnace-install-venting.jpg" alt="Comparing AFUE furnace efficiency ratings and direct venting options" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">Comparing Furnace Efficiency (AFUE Ratings)</h3>
                  <p class="service-problem-desc">
                    For gas furnaces, AFUE measures how efficiently the system converts fuel into heat (80% standard vs. 90%+ condensing models). In South Florida's warm climate, we help you evaluate whether standard or high-efficiency condensing furnaces offer the best return on investment.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Climate Perspective:</strong> We explain the practical financial payback between standard 80% AFUE and condensing 96% AFUE units for Miami usage.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         6. WHAT IS INCLUDED IN A FURNACE INSTALLATION PROJECT? (6 Scope Cards)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">INSTALLATION CHECKLIST</span>
          <h2 class="section-title">What Is Included in a Furnace Installation Project?</h2>
          <p class="section-subtitle">
            The exact work depends on the selected furnace and property setup. Understanding the core installation scope ensures complete transparency before work begins.
          </p>
        </div>

        <div class="service-scope-cards-grid">
          <div class="service-scope-card">
            <div class="service-scope-num blue">1</div>
            <div>
              <h3 class="service-scope-card-title">Equipment Placement &amp; Space</h3>
              <p class="service-scope-card-desc">Proper service clearances, level mounting pads, vibration isolation, and mechanical room code compliance.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">2</div>
            <div>
              <h3 class="service-scope-card-title">Electrical &amp; System Controls</h3>
              <p class="service-scope-card-desc">Dedicated high-voltage wiring, low-voltage control circuits, safety disconnect switches, and smart thermostat sync.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">3</div>
            <div>
              <h3 class="service-scope-card-title">Ductwork &amp; Airflow Connections</h3>
              <p class="service-scope-card-desc">Custom sheet metal transitions, supply plenum connection, return duct drops, and aerodynamic mastic seals.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">4</div>
            <div>
              <h3 class="service-scope-card-title">Gas Supply &amp; Fuel Venting</h3>
              <p class="service-scope-card-desc">Black iron fuel lines, manual shutoff valves, sediment traps, and code-approved exhaust flue venting.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">5</div>
            <div>
              <h3 class="service-scope-card-title">Condensate Management</h3>
              <p class="service-scope-card-desc">PVC drain lines, neutralizer cartridges, and automatic safety overflow switches for high-efficiency condensing units.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">6</div>
            <div>
              <h3 class="service-scope-card-title">Permits &amp; Final Inspection</h3>
              <p class="service-scope-card-desc">Miami-Dade County or municipal mechanical permit filing, schedule coordination, and final signoff verification.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         7. OUR 7-STEP FURNACE INSTALLATION PROCESS
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: var(--pale-blue-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">HOW WE WORK</span>
          <h2 class="section-title">Our Furnace Installation Process</h2>
          <p class="section-subtitle">
            A well-planned installation gives you complete clarity on the equipment, work involved, and expected timeline.
          </p>
        </div>

        <div class="service-scope-cards-grid">
          <div class="service-scope-card">
            <div class="service-scope-num blue">1</div>
            <div>
              <h3 class="service-scope-card-title">Discuss Property Requirements</h3>
              <p class="service-scope-card-desc">Understanding home layout, reason for installation, heating expectations, and known utility constraints.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">2</div>
            <div>
              <h3 class="service-scope-card-title">Evaluate Installation Conditions</h3>
              <p class="service-scope-card-desc">Assessing heating demand, duct capacity, electrical service panels, and exhaust venting paths.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">3</div>
            <div>
              <h3 class="service-scope-card-title">Determine Equipment &amp; Scope</h3>
              <p class="service-scope-card-desc">Selecting correct BTU capacity and identifying any needed ductwork or electrical modifications.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">4</div>
            <div>
              <h3 class="service-scope-card-title">Review Estimate &amp; Permits</h3>
              <p class="service-scope-card-desc">Providing a comprehensive written estimate and filing applicable building permits with local authorities.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">5</div>
            <div>
              <h3 class="service-scope-card-title">Install the Selected Furnace</h3>
              <p class="service-scope-card-desc">Positioning unit, making gas and venting connections, wiring controls, and sealing plenum transitions.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">6</div>
            <div>
              <h3 class="service-scope-card-title">Verify Equipment Operation</h3>
              <p class="service-scope-card-desc">Testing ignition sequence, checking gas pressure, verifying temperature rise, and testing safety limits.</p>
            </div>
          </div>

          <div class="service-scope-card" style="grid-column: 1 / -1;">
            <div class="service-scope-num blue">7</div>
            <div>
              <h3 class="service-scope-card-title">Homeowner Walkthrough</h3>
              <p class="service-scope-card-desc">Explaining basic controls, thermostat scheduling, filter locations, maintenance recommendations, and warranty details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         8. RECENT FURNACE INSTALLATION PROJECTS (3 Projects Grid)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">PROVEN RESULTS</span>
          <h2 class="section-title">Recent Furnace Installations in South Florida</h2>
          <p class="section-subtitle">
            Take a look at genuine furnace installations completed by our certified technicians across Miami-Dade communities.
          </p>
        </div>

        <div class="service-projects-grid">
          <!-- Project 1 -->
          <div class="service-project-card">
            <div class="service-project-thumb-wrap">
              <img src="images/project-furnace-install-miami.jpg" alt="New Gas Furnace Installation in Miami residence" class="service-project-thumb" width="600" height="380" loading="lazy">
              <div class="service-project-badge">Miami, FL</div>
            </div>
            <div class="service-project-content">
              <h3 class="service-project-title">96% AFUE Two-Stage Gas Furnace</h3>
              <p class="service-project-desc">
                Complete custom sheet metal plenum transition, direct PVC side-wall venting, and smart thermostat integration for a Miami residence.
              </p>
              <div class="service-project-meta">
                <span class="meta-item"><strong>Service:</strong> New Gas Installation</span>
                <span class="meta-item"><strong>Type:</strong> High-Efficiency Condensing</span>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="service-project-card">
            <div class="service-project-thumb-wrap">
              <img src="images/project-furnace-install-pinecrest.jpg" alt="Pinecrest Multi-Stage Electric Furnace Installation" class="service-project-thumb" width="600" height="380" loading="lazy">
              <div class="service-project-badge">Pinecrest, FL</div>
            </div>
            <div class="service-project-content">
              <h3 class="service-project-title">Pinecrest Multi-Stage Electric Unit</h3>
              <p class="service-project-desc">
                Installed high-efficiency electric furnace paired with existing high-SEER cooling coil and multi-speed ECM blower motor.
              </p>
              <div class="service-project-meta">
                <span class="meta-item"><strong>Service:</strong> Electric Furnace Install</span>
                <span class="meta-item"><strong>Type:</strong> 240V Multi-Stage Unit</span>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="service-project-card">
            <div class="service-project-thumb-wrap">
              <img src="images/project-furnace-install-coralgables.jpg" alt="Coral Gables Mechanical Closet Furnace Installation" class="service-project-thumb" width="600" height="380" loading="lazy">
              <div class="service-project-badge">Coral Gables, FL</div>
            </div>
            <div class="service-project-content">
              <h3 class="service-project-title">Coral Gables Mechanical Closet</h3>
              <p class="service-project-desc">
                High-clearance mechanical closet installation with dual-zone dampers and static pressure balanced ductwork for full-home comfort.
              </p>
              <div class="service-project-meta">
                <span class="meta-item"><strong>Service:</strong> Zoned Heating Setup</span>
                <span class="meta-item"><strong>Type:</strong> Dual-Zone Damper System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         9. FREQUENTLY ASKED QUESTIONS (Split Screen Accordion)
         ========================================================================== -->
    <section class="service-faq-sec" id="faq" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="service-faq-split">
          
          <!-- Left Side: Sticky Info Box -->
          <div class="service-faq-left">
            <span class="section-label" style="text-align: left;">HAVE QUESTIONS?</span>
            <h2 class="service-faq-title">Frequently Asked Questions About Furnace Installation</h2>
            <p class="service-faq-desc">
              Clear technical answers to common questions about furnace equipment sizing, gas versus electric comparisons, ductwork, and permits.
            </p>

            <div class="service-faq-support-box">
              <h4>Have a Specific Question?</h4>
              <p>Our certified furnace specialists are ready to explain your options and provide honest guidance.</p>
              <a href="tel:+18336843425" class="header-phone" style="display: inline-flex; width: fit-content; margin-bottom: 12px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>(833) 684-3425</span>
              </a>
              <div style="font-size: 0.85rem; color: var(--muted-text);">
                &bull; 24-Hour Emergency Heating Dispatch Available
              </div>
              <ul style="margin-top: 14px; padding-left: 0; list-style: none; font-size: 0.88rem; color: var(--dark-text); display: flex; flex-direction: column; gap: 8px;">
                <li style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--primary-blue);"><polyline points="20 6 9 17 4 12"></polyline></svg> Upfront written installation estimates</li>
                <li style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--primary-blue);"><polyline points="20 6 9 17 4 12"></polyline></svg> Certified combustion &amp; electrical technicians</li>
                <li style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--primary-blue);"><polyline points="20 6 9 17 4 12"></polyline></svg> 100% parts &amp; labor warranty guarantee</li>
              </ul>
            </div>
          </div>

          <!-- Right Side: 9 Accordion FAQ Items from User Content -->
          <div class="faq-accordion-stack">
            <!-- FAQ 1 -->
            <div class="faq-card open">
              <button type="button" class="faq-question-btn" aria-expanded="true">
                <span>How much does it cost to install a new furnace in Miami?</span>
                <span class="faq-icon-toggle">&times;</span>
              </button>
              <div class="faq-answer">
                <p>The cost depends on the furnace type, capacity, efficiency, ductwork condition, equipment location and any additional electrical, fuel or venting work. An accurate estimate requires understanding the equipment and installation scope for your property.</p>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>How long does a furnace installation take?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>The time depends on the equipment and the work involved. A straightforward installation can take less time than a project requiring duct modifications, electrical upgrades, new fuel connections or venting changes. The expected schedule should be discussed after the installation scope is understood.</p>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>What size furnace do I need for my home?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>The correct size depends on the property's heating load, not just its square footage. Insulation, windows, ceiling height, layout and ductwork all influence the required capacity.</p>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>Can a new furnace connect to my existing ductwork?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>It may be possible if the existing supply and return ducts can support the new equipment's airflow requirements. The duct system should be evaluated before the furnace is selected.</p>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>Is a gas furnace better than an electric furnace?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>Neither option is automatically better for every property. Gas and electric furnaces have different installation requirements and operating costs. The appropriate choice depends on available utilities, equipment specifications and the property's heating needs.</p>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>Is a heat pump the same as a furnace?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>No. A furnace generates heat using fuel combustion or electric resistance. A heat pump transfers heat and can provide both heating and cooling. It is a separate system with its own equipment selection and installation requirements.</p>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>Does furnace installation require a permit in Miami?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>Some mechanical, electrical and gas-related work requires permits and inspections. The exact requirements depend on the work and the property's jurisdiction. Miami-Dade County's unincorporated area and incorporated municipalities have different permitting authorities, so requirements should be checked for the specific property.</p>
              </div>
            </div>

            <!-- FAQ 8 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>Can I install a high-efficiency furnace?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>The available options depend on the furnace type, equipment specifications and property requirements. For gas furnaces, AFUE is an important efficiency rating. The equipment should still be properly sized and compatible with the installation conditions.</p>
              </div>
            </div>

            <!-- FAQ 9 -->
            <div class="faq-card">
              <button type="button" class="faq-question-btn" aria-expanded="false">
                <span>What should I ask before approving a furnace installation estimate?</span>
                <span class="faq-icon-toggle">+</span>
              </button>
              <div class="faq-answer">
                <p>Ask which equipment model and capacity are included, whether the existing ductwork is suitable, what electrical or fuel connections are required, whether additional modifications are expected, and how applicable permits and inspections will be handled. A clear project scope makes estimates easier to compare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         10. REQUEST A FURNACE INSTALLATION ESTIMATE
         ========================================================================== -->
    <section class="service-quote-sec" id="quote-form">
      <div class="container">
        <div class="service-quote-layout">
          
          <!-- Left Dispatch Info Card -->
          <div class="service-quote-info-card">
            <div class="badge-tag">ESTIMATE REQUEST</div>
            <h3 class="quote-info-title">Request a Furnace Installation Estimate</h3>
            <p class="quote-info-desc">
              If you're planning a new furnace installation, start by making sure the equipment is suitable for your property. Heating requirements, furnace capacity, ductwork and available utilities all influence which system can be installed and what the project will involve.
            </p>

            <div class="quote-perks-list">
              <div class="quote-perk-item">
                <div class="perk-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div class="perk-text">
                  <strong>25 Years of HVAC Experience</strong>
                  <span>Serving residential and commercial properties across Southeast Florida.</span>
                </div>
              </div>

              <div class="quote-perk-item">
                <div class="perk-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div class="perk-text">
                  <strong>Certified Technicians</strong>
                  <span>Our technicians carry professional factory certifications and Florida licensure.</span>
                </div>
              </div>

              <div class="quote-perk-item">
                <div class="perk-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div class="perk-text">
                  <strong>Licensed &amp; Insured</strong>
                  <span>Florida State Certified Mechanical Contractor License #CMC1250482.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Booking Form Card -->
          <div class="service-quote-form-card">
            <h3 class="form-card-title">Schedule Furnace Installation Consultation</h3>
            <p class="form-card-subtitle">Fill out the form below or call <a href="tel:+18336843425" style="color: var(--theme-orange); font-weight: 700;">(833) 684-3425</a> for direct dispatch.</p>

            <form id="furnaceInstallForm" onsubmit="event.preventDefault(); submitInstallForm();">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label for="instName">Your Full Name *</label>
                  <input type="text" id="instName" class="form-control" required placeholder="John Smith">
                </div>
                <div class="form-group">
                  <label for="instPhone">Phone Number *</label>
                  <input type="tel" id="instPhone" class="form-control" required placeholder="(305) 555-0199">
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label for="instEmail">Email Address</label>
                  <input type="email" id="instEmail" class="form-control" placeholder="john@example.com">
                </div>
                <div class="form-group">
                  <label for="instType">Furnace Type</label>
                  <select id="instType" class="form-control">
                    <option value="gas">Gas Furnace (Natural Gas or Propane)</option>
                    <option value="electric">Electric Furnace</option>
                    <option value="heatpump">Evaluating Heat Pump Alternative</option>
                    <option value="undecided">Not Sure / Need Assessment</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="instNotes">Project Description &amp; Property Details</label>
                <textarea id="instNotes" class="form-control" rows="3" placeholder="Tell us about the property, whether ductwork exists, new construction or addition..."></textarea>
              </div>

              <button type="submit" class="btn-cta-orange" style="width: 100%; justify-content: center; padding: 14px 24px; font-size: 1rem;">
                Submit Installation Request &rarr;
              </button>
              <div id="instFormFeedback" style="display: none; margin-top: 14px; padding: 12px; border-radius: var(--radius-sm); font-size: 0.9rem; background: var(--pale-blue-subtle); color: var(--primary-navy); border: 1px solid var(--border-color);"></div>
            </form>
          </div>

        </div>
      </div>
    </section>
  </main>

  <!-- ==========================================================================
       11. FOOTER
       ========================================================================== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-about">
          <div class="footer-brand">
            <span class="brand-name" style="color: var(--white);">Miami Air Conditioning &amp; Heat Repair</span>
            <span class="brand-subtitle">EXCELLENCE IN SOUTHEAST FLORIDA HVAC</span>
          </div>
          <p class="footer-desc">
            Bringing 25 years of HVAC experience, certified technicians, and licensed &amp; insured service to residential heating and cooling needs across Miami-Dade.
          </p>
          <div class="footer-contact-links">
            <a href="tel:+18336843425" class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>(833) 684-3425 &bull; (833) 684-3425</span>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Heating Services</h4>
          <ul class="footer-links">
            <li><a href="service-heating-repair.html">Heating System Repair</a></li>
            <li><a href="service-gas-furnace-repair.html">Gas Furnace Repair</a></li>
            <li><a href="service-furnace-installation.html">Furnace Installation</a></li>
            <li><a href="service-furnace-replacement.html">Furnace Replacement</a></li>
            <li><a href="service-heat-pump-repair.html">Heat Pump Repair</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Cooling &amp; Other</h4>
          <ul class="footer-links">
            <li><a href="service-ac-repair.html">Air Conditioning Repair</a></li>
            <li><a href="service-ac-installation.html">AC Installation</a></li>
            <li><a href="service-ac-replacement.html">AC Replacement</a></li>
            <li><a href="service-ac-maintenance.html">AC Maintenance &amp; Tune-Up</a></li>
            <li><a href="service-water-heater-repair.html">Hot Water Heater Repair</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Service Areas</h4>
          <p style="font-size: 0.88rem; color: #94A3B8; line-height: 1.6; margin: 0;">
            Miami, Coral Gables, Coconut Grove, Pinecrest, Kendall, Brickell, Doral, Aventura, Miami Beach, Key Biscayne, South Miami, and Homestead.
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Miami Air Conditioning &amp; Heat Repair. All rights reserved. State Certified Mechanical Contractor #CMC1250482.</p>
      </div>
    </div>
  </footer>

  <script>
    function submitInstallForm() {
      const fb = document.getElementById('instFormFeedback');
      const name = document.getElementById('instName').value;
      const phone = document.getElementById('instPhone').value;
      if (!fb) return;
      fb.style.display = 'block';
      fb.innerHTML = '<strong>Thank you, ' + name + '!</strong> Your furnace installation estimate request has been received. Our coordinator will call ' + phone + ' shortly.';
    }
  </script>
  <script src="app.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'service-furnace-installation.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'furnace-installation.html'), html, 'utf8');
console.log('Successfully written service-furnace-installation.html and furnace-installation.html');
