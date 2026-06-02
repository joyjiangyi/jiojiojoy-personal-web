/* =========================================
   Joy Personal Website — script.js
   ========================================= */

/* === Nav scroll effect === */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* === Reveal on scroll === */
const revealEls = document.querySelectorAll('.reveal, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children].filter(
      el => el.classList.contains('reveal') || el.classList.contains('reveal-right')
    );
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 90);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* === Hero entrance (immediate) === */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => document.querySelector('.hero-text')?.classList.add('visible'), 80);
  setTimeout(() => document.querySelector('.hero-visual')?.classList.add('visible'), 220);
});

/* === Build & animate impact numbers === */
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function runCounter(el) {
  const raw    = parseFloat(el.dataset.target);
  const dec    = parseInt(el.dataset.decimal) || 0;
  const div    = parseFloat(el.dataset.divisor) || 1;   // optional divisor for display
  const target = raw / div;
  const suffix = el.dataset.suffix ?? '';
  const prefix = el.dataset.prefix ?? '';
  const dur    = 2000;
  let t0 = null;

  const numEl   = el.querySelector('.impact-number');
  const labelEl = el.querySelector('.impact-label');

  /* keep label visible immediately */
  if (labelEl) labelEl.style.opacity = '1';

  function tick(now) {
    if (!t0) t0 = now;
    const prog = Math.min((now - t0) / dur, 1);
    const val  = target * easeOutCubic(prog);
    numEl.textContent = prefix + (dec > 0 ? val.toFixed(dec) : Math.round(val).toLocaleString('zh-CN')) + suffix;
    if (prog < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* Inject markup first */
document.querySelectorAll('.impact-item').forEach(el => {
  el.innerHTML = `<span class="impact-number">${el.dataset.prefix ?? ''}0${el.dataset.suffix ?? ''}</span>
                  <span class="impact-label">${el.dataset.label ?? ''}</span>`;
});

/* Trigger counters when section enters viewport */
let impactFired = false;
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !impactFired) {
    impactFired = true;
    document.querySelectorAll('.impact-item').forEach(el => runCounter(el));
  }
}, { threshold: 0.25 }).observe(document.getElementById('impact'));

/* === Case study expand / collapse === */
function toggleCase(id) {
  const card = document.querySelector(`[data-case="${id}"]`);
  const body = document.getElementById(`case-body-${id}`);
  const btn  = card?.querySelector('.case-toggle');
  const isOpen = card?.classList.contains('active');

  /* close all */
  document.querySelectorAll('.case-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.case-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.case-toggle').forEach(b => b.setAttribute('aria-expanded', 'false'));

  if (!isOpen) {
    card?.classList.add('active');
    body?.classList.add('open');
    btn?.setAttribute('aria-expanded', 'true');
  }
}

/* Expose globally (called from onclick in HTML) */
window.toggleCase = toggleCase;

/* === Animate hero bar widths on load === */
window.addEventListener('load', () => {
  document.querySelectorAll('.hv-bar-fill').forEach(el => {
    const w = el.style.width;
    el.style.width = '0';
    setTimeout(() => { el.style.width = w; }, 600);
  });
});

/* === Smooth scroll for anchor links === */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});
