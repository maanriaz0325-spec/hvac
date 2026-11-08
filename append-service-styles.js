const fs = require('fs');

const cssToAdd = `
/* ==========================================================================
   ENHANCED RESPONSIVE STYLING FOR ALL HVAC & MECHANICAL SERVICE PAGES
   ========================================================================== */

.service-problems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 26px;
}

@media (max-width: 768px) {
  .service-problems-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.problem-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.problem-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  border-color: #0284C7;
}

.problem-card .problem-image-wrap {
  position: relative;
  width: 100%;
  height: 210px;
  background: #F1F5F9;
  overflow: hidden;
}

.problem-card .problem-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.problem-card:hover .problem-image-wrap img {
  transform: scale(1.03);
}

.problem-card .problem-badge-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(6px);
  color: #38BDF8;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  padding: 5px 11px;
  border-radius: 6px;
  text-transform: uppercase;
  border: 1px solid rgba(56, 189, 248, 0.35);
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.problem-card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.problem-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 10px;
  line-height: 1.35;
}

.problem-card-desc {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.62;
  margin-bottom: 8px;
}

/* Service FAQ Accordion Stack */
.service-faq-accordion-stack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-card .faq-answer-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-card.open .faq-answer-collapse,
.faq-card.active .faq-answer-collapse {
  max-height: 800px;
}

.faq-chevron {
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.faq-card.open .faq-chevron,
.faq-card.active .faq-chevron {
  transform: rotate(180deg);
  color: #0284C7;
}

.service-guarantee-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.service-guarantee-strip .guarantee-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
}

.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

@media (max-width: 600px) {
  .form-grid-2 {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

/* Guarantee no breaking across all screens */
img {
  max-width: 100%;
  height: auto;
}
`;

fs.appendFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/styles.css', cssToAdd, 'utf8');
console.log('Successfully appended enhanced responsive styles to styles.css');
