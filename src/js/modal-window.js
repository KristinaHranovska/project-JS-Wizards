import { getAccess } from './helper/get-access';

export const refs = {
  backdrop: document.querySelector('.backdrop-thumb'),
  closeIcon: document.querySelector('.js-modal-window'),
  galleryWindow: document.querySelector('.js-gallery'),
  ratingBtn: document.querySelector('.js-open-rating'),
}
export let idExercises;

const raitings = document.querySelectorAll('.raiting')

refs.galleryWindow.addEventListener('click', openModal);

// Відкриття модалки
function openModal(e) {
  if (e.target.classList.contains('js-start')) {
    refs.backdrop.classList.remove('is-open');
    document.body.style.overflow = 'hidden';

    const liElement = e.target.closest('.js-id');

    if (liElement) {
      const id = liElement.dataset.id;
      getExercisesObject(id);
    }
  }
}

// Закриття модального вікна
refs.closeIcon.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);

function closeModal() {
  refs.backdrop.classList.add('is-open');
  document.body.style.overflow = '';

  clearModalContent();
}

function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    refs.backdrop.classList.add('is-open');
    document.body.style.overflow = '';
    clearModalContent();
  }
}
refs.backdrop.addEventListener('click', function (event) {
  if (event.target === this) {
    closeModal();
  }
});

refs.ratingBtn.addEventListener('click', hiddenWindow)

function hiddenWindow() {
  refs.backdrop.classList.add('is-open');
}

// Завантаження сторінки
function getExercisesObject(id) {
  idExercises = id;
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

      refs.img.setAttribute('src', gifUrl || './img/picture/energyflow.png');
      refs.title.textContent = name.charAt(0).toUpperCase() + name.slice(1);
      refs.raiting.textContent = rating;
      refs.targetValue.textContent = target;
      refs.bodyPartValue.textContent = bodyPart;
      refs.equipmentValue.textContent = equipment;
      refs.popularValue.textContent = popularity;
      refs.caloriesValue.textContent = burnedCalories;
      refs.descriptionValue.textContent = description;

      if (raitings.length > 0) {
        initRatings();
      }
    })
    .catch(err => {
      console.error(err);
      const img = document.querySelector('.js-img');
      img.setAttribute('src', './img/picture/energyflow.png');
    });
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

// Зірочки

function initRatings() {
  let ratingActive, ratingValue;

  for (let i = 0; i < raitings.length; i++) {
    const rating = raitings[i];
    initRatings(rating);
  }

  function initRatings(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.raiting-active');
    ratingValue = rating.getElementsByClassName('raiting-value')[0];
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`
  }

}