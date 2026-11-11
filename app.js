/**
 * Cool Comfort Heating & Air Conditioning
 * Master Application Script
 * Enhanced with 6-Review Slider, Swipe Support, and Split FAQ Accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Dropdown Header Toggle (Hover on desktop, click-to-toggle on mobile, prevent default navigation)
    navMenu.querySelectorAll('.nav-dropdown > .nav-link').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.innerWidth <= 1180) {
          const parent = dropdownToggle.closest('.nav-dropdown');
          if (parent) {
            const wasOpen = parent.classList.contains('open');
            // Close other dropdowns
            navMenu.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
            if (!wasOpen) {
              parent.classList.add('open');
            }
          }
        }
      });
    });

    // Close mobile drawer when clicking regular leaf links (or dropdown leaf items)
    navMenu.querySelectorAll('a:not(.nav-dropdown > .nav-link)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1180) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }
      });
    });
  }

  // 2. FAQ Accordion (Split Layout & Service Pages)
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const btn = card.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        faqCards.forEach(c => c.classList.remove('open'));
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    }
  });

  const serviceFaqItems = document.querySelectorAll('.service-faq-item');
  serviceFaqItems.forEach(item => {
    const btn = item.querySelector('.service-faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        serviceFaqItems.forEach(i => {
          i.classList.remove('open');
          const b = i.querySelector('.service-faq-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 2.1 Interactive ZIP Code Checker
  const zipBtn = document.getElementById('serviceZipBtn');
  const zipInput = document.getElementById('serviceZipInput');
  const zipResult = document.getElementById('serviceZipResult');

  if (zipBtn && zipInput && zipResult) {
    const validSouthFloridaZipPrefixes = ['330', '331', '332', '333', '334'];
    zipBtn.addEventListener('click', () => {
      const val = zipInput.value.trim();
      if (!val || val.length < 5) {
        zipResult.style.display = 'block';
        zipResult.style.background = '#FEE2E2';
        zipResult.style.color = '#B91C1C';
        zipResult.textContent = 'Please enter a valid 5-digit South Florida ZIP code.';
        return;
      }

      const prefix = val.substring(0, 3);
      if (validSouthFloridaZipPrefixes.includes(prefix)) {
        zipResult.style.display = 'block';
        zipResult.style.background = '#ECFDF5';
        zipResult.style.color = '#047857';
        zipResult.innerHTML = `✓ Great news! <strong>ZIP ${val}</strong> is in our primary South Florida service territory. Same-day appointments and emergency dispatch are available.`;
      } else {
        zipResult.style.display = 'block';
        zipResult.style.background = '#EFF6FF';
        zipResult.style.color = '#1D4ED8';
        zipResult.innerHTML = `ZIP <strong>${val}</strong> is just outside our core zone, but our team regularly accommodates nearby projects. Call <a href="tel:+18336843425" style="color: inherit; text-decoration: underline;"><strong>(833) 684-3425</strong></a> to confirm availability.`;
      }
    });

    zipInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        zipBtn.click();
      }
    });
  }

  // 3. Modal Functionality
  const quoteModal = document.getElementById('quoteModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const quoteModalButtons = document.querySelectorAll('[data-open-modal="quote"]');

  function openModal(defaultService = '') {
    if (!quoteModal) return;
    if (defaultService) {
      const select = quoteModal.querySelector('select[name="service"]');
      if (select) {
        // Try matching select options or set first
        let matched = false;
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value.toLowerCase().includes(defaultService.toLowerCase())) {
            select.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched && select.options.length > 0) select.options[0].selected = true;
      }
    }
    quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!quoteModal) return;
    quoteModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  quoteModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal && quoteModal.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Interactive Problem Cards -> Pre-fills Quote Form
  const problemCards = document.querySelectorAll('.problem-card');
  problemCards.forEach(card => {
    card.addEventListener('click', () => {
      const problemName = card.querySelector('.problem-name')?.textContent?.trim() || 'HVAC Repair';
      openModal(problemName);
      showToast(`Selected: "${problemName}". Complete your free estimate request.`);
    });
  });

  // 5. Toast Notification System
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 6. Unified Backend Form Submission Handler (Direct AJAX to Dispatch Endpoint)
  // Obfuscated dispatch endpoint (never exposed openly in HTML text)
  const _dispatchEndpoint = 'https://formsubmit.co/ajax/' + atob('amFtZXNzdGVybGluZzU3N0BnbWFpbC5jb20=');

  const leadForms = document.querySelectorAll('form:not(.service-zip-checker-form):not(#serviceZipChecker):not(.service-zip-form):not(#miamiZipForm):not(#furnaceZipForm)');
  leadForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]') || form.querySelector('input[type="text"]');
      const phoneInput = form.querySelector('[name="phone"]') || form.querySelector('input[type="tel"]');
      const name = nameInput ? nameInput.value.trim() : 'Valued Customer';
      const phone = phoneInput ? phoneInput.value.trim() : '';

      if (phoneInput && !phone) {
        alert('Please provide a valid phone number for fast dispatch.');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Request...';
      }

      // Collect all inputs
      const payload = {
        _subject: 'New Miami HVAC Service Request (' + (document.title || 'Website') + ')',
        page_url: window.location.href,
        submitted_at: new Date().toLocaleString(),
        name: name,
        phone: phone
      };

      const formData = new FormData(form);
      formData.forEach((value, key) => {
        if (value && typeof value === 'string' && value.trim()) {
          payload[key] = value.trim();
        }
      });

      try {
        await fetch(_dispatchEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn('Form dispatch notice:', err);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }

      showToast(`Thank you, ${name}! Your service request was submitted. A technician will call you shortly.`);

      const feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      form.reset();
      if (typeof closeModal === 'function') closeModal();
    });
  });

  // 7. Customer Reviews Carousel: 6 Reviews in 2 Slides with Arrows, Dots & Touch Swipe
  const reviewsTrack = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('prevReviewBtn');
  const nextBtn = document.getElementById('nextReviewBtn');
  const dots = document.querySelectorAll('.review-dot');
  const slideIndicator = document.getElementById('reviewSlideIndicator');
  
  let currentSlide = 0; // 0 or 1
  const totalSlides = 2;

  function goToSlide(slideIndex) {
    if (!reviewsTrack) return;
    currentSlide = slideIndex;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    reviewsTrack.style.transform = `translateX(-${currentSlide * 50}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    if (slideIndicator) {
      slideIndicator.textContent = `Page ${currentSlide + 1} of ${totalSlides} (Showing ${currentSlide === 0 ? '1-3' : '4-6'} of 6 Reviews)`;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // Touch Swipe on mobile
  if (reviewsTrack) {
    let startX = 0;
    let endX = 0;

    reviewsTrack.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    reviewsTrack.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      handleGesture();
    }, { passive: true });

    function handleGesture() {
      if (endX < startX - 50) {
        // swipe left -> next
        goToSlide(currentSlide + 1);
      }
      if (endX > startX + 50) {
        // swipe right -> prev
        goToSlide(currentSlide - 1);
      }
    }
  }

  // 8. Service & About Page Form Handlers handled by unified dispatcher above

  // 9. Dynamic Header Shadow on Scroll
  const mainHeader = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.style.boxShadow = '0 4px 20px rgba(6, 26, 48, 0.12)';
    } else {
      mainHeader.style.boxShadow = '0 1px 3px rgba(6, 26, 48, 0.06)';
    }
  });
});
