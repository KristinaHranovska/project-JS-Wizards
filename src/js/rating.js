import { refs } from "./modal-window";
import iziToast from 'izitoast';

const numberRating = document.querySelector('.js-rating');
const labelgInputs = document.querySelectorAll('.rating__label');
const backdrop = document.querySelector('.backdrop-rating-thumb')
const closeRatingModal = document.querySelector('.js-rating-window');
const ratingBtn = document.querySelector('.js-open-rating');
const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const inputEmail = document.querySelector('.js-input');
const textareaComment = document.querySelector('.js-textarea')
const formRating = document.querySelector('.js-form')

// налаштування зірочок
let lastClickedRating = 0;
labelgInputs.forEach(input => {
    input.addEventListener('mouseover', function (event) {
        const rating = Number(event.target.getAttribute('data-value'));
        numberRating.textContent = rating.toFixed(1);
    });
    input.addEventListener('mouseout', function () {
        if (lastClickedRating > 0) {
            numberRating.textContent = lastClickedRating.toFixed(1);
        } else {
            numberRating.textContent = '0.0';
        }
    });
    input.addEventListener('click', function (event) {
        lastClickedRating = Number(event.target.getAttribute('data-value'));
        numberRating.textContent = lastClickedRating.toFixed(1);
    });
});


ratingBtn.addEventListener('click', openModal);

// Відкриття модалки
function openModal() {
    backdrop.classList.remove('is-close');
    document.body.style.overflow = 'hidden';
}

// Закриття модального вікна
closeRatingModal.addEventListener('click', closeModal);

function closeModal() {
    backdrop.classList.add('is-close');
    document.body.style.overflow = '';
    refs.backdrop.classList.remove('is-open');
}

backdrop.addEventListener('click', function (event) {
    if (event.target === this) {
        refs.backdrop.classList.remove('is-open');
        closeModal();
    }
});

formRating.addEventListener('submit', sendRating)

function sendRating(event) {
    event.preventDefault();
    const email = inputEmail.value.trim();
    if (!pattern.test(email)) {
        iziToast.error({
            message: 'Enter the correct email!'
        });
    }
}