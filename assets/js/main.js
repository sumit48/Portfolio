const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('.page-section');

// Smooth scroll and SPA section toggle
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to target
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Highlight active nav link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));

    // Show clicked section with fade-in
    targetSection.classList.add('active');
  });
});

// Show only Home section by default
sections.forEach(sec => sec.classList.remove('active'));
document.getElementById('home').classList.add('active');
navLinks[0].classList.add('active');

// Optional: update active link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-target') === current) {
      link.classList.add('active');
    }
  });
});
