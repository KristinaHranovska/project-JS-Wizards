import { getAccess } from './helper/get-access';

const backdrop = document.querySelector('.backdrop-thumb');
const closeIcon = document.querySelector('.js-modal-window');
const galleryWindow = document.querySelector('.js-gallery');

const link = document.querySelector('.link-home');
const isActiveLink = link.getAttribute('href');
const currentPage = window.location.pathname;
const removeCards = document.querySelector('.buttons-modal');

// Якщо поточна сторінка - index.html, то показуємо блок з кнопкою
if (currentPage.includes('index.html') || isActiveLink === './index.html') {
  console.log(isActiveLink);
  removeCards.classList.remove('visually-hidden');
}

if (
  currentPage.includes('favorites.html') ||
  isActiveLink === './favorites.html'
) {
  console.log(isActiveLink);
  removeCards.classList.add('visually-hidden');
}
galleryWindow.addEventListener('click', openModal);

// Відкриття модалки
function openModal(e) {
  if (e.target.classList.contains('js-start')) {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = 'hidden';

    const liElement = e.target.closest('.js-id');

    if (liElement) {
      const id = liElement.dataset.id;
      getExercisesObject(id);
    }
  }
}

// Закриття модального вікна
closeIcon.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);

function closeModal(e) {
  backdrop.classList.add('is-open');
  document.body.style.overflow = '';

  clearModalContent();
}

function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    backdrop.classList.add('is-open');
    document.body.style.overflow = '';
  }
}
backdrop.addEventListener('click', function (event) {
  if (event.target === this) {
    closeModal();
  }
});

// Завантаження сторінки
function getExercisesObject(id) {
  getAccess({ typeFilter: 'exercises', id: id })
    .then(({ data }) => {
      const {
        name,
        rating,
        target,
        bodyPart,
        equipment,
        popularity,
        burnedCalories,
        description,
        gifUrl,
        _id,
      } = data;

      const modalWindow = document.querySelector('.modal-window');
      modalWindow.setAttribute('data-modal-id', _id);

      const refs = {
        img: document.querySelector('.js-img'),
        title: document.querySelector('.js-title'),
        raiting: document.querySelector('.js-raiting'),
        targetValue: document.querySelector('.js-target'),
        bodyPartValue: document.querySelector('.js-body-part'),
        equipmentValue: document.querySelector('.js-equipment'),
        popularValue: document.querySelector('.js-popular'),
        caloriesValue: document.querySelector('.js-calories'),
        descriptionValue: document.querySelector('.js-description'),
      };

      const fixedRating = Math.round(rating).toFixed(1);

      const stars = document.querySelectorAll('.raiting-item .icon-star');

      stars.forEach((star, index) => {
        if (index < Math.floor(fixedRating)) {
          star.classList.remove('non-activ');
        } else if (index === Math.floor(fixedRating) && fixedRating % 1 !== 0) {
          star.classList.remove('non-activ');
        } else {
          star.classList.add('non-activ');
        }
      });

      refs.img.setAttribute('src', gifUrl);
      refs.title.textContent = name.charAt(0).toUpperCase() + name.slice(1);
      refs.raiting.textContent = fixedRating;
      refs.targetValue.textContent = target;
      refs.bodyPartValue.textContent = bodyPart;
      refs.equipmentValue.textContent = equipment;
      refs.popularValue.textContent = popularity;
      refs.caloriesValue.textContent = burnedCalories;
      refs.descriptionValue.textContent = description;
    })
    .catch(err => console.error(err));
}

// Очіщюємо вміст модалки після закриття
function clearModalContent() {
  const refs = {
    img: document.querySelector('.js-img'),
    title: document.querySelector('.js-title'),
    raiting: document.querySelector('.js-raiting'),
    targetValue: document.querySelector('.js-target'),
    bodyPartValue: document.querySelector('.js-body-part'),
    equipmentValue: document.querySelector('.js-equipment'),
    popularValue: document.querySelector('.js-popular'),
    caloriesValue: document.querySelector('.js-calories'),
    descriptionValue: document.querySelector('.js-description'),
  };

  // Встановлюємо пусті значення для всіх елементів модального вікна
  refs.img.setAttribute('src', '');
  refs.title.textContent = '';
  refs.raiting.textContent = '';
  refs.targetValue.textContent = '';
  refs.bodyPartValue.textContent = '';
  refs.equipmentValue.textContent = '';
  refs.popularValue.textContent = '';
  refs.caloriesValue.textContent = '';
  refs.descriptionValue.textContent = '';

  // Очищаємо класи зірок рейтингу
  const stars = document.querySelectorAll('.raiting-item .icon-star');
  stars.forEach(star => {
    star.classList.add('non-activ');
  });
}
