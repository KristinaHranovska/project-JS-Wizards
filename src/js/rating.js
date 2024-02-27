const numberRating = document.querySelector('.js-rating');
const labelgInputs = document.querySelectorAll('.rating__label');
const backdrop = document.querySelector('.backdrop-rating-thumb')
const closeRatingModal = document.querySelector('.js-rating-window');

let lastClickedRating = 0;
// налаштування зірочок
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


// refs.galleryWindow.addEventListener('click', openModal);

// // Відкриття модалки
// function openModal(e) {
//   if (e.target.classList.contains('js-start')) {
//     refs.backdrop.classList.remove('is-open');
//     document.body.style.overflow = 'hidden';

//     const liElement = e.target.closest('.js-id');

//     if (liElement) {
//       const id = liElement.dataset.id;
//       getExercisesObject(id);
//     }
//   }
// }

// Закриття модального вікна
closeRatingModal.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalByEsc);

function closeModal() {
    console.log('hello')
    backdrop.classList.add('is-close');
    document.body.style.overflow = '';
}

function closeModalByEsc(e) {
    if (e.code === 'Escape') {
        backdrop.classList.add('is-close');
        document.body.style.overflow = '';
    }
}
backdrop.addEventListener('click', function (event) {
    if (event.target === this) {
        closeModal();
    }
});