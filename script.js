document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');
const confirmName = document.getElementById('confirmName');
const confirmEmail = document.getElementById('confirmEmail');
const confirmMessage = document.getElementById('confirmMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) return;
  confirmName.textContent = name;
  confirmEmail.textContent = email;
  confirmMessage.textContent = message;
  confirmation.classList.remove('hidden');
  form.reset();
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
