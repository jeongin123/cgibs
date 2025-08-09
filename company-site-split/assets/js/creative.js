(function () {
  const nav = document.querySelector('#mainNav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add('navbar-scrolled');
    else nav.classList.remove('navbar-scrolled');
  }
  document.addEventListener('scroll', onScroll);
  onScroll();
})();
