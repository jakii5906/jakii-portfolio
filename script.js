document.addEventListener('DOMContentLoaded', function () {
  // ✅ FORM HANDLER
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesanmu udah terkirim, makasih ya!');
  });

  // ✅ BURGER NAV TOGGLE + ICON TOGGLE
  const burger = document.getElementById('burger');
  const navbar = document.getElementById('navbar');
  const burgerIcon = burger.querySelector('i');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('show');

    // toggle ikon antara burger dan X
    if (navbar.classList.contains('show')) {
      burgerIcon.classList.remove('fa-bars');
      burgerIcon.classList.add('fa-times');
    } else {
      burgerIcon.classList.remove('fa-times');
      burgerIcon.classList.add('fa-bars');
    }
  });

  // ✅ CLOSE MENU NAV AFTER CLICK LINK
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // prevent default behavior

      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (window.innerWidth <= 768) {
        navbar.classList.remove('show');
        burgerIcon.classList.remove('fa-times');
        burgerIcon.classList.add('fa-bars');
      }

      // scroll ke section
      targetEl.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // ✅ SCROLL FADE ANIMATION + SKILL BAR
  const elements = document.querySelectorAll('.scroll-fade');

  function checkScroll() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add('show');

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
});
