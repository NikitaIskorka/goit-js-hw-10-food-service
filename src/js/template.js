import menuTpl from '../templates/food-cards.hbs';
import menu from '../menu.json';
const menuMarkup = menuTpl(menu);
const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
