 //Туман войны
 const overlay = document.querySelector('.body__overlay');
 const overlayShow = 'body__overlay--show';

 //Медиазапросы
 const mediaMobile = window.matchMedia('(max-width: 767.98px)');
 const mediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439.98px)');
 const mediaDesktop = window.matchMedia('(min-width: 1440px)');

 ///////////Обратный звонок//////////////
 const feedbackCall = document.querySelector('.feedback__call');
 const feedbackCallShow = 'feedback__call--show';
 const buttonCall = document.querySelectorAll('.btn__call');

 /////////////Написать сообщение////////////////
 const feedbackMessage = document.querySelector('.feedback__message');
 const feedbackMessageShow = 'feedback__message--show';
 const buttonMessage = document.querySelectorAll('.btn__message');

 ///////////////Левое меню///////////////////
 const leftMenu = document.querySelector('.left-menu');
 const leftMenuShow = 'left-menu--show';
 const buttonBurger = document.querySelector('.burger-btn');

 ///////////////Кнопки ЗАКРЫТЬ///////////
 const buttonClose = document.querySelectorAll('.button-close');

 /////показать/скрыть текст статьи на главной/////////
 const textClose = 'Скрыть';
 const textRead = 'Читать далее';
 const transformArrow = 'button-show__close';
 const articleTexts = document.querySelectorAll('.article__text');
 const articleButton = document.querySelector('.article-button');
 const textHidden = 'article__text--hidden';

 //////////////Кнопки показать/скрыть блоки//////////
 const buttonsArrow = document.querySelectorAll('.button-show__arrow');
 const buttonsHidden = document.querySelectorAll('.button-show__btn');
 const textShow = 'Показать все';
 const buttonsText = document.querySelectorAll('.button-show__text');
 const hiddenLinks = document.querySelectorAll('.swiper-container__swiper-wrapper');

 //******************ФУНКЦИИ******************//
 ///////////Обратный звонок//////////////
 for (let i = 0; i < buttonCall.length; i++) {
   let button = buttonCall[i];

   button.addEventListener('click', () => {
     leftMenu.classList.remove(leftMenuShow);
     showModal(feedbackCall, feedbackCallShow);

   });
 }

 /////////////Написать сообщение////////////////
 for (let i = 0; i < buttonMessage.length; i++) {
   let button = buttonMessage[i];

   button.addEventListener('click', () => {
     leftMenu.classList.remove(leftMenuShow);
     showModal(feedbackMessage, feedbackMessageShow);

   });
 }

 ///////////////Левое меню///////////////////
 buttonBurger.addEventListener('click', () => {
   showModal(leftMenu, leftMenuShow);
 });


 ///////////////Кнопки ЗАКРЫТЬ///////////
 for (let i = 0; i < buttonClose.length; i++) {
   let button = buttonClose[i];

   button.addEventListener('click', () => {
     if (leftMenu.classList.contains(leftMenuShow)) {
       leftMenu.classList.remove(leftMenuShow);
     }
     if (feedbackMessage.classList.contains(feedbackMessageShow)) {
       feedbackMessage.classList.remove(feedbackMessageShow);
     }
     if (feedbackCall.classList.contains(feedbackCallShow)) {
       feedbackCall.classList.remove(feedbackCallShow);
     }
     overlay.classList.remove(overlayShow);
   })
 }

 ///////Функция открытия модальных окон/////////////
 function showModal(selector, className) {
   selector.classList.add(className);
   overlay.classList.add(overlayShow);

 }

 /////Определение скрытого текста при загрузке/////
 function hiddenTextStart() {
   if (mediaMobile.matches) {
     articleTexts[1].classList.add(textHidden);
     articleTexts[2].classList.add(textHidden);
     articleTexts[3].classList.add(textHidden);
   }
   if (mediaTablet.matches) {
     articleTexts[2].classList.add(textHidden);
     articleTexts[3].classList.add(textHidden);
   }
   if (mediaDesktop.matches) {
     articleTexts[3].classList.add(textHidden);
   }
 }

 hiddenTextStart();

 /////показать/скрыть текст статьи на главной/////////
 articleButton.addEventListener('click', () => {
   showArticleText()
 })

 function showArticleText() {
   const arowArticleText = document.querySelector('.article-button__icon');
   const articleButtonText = document.querySelector('.article-button__text');

   if (mediaMobile.matches) {
     articleTexts[1].classList.toggle(textHidden);
     articleTexts[2].classList.toggle(textHidden);
     articleTexts[3].classList.toggle(textHidden);
   }
   if (mediaTablet.matches) {
     articleTexts[2].classList.toggle(textHidden);
     articleTexts[3].classList.toggle(textHidden);
   }
   if (mediaDesktop.matches) {
     articleTexts[3].classList.toggle(textHidden);
   }
   if (arowArticleText.classList.contains(transformArrow)) {
     articleButtonText.textContent = textRead;
     arowArticleText.classList.remove(transformArrow);
   } else if (!arowArticleText.classList.contains(transformArrow)) {
     articleButtonText.textContent = textClose;
     arowArticleText.classList.add(transformArrow);
   }
 }

 //////////////Кнопки показать/скрыть блоки//////////
 for (let i = 0; i < buttonsHidden.length; i++) {
   const classHiddenLink = 'swiper-wrapper--hidden';
   let button = buttonsHidden[i];
   let arrow = buttonsArrow[i];
   let text = buttonsText[i];
   let link = hiddenLinks[i];

   button.addEventListener('click', function() {
     if (link.classList.contains(classHiddenLink)) {
       link.classList.remove(classHiddenLink);
       arrow.classList.add(transformArrow);
       text.textContent = textClose;
     } else {
       link.classList.add(classHiddenLink);
       arrow.classList.remove(transformArrow);
       text.textContent = textShow;
     }
   });
 }