const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

const masterFixes = `

/* ==========================================================================
   MASTER FIXES: SERVICE PAGES HERO, PROJECTS, CARDS & BOOKING FORM
   ========================================================================== */

/* 1. Hero Title & Badge Fixes */
.service-hero-title span {
  color: var(--theme-orange) !important;
}

.service-hero .hero-badge {
  background: rgba(217, 119, 6, 0.16) !important;
  border: 1px solid rgba(217, 119, 6, 0.45) !important;
  color: #FCD34D !important;
}

/* 2. Project Card Metadata (Never Mash Together) */
.service-project-meta {
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  margin-top: 14px !important;
  padding-top: 12px !important;
  border-top: 1px solid var(--border-color) !important;
  font-size: 0.88rem !important;
  color: var(--body-text) !important;
}

.service-project-meta .meta-item {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
}

.service-project-meta .meta-item strong {
  color: var(--primary-navy) !important;
  font-weight: 700 !important;
}

.service-project-location {
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  color: var(--primary-blue) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  margin-bottom: 6px !important;
  display: block !important;
}

.service-project-metric {
  display: inline-block !important;
  margin-top: 12px !important;
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  color: var(--theme-orange) !important;
  background: var(--theme-orange-light) !important;
  padding: 4px 10px !important;
  border-radius: var(--radius-sm) !important;
  letter-spacing: 0.03em !important;
  align-self: flex-start !important;
}

/* 3. Projects Grid Architecture */
.service-projects-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 24px !important;
}

@media (max-width: 992px) {
  .service-projects-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 640px) {
  .service-projects-grid {
    grid-template-columns: 1fr !important;
  }
}

.service-project-card {
  background: var(--white) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-md) !important;
  overflow: hidden !important;
  box-shadow: var(--shadow-sm) !important;
  display: flex !important;
  flex-direction: column !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease !important;
}

.service-project-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: var(--shadow-md) !important;
}

.service-project-thumb-wrap,
.service-project-media {
  position: relative !important;
  width: 100% !important;
  height: 220px !important;
  background: var(--pale-blue-subtle) !important;
  overflow: hidden !important;
}

.service-project-thumb,
.service-project-media img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
  transition: transform 0.3s ease !important;
}

.service-project-card:hover .service-project-thumb,
.service-project-card:hover .service-project-media img {
  transform: scale(1.04) !important;
}

.service-project-badge {
  position: absolute !important;
  top: 14px !important;
  left: 14px !important;
  background: rgba(6, 26, 48, 0.85) !important;
  backdrop-filter: blur(4px) !important;
  color: var(--white) !important;
  font-size: 0.78rem !important;
  font-weight: 700 !important;
  padding: 4px 10px !important;
  border-radius: var(--radius-sm) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
}

.service-project-content,
.service-project-body {
  padding: 22px !important;
  display: flex !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
}

.service-project-title {
  font-size: 1.15rem !important;
  font-weight: 800 !important;
  color: var(--primary-navy) !important;
  margin-bottom: 8px !important;
  line-height: 1.35 !important;
}

.service-project-desc {
  font-size: 0.92rem !important;
  color: var(--body-text) !important;
  line-height: 1.6 !important;
  margin-bottom: 14px !important;
  flex-grow: 1 !important;
}

/* 4. Problem & Signs Cards Grid */
.service-problem-box {
  background: var(--white) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-md) !important;
  overflow: hidden !important;
  box-shadow: var(--shadow-sm) !important;
  display: flex !important;
  flex-direction: column !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease !important;
}

.service-problem-box:hover {
  transform: translateY(-3px) !important;
  box-shadow: var(--shadow-md) !important;
  border-color: var(--primary-blue) !important;
}

.service-problem-frame,
.service-card-img-wrap {
  width: 100% !important;
  height: 200px !important;
  background: var(--pale-blue-subtle) !important;
  overflow: hidden !important;
  position: relative !important;
}

.service-problem-img,
.service-problem-frame img,
.service-card-img-wrap img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
  transition: transform 0.3s ease !important;
}

.service-problem-box:hover .service-problem-img,
.service-problem-box:hover .service-problem-frame img {
  transform: scale(1.04) !important;
}

.service-problem-body,
.service-problem-content {
  padding: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
}

.service-problem-title,
.service-problem-content h3 {
  font-size: 1.12rem !important;
  font-weight: 800 !important;
  color: var(--primary-navy) !important;
  margin-bottom: 10px !important;
  line-height: 1.35 !important;
}

.service-problem-desc,
.service-problem-content p {
  font-size: 0.92rem !important;
  color: var(--body-text) !important;
  line-height: 1.6 !important;
  margin-bottom: 14px !important;
  flex-grow: 1 !important;
}

.service-problem-solution {
  background: var(--pale-blue-subtle) !important;
  border-left: 3px solid var(--primary-blue) !important;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0 !important;
  padding: 10px 14px !important;
  font-size: 0.88rem !important;
  color: var(--primary-navy) !important;
  line-height: 1.5 !important;
}

.service-problem-solution strong {
  color: var(--primary-blue) !important;
}

/* 5. Booking & Estimate Consultation Section & Form */
.service-quote-sec,
.section-block#quote-form {
  padding: 78px 0 84px !important;
  background: var(--primary-navy) !important;
  color: var(--white) !important;
}

.service-quote-layout {
  display: grid !important;
  grid-template-columns: 46% 54% !important;
  gap: 48px !important;
  align-items: flex-start !important;
}

@media (max-width: 992px) {
  .service-quote-layout {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
  }
}

.quote-info-panel,
.service-quote-info-card,
.service-quote-dispatch-card {
  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
}

.quote-info-panel .section-label,
.service-quote-info-card .badge-tag,
.service-quote-dispatch-card .dispatch-badge {
  display: inline-flex !important;
  align-items: center !important;
  width: fit-content !important;
  background: rgba(255, 90, 31, 0.16) !important;
  border: 1px solid rgba(255, 90, 31, 0.35) !important;
  color: #FF8552 !important;
  padding: 4px 12px !important;
  border-radius: var(--radius-pill) !important;
  font-size: 0.8rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
}

.quote-info-panel .section-title,
.quote-info-title,
.dispatch-title {
  color: var(--white) !important;
  font-size: 2.1rem !important;
  font-weight: 800 !important;
  line-height: 1.25 !important;
}

.quote-info-panel p,
.quote-info-desc,
.dispatch-desc {
  color: #CBD5E1 !important;
  font-size: 1.02rem !important;
  line-height: 1.65 !important;
}

.quote-info-panel .service-checklist {
  list-style: none !important;
  padding: 0 !important;
  margin: 10px 0 16px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
}

.quote-info-panel .service-checklist li {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  color: var(--white) !important;
  font-size: 0.95rem !important;
}

.quote-info-panel .service-checklist li svg {
  color: var(--theme-orange) !important;
  flex-shrink: 0 !important;
}

.quote-form-panel,
.service-quote-form-card {
  background: var(--white) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: var(--radius-lg) !important;
  padding: 34px 30px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3) !important;
  color: var(--dark-text) !important;
}

.form-wrapper {
  width: 100% !important;
}

.quote-form-panel h3,
.form-card-title,
.quote-form-title {
  font-size: 1.35rem !important;
  font-weight: 800 !important;
  color: var(--primary-navy) !important;
  margin-bottom: 8px !important;
}

.quote-form-panel p,
.form-card-subtitle,
.quote-form-subtitle {
  color: var(--muted-text) !important;
  font-size: 0.92rem !important;
  margin-bottom: 20px !important;
}

.service-booking-form,
.quote-form,
#furnaceReplaceForm,
#heatPumpForm,
#waterHeaterForm,
#furnaceInstallForm {
  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
  width: 100% !important;
}

.form-grid-2,
.quote-form-grid {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 16px !important;
  width: 100% !important;
}

@media (max-width: 640px) {
  .form-grid-2,
  .quote-form-grid {
    grid-template-columns: 1fr !important;
  }
}

.form-group {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
  width: 100% !important;
}

.form-group.full-width {
  grid-column: 1 / -1 !important;
  width: 100% !important;
}

.form-group label {
  font-size: 0.88rem !important;
  font-weight: 700 !important;
  color: var(--primary-navy) !important;
}

.form-group input,
.form-group select,
.form-group textarea,
.form-control {
  width: 100% !important;
  box-sizing: border-box !important;
  padding: 12px 14px !important;
  border: 1.5px solid var(--border-color) !important;
  border-radius: var(--radius-sm) !important;
  font-size: 0.95rem !important;
  font-family: inherit !important;
  color: var(--primary-navy) !important;
  background: var(--white) !important;
  transition: border-color var(--transition-fast) !important;
  display: block !important;
}

.form-group textarea {
  resize: vertical !important;
  min-height: 85px !important;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus,
.form-control:focus {
  outline: none !important;
  border-color: var(--primary-blue) !important;
  box-shadow: 0 0 0 3px rgba(8, 105, 201, 0.15) !important;
}
`;

fs.writeFileSync(cssPath, css + masterFixes, 'utf8');
console.log('Successfully appended master CSS fixes to styles.css');
