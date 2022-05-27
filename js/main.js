const navbar = document.getElementById('navbar');
const navbarLogo = document.getElementById('navbar-logo');
let prevScrollpos = window.pageYOffset;

navbar.style.top = '0';

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0 ) {
    navbar.style.top = '0';
    navbarLogo.style.display = 'unset';
  } else {
    if (window.innerWidth <= 780) {
      navbar.style.top = '-368px';
      navbarLogo.style.display = 'none';
    } else {
      navbar.style.top = '-110px';
      navbarLogo.style.display = 'none';
    }
  }
  prevScrollpos = currentScrollPos;
};