/* ==========================================================================
   main.js — the only script on the site. It does exactly two things:
   1. Opens and closes the mobile menu (below 992px wide)
   2. Switches between dark and light themes (choice remembered)
   No libraries, no animations, nothing runs while you scroll.
   (The tiny script in <head> applies the saved theme before the page paints.)
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- 1. Mobile menu ---------- */
  var menuButton = document.querySelector('.navbar-toggler');
  var menu = document.getElementById('navLinks');

  // Bootstrap's CSS hides ".collapse" unless it also has ".show"
  function setMenu(open) {
    menu.classList.toggle('show', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  }

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      setMenu(!menu.classList.contains('show'));
    });

    // Close the menu after a link is chosen, so the section is visible
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    // Esc closes the menu and puts keyboard focus back on the menu button
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('show')) {
        setMenu(false);
        menuButton.focus();
      }
    });
  }

  /* ---------- 2. Dark / light theme toggle ---------- */
  // The sun/moon icons swap through CSS (.show-in-dark / .show-in-light).
  var root = document.documentElement;
  var themeButton = document.getElementById('themeToggle');

  function syncThemeLabel() {
    var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', 'Switch to ' + next + ' mode');
  }

  if (themeButton) {
    syncThemeLabel();
    themeButton.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-bs-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private browsing: ignore */ }
      syncThemeLabel();
    });
  }
})();
