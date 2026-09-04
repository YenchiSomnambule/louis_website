(function () {
  var root = document.documentElement;

  /* ---------- Language toggle (繁中 / EN) ---------- */
  function setLang(lang, persist) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');
    document.title = lang === 'zh'
      ? 'Louis Blanc — 流程自動化 · AI Agent · AI 商業落地'
      : 'Louis Blanc — Automation · AI Agents · AI Integration';
    if (persist) {
      try { localStorage.setItem('lang', lang); } catch (e) {}
    }
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'zh' || saved === 'en') {
    setLang(saved, false);
  } else {
    var nav = (navigator.language || '').toLowerCase();
    setLang(nav.indexOf('zh') === 0 ? 'zh' : 'en', false);
  }
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-set-lang'), true); });
  });

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById('menuToggle');
  var list = document.getElementById('globalnavList');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      list.classList.toggle('is-open', !open);
      document.body.classList.toggle('nav-open', !open);
    });
    list.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        list.classList.remove('is-open');
        document.body.classList.remove('nav-open');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var targets = document.querySelectorAll('.offer, .step, .role, .symptoms li, .fit-list li, .facts > div, .figure, .ledger tbody tr');
  if ('IntersectionObserver' in window) {
    targets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
