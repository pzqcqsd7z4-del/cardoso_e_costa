const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
});

const burger = document.getElementById('navBurger');
const links = document.querySelector('.nav__links');
burger?.addEventListener('click', () => {
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Obrigado! A nossa equipa entrará em contacto brevemente.');
  form.reset();
});
