// Prevent flash of light theme - run immediately before page renders
(function() {
  const savedMode = localStorage.getItem('theme-mode') || 'system';
  let theme = savedMode;
  if (savedMode === 'system') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();