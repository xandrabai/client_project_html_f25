// Highlight active nav link
(function () {
  function getPageName(path) {
    if (!path || path === '/') return 'index.html';
    const parts = path.split('/');
    return parts.pop() || 'index.html';
  }

  const current = getPageName(window.location.pathname);

  const links = document.querySelectorAll('header nav a[href]');
  links.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();
