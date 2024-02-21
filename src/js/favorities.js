import { getAccess } from './helper/get-access.js';
import { createCardExercises, iziToastFunctions } from './helper/helpers.js';


const refs = {
    favoritesCard: document.getElementById('favorites-container'),
    removeCards: document.querySelector(".container-remove-favorites"),
    deleteButtons: document.querySelectorAll('.button-remove'),
    galleryWindow: document.querySelector('.js-gallery'),
}

function savedCardsStorage() {
    try {
        const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
        displayFavoriteCards(savedCards);
    }
    catch (err) {
        console.log(err)
        iziToastFunctions.getErrorInfo('Wrong operation!!!');
    }
}

function displayFavoriteCards(savedCards) {
    if (!savedCards || savedCards.length === 0) {
        showRemoveCards();
    } else {
        createCardFavorites(savedCards)
        hideRemoveCards();
        smoothScrollToNextGroup();
    }
    checkContainerHeight();

}

refs.galleryWindow.addEventListener('click', deleteFavorites);

function deleteFavorites(e) {
    if (e.target.classList.contains('js-remove-favorites')) {
        const card = e.target.closest('.list-favorites-item');

        card.classList.add('animation-items-remove'); // Додаємо клас для анімації видалення

        setTimeout(() => {
            const cardId = card.dataset.id;
            removeFavoriteCard(cardId);
            card.remove();

            const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
            if (savedCards.length === 0) {
                showRemoveCards();
            }
        }, 500); // Час, необхідний для виконання анімації
    }
}



function removeFavoriteCard(id) {
    let savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
    savedCards = savedCards.filter(card => card !== id);
    localStorage.setItem('addKeyID', JSON.stringify(savedCards));
}

function showRemoveCards() {
    refs.removeCards.classList.remove("is-hidden");
}

function hideRemoveCards() {
    refs.removeCards.classList.add("is-hidden");

}

function smoothScrollToNextGroup() {
    const favoritesItem = document.querySelector(".scroll");
    if (favoritesItem) {
        const galleryItemHeight = favoritesItem.getBoundingClientRect().height;
        window.scrollBy({
            top: 0,
            behavior: "smooth",
        });
    }
}

function checkContainerHeight() {
    const container = refs.favoritesCard;
    const extraSpace = 200; // Додатковий простір
    const content = container.querySelector(".list-favorites");
    const cardHeight = 165; // Висота однієї картки
    const rowsToShow = 4; // Кількість рядків, після яких з'явиться скролбар

    if (content) {
        const rowsCount = Math.ceil(content.children.length / 3); // Кількість рядків

        // Перевірка, чи кількість рядків перевищує задану кількість
        if (rowsCount > rowsToShow) {
            container.style.overflowY = "scroll";
        } else {
            container.style.overflowY = "hidden";
        }
    }
}

if (window.location.pathname.endsWith('/favorites.html')) {
    savedCardsStorage();
}

export function createCardFavorites(arr) {
    Promise.all(arr.map(value =>
        getAccess({ typeFilter: 'exercises', id: value })
    ))
        .then(results => {
            const dataList = results.map(result => result.data);
            const markup = createCardExercises(dataList);
            const favoritesCard = document.getElementById('favorites-container');

            // Перевіряємо, чи елемент favoritesCard існує
            if (favoritesCard) {
                favoritesCard.insertAdjacentHTML("beforeend", markup);

                const filterCards = document.querySelectorAll('.js-animation');
                filterCards.forEach(card => {
                    card.classList.add('animation-items');
                });
                const disappearance = setTimeout(() => {
                    filterCards.forEach(card => {
                        card.classList.remove('animation-items');
                    });
                }, 500);

                checkContainerHeight();
            }
        })
        .catch(err => console.error(err));
}