import { getAccess } from "./helper/get-access";

const backdrop = document.querySelector('.backdrop-thumb');
const closeIcon = document.querySelector('.js-modal-window');
const galleryWindow = document.querySelector('.js-gallery');

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
closeIcon.addEventListener('click', closeModal)

function closeModal() {
    backdrop.classList.add('is-open');
    document.body.style.overflow = '';
}

// Завантаження сторінки
function getExercisesObject(id) {
    getAccess({ typeFilter: 'exercises', id: id })
        .then(({ data }) => {
            const { name, rating, target, bodyPart, equipment, popularity, burnedCalories, description, gifUrl, _id } = data

            const refs = {
                img: document.querySelector(".js-img"),
                title: document.querySelector('.js-title'),
                raiting: document.querySelector('.js-raiting'),
                targetValue: document.querySelector('.js-target'),
                bodyPartValue: document.querySelector('.js-body-part'),
                equipmentValue: document.querySelector('.js-equipment'),
                popularValue: document.querySelector('.js-popular'),
                caloriesValue: document.querySelector('.js-calories'),
                descriptionValue: document.querySelector('.js-description'),
            }

            const fixedRating = Math.round(rating).toFixed(1)

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
            refs.title.textContent = name;
            refs.raiting.textContent = fixedRating;
            refs.targetValue.textContent = target;
            refs.bodyPartValue.textContent = bodyPart;
            refs.equipmentValue.textContent = equipment;
            refs.popularValue.textContent = popularity;
            refs.caloriesValue.textContent = burnedCalories;
            refs.descriptionValue.textContent = description;

        })
        .catch((err) => console.error(err));
}