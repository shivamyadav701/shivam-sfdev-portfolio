// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  icon.className = 'fa-solid fa-sun';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
navToggle.addEventListener('click', () => navList.classList.toggle('open'));
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Case study accordion
document.querySelectorAll('.cs-toggle').forEach(btn => {
  const body = btn.nextElementSibling;
  body.style.maxHeight = '0px';
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.cs-toggle').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.style.maxHeight = '0px';
    });
    if (!open) {
      btn.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});
