//////////Навигация на основной странице////////

const linksNav = document.querySelectorAll('.nav__list-item');
const linkNavActive = 'nav__list-item--active';

linksNav[0].classList.add(linkNavActive);

linksNav.forEach(el => {
  el.addEventListener('focusin', () => {
    linksNav.forEach(el => {
      el.classList.remove(linkNavActive);
    });
    el.classList.add(linkNavActive);
  })
});

//////////Навигация левого меню///////////////

const leftMenuLinks = document.querySelectorAll('.left-nav-list__link');
const linkLeftMenuActive = 'left-nav-list__link--active';

leftMenuLinks[1].classList.add(linkLeftMenuActive);

leftMenuLinks.forEach(link => {
  link.addEventListener('focusin', () => {
    leftMenuLinks.forEach(link => {
      link.classList.remove(linkLeftMenuActive);
    });
    link.classList.add(linkLeftMenuActive);
  })
});
