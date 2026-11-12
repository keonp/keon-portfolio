// Light/dark toggle. The initial theme is set by the inline script in <head>
// (saved choice, else the OS preference) so the page never flashes.
const root = document.documentElement;
const themeToggle = document.querySelector('.themeToggle');

const syncToggle = () => {
    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
};

themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncToggle();
});

syncToggle();
