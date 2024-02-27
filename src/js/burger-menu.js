(() => {
  const refs = {
    openModalBtn: document.querySelector('.burger-menu-open'),
    closeModalBtn: document.querySelector('.burger-closed'),
    modal: document.querySelector('.backdrop'),
    backdrop: document.querySelector('.background-menu'),
  };

  refs.modal.classList.add('is-hidden');

  refs.openModalBtn.addEventListener('click', function () {
    toggleModal();
    disableScroll();

    //Для активної лінки
    const homeButtons = document.getElementsByClassName('js-main-link-home');
    const favoritesButtons = document.getElementsByClassName('js-main-link-favorites');
    const currentPath = window.location.pathname;
    const targetPage = 'favorites.html';

    if (currentPath.endsWith(targetPage)) {

      Array.from(favoritesButtons).forEach(button => button.classList.add('active-link'));
      Array.from(homeButtons).forEach(button => button.classList.remove('active-link'));
    } else {

      Array.from(homeButtons).forEach(button => button.classList.add('active-link'));
      Array.from(favoritesButtons).forEach(button => button.classList.remove('active-link'));
    }

  });

  refs.closeModalBtn.addEventListener('click', function () {
    toggleModal();
    enableScroll();
  });

  refs.backdrop.addEventListener('click', function (event) {
    if (event.target === refs.backdrop) {
      toggleModal();
      enableScroll();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.backdrop.classList.toggle('hidden');
  }

  // Функція для заборони прокручування
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  // Функція для дозволу прокручування
  function enableScroll() {
    document.body.style.overflow = '';
  }
})();


const favoritesButton = document.querySelector('.link-favorites');
const homeButton = document.querySelector('.link-home');

window.addEventListener('load', () => {
  if (window.location.pathname.endsWith('favorites.html')) {
    favoritesButton.classList.add('active-link');
    homeButton.classList.remove('active-link');
  } else {
    homeButton.classList.add('active-link');
    favoritesButton.classList.remove('active-link');
  }
});
