import './js/burger-menu'
import './js/quote'
import './js/favorities'
import './js/modal-window'

import { getAccess } from './helper/get-access.js';
import { iziToastFunctions } from './helper/helpers.js';
const refs = {
    favoritesCard: document.getElementById('favorites-container'),
    removeCards: document.querySelector(".container-remove-favorites"),
    deleteButtons: document.querySelectorAll('.button-remove'),
    galleryWindow: document.querySelector('.js-gallery'),
}
function savedCardsStorage() {
    try {
        const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
        console.log(savedCards);
        displayFavoriteCards(savedCards);
    } catch (error) {
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
}
refs.galleryWindow.addEventListener('click', deleteFavorites);
function deleteFavorites(e) {
    if (e.target.classList.contains('js-remove-favorites')) {
        const cardId = e.target.closest('.list-favorites-item').dataset.id;
        removeFavoriteCard(cardId);
        e.target.closest('.list-favorites-item').remove();
        const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
        if (savedCards.length === 0) {
            showRemoveCards();
        }
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
            top: galleryItemHeight * 1,
            behavior: "smooth",
        });
    }
}
savedCardsStorage();
function createCardFavorites(arr) {
    Promise.all(arr.map(value =>
        getAccess({ typeFilter: 'exercises', id: value })
    ))
        .then(results => {
            const dataList = results.map(result => result.data);
            refs.favoritesCard.insertAdjacentHTML("beforeend", createMarkup(dataList));
        })
        .catch(err => console.error(err));
}
function createMarkup(arr) {
    return arr.map(({ name, target, bodyPart, burnedCalories, _id }) =>
        `<li class="list-favorites-item js-id" data-id="${_id}">
    <div class="container-card">
        <div class="container-worcaut">
            <div class="workout-thumb">
            <div class="workout">Workout</div>
            <button type="button" class="button-remove js-remove-favorites">
            <svg class="delete-favorites" data-id="${_id}" width="16" height="16">
                <use href="./img/icons/sprite.svg#icon-favorites-delete"></use>
            </svg>
            </button>
            </div>
            <button type="button" class="button-start">
                Start
                <svg class="icon-arrow-body" width="14" height="14">
                    <use href="./img/icons/sprite.svg#icon-arrow-body-parts"></use>
                </svg>
            </button>
        </div>                  
                <div class="container-cards-favorites">
                    <svg class="icon-parts-fitness" width="24" height="24">
                        <use href="./img/icons/sprite.svg#icon-body-parts-fitness"></use>
                    </svg>
                    <h3 class="subtitle-favorites">${name}</h3>
                </div>
                <div class="container-subtext-info">                           
                    <p class="subtext-info">Burned calories: <span class="mini-info">${burnedCalories}/ 3 min</span></p>                          
                    <p class="subtext-info">Body part: <span class="mini-info">${bodyPart}</span></p>    
                    <p class="subtext-info">Target: <span class="mini-info">${target}</span></p>                           
               </div>
       </div>
</li>`)
        .join('');
}