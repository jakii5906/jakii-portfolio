
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesanmu udah terkirim, makasih ya!');
  });

const toggle = document.getElementById('toggle-dark');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

src="https://unpkg.com/aos@2.3.4/dist/aos.js"

const elements = document.querySelectorAll('.scroll-fade');

  function checkScroll() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);

  