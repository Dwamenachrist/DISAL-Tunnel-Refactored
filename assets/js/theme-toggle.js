/* ============================================================
   DISAL HOSTING PLATFORM — Theme Toggle
   Default: LIGHT mode (brand-first experience)
   Persists choice in localStorage('theme')
   ============================================================ */

// 1. Init on page load (render-blocking to prevent flash of wrong theme)
(function initTheme() {
    const saved = localStorage.getItem('theme');

    // Only go dark if explicitly saved as 'dark'
    // Default is LIGHT — no system-preference detection needed
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        // Ensure clean state on first visit
        if (!saved) localStorage.setItem('theme', 'light');
    }
})();

// 2. Toggle function (globally available — called by theme toggle buttons)
window.toggleTheme = function () {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
