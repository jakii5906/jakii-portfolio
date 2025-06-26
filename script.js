// ✅ FORM HANDLER
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Pesanmu udah terkirim, makasih ya!');
});

// ✅ SCROLL FADE ANIMATION + SKILL PROGRESS
const elements = document.querySelectorAll('.scroll-fade');

function checkScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('show');

      // khusus untuk #skills, trigger animasi skill bar
      if (el.id === "skills") {
        const skillBar = document.querySelector('.skill-bar');
        if (skillBar) {
          skillBar.classList.add('show');
          console.log("Skills section muncul & skill bar dikasih class 'show'");
        }
      }
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// ✅ BURGER NAV TOGGLE
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navbar = document.getElementById('navbar');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('show');
    
  });
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // biar gak lompat langsung

    const targetId = this.getAttribute('href'); // dapetin #id tujuan
    const targetEl = document.querySelector(targetId);

    if (window.innerWidth <= 768) {
      navbar.classList.remove('show'); // nutup menu
      burger.classList.remove('active'); // animasi balik
    }

    // scroll smooth ke section
    targetEl.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
