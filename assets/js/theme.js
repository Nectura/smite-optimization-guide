function setTheme(mode) {
  localStorage.setItem('theme-mode', mode);
  applyTheme(mode);
  updateActiveButton(mode);
}

function applyTheme(mode) {
  if (mode === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', mode);
  }
}

function updateActiveButton(mode) {
  document.querySelectorAll('.theme-toggle button').forEach(btn => {
    btn.classList.remove('active');
  });
  const buttons = document.querySelectorAll('.theme-toggle button');
  if (mode === 'light') buttons[0].classList.add('active');
  else if (mode === 'dark') buttons[1].classList.add('active');
  else buttons[2].classList.add('active');
}

// Update active button on page load
const savedMode = localStorage.getItem('theme-mode') || 'system';
updateActiveButton(savedMode);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const currentMode = localStorage.getItem('theme-mode') || 'system';
  if (currentMode === 'system') {
    applyTheme('system');
  }
});