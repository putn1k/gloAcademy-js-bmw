const navMenu = document.querySelector('.menu');
const menuButton = document.querySelector('.humburger-menu');
const navLinkElements = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
  navMenu.classList.toggle('menu-active');
  menuButton.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {
  navMenu.classList.remove('menu-active');
  menuButton.classList.remove('humburger-menu-active');
}

menuButton.addEventListener( 'click', toggleMenu);

navLinkElements.forEach( (link) => {
  link.addEventListener( 'click', closeMenu);
});

