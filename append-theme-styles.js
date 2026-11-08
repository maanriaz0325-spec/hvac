const fs = require('fs');

const cssToAdd = `
/* ==========================================================================
   THEME CONSISTENT SECTION & PROJECT SHOWCASE STYLING
   ========================================================================== */

.service-projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 992px) {
  .service-projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .service-projects-grid {
    grid-template-columns: 1fr;
  }
}

.service-project-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.service-project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-blue);
}

.service-project-media {
  position: relative;
  width: 100%;
  height: 220px;
  background: var(--primary-navy);
  overflow: hidden;
}

.service-project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.service-project-card:hover .service-project-media img {
  transform: scale(1.03);
}

.service-project-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.service-project-location {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary-blue);
  margin-bottom: 6px;
}

.service-project-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--heading-navy);
  margin-bottom: 8px;
  line-height: 1.35;
}

.service-project-desc {
  font-size: 0.92rem;
  color: var(--body-text);
  line-height: 1.6;
  margin-bottom: 14px;
  flex: 1;
}

.service-project-metric {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--theme-orange);
  background: var(--theme-orange-light);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  display: inline-block;
  align-self: flex-start;
}

/* Service problem boxes matching flagship layout */
.service-problems-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .service-problems-cards-grid {
    grid-template-columns: 1fr;
  }
}

.service-problem-box {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.service-problem-box:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-blue);
}

.service-problem-frame {
  position: relative;
  width: 100%;
  height: 200px;
  background: var(--primary-navy);
  overflow: hidden;
}

.service-problem-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.service-problem-box:hover .service-problem-img {
  transform: scale(1.03);
}

.service-problem-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.service-problem-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--heading-navy);
  margin-bottom: 10px;
  line-height: 1.35;
}

.service-problem-desc {
  font-size: 0.92rem;
  color: var(--body-text);
  line-height: 1.6;
  margin-bottom: 12px;
}

.service-problem-solution {
  background: var(--pale-blue-subtle);
  border-left: 3px solid var(--primary-blue);
  padding: 12px 14px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.55;
  margin-top: auto;
}

.service-problem-solution strong {
  color: var(--primary-navy);
}

/* Educational comparison cards */
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

.comparison-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 30px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.comparison-card.accent {
  border-top: 4px solid var(--primary-blue);
}

.comparison-card.navy {
  border-top: 4px solid var(--primary-navy);
}
`;

fs.appendFileSync('c:/Users/Hp/Downloads/cool-comfort-hvac/styles.css', cssToAdd, 'utf8');
console.log('Appended theme-consistent project and problem box styles to styles.css');
