document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          const headerHeight = document.querySelector('header').offsetHeight;

          window.scrollTo({
              top: targetSection.offsetTop - headerHeight,
              behavior: 'smooth'
          });
      });
  });

  // Add animation to sections when they come into view
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
          }
      });
  }, { threshold: 0.1 });

  sections.forEach(section => {
      observer.observe(section);
  });
});