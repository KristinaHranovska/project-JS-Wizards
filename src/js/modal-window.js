import { getAccess } from "./helper/get-access";


const backdrop = document.querySelector('.backdrop-thumb');
const closeIcon = document.querySelector('.js-modal-window');
const galleryWindow = document.querySelector('.exercises-card');

galleryWindow.addEventListener('click', openModal);

// Відкриття модалки
function openModal(e) {
    if (e.target.classList.contains('ex-arrow-icon') || e.target.classList.contains('js-start')) {
        backdrop.classList.remove('is-open');
        document.body.style.overflow = 'hidden';

        const liElement = e.target.closest('.exercise-item');

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

function getExercisesObject(id) {
    getAccess({ typeFilter: 'exercises', id: id })
        .then(({ data }) => {
            const { name, rating, target, bodyPart, equipment, popularity, burnedCalories, description, gifUrl, _id } = data
            const img = document.querySelector(".js-img");
            img.setAttribute('src', gifUrl);
        })
        .catch((err) => console.error(err));
}
