// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Click outside menu to close (on mobile)
document.addEventListener('click', (e) => {
  if (
    navList.classList.contains('open') &&
    !navList.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navList.classList.remove('open');
    menuToggle.classList.remove('active');
  }
});

// Works animation on scroll (simple fade-in)
const works = document.querySelectorAll('.wow');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  },
  { threshold: 0.2 }
);
works.forEach(el => observer.observe(el));

// Fade-in CSS (inject)
const style = document.createElement('style');
style.innerHTML = `
.wow { opacity: 0; transform: translateY(32px); transition: opacity .9s cubic-bezier(.39,.575,.565,1), transform .9s cubic-bezier(.39,.575,.565,1);}
.wow.fade-in { opacity: 1; transform: translateY(0);}
`;
document.head.appendChild(style);

// Contact form (ダミー送信)
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('メッセージを送信しました！');
  e.target.reset();
});
