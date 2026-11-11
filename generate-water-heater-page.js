const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hot Water Heater Repair Miami, FL | Miami Air Conditioning &amp; Heat Repair</title>
  <meta name="description" content="No hot water, tank leaking, or unusual noises? Professional hot water heater repair in Miami, FL for electric, gas, and tankless systems. 25+ years experience.">
  <link rel="canonical" href="https://coolcomfortmiami.com/service-water-heater-repair.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="service-page">

  <!-- ==========================================================================
       1. TOP ANNOUNCEMENT BAR
       ========================================================================== -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <span class="badge-tag">LICENSED &amp; INSURED</span>
        <span>Florida State Certified Mechanical Contractor &bull; CMC1250482</span>
      </div>
      <div class="top-bar-right">
        <span>25+ Years of HVAC &amp; Mechanical Experience</span>
        <span>&bull;</span>
        <span style="display: inline-flex; align-items: center; gap: 6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Same-Day Assessments Available
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
            <a href="service-water-heater-repair.html" class="dropdown-item active-page" style="color: #0284C7; font-weight: 700;">Hot Water Heater Repair &rarr;</a>
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
        <div class="contact-pill">
          <div class="contact-icon-wrapper">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div class="contact-text-group">
            <span class="contact-small-label">CALL EXPERTS 24/7</span>
            <a href="tel:+18336843425" class="contact-phone-number">(833) 684-3425</a>
          </div>
        </div>
        <a href="#book-service" class="btn btn-primary btn-quote-action">Request Service</a>
        <button class="mobile-menu-btn" id="mobileMenuToggle" aria-label="Toggle Mobile Navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- ==========================================================================
         3. BREADCRUMBS
         ========================================================================== -->
    <div class="service-breadcrumbs-bar">
      <div class="container">
        <ul class="service-breadcrumbs-list">
          <li><a href="index.html">Home</a></li>
          <li><span>&rsaquo;</span></li>
          <li><a href="index.html#services">Other Services</a></li>
          <li><span>&rsaquo;</span></li>
          <li class="current">Hot Water Heater Repair</li>
        </ul>
      </div>
    </div>

    <!-- ==========================================================================
         4. HERO SECTION
         ========================================================================== -->
    <section class="service-hero">
      <div class="container">
        <div class="service-hero-grid">
          <div class="service-hero-content">
            <span class="badge-pill">RESIDENTIAL &amp; COMMERCIAL HOT WATER SOLUTIONS</span>
            <h1 class="service-hero-title">Hot Water Heater Repair in Miami, FL</h1>
            <p class="service-hero-lead">
              When your water heater stops producing hot water, takes too long to heat, or starts leaking around the tank, even everyday tasks become difficult. The problem may be a failed heating element, thermostat, electrical connection, gas-control component, valve, or an issue inside the tank. The right repair depends on the type of water heater and where the fault is occurring.
            </p>
            <p class="service-hero-lead" style="margin-top: 14px;">
              Miami Air Conditioning &amp; Heat Repair helps customers address water-heating problems in Miami and surrounding service areas. Whether you have no hot water, inconsistent temperatures, unusual tank noises, or a water heater that keeps shutting off, the first step is to identify what is causing the problem.
            </p>
            <p style="color: #475569; font-size: 0.95rem; margin-top: 14px; margin-bottom: 24px;">
              If your water heater is not working properly, contact our team to discuss the symptoms and arrange an assessment.
            </p>

            <div class="service-hero-actions">
              <a href="tel:+18336843425" class="btn btn-primary" style="font-size: 1.05rem; padding: 14px 28px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 8px; vertical-align: middle;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call Our Team: (833) 684-3425
              </a>
              <a href="#book-service" class="btn btn-outline" style="font-size: 1.05rem; padding: 14px 28px;">
                Request Water Heater Service &darr;
              </a>
            </div>

            <div class="service-guarantee-strip" style="margin-top: 30px;">
              <div class="guarantee-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg>
                <span>Electric, Gas &amp; Tankless</span>
              </div>
              <div class="guarantee-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg>
                <span>Accurate Leak &amp; Fault Tracing</span>
              </div>
              <div class="guarantee-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg>
                <span>Licensed Mechanical Expertise</span>
              </div>
            </div>
          </div>

          <div class="service-hero-media">
            <div class="hero-image-wrapper" style="border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.12); position: relative;">
              <img src="images/hero-water-heater-repair.jpg" alt="Professional technician repairing water heater system in Miami FL" style="width: 100%; height: 440px; object-fit: cover; display: block;">
              <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px); padding: 12px 18px; border-radius: 10px; border-left: 4px solid #0284C7; color: #fff;">
                <span style="font-size: 0.8rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #38BDF8; display: block;">MIAMI-DADE &amp; BROWARD</span>
                <span style="font-size: 0.95rem; font-weight: 600;">25+ Years Experience &bull; Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         5. OVERVIEW: WATER HEATER REPAIR SERVICES IN MIAMI
         ========================================================================== -->
    <section class="section-block" style="background: #FFFFFF; padding: 70px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">COMPREHENSIVE DIAGNOSTICS</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">Water Heater Repair Services in Miami</h2>
          <p style="color: #475569; font-size: 1.05rem; line-height: 1.7;">
            A water heater can lose performance gradually or stop working without much warning. Some problems involve replaceable components, while others point to a leaking or deteriorating tank. Tankless units also have different operating components and diagnostic requirements from traditional storage-tank heaters.
          </p>
          <p style="color: #0284C7; font-weight: 600; font-size: 1.05rem; margin-top: 10px;">
            The service needed depends on the equipment installed at your property and the fault identified during assessment.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">No Hot Water</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Investigating heating, power, ignition, thermostat, or control problems preventing heat delivery.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Insufficient Hot Water</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Checking heating performance, temperature controls, tank capacity, and possible sediment accumulation.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Water Heater Leaks</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Identifying whether water is coming from a connection, valve, drain fitting, or the tank shell itself.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Electrical Heating Problems</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Assessing heating elements, thermostats, wiring, and electrical protection on applicable electric units.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Gas Water Heater Problems</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Investigating ignition, pilot, burner, thermocouple, and gas-control issues where gas equipment service is offered.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Tankless Water Heater Faults</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Assessing error codes, ignition, flow-related problems, and heat exchanger scale buildup.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 26px; border-top: 4px solid #0284C7;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Unusual Noises or Discoloration</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Investigating mineral sediment, anode rod deterioration, corrosion, and other plumbing causes.</p>
          </div>
        </div>

        <div style="margin-top: 40px; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 20px 26px; text-align: center;">
          <p style="color: #1E3A8A; font-weight: 600; font-size: 1.05rem; margin: 0;">
            <strong>Our Commitment:</strong> The aim is to identify whether the unit needs a component repair, corrective work, or a replacement assessment—not to recommend a new heater simply because one part has failed.
          </p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         6. PROBLEMS WE REPAIR (9 UNIQUE DEDICATED IMAGES - ZERO REPETITION!)
         ========================================================================== -->
    <section class="section-block" style="background: #F8FAFC; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">SYMPTOMS &amp; DIAGNOSTICS</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">Common Water Heater Problems We Inspect &amp; Repair</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            Explore the common operating faults below to see how our certified technicians diagnose and resolve each specific issue.
          </p>
        </div>

        <div class="service-problems-grid">
          <!-- Card 1 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-no-hot-water.jpg" alt="Testing heating element on water heater with no hot water" loading="lazy">
              <span class="problem-badge-overlay">NO HEAT</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Is Your Water Heater Not Producing Hot Water?</h3>
              <p class="problem-card-desc">
                If you turn on a hot-water faucet and get only cold water, the heater may not be completing its heating cycle. The cause depends on whether you have an electric storage tank, a gas water heater, or a tankless system.
              </p>
              <p class="problem-card-desc" style="margin-top: 10px;">
                On an electric tank water heater, a tripped breaker, failed heating element, thermostat fault, or electrical connection problem may interrupt heating. On a gas model, the issue may involve ignition, the pilot assembly, burner operation, or a gas-control component. A tankless unit may stop heating because of an ignition fault, an error condition, restricted flow, or another system problem.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <strong style="color: #0F172A; font-size: 0.85rem; display: block; margin-bottom: 6px;">What needs to be checked:</strong>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #475569;">
                  <li>Unit power or fuel supply</li>
                  <li>Thermostat &amp; temperature controls</li>
                  <li>Heating elements (electric models)</li>
                  <li>Pilot, ignition &amp; burner (gas models)</li>
                  <li>Tankless error codes &amp; safety controls</li>
                </ul>
              </div>
              <p style="font-size: 0.85rem; color: #0284C7; font-weight: 600;">
                Approach: The equipment type and symptoms determine which components need assessment. Once the cause is identified, the appropriate repair is explained.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-lukewarm.jpg" alt="Technician adjusting thermostat and testing lukewarm water" loading="lazy">
              <span class="problem-badge-overlay">LOW TEMP</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Does Your Water Heater Only Produce Lukewarm Water?</h3>
              <p class="problem-card-desc">
                If the water gets warm but never reaches the temperature you expect, or starts hot and quickly turns cold, the heater may be struggling to maintain its normal output.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <strong style="color: #0F172A; font-size: 0.85rem; display: block; margin-bottom: 6px;">Possible reasons include:</strong>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #475569;">
                  <li>A heating element that is not working correctly</li>
                  <li>A thermostat or temperature-control problem</li>
                  <li>Sediment occupying space inside a storage tank</li>
                  <li>A damaged dip tube mixing cold and hot water</li>
                  <li>A tankless unit struggling with flow demand</li>
                  <li>Demand exceeding available tank capacity</li>
                </ul>
              </div>
              <p style="font-size: 0.85rem; color: #0284C7; font-weight: 600;">
                Approach: We evaluate how quickly the water temperature drops, whether it affects every fixture, and assess relevant heating controls.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-slow-recovery.jpg" alt="Water heater slow recovery time diagnostic testing" loading="lazy">
              <span class="problem-badge-overlay">SLOW RECOVERY</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Is Your Water Heater Taking Too Long to Heat?</h3>
              <p class="problem-card-desc">
                Longer heating times can make it difficult to use showers, laundry, and other hot-water fixtures as usual. The cause may be related to the heater's heating capacity, a failed component, sediment buildup, or the way hot water is being used across the property.
              </p>
              <p class="problem-card-desc" style="margin-top: 10px;">
                On electric tank heaters, one failed heating element can reduce the system's ability to recover hot water. Sediment can also interfere with heat transfer. On tankless systems, the issue may involve flow, scaling, or an operating fault.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <strong style="color: #0F172A; font-size: 0.85rem; display: block; margin-bottom: 6px;">What we assess:</strong>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #475569;">
                  <li>Heating element &amp; thermostat operation</li>
                  <li>Tank condition &amp; sediment accumulation</li>
                  <li>Tankless error indicators &amp; performance</li>
                  <li>Demand vs capacity matching</li>
                </ul>
              </div>
              <p style="font-size: 0.85rem; color: #0284C7; font-weight: 600;">
                Distinguishing a repairable component problem from equipment condition or capacity limitations.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-tank-leak.jpg" alt="Inspecting water leak around water heater tank base and valve" loading="lazy">
              <span class="problem-badge-overlay">LEAK DETECTED</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Is Your Water Heater Leaking?</h3>
              <p class="problem-card-desc">
                Water around a water heater should not be ignored. Even a small leak can damage nearby flooring, cabinets, walls, or stored belongings if it continues. However, not every water heater leak means the tank itself has failed.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <strong style="color: #0F172A; font-size: 0.85rem; display: block; margin-bottom: 6px;">Potential leak sources:</strong>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #475569;">
                  <li>Loose or deteriorated water pipe connections</li>
                  <li>Drain valve leakage or deterioration</li>
                  <li>Temperature &amp; pressure (T&amp;P) relief valve</li>
                  <li>Connected expansion tank or pipe fittings</li>
                  <li>Corrosion or breach in the storage tank body</li>
                </ul>
              </div>
              <p class="problem-card-desc" style="font-size: 0.85rem;">
                <strong>Crucial Difference:</strong> Connection and valve leaks are repairable. If the storage tank itself has corroded through, replacing the unit is required as outer sealing cannot reliably fix a tank failure.
              </p>
              <p style="font-size: 0.82rem; color: #DC2626; font-weight: 600; margin-top: 8px;">
                Safety Notice: Never cap or block a relief valve discharge pipe. Shut off power and water safely if flooded.
              </p>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-popping-noise.jpg" alt="Sediment mineral buildup inspection inside water heater" loading="lazy">
              <span class="problem-badge-overlay">UNUSUAL NOISE</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Is Your Water Heater Making Popping or Rumbling Noises?</h3>
              <p class="problem-card-desc">
                Popping, crackling, or rumbling sounds from a storage-tank water heater can be associated with mineral sediment collecting at the bottom of the tank. As the heater operates, water trapped beneath sediment can produce noise as it heats.
              </p>
              <p class="problem-card-desc" style="margin-top: 10px;">
                Other possible causes include heating-element issues, changes in water pressure, or vibration from connected pipes and fittings.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <p style="color: #475569; font-size: 0.85rem; margin: 0;">
                  <strong>How we approach the repair:</strong> The tank's operating condition, heating components, and signs of sediment accumulation need assessment. The response may involve cleaning or flushing where suitable, component repair, or discussing replacement if the tank has deteriorated.
                </p>
              </div>
              <p style="font-size: 0.85rem; color: #475569;">
                <em>Note:</em> Flushing is not automatically suitable for old or corroded tanks; condition is assessed first.
              </p>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-rusty-water.jpg" alt="Checking rusty water and corroded anode rod on water heater" loading="lazy">
              <span class="problem-badge-overlay">WATER QUALITY</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Is Your Hot Water Rusty, Discolored, or Smelly?</h3>
              <p class="problem-card-desc">
                If hot water looks brown or rusty, has an unusual odor, or appears different from the cold water supply, the cause may involve corrosion, sediment, the anode rod, or a water-quality issue.
              </p>
              <p class="problem-card-desc" style="margin-top: 10px;">
                On a storage-tank heater, the anode rod helps protect the tank from corrosion. As it deteriorates, the tank may become more vulnerable to internal corrosion. However, rusty or smelly water can also have causes elsewhere in the plumbing system.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <strong style="color: #0F172A; font-size: 0.85rem; display: block; margin-bottom: 6px;">What needs to be checked:</strong>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #475569;">
                  <li>Whether discoloration occurs only with hot or also cold water</li>
                  <li>Internal tank condition where accessible</li>
                  <li>Anode rod condition on applicable models</li>
                  <li>Signs of external corrosion at connections</li>
                  <li>Property water supply and plumbing pipes</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 7 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-tripped-breaker.jpg" alt="Electric water heater breaker trip electrical testing" loading="lazy">
              <span class="problem-badge-overlay">ELECTRICAL FAULT</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Does Your Water Heater Keep Tripping the Breaker?</h3>
              <p class="problem-card-desc">
                An electric water heater that repeatedly trips its breaker may have an electrical fault. Possible causes include a damaged heating element, wiring problem, thermostat fault, or another issue causing excessive current draw.
              </p>
              <p class="problem-card-desc" style="margin-top: 10px;">
                A breaker should not be repeatedly reset without understanding why it is tripping.
              </p>
              <div style="background: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <p style="color: #991B1B; font-size: 0.85rem; margin: 0; line-height: 1.5;">
                  <strong>Critical Warning:</strong> Do not bypass the breaker, install a larger breaker to keep the heater running, or open electrical panels yourself. If the breaker trips again, leave the unit off and arrange a professional assessment.
                </p>
              </div>
              <p style="font-size: 0.85rem; color: #0284C7; font-weight: 600;">
                Our approach: We assess electrical supply, elements, wiring, and high-limit controls safely with precision meters.
              </p>
            </div>
          </div>

          <!-- Card 8 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-pilot-out.jpg" alt="Gas water heater pilot light and thermocouple assembly inspection" loading="lazy">
              <span class="problem-badge-overlay">GAS IGNITION</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Does a Gas Water Heater Pilot Light Keep Going Out?</h3>
              <p class="problem-card-desc">
                On applicable gas water heaters, a pilot light that repeatedly goes out can prevent the burner from heating the water. The issue may involve the thermocouple or flame sensor, pilot assembly, gas supply, venting, or another safety or ignition component.
              </p>
              <p class="problem-card-desc" style="margin-top: 10px;">
                A pilot that will not stay lit should not automatically be treated as a simple relighting problem. Repeated failure can indicate a component or combustion-related issue.
              </p>
              <div style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <p style="color: #92400E; font-size: 0.85rem; margin: 0; line-height: 1.5;">
                  <strong>Safety First:</strong> If you smell gas, do not attempt to relight the heater or operate electrical switches nearby. Leave the area immediately and contact the appropriate gas emergency service.
                </p>
              </div>
              <p style="font-size: 0.85rem; color: #0284C7; font-weight: 600;">
                Our approach: Ignition system, pilot assembly, safety controls, and gas components evaluated by qualified professionals.
              </p>
            </div>
          </div>

          <!-- Card 9 -->
          <div class="problem-card">
            <div class="problem-image-wrap">
              <img src="images/problem-waterheater-tankless-error.jpg" alt="Diagnosing error code on modern tankless water heater" loading="lazy">
              <span class="problem-badge-overlay">TANKLESS FAULT</span>
            </div>
            <div class="problem-card-body">
              <h3 class="problem-card-title">Why Is Your Tankless Water Heater Showing an Error Code?</h3>
              <p class="problem-card-desc">
                Tankless water heaters heat water as it flows through the unit, so their operating problems can differ from those of traditional storage tanks. A flashing code, repeated shutdown, or sudden loss of hot water may indicate an operating problem.
              </p>
              <div style="background: #F1F5F9; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
                <strong style="color: #0F172A; font-size: 0.85rem; display: block; margin-bottom: 6px;">Possible areas of concern include:</strong>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #475569;">
                  <li>Ignition or flame-sensing components (gas units)</li>
                  <li>Water-flow sensors and motorized controls</li>
                  <li>Inlet filters or restricted water flow</li>
                  <li>Mineral scale buildup inside heat exchanger</li>
                  <li>Temperature sensors and electronic control board</li>
                  <li>Venting or gas-supply conditions</li>
                </ul>
              </div>
              <p style="font-size: 0.85rem; color: #0284C7; font-weight: 600;">
                Note the exact error code and model number before contacting us. Avoid repeatedly resetting the unit without understanding the reason for the shutdown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         7. COMPONENTS THAT MAY NEED REPAIR
         ========================================================================== -->
    <section class="section-block" style="background: #FFFFFF; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">PRECISION REPLACEMENTS</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">What Water Heater Components May Need Repair?</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            Different water heater designs use different heating and control components. The correct repair depends on the model and the fault identified during assessment.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Heating Elements</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Electric storage-tank heaters use heating elements to warm the water. A failed element can cause no hot water, slow recovery, or insufficient hot water. The element and its electrical supply need to be checked before replacement is recommended.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Thermostats &amp; Temperature Controls</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">A faulty thermostat can prevent the heater from maintaining the intended temperature or may cause inconsistent heating. The control and associated components need to be assessed together.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Anode Rod</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">The anode rod helps protect the inside of a storage tank from corrosion. If it has deteriorated, its condition and the tank's overall state should be considered before deciding whether replacement is appropriate.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Temperature &amp; Pressure Relief Valve</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">The T&amp;P valve is a safety device designed to release water when temperature or pressure conditions require it. If it discharges or leaks, the cause needs to be assessed. It must never be capped or disabled to stop the water.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Drain Valve &amp; Water Connections</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Leaks around the bottom or sides of the heater may originate from a drain valve, connection, or fitting. The source should be traced before deciding which part needs repair.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Gas Ignition &amp; Burner Components</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">On gas models, pilot assemblies, ignition components, flame sensors, and gas controls can affect heating. These components require appropriate gas-appliance service.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin-bottom: 10px;">Tankless Sensors &amp; Flow Components</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">Tankless units use sensors and controls to regulate heating as water moves through the system. An error code or inconsistent temperature may require checks of flow, sensors, scale buildup, or other internal components.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         8. HOW OUR WATER HEATER REPAIR SERVICE WORKS (6 STEPS)
         ========================================================================== -->
    <section class="section-block" style="background: #F8FAFC; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">STRUCTURED METHODOLOGY</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">How Does Our Water Heater Repair Service Work?</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            The repair process should begin with the actual problem and the type of heater installed at your property. A traditional electric tank, a gas storage heater, and a tankless unit do not use the same components or diagnostic procedures.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 24px;">
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 26px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="width: 36px; height: 36px; background: #0284C7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem;">1</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0;">We understand the problem</h3>
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              We discuss what you are experiencing: no hot water, lukewarm water, a leak, unusual noise, a tripped breaker, or a tankless error code. We also establish whether the problem affects every hot-water fixture or only one area.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 26px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="width: 36px; height: 36px; background: #0284C7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem;">2</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0;">We identify the equipment</h3>
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              The heater's type, model, fuel source, approximate age, and installation location help determine which components and operating conditions need attention.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 26px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="width: 36px; height: 36px; background: #0284C7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem;">3</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0;">We assess the reported fault</h3>
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              The relevant heating components, controls, valves, connections, or tankless operating conditions are assessed according to the equipment and symptoms.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 26px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="width: 36px; height: 36px; background: #0284C7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem;">4</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0;">We explain the recommended work</h3>
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              Once the cause is identified, the repair requirements and available options should be explained clearly, including whether the tank's condition makes repair practical.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 26px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="width: 36px; height: 36px; background: #0284C7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem;">5</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0;">We proceed with agreed work</h3>
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              The repair proceeds according to the agreed scope and applicable trade and safety requirements, utilizing high-grade OEM or exact-match components.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 26px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="width: 36px; height: 36px; background: #0284C7; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1rem;">6</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0;">We check relevant operation</h3>
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              After the work, the appropriate heating and operating functions are checked to confirm that the reported problem has been addressed and hot water flows consistently.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         9. RESIDENTIAL, CONDO & RENTAL PROPERTY APPLICATIONS
         ========================================================================== -->
    <section class="section-block" style="background: #FFFFFF; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">PROPERTY TYPES &amp; ACCESS</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">Water Heater Repair for Miami Homes, Condos and Rental Properties</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            Water heaters are installed in different locations depending on the property. Some homes have a storage tank in a garage or utility area, while condos may have equipment inside a closet or a designated service space. Tankless units may also have specific access and utility requirements.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 28px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0F172A; margin-bottom: 12px;">Single-Family Homes</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              A traditional storage-tank heater may develop heating, valve, connection, or tank-related problems. The assessment should consider the heater itself and the plumbing connections serving it.
            </p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 28px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0F172A; margin-bottom: 12px;">Condos &amp; Apartments</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              Restricted access, equipment location, building rules, and shared property requirements can affect the service visit. Let us know if the unit is inside a utility closet, balcony, or restricted mechanical area.
            </p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 28px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #0F172A; margin-bottom: 12px;">Rental &amp; Multi-Unit Properties</h3>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
              If multiple heaters serve separate units or addresses, identify which heater is affected and whether each unit has its own equipment. This helps establish the scope of the service request. For properties with more than one water heater, each unit may have a different age, capacity, and condition. A separate assessment may be needed rather than assuming that the same repair applies to every heater.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         10. REPAIR VS REPLACE COMPARISON
         ========================================================================== -->
    <section class="section-block" style="background: #F8FAFC; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">CLEAR DECISION MAKING</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">Should You Repair or Replace Your Water Heater?</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            A water heater that stops heating does not always need to be replaced. A failed thermostat, heating element, valve, or another replaceable component may be repairable if the tank and remaining equipment are in suitable condition. However, some problems indicate that repairing the existing unit may not be practical.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 30px;">
          <!-- Repair Card -->
          <div style="background: #FFFFFF; border: 2px solid #E2E8F0; border-top: 6px solid #0284C7; border-radius: 16px; padding: 32px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-bottom: 16px;">When Is Water Heater Repair a Practical Option?</h3>
            <p style="color: #475569; font-size: 0.95rem; margin-bottom: 16px;">Repair may be worth considering when:</p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px 0;">
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                The problem is limited to a replaceable component (element, thermostat, valve).
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                The storage tank is not leaking through its body.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                The heater is otherwise in reasonable overall condition.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Suitable replacement parts are readily available.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                The repair cost is proportionate to the unit's remaining useful life.
              </li>
            </ul>
            <p style="font-size: 0.9rem; color: #475569; background: #F8FAFC; padding: 12px; border-radius: 8px;">
              <em>Example:</em> A failed heating element on an otherwise sound electric water heater is a practical repair compared with replacing the entire system.
            </p>
          </div>

          <!-- Replace Card -->
          <div style="background: #FFFFFF; border: 2px solid #E2E8F0; border-top: 6px solid #EF4444; border-radius: 16px; padding: 32px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-bottom: 16px;">When Should You Consider Water Heater Replacement?</h3>
            <p style="color: #475569; font-size: 0.95rem; margin-bottom: 16px;">Replacement may be the better option when:</p>
            <ul style="list-style: none; padding: 0; margin: 0 0 20px 0;">
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                The storage tank itself is leaking or corroded through the shell.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                The heater has recurring, compounding operational problems.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                Major components have failed on an older or outdated unit.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                Critical replacement parts are obsolete or difficult to obtain.
              </li>
              <li style="padding: 8px 0; display: flex; align-items: flex-start; gap: 10px; color: #334155; font-size: 0.95rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                The heater no longer meets the property's hot-water demand.
              </li>
            </ul>
            <p style="font-size: 0.9rem; color: #475569; background: #FEF2F2; padding: 12px; border-radius: 8px;">
              <em>Critical:</em> Once the tank shell has failed, replacing external fittings will not resolve the problem. The decision is based on equipment condition—not age alone.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         11. WHAT AFFECTS WATER HEATER REPAIR COST IN MIAMI
         ========================================================================== -->
    <section class="section-block" style="background: #FFFFFF; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">TRANSPARENT ESTIMATES</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">What Affects Water Heater Repair Cost in Miami?</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            Water heater repair costs depend on the type of unit, the failed component, and the amount of work needed to address the problem. Replacing an accessible electric heating element is a different job from investigating a tank leak, repairing a gas ignition problem, or diagnosing a tankless unit.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Water Heater Type</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">Electric tank, gas tank, and tankless systems have completely different components and diagnostic procedures.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Failed Component</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">A thermostat, heating element, valve, sensor, or control fault involves different parts costs and replacement labor.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Leak Location</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">A connection or valve leak requires different work from an internal leak involving the storage tank body.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Equipment Accessibility</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">Heaters in tight utility closets, condo balconies, or restricted attics may require specialized access planning.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Equipment Age &amp; Parts</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">Older models may require specialized, discontinued, or harder-to-source replacement components.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Scale &amp; Sediment</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">The condition of the tank interior or tankless heat exchanger scale can influence the repair scope.</p>
          </div>

          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px;">
            <strong style="color: #0F172A; font-size: 1rem; display: block; margin-bottom: 6px;">Connected Plumbing/Electrical</strong>
            <p style="color: #475569; font-size: 0.9rem; margin: 0;">Problems involving connected piping, shut-off valves, electrical circuits, or building supply lines.</p>
          </div>
        </div>

        <div style="margin-top: 35px; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 20px 26px; text-align: center;">
          <p style="color: #1E3A8A; font-size: 1rem; margin: 0;">
            A useful estimate should explain the problem, the proposed repair, the parts and labor involved, and any additional work or applicable permit requirements. Contact our team to arrange an assessment.
          </p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         12. WHY CONTACT MIAMI AIR CONDITIONING & HEAT REPAIR?
         ========================================================================== -->
    <section class="section-block" style="background: #0F172A; color: #FFFFFF; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill" style="background: rgba(56, 189, 248, 0.15); color: #38BDF8; border-color: rgba(56, 189, 248, 0.3);">25 YEARS HVAC &amp; MECHANICAL SERVICE</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #FFFFFF; margin: 12px 0;">Why Contact Miami Air Conditioning &amp; Heat Repair?</h2>
          <p style="color: #94A3B8; font-size: 1.05rem; line-height: 1.7;">
            A water heater problem needs more than a guess based on one symptom. No hot water can result from different faults depending on whether the unit is electric, gas, or tankless. A leak also needs to be traced to its source before anyone can say whether the heater is repairable.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 26px;">
            <span style="color: #38BDF8; font-size: 1.8rem; font-weight: 800; display: block; margin-bottom: 8px;">01</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">Find Root Cause</h3>
            <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">What is causing the reported water-heating problem through structured testing, not guesswork.</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 26px;">
            <span style="color: #38BDF8; font-size: 1.8rem; font-weight: 800; display: block; margin-bottom: 8px;">02</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">Accurate Fault Location</h3>
            <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">Whether the issue involves a component, connection, valve, or the storage tank shell itself.</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 26px;">
            <span style="color: #38BDF8; font-size: 1.8rem; font-weight: 800; display: block; margin-bottom: 8px;">03</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">Objective Options</h3>
            <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">What repair or replacement options are truly appropriate, backed by written estimates.</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 26px;">
            <span style="color: #38BDF8; font-size: 1.8rem; font-weight: 800; display: block; margin-bottom: 8px;">04</span>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">Clear Scope</h3>
            <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.6;">What work is included in the proposed scope, with plumbing/gas/electrical trade integrity.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         13. RECENT LOCAL PROJECTS SHOWCASE
         ========================================================================== -->
    <section class="section-block" style="background: #FFFFFF; padding: 75px 0;">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 860px; margin: 0 auto 50px auto;">
          <span class="badge-pill">MIAMI CASE STUDIES</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">Recent Water Heater Repairs Across Miami Communities</h2>
          <p style="color: #475569; font-size: 1.05rem;">
            See how our certified technicians resolved complex water heater issues across Miami-Dade and Broward counties.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          <!-- Project 1 -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <img src="images/project-waterheater-miamibeach.jpg" alt="Tankless water heater error code repair in Miami Beach condo" style="width: 100%; height: 210px; object-fit: cover; display: block;">
            <div style="padding: 22px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: #0284C7; text-transform: uppercase;">Miami Beach &bull; Luxury Condo</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 8px 0;">Tankless Error Code &amp; Descaling</h3>
              <p style="color: #475569; font-size: 0.9rem; line-height: 1.6;">
                Diagnosed error code 11 (ignition failure) and severe mineral scaling in high-rise condominium unit. Performed heat exchanger flush and cleaned flame sensor to restore full endless hot water.
              </p>
            </div>
          </div>

          <!-- Project 2 -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <img src="images/project-waterheater-coralgables.jpg" alt="Dual heating element replacement on electric water heater in Coral Gables" style="width: 100%; height: 210px; object-fit: cover; display: block;">
            <div style="padding: 22px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: #0284C7; text-transform: uppercase;">Coral Gables &bull; Historic Estate</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 8px 0;">Dual Heating Element Replacement</h3>
              <p style="color: #475569; font-size: 0.9rem; line-height: 1.6;">
                Homeowner experienced lukewarm water lasting only 5 minutes. Resistance test confirmed burnt lower 4500W element. Replaced both upper and lower elements and thermostats, saving owner from unnecessary tank replacement.
              </p>
            </div>
          </div>

          <!-- Project 3 -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
            <img src="images/project-waterheater-kendall.jpg" alt="Pressure relief valve and brass drain replacement in Kendall home" style="width: 100%; height: 210px; object-fit: cover; display: block;">
            <div style="padding: 22px;">
              <span style="font-size: 0.8rem; font-weight: 700; color: #0284C7; text-transform: uppercase;">Kendall &bull; Single-Family Home</span>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 8px 0;">T&amp;P Relief Valve &amp; Fitting Leak Fix</h3>
              <p style="color: #475569; font-size: 0.9rem; line-height: 1.6;">
                Water pooling in garage was traced to a weeping temperature &amp; pressure relief valve and cracking plastic drain fitting. Replaced with heavy-duty brass valve and code-compliant discharge line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         14. FREQUENTLY ASKED QUESTIONS (GOLD-STANDARD SPLIT FAQ ACCORDION)
         ========================================================================== -->
    <section class="section-block" style="background: #F8FAFC; padding: 75px 0;">
      <div class="container">
        <div class="service-faq-split">
          <!-- Left Column: Sticky Title & Fast Help Box -->
          <div class="service-faq-sidebar">
            <div class="faq-sticky-container">
              <span class="badge-pill">COMMON QUESTIONS</span>
              <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0 16px 0; line-height: 1.2;">Frequently Asked Questions About Water Heater Repair</h2>
              <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin-bottom: 24px;">
                Get clear, professional answers regarding water heater symptoms, leaks, electrical breaker issues, and repair versus replacement decisions.
              </p>

              <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 22px; box-shadow: 0 4px 6px rgba(0,0,0,0.03);">
                <h4 style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin-bottom: 8px;">Need an Immediate Assessment?</h4>
                <p style="color: #475569; font-size: 0.9rem; line-height: 1.5; margin-bottom: 16px;">
                  Our certified technicians can inspect your electric, gas, or tankless water heater today.
                </p>
                <a href="tel:+18336843425" class="btn btn-primary" style="width: 100%; text-align: center; justify-content: center;">Call (833) 684-3425</a>
              </div>
            </div>
          </div>

          <!-- Right Column: Accordion Cards Stack -->
          <div class="service-faq-accordion-stack">
            <!-- FAQ 1 -->
            <div class="faq-card active">
              <button class="faq-question-btn" aria-expanded="true">
                <span>Why is my water heater not heating the water?</span>
                <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="faq-answer-collapse" style="max-height: 500px;">
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
         15. REQUEST SERVICE FORM SECTION
         ========================================================================== -->
    <section class="section-block" id="book-service" style="background: #FFFFFF; padding: 75px 0;">
      <div class="container">
        <div class="service-quote-layout">
          <div class="quote-info-panel">
            <span class="badge-pill">FAST RESPONSE</span>
            <h2 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 12px 0;">Request Hot Water Heater Repair in Miami, FL</h2>
            <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
              No hot water, a leaking tank, or inconsistent water temperature can interrupt your daily routine. The right repair starts with identifying the heater type and finding the source of the problem.
            </p>
            <p style="color: #0F172A; font-weight: 700; margin-bottom: 12px;">
              Contact Miami Air Conditioning &amp; Heat Repair to discuss your water heater issue. When you reach out, let us know:
            </p>
            <ul style="list-style: none; padding: 0; margin: 0 0 24px 0;">
              <li style="padding: 6px 0; display: flex; align-items: center; gap: 10px; color: #475569;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Whether your heater is electric, gas, or tankless.
              </li>
              <li style="padding: 6px 0; display: flex; align-items: center; gap: 10px; color: #475569;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Whether you have no hot water, lukewarm water, a leak, or another issue.
              </li>
              <li style="padding: 6px 0; display: flex; align-items: center; gap: 10px; color: #475569;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                The approximate age and model of the unit, if available.
              </li>
              <li style="padding: 6px 0; display: flex; align-items: center; gap: 10px; color: #475569;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Whether the heater serves one home, a condo, or multiple units.
              </li>
            </ul>
            <p style="color: #0284C7; font-weight: 700; font-size: 1.05rem;">
              Request a water heater service assessment and find out what work your system actually needs.
            </p>
          </div>

          <div class="quote-form-panel">
            <div class="form-wrapper">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Book Water Heater Assessment</h3>
              <p style="color: #64748B; font-size: 0.9rem; margin-bottom: 20px;">Fill out this quick form or call (833) 684-3425 for immediate response.</p>

              <form id="waterHeaterForm" class="service-booking-form">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="e.g. Michael Smith" required>
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
                      <option value="heat-pump-water-heater">Heat Pump Water Heater</option>
                      <option value="unsure">Not Sure / Need Inspection</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="issueCategory">Primary Problem</label>
                    <select id="issueCategory" name="issueCategory">
                      <option value="no-hot-water">No Hot Water At All</option>
                      <option value="lukewarm">Only Lukewarm / Runs Out Fast</option>
                      <option value="leaking">Water Leaking Around Tank</option>
                      <option value="tripping-breaker">Tripping Electrical Breaker</option>
                      <option value="noise">Popping / Rumbling Noises</option>
                      <option value="discolored-water">Rusty or Smelly Water</option>
                      <option value="tankless-error">Tankless Error Code</option>
                      <option value="other">Other / General Assessment</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="propertyType">Property Type</label>
                  <select id="propertyType" name="propertyType">
                    <option value="single-family">Single-Family Home</option>
                    <option value="condo">Condo / High-Rise Apartment</option>
                    <option value="townhome">Townhome</option>
                    <option value="multi-family">Rental / Multi-Unit Complex</option>
                    <option value="commercial">Commercial Facility</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="notes">Symptoms / Notes (Optional)</label>
                  <textarea id="notes" name="notes" rows="3" placeholder="Mention approximate age, error code, or specific faucet symptoms..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 14px 20px;">
                  Submit Water Heater Request &rarr;
                </button>
                <div id="formFeedback" style="margin-top: 14px; font-size: 0.9rem; display: none; text-align: center;"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ==========================================================================
       16. FOOTER
       ========================================================================== -->
  <footer class="main-footer" style="background: #0B1120; color: #94A3B8; padding: 60px 0 30px 0; border-top: 1px solid rgba(255,255,255,0.08);">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 50px;">
        <div>
          <div class="brand-text" style="margin-bottom: 16px;">
            <span class="brand-name" style="color: #FFFFFF; font-size: 1.25rem; font-weight: 800; display: block;">Air Conditioning Repair</span>
            <span class="brand-subtitle" style="color: #38BDF8; font-size: 0.75rem; letter-spacing: 0.08em;">MIAMI &amp; SOUTH FLORIDA</span>
          </div>
          <p style="font-size: 0.9rem; line-height: 1.6; color: #64748B;">
            Dedicated mechanical and HVAC solutions across Southeast Florida. Providing honest diagnostics, transparent repairs, and expert installation.
          </p>
          <div style="margin-top: 16px; font-size: 0.85rem; color: #38BDF8;">
            License: Florida CMC1250482
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
          <p style="font-size: 0.9rem; margin-bottom: 8px; color: #94A3B8;">Miami Air Conditioning &amp; Heat Repair</p>
          <p style="font-size: 0.9rem; margin-bottom: 8px;">
            <a href="tel:+18336843425" style="color: #38BDF8; text-decoration: none; font-weight: 700;">(833) 684-3425</a>
          </p>
          <p style="font-size: 0.85rem; color: #64748B; margin-bottom: 12px;">Serving Miami-Dade &amp; South Broward Counties</p>
          <a href="#book-service" class="btn btn-primary" style="font-size: 0.85rem; padding: 8px 16px;">Request Service</a>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; text-align: center; font-size: 0.85rem; color: #64748B;">
        &copy; 2026 Miami Air Conditioning &amp; Heat Repair. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- ==========================================================================
       17. MOBILE FLOATING CALL BAR
       ========================================================================== -->
  <div class="mobile-sticky-action">
    <a href="tel:+18336843425" class="btn btn-primary mobile-sticky-call">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Call (833) 684-3425
    </a>
    <a href="#book-service" class="btn btn-secondary mobile-sticky-quote">
      Request Service
    </a>
  </div>

  <script src="app.js"></script>
</body>
</html>
`;

fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/service-water-heater-repair.html', html, 'utf8');
fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/hot-water-heater-repair.html', html, 'utf8');
fs.writeFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/water-heater-repair.html', html, 'utf8');
console.log('Successfully written service-water-heater-repair.html, hot-water-heater-repair.html, and water-heater-repair.html');
