// Цікавлять ті рядки, де body
// Працює тільки при перевикористанні стилів

(() => {
  const mobileMenu = document.querySelector('.header-navigation');
  const openMenuBtn = document.querySelector('.mob-menu-button');
  const body = document.querySelector('body');



  
  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    body.classList.toggle('no-scroll');

    
    
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      body.classList.remove('no-scroll');
  });
})();




// document
//     .querySelector('.js-speaker-modal-form')
//     .addEventListener('submit', e => {
//       e.preventDefault();

//       new FormData(e.currentTarget).forEach((value, name) =>
//         console.log(`${name}: ${value}`),
//       );
//     });