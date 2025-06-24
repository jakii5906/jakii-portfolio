const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Pesanmu udah terkirim, makasih ya!');
});


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
}

console.log("Scroll detected");

if (el.id === "skills") {
  console.log("Skills section muncul!");
  const bar = document.querySelector('.skill-bar');
  if (bar) {
    bar.classList.add('show');
    console.log("Skill bar dikasih class 'show'");
  }
}

      }
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
