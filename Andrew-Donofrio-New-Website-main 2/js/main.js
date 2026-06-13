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
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') && path.endsWith(link.getAttribute('href').replace(/^.*\//, '/'))) {
      link.classList.add('active');
    }
  });
})();
