const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Heat Pump Repair in Miami, FL | Miami Air Conditioning &amp; Heat Repair</title>
  <meta name="description" content="Heat pump not cooling, heating, or switching modes? Professional heat pump repair in Miami, FL. Reversing valves, defrost controls, and compressors. 25 years HVAC experience.">
  <link rel="canonical" href="https://coolcomfortmiami.com/service-heat-pump-repair.html">
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
          Same-Day Appointments
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
            <a href="service-heat-pump-repair.html" class="dropdown-item active-page" style="color: var(--primary-blue); font-weight: 700;">Heat Pump Repair &rarr;</a>
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
              HEAT PUMP DIAGNOSTIC &amp; REPAIR SPECIALISTS
            </div>

            <h1 class="service-hero-title">
              Heat Pump Repair<br><span>in Miami, FL</span>
            </h1>

            <p class="service-hero-sub">
              Heat pump not cooling, heating, or switching modes? Get heat pump repair in Miami, FL. Contact Miami Air Conditioning &amp; Heat Repair to discuss your system problem.
            </p>

            <p class="service-hero-sub" style="font-size: 1.02rem; margin-top: -10px; margin-bottom: 22px;">
              When your heat pump stops cooling effectively, fails to heat during a cool spell, or stays stuck in one mode, everyday comfort is disrupted. Unlike standard cooling equipment, a heat pump relies on a reversing valve, defrost controls, and coordinated indoor and outdoor components to provide both cooling and heating. When one part of that system malfunctions, the problem may affect cooling performance, heating performance, or both.
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
                <span>Inverter &amp; Heat Pump Techs</span>
              </div>
              <div class="service-hero-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                <span>Upfront Written Estimates</span>
              </div>
            </div>

            <div class="service-hero-actions">
              <a href="#quote-form" class="btn-cta-orange btn-lg">
                Schedule Diagnostic Assessment &rarr;
              </a>
              <a href="tel:3059026113" class="btn-hero-dark-call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (305) 902-6113
              </a>
            </div>
          </div>

          <div class="service-hero-media">
            <div class="service-hero-wave-wrap">
              <img src="images/hero-heat-pump-repair.jpg" alt="Certified technician diagnosing dual mode heat pump system in Miami FL" width="600" height="500">
              <div class="service-hero-wave-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         4. HEAT PUMP REPAIR SERVICES IN MIAMI (8 Scope Cards)
         ========================================================================== -->
    <section class="service-overview-sec" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">DIAGNOSTIC &amp; REPAIR SCOPE</span>
          <h2 class="section-title">Heat Pump Repair Services in Miami</h2>
          <p class="section-subtitle">
            Heat pump problems can develop in different parts of the system. Sometimes the unit fails to turn on or trips a breaker. In other cases, it runs but blows warm air in cooling mode, cool air in heating mode, makes unusual operating noises, or freezes along the refrigerant lines or coils.
          </p>
        </div>

        <p style="font-size: 1.05rem; color: var(--body-text); line-height: 1.65; max-width: 900px; margin: 0 auto 32px; text-align: center;">
          Our heat pump repair service addresses issues such as:
        </p>

        <div class="service-scope-cards-grid">
          <div class="service-scope-card">
            <div class="service-scope-num blue">1</div>
            <div>
              <h3 class="service-scope-card-title">Cooling &amp; Heating Mode Failures</h3>
              <p class="service-scope-card-desc">Heat pumps that will not turn on, respond to thermostat calls, or fail to maintain set indoor temperatures.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">2</div>
            <div>
              <h3 class="service-scope-card-title">Reversing Valve &amp; Mode Sticking</h3>
              <p class="service-scope-card-desc">Investigating systems that blow warm air during cooling season or cool air when switched into heating mode.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">3</div>
            <div>
              <h3 class="service-scope-card-title">Defrost Cycle &amp; Coil Icing</h3>
              <p class="service-scope-card-desc">Frozen outdoor evaporator coils, frost accumulation, and malfunctioning defrost thermostat sensors or timers.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">4</div>
            <div>
              <h3 class="service-scope-card-title">Continuous Running &amp; Duty Cycle</h3>
              <p class="service-scope-card-desc">Heat pumps running constantly without cycling off, causing high utility bills and excessive compressor wear.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">5</div>
            <div>
              <h3 class="service-scope-card-title">Short-Cycling &amp; Rapid Shutoffs</h3>
              <p class="service-scope-card-desc">Equipment repeatedly starting and stopping every few minutes, indicating pressure faults or electrical limit trips.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">6</div>
            <div>
              <h3 class="service-scope-card-title">Compressor &amp; Contactor Buzzing</h3>
              <p class="service-scope-card-desc">Outdoor fan motor issues, buzzing contactor relays, locked compressor rotors, or abnormal vibration noises.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num blue">7</div>
            <div>
              <h3 class="service-scope-card-title">Electrical Breakers &amp; Control Boards</h3>
              <p class="service-scope-card-desc">Repeated breaker trips, thermostat signal dropouts, wiring faults, and electronic inverter board errors.</p>
            </div>
          </div>

          <div class="service-scope-card">
            <div class="service-scope-num orange">8</div>
            <div>
              <h3 class="service-scope-card-title">Refrigerant Leaks &amp; Metering Valves</h3>
              <p class="service-scope-card-desc">Electronic leak detection, subcooling/superheat measurement, and precision electronic expansion valve adjustments.</p>
            </div>
          </div>
        </div>

        <div style="background: var(--pale-blue-subtle); border-radius: var(--radius-md); padding: 24px 28px; text-align: center; max-width: 900px; margin: 36px auto 0;">
          <p style="font-size: 1.02rem; font-weight: 700; color: var(--primary-navy); margin: 0 0 16px;">
            The right repair depends on the system and the fault identified during inspection. We explain what needs attention before any work begins.
          </p>
          <a href="#quote-form" class="btn-cta-orange" style="display: inline-flex;">Schedule Diagnostic Assessment &rarr;</a>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         5. HEAT PUMP PROBLEMS WE INSPECT AND REPAIR (Sticky Left Layout)
         ========================================================================== -->
    <section class="service-problems-sec" id="problems" style="padding: 78px 0 84px; background: var(--light-gray);">
      <div class="container">
        <div class="service-problems-layout">
          <!-- Sticky Left Diagnostic Column -->
          <div class="service-problems-intro">
            <span class="section-label">DIAGNOSTIC CRITERIA</span>
            <h2 class="section-title" style="margin-bottom: 14px;">Heat Pump Problems We Inspect and Repair</h2>
            <p style="font-size: 1.02rem; color: var(--body-text); line-height: 1.65; margin-bottom: 18px;">
              Because heat pumps function as both air conditioners and heaters, their diagnostic requirements differ from cooling-only equipment. Here is how we diagnose the most common heat pump operating issues.
            </p>
            <p style="font-size: 0.96rem; font-weight: 700; color: var(--primary-navy); margin-bottom: 10px;">
              Key operating stages inspected:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Reversing valve 4-way slider &amp; solenoid</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Defrost board logic &amp; sensor resistance</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Inverter compressor &amp; dual-run capacitors</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Auxiliary heat strips &amp; limit switches</span>
              </li>
            </ul>

            <div style="background: var(--white); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 20px;">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">Same-Day Emergency Service</h4>
              <p style="font-size: 0.92rem; color: var(--body-text); line-height: 1.55; margin-bottom: 14px;">
                Heat pump failed or stuck? Call our dispatch team directly for rapid response across Miami-Dade and Broward.
              </p>
              <a href="tel:3059026113" class="btn-cta-orange" style="width: 100%; text-align: center; padding: 11px 18px; font-size: 0.94rem;">
                Call (305) 902-6113
              </a>
            </div>
          </div>

          <!-- Right Cards Grid (8 Distinct Theme Images) -->
          <div>
            <div class="service-problems-cards-grid">
              
              <!-- Problem 1: Not Cooling Properly -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-not-cooling.jpg" alt="Diagnosing heat pump blowing warm air in cooling mode in Miami" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">1. Why Is Your Heat Pump Not Cooling Properly?</h3>
                  <p class="service-problem-desc">
                    In Miami's climate, a heat pump operates in cooling mode most of the year. If the unit blows warm air, struggles to reach your thermostat setting, or runs continuously without cooling, the cause may involve refrigerant levels, airflow restrictions, a failed reversing valve, or compressor trouble.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We measure superheat/subcooling, inspect coils for dirt or buildup, test compressor and fan operation, and verify the reversing valve is energized properly.
                  </div>
                </div>
              </div>

              <!-- Problem 2: Not Heating Properly -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-not-heating.jpg" alt="Testing heat pump heating performance and auxiliary heat strips" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">2. Why Is Your Heat Pump Not Heating Properly?</h3>
                  <p class="service-problem-desc">
                    During cooler Miami weather, your heat pump should reverse the refrigeration cycle to draw heat from outdoor air into your home. If it delivers cool air, cannot warm the property, or will not switch into heat mode, the issue may stem from reversing valve failure, auxiliary heat strip faults, or defrost malfunctions.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We verify temperature rise, test reversing valve solenoid operation, and check auxiliary electric heat element staging.
                  </div>
                </div>
              </div>

              <!-- Problem 3: Stuck in One Mode -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-reversing-valve.jpg" alt="Reversing valve stuck in heating or cooling mode diagnostic inspection" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">3. Why Is Your Heat Pump Stuck in One Mode?</h3>
                  <p class="service-problem-desc">
                    The reversing valve directs refrigerant flow to switch between cooling and heating. When it fails, the system may get stuck in one mode regardless of thermostat settings. The problem may involve the solenoid coil, electrical control signal, or mechanical valve mechanism.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We test whether the reversing valve receives the proper low-voltage signal from the thermostat and verify internal mechanical movement.
                  </div>
                </div>
              </div>

              <!-- Problem 4: Frozen Coil -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-frozen-coil.jpg" alt="Heat pump outdoor and indoor frozen coil diagnostics in Miami" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">4. Why Is Your Heat Pump Freezing Up?</h3>
                  <p class="service-problem-desc">
                    Ice forming on the outdoor unit (in heating mode) or indoor evaporator coil (in cooling mode) indicates an operating problem. In heating mode, the defrost control board should periodically melt accumulated frost. If defrost fails or refrigerant is low, heavy ice can block airflow.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We inspect defrost cycle sensors, test defrost control board operation, evaluate refrigerant levels, and check blower airflow.
                  </div>
                </div>
              </div>

              <!-- Problem 5: Running Constantly -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-running-constantly.jpg" alt="Heat pump running constantly duty cycle evaluation" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">5. Why Does Your Heat Pump Run Constantly?</h3>
                  <p class="service-problem-desc">
                    A heat pump that rarely or never shuts off may be struggling to keep up with the thermostat demand. This can happen when the system is low on refrigerant, coils are dirty, thermostat communication is disrupted, or internal components are worn.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We assess complete operating efficiency, temperature differential across the coils, and thermostat communication.
                  </div>
                </div>
              </div>

              <!-- Problem 6: Short-Cycling -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-short-cycling.jpg" alt="Heat pump short cycling and pressure switch trip testing" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">6. Why Does Your Heat Pump Short-Cycle?</h3>
                  <p class="service-problem-desc">
                    Frequent starting and stopping puts extra stress on the compressor and electrical components, accelerates wear, and prevents proper dehumidification in Miami's humid environment. Common causes include thermostat placement, electrical faults, or safety switch cutoffs.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We check high/low pressure switches, test run capacitors, inspect electrical contacts, and evaluate airflow delivery.
                  </div>
                </div>
              </div>

              <!-- Problem 7: Unusual Noises -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-humming-fan.jpg" alt="Heat pump outdoor fan motor buzzing and mechanical noise inspection" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">7. Why Is Your Heat Pump Making Unusual Noises?</h3>
                  <p class="service-problem-desc">
                    Buzzing, clicking, rattling, grinding, or hissing sounds point to different issues. Buzzing may indicate an electrical contactor problem, clicking can accompany starting difficulty, while hissing can suggest refrigerant issues or reversing valve pressure equalizing.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We trace the noise to its source—whether in the outdoor unit, indoor blower, or refrigerant lines—to determine the required repair.
                  </div>
                </div>
              </div>

              <!-- Problem 8: Tripping the Breaker -->
              <div class="service-problem-box">
                <div class="service-problem-frame">
                  <img src="images/problem-heatpump-breaker-trip.jpg" alt="Electrical safety testing for heat pump circuit breaker trips" class="service-problem-img" width="600" height="380" loading="lazy">
                </div>
                <div class="service-problem-body">
                  <h3 class="service-problem-title">8. Why Does Your Heat Pump Keep Tripping the Breaker?</h3>
                  <p class="service-problem-desc">
                    A breaker that trips when the heat pump starts or while it runs indicates an electrical safety fault. Repeatedly resetting the breaker without finding the cause can damage equipment or create electrical hazards.
                  </p>
                  <div class="service-problem-solution">
                    <strong>Diagnostic Approach:</strong> We evaluate the electrical supply, compressor motor windings, start components, fan motors, and wiring connections for ground faults or excessive current draw.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         6. HEAT PUMP COMPONENTS THAT MAY NEED REPAIR (4 Theme Cards)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: #FFFFFF;">
      <div class="container">
        <div class="section-header">
          <span class="section-label">PRECISION REPLACEMENTS</span>
          <h2 class="section-title">Heat Pump Components That May Need Repair</h2>
          <p class="section-subtitle">
            A heat pump consists of several mechanical, electrical, and refrigeration components. Identifying the specific part that is malfunctioning allows us to recommend targeted repairs.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 36px;">
          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="service-scope-num blue">&bull;</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Reversing Valve &amp; Solenoid</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              Controls the direction of refrigerant flow between cooling and heating. A failed solenoid or stuck valve slider prevents the system from changing modes or reduces thermal capacity.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="service-scope-num orange">&bull;</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Defrost Board &amp; Sensors</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              Monitors outdoor coil temperature and initiates the defrost cycle when frost builds up. A faulty control board or sensor leads to coil freeze-ups or unnecessary defrost cycles.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="service-scope-num blue">&bull;</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Compressor &amp; Capacitors</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The compressor pumps refrigerant throughout the system. Failed capacitors, contactors, or worn internal compressor components prevent proper refrigerant circulation.
            </p>
          </div>

          <div style="background: var(--light-gray); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="service-scope-num orange">&bull;</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">Fan Motors &amp; Coils</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              The outdoor fan discharges or absorbs heat, while the indoor blower moves conditioned air into your home. A failing fan motor or dirty coil reduces heat transfer efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         7. HOW OUR HEAT PUMP REPAIR SERVICE WORKS (6-Step Structured Process)
         ========================================================================== -->
    <section class="section-block" style="padding: 78px 0 84px; background: var(--pale-blue-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">METHODOLOGY</span>
          <h2 class="section-title">How Our Heat Pump Repair Service Works</h2>
          <p class="section-subtitle">
            Our repair process begins with understanding the symptoms you're experiencing and conducting a structured inspection of the equipment.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 24px; margin-top: 36px;">
          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">1</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Discuss the Symptoms</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              We listen to what you've noticed—whether the system won't cool, won't heat, is stuck in one mode, runs constantly, or makes unusual noises.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">2</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Identify the Equipment</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              We determine the type, age, and configuration of your heat pump—split system, packaged unit, ductless mini-split, or multi-zone system.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">3</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Inspect Relevant Components</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              Our technicians assess electrical supply, controls, reversing valve, defrost controls, compressor, fan motors, refrigerant pressures, and airflow.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">4</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Explain Our Findings</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              We clearly explain what is causing the problem, discuss available repair options, and provide a clear estimate before proceeding with any work.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num blue">5</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Complete Approved Repairs</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              Using compatible parts and proper procedures, our certified technicians carry out the agreed repair according to industry trade standards.
            </p>
          </div>

          <div style="background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 26px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span class="service-scope-num orange">6</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--heading-navy); margin: 0;">We Verify Full Operation</h3>
            </div>
            <p style="color: var(--body-text); font-size: 0.94rem; line-height: 1.6; margin: 0;">
              After completing the repair, we test the heat pump in both cooling and heating modes, check reversing action, and verify proper temperature delivery.
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
          <h2 class="section-title">Recent Heat Pump Repairs Across Miami Communities</h2>
          <p class="section-subtitle">
            See how our certified technicians resolved complex reversing valve, defrost, and electrical issues in local residential systems.
          </p>
        </div>

        <div class="service-projects-grid" style="margin-top: 36px;">
          <!-- Project 1 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-heatpump-miami.jpg" alt="Inverter heat pump reversing valve replacement in Coconut Grove" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Coconut Grove &bull; Modern Villa</div>
              <h3 class="service-project-title">Inverter Heat Pump Reversing Valve Replacement</h3>
              <p class="service-project-desc">
                Diagnosed a mechanically stuck 4-way reversing valve causing the system to blow warm air during summer cooling. Replaced with precision nitrogen purge braze and pulled a 350-micron deep vacuum.
              </p>
              <span class="service-project-metric">DEEP VACUUM: 350 MICRONS &bull; RESTORED</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-heatpump-coconutgrove.jpg" alt="Dual stage defrost control board diagnostic in Coral Gables" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Coral Gables &bull; Historic Residence</div>
              <h3 class="service-project-title">Dual-Stage Defrost Control Board Diagnostic</h3>
              <p class="service-project-desc">
                Outdoor heat pump coil was freezing solid during a cold morning snap. Traced to a failed defrost relay sensor. Replaced control module and confirmed automated defrost termination.
              </p>
              <span class="service-project-metric">SYSTEM TESTED 100% &bull; OPERATIONAL</span>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="service-project-card">
            <div class="service-project-media">
              <img src="images/project-heatpump-kendall.jpg" alt="Multi-split heat pump electronic expansion valve service in Kendall" loading="lazy">
            </div>
            <div class="service-project-body">
              <div class="service-project-location">Kendall &bull; Suburban Estate</div>
              <h3 class="service-project-title">Electronic Expansion Valve (EEV) Calibration</h3>
              <p class="service-project-desc">
                Multi-split heat pump exhibited severe short cycling and high head pressure trips. Calibrated motorized stepper expansion valve and rebalanced refrigerant charge for optimal dual-zone cooling.
              </p>
              <span class="service-project-metric">DUAL ZONE BALANCE VERIFIED</span>
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
              <h2 class="section-title" style="margin-bottom: 16px;">Frequently Asked Questions About Heat Pump Repair</h2>
              <p style="color: var(--body-text); font-size: 1rem; line-height: 1.6; margin-bottom: 24px;">
                Review clear answers to common heat pump troubleshooting questions, diagnostic requirements, and repair timelines.
              </p>

              <div style="background: var(--white); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 22px;">
                <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-navy); margin-bottom: 8px;">Need Emergency Service?</h4>
                <p style="color: var(--body-text); font-size: 0.9rem; line-height: 1.5; margin-bottom: 16px;">
                  Our certified technicians can inspect your heat pump system today.
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
                <span>Why is my heat pump blowing warm air in cooling mode?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse" style="max-height: 600px;">
                <div class="faq-answer-inner">
                  <p>Common causes include a stuck reversing valve (holding the system in heating mode), low refrigerant levels, a dirty or blocked outdoor coil, compressor issues, or a thermostat wiring/programming problem. A technician must assess the system to identify the specific cause.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why is my heat pump not heating?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>In Miami's mild winters, a heat pump should readily warm the home. If it blows cool air or fails to produce heat, the cause may be a reversing valve that won't switch into heating mode, failed auxiliary heat strips, low refrigerant, or an outdoor defrost issue.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Can a reversing valve be repaired, or does it have to be replaced?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>If the solenoid coil has failed or there is a low-voltage electrical connection problem, replacing the solenoid or fixing the connection may resolve the issue without replacing the valve body. If the internal mechanism of the 4-way valve is mechanically stuck or damaged, the valve body itself must be replaced, which involves recovering the refrigerant, brazing in the new valve, and recharging the system.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why is my outdoor heat pump unit covered in ice?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Some frost formation on the outdoor coil during heating operation is normal in cold weather. However, if thick ice blankets the unit and does not melt, the defrost control board, defrost sensor, or reversing valve may not be initiating the defrost cycle properly. Low refrigerant or restricted airflow can also cause icing.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>How is heat pump repair different from standard AC repair?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>A standard air conditioner only cools. A heat pump contains specialized components—a reversing valve, defrost controls, bi-flow filter driers, and dual metering devices—that allow it to reverse refrigerant flow. Diagnosing a heat pump requires understanding how both cooling and heating cycles interact.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Why is my heat pump making a buzzing or humming sound?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>A buzzing noise often comes from an electrical contactor relay, a reversing valve solenoid, or a failing capacitor. Humming can also come from a motor that is receiving power but unable to turn. Any persistent electrical noise should be evaluated promptly.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>How long does a heat pump repair usually take?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Most common repairs—such as replacing a capacitor, contactor, defrost sensor, or thermostat—can be completed in 1 to 2 hours. More involved repairs, such as replacing a reversing valve, repairing a refrigerant leak, or replacing a compressor, may take several hours.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 8 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Should I repair or replace my heat pump?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>It depends on the age of the unit, the cost of the repair, and overall condition. If the heat pump is under 10 years old and the repair is straightforward, fixing it makes sense. If the unit is over 12–15 years old, uses phased-out R-22 refrigerant, or needs an expensive compressor replacement, replacement is often more cost-effective.</p>
                </div>
              </div>
            </div>

            <!-- FAQ 9 -->
            <div class="faq-card">
              <button class="faq-question-btn" aria-expanded="false">
                <span>Do you service all brands of heat pumps?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse">
                <div class="faq-answer-inner">
                  <p>Yes. We service all major heat pump brands, including Carrier, Trane, Lennox, Rheem, Goodman, York, Daikin, Mitsubishi, and others, for both split systems and packaged heat pump equipment.</p>
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
            <span class="section-label">DIAGNOSTIC SERVICE</span>
            <h2 class="section-title">Schedule Heat Pump Assessment in Miami, FL</h2>
            <p style="color: var(--body-text); font-size: 1.02rem; line-height: 1.65; margin-bottom: 20px;">
              Don't let a malfunctioning heat pump compromise your home's comfort. Contact Miami Air Conditioning &amp; Heat Repair to arrange an inspection of your system by a certified technician.
            </p>
            <p style="font-weight: 700; color: var(--heading-navy); margin-bottom: 12px;">
              When you contact us, let us know:
            </p>
            <ul class="service-checklist" style="margin-bottom: 24px;">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Whether the issue affects cooling, heating, or both modes</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Any specific symptoms: unusual noises, freezing, or breaker trips</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>The approximate age and brand of your heat pump if known</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Your preferred service timing and availability</span>
              </li>
            </ul>
            <p style="font-size: 1.05rem; font-weight: 700; color: var(--primary-blue);">
              Call our team at (305) 902-6113 or submit this form to request service.
            </p>
          </div>

          <div class="quote-form-panel">
            <div class="form-wrapper">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--heading-navy); margin-bottom: 8px;">Book Heat Pump Diagnostic</h3>
              <p style="color: var(--muted-text); font-size: 0.9rem; margin-bottom: 20px;">Complete this brief form to schedule your system diagnostic assessment.</p>

              <form id="heatPumpForm" class="service-booking-form">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="e.g. Carlos Rodriguez" required>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="(305) 555-0199" required>
                  </div>
                  <div class="form-group">
                    <label for="zipCode">Miami ZIP Code *</label>
                    <input type="text" id="zipCode" name="zipCode" placeholder="e.g. 33134" required>
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="equipmentType">Heat Pump Type</label>
                    <select id="equipmentType" name="equipmentType">
                      <option value="split">Central Split-System Heat Pump</option>
                      <option value="packaged">Packaged Outdoor Heat Pump</option>
                      <option value="minisplit">Ductless Mini-Split Heat Pump</option>
                      <option value="unsure">Not Sure / Need Inspection</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="primaryIssue">Primary Issue</label>
                    <select id="primaryIssue" name="primaryIssue">
                      <option value="not-cooling">Not Cooling / Blowing Warm Air</option>
                      <option value="not-heating">Not Heating / Blowing Cool Air</option>
                      <option value="stuck-mode">Stuck in One Mode</option>
                      <option value="freezing">Outdoor or Indoor Coil Freezing</option>
                      <option value="running-constantly">Running Constantly</option>
                      <option value="breaker-trip">Tripping Circuit Breaker</option>
                      <option value="noise">Unusual Buzzing / Mechanical Noise</option>
                      <option value="other">Other / General Diagnostic</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="notes">Symptoms / Notes (Optional)</label>
                  <textarea id="notes" name="notes" rows="3" placeholder="Describe symptoms, brand, or approximate age..."></textarea>
                </div>

                <button type="submit" class="btn-cta-orange" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 14px 20px;">
                  Submit Diagnostic Request &rarr;
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
            <li style="margin-bottom: 10px;"><a href="service-furnace-replacement.html" style="color: #94A3B8; text-decoration: none;">Furnace Replacement</a></li>
            <li style="margin-bottom: 10px;"><a href="service-heat-pump-repair.html" style="color: var(--bright-blue); font-weight: 700; text-decoration: none;">Heat Pump Repair</a></li>
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
       12. MOBILE FLOATING CALL BAR
       ========================================================================== -->
  <div class="mobile-sticky-action">
    <a href="tel:3059026113" class="btn-primary-blue mobile-sticky-call">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Call (305) 902-6113
    </a>
    <a href="#quote-form" class="btn-cta-orange mobile-sticky-quote">
      Get Diagnostic
    </a>
  </div>

  <script src="app.js"></script>
</body>
</html>
`;

fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/service-heat-pump-repair.html', html, 'utf8');
fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/heat-pump-repair.html', html, 'utf8');
console.log('Successfully written service-heat-pump-repair.html and heat-pump-repair.html with site brand theme!');
