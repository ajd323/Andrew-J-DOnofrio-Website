// Mobile nav toggle
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav');
  if (!nav.contains(e.target)) {
    document.getElementById('navLinks').classList.remove('open');
  }
});

// Highlight active nav link based on current page
(function () {
  // Normalize current path: strip trailing "index.html" and ensure trailing slash for folder URLs
  let path = window.location.pathname;
  if (path.endsWith('/index.html')) path = path.slice(0, -('index.html'.length));
  if (!path.endsWith('/')) path += '/';

  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;

    // Resolve the link's href to an absolute path the same way the browser would
    const resolved = new URL(href, window.location.href).pathname;
    let linkPath = resolved;
    if (linkPath.endsWith('/index.html')) linkPath = linkPath.slice(0, -('index.html'.length));
    if (!linkPath.endsWith('/')) linkPath += '/';

    if (linkPath === path) {
      link.classList.add('active');
    }
  });
})();