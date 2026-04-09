// ===== Shared Components =====
// Renders the site header and footer on every page.
// Each page sets <body data-page="projects|about|project-detail"> to mark the active nav link.

(function () {
  const page = document.body.getAttribute('data-page') || '';

  // ── Header ──
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="header-inner">
      <a href="/" class="site-logo">Rea Haas <span>/ Software Engineer</span></a>
      <nav>
        <a href="/" lang="en" class="${page === 'projects' ? 'active' : ''}">Projects</a>
        <a href="/" lang="he" class="${page === 'projects' ? 'active' : ''}">פרויקטים</a>
        <a href="/about/" lang="en" class="${page === 'about' ? 'active' : ''}">About</a>
        <a href="/about/" lang="he" class="${page === 'about' ? 'active' : ''}">אודות</a>
        <div class="lang-toggle">
          <button id="btn-en" class="active" onclick="setLang('en')">EN</button>
          <button id="btn-he" onclick="setLang('he')">עב</button>
        </div>
      </nav>
    </div>`;
  document.body.prepend(header);

  // ── Footer ──
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <span lang="en">&copy; 2026 Rea Haas. Built with HTML &amp; CSS.</span>
    <span lang="he">&copy; 2026 רע הס. נבנה עם HTML &amp; CSS.</span>`;
  document.body.appendChild(footer);

  // ── Language Toggle ──
  function setLang(lang) {
    const html = document.documentElement;
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-he').classList.toggle('active', lang === 'he');

    localStorage.setItem('lang', lang);
  }

  // Expose globally so the onclick handlers work
  window.setLang = setLang;

  // Restore saved preference
  const saved = localStorage.getItem('lang');
  if (saved) setLang(saved);
})();
