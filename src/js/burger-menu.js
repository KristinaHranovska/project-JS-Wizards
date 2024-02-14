const favoritesButton = document.querySelector('.link-favorites');
const homeButton = document.querySelector('.link-home');

(() => {
  const refs = {
    openModalBtn: document.querySelector('.burger-menu-open'),
    closeModalBtn: document.querySelector('.burger-closed'),
    modal: document.querySelector('.backdrop'),
    backdrop: document.querySelector('.background-menu'),
  };

  const backdrop = document.querySelector('.backdrop');
  backdrop.classList.add('is-hidden');

  refs.openModalBtn.addEventListener('click', function () {
    toggleModal();
    disableScroll();
  });
  refs.closeModalBtn.addEventListener('click', function () {
    toggleModal();
    enableScroll();
  });

  document.addEventListener('click', function (event) {
    if (!refs.modal.contains(event.target) && !refs.openModalBtn.contains(event.target)) {
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

window.addEventListener('load', () => {
  if (window.location.pathname.endsWith('favorites.html')) {
    favoritesButton.classList.add('active-link');
    homeButton.classList.remove('active-link');
  } else {
    homeButton.classList.add('active-link');
    favoritesButton.classList.remove('active-link');
  }
});

