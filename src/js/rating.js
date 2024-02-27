import { patchAccess } from "./helper/get-access";
import { idExercises, refs } from "./modal-window";
import iziToast from 'izitoast';

const refsRating = {
    numberRating: document.querySelector('.js-rating'),
    labelsInputs: document.querySelectorAll('.rating__label'),
    backdrop: document.querySelector('.backdrop-rating-thumb'),
    closeRatingModal: document.querySelector('.js-rating-window'),
    ratingBtn: document.querySelector('.js-open-rating'),
    inputEmail: document.querySelector('.js-input'),
    textareaComment: document.querySelector('.js-textarea'),
    formRating: document.querySelector('.js-form'),
}
const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let lastClickedRating = 0;

// налаштування зірочок
refsRating.labelsInputs.forEach(input => {
    input.addEventListener('mouseover', function (event) {
        const rating = Number(event.target.getAttribute('data-value'));
        refsRating.numberRating.textContent = rating.toFixed(1);
    });
    input.addEventListener('mouseout', function () {
        if (lastClickedRating > 0) {
            refsRating.numberRating.textContent = lastClickedRating.toFixed(1);
        } else {
            refsRating.numberRating.textContent = '0.0';
        }
    });
    input.addEventListener('click', function (event) {
        lastClickedRating = Number(event.target.getAttribute('data-value'));
        refsRating.numberRating.textContent = lastClickedRating.toFixed(1);
    });
});

refsRating.ratingBtn.addEventListener('click', openModal);

// Відкриття модалки
function openModal() {
    refsRating.backdrop.classList.remove('is-close');
    document.body.style.overflow = 'hidden';
}

// Закриття модального вікна
refsRating.closeRatingModal.addEventListener('click', closeModal);

function closeModal() {
    refsRating.backdrop.classList.add('is-close');
    document.body.style.overflow = '';
    refs.backdrop.classList.remove('is-open');
}

refsRating.backdrop.addEventListener('click', function (event) {
    if (event.target === this) {
        refs.backdrop.classList.remove('is-open');
        closeModal();
    }
});

export const timeToClose = () => setTimeout(() => closeModal(), 1500)

// Функція відправки рейтенгу
refsRating.formRating.addEventListener('submit', sendRating)
function sendRating(event) {
    event.preventDefault();

    const objectDate = {
        rate: lastClickedRating,
        email: refsRating.inputEmail.value.trim(),
        review: refsRating.textareaComment.value.trim(),
    }

    const email = refsRating.inputEmail.value.trim();
    if (!pattern.test(email)) {
        iziToast.error({
            message: 'Enter the correct email!'
        });
    } else {
        patchAccess({
            id: idExercises,
            formData: objectDate,
        })
            .then(() => {
                timeToClose();
                refsRating.formRating.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }
}