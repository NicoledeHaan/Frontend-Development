var menu;
var navigatie;

/* selecteren van html elementen: .menu en .navigation */
menu = document.querySelector('.menu');
navigatie = document.querySelector('.navigatie');

function hamburgerMenu() {
  menu.classList.toggle('active');
  navigatie.classList.toggle('active');
}

/* door te klikken op het menu wordt de functie hamburgerMenu uitgevoerd */
menu.addEventListener('click', hamburgerMenu);