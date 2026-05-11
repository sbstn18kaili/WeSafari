const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const enquiryForm = document.querySelector('.enquiry-form');
const formNote = document.querySelector('.form-note');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(enquiryForm);
  const name = formData.get('name') || 'traveler';
  formNote.textContent = `Asante sana, ${name}! Great Roar Safaris will be in touch with a custom itinerary shortly.`;
  enquiryForm.reset();
});
