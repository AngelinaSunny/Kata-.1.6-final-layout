//////////Навигация на основной странице////////

const linksNav = document.querySelectorAll('.nav__list-item');
const linkNavActive = 'nav__list-item--active';

linksNav[0].classList.add(linkNavActive);

for (let i = 0; i < linksNav.length; i++) {
  let link = linksNav[i];

  link.addEventListener('focusout', () => link.classList.remove(linkNavActive), true);

  link.addEventListener('focusin', () => link.classList.add(linkNavActive), true);
}

//////////Навигация левого меню///////////////

const leftMenuLinks = document.querySelectorAll('.left-nav-list__link');
const linkLeftMenuActive = 'left-nav-list__link--active';

leftMenuLinks[1].classList.add(linkLeftMenuActive);

for (let i = 0; i < leftMenuLinks.length; i++) {
  let link = leftMenuLinks[i];

  link.addEventListener('focusout', () => link.classList.remove(linkLeftMenuActive), true);

  link.addEventListener('focusin', () => link.classList.add(linkLeftMenuActive), true);
}