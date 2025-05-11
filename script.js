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

document.addEventListener('mousemove', e => {
  document.querySelectorAll('.glow-target').forEach(el => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      el.classList.add('glow-light');
    } else {
      el.classList.remove('glow-light');
    }
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("close-popup");

  popup.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Otomatik kapanma (örneğin 8 saniye sonra)
  setTimeout(() => {
    popup.style.display = "none";
  }, 8000);
});