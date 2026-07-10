/* =============================================================
   MAKARONI LAW FIRM — JS v3 "Berkas & Presisi"
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile Menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Navbar Scroll ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Section Ref Click (Copy Anchor Link) ---------- */
  document.querySelectorAll('.section-ref').forEach(ref => {
    ref.addEventListener('click', () => {
      const target = ref.dataset.target;
      if (target) {
        const url = window.location.origin + window.location.pathname + '#' + target;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url);
          ref.style.color = 'var(--annotation)';
          setTimeout(() => ref.style.color = '', 1200);
        }
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Margin Ref Fade-in on Scroll ---------- */
  const refs = document.querySelectorAll('.section-ref');
  if (refs.length) {
    const refObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    refs.forEach(ref => {
      ref.style.opacity = '0';
      ref.style.transform = 'translateY(8px)';
      ref.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      refObserver.observe(ref);
    });
  }

  /* ---------- Scroll Reveal (.reveal -> .visible) ---------- */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasActive = item.classList.contains('active');

      item.parentElement.querySelectorAll('.faq-item.active').forEach(el => {
        el.classList.remove('active');
      });

      if (!wasActive) item.classList.add('active');
    });
  });

  /* ---------- Filter Tabs ---------- */
  document.querySelectorAll('.filter-tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.filter-tab');
    const section = tabGroup.closest('section') || tabGroup.closest('.doc-content');
    const items = section ? section.querySelectorAll('[data-category]') : [];

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;

        items.forEach(item => {
          item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
        });
      });
    });
  });

  /* ---------- Active Nav Link ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Dark Mode ---------- */
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const saved = localStorage.getItem('mlf-theme') || 'light';
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('mlf-theme', next);
      themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  /* ---------- Back to Top ---------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const toggle = () => backToTop.classList.toggle('visible', window.scrollY > 400);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Newsletter ---------- */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"], .form-input');
      const success = form.nextElementSibling;
      if (input && form.checkValidity() && emailRegex.test(input.value.trim())) {
        input.value = '';
        if (success) {
          success.classList.add('show');
          setTimeout(() => success.classList.remove('show'), 5000);
        }
      } else if (input) {
        input.reportValidity();
      }
    });
  });

  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      const emailInput = contactForm.querySelector('#email');
      if (emailInput && !emailRegex.test(emailInput.value.trim())) {
        emailInput.setCustomValidity('Format email tidak valid (misal: nama@perusahaan.co.id)');
        emailInput.reportValidity();
        emailInput.addEventListener('input', () => emailInput.setCustomValidity(''), { once: true });
        return;
      }
      contactForm.style.display = 'none';
      successMessage.style.display = 'block';
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

});
