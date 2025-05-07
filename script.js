console.log("Sezaro web sitesi yüklendi.");

// Scroll animasyonu
function handleScrollAnimation() {
  const animatables = document.querySelectorAll('.animate');
  animatables.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Tab geçişi
const tabAbout = document.getElementById('tab-about');
const tabContact = document.getElementById('tab-contact');
const aboutContent = document.getElementById('about-content');
const contactContent = document.getElementById('contact-content');
const indicator = document.querySelector('.tab-indicator');

tabAbout.addEventListener('click', () => {
  tabAbout.classList.add('active');
  tabContact.classList.remove('active');
  aboutContent.style.display = 'block';
  contactContent.style.display = 'none';
  indicator.style.left = '0%';
});

tabContact.addEventListener('click', () => {
  tabContact.classList.add('active');
  tabAbout.classList.remove('active');
  aboutContent.style.display = 'none';
  contactContent.style.display = 'block';
  indicator.style.left = '50%';
});