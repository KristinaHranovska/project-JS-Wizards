import { createCardFavorites } from "./favorities";

const storedArrayAdd = JSON.parse(localStorage.getItem('addKeyID')) || [];
let cardID;

const refs = {
    addToFavoritesBtn: document.querySelector('.add-to-favorities'),
    removeFromFavoritesBtn: document.querySelector('.js-remove'),
    idModul: document.querySelector('.js-gallery'),
}

refs.idModul.addEventListener('click', getIDModul);
function getIDModul(e) {
    const liElement = e.target.closest('.js-id');
    if (liElement) {
        cardID = liElement.dataset.id;

        if (updateLicalStorage().includes(cardID)) {
            refs.removeFromFavoritesBtn.classList.remove('hidden-btn');
            refs.addToFavoritesBtn.classList.add('hidden-btn');
        } else {
            refs.removeFromFavoritesBtn.classList.add('hidden-btn');
            refs.addToFavoritesBtn.classList.remove('hidden-btn');
        }
    }
}

if (!localStorage.getItem('addKeyID')) {
    const emptyArrayAdd = [];
    localStorage.setItem('addKeyID', JSON.stringify(emptyArrayAdd));
}

refs.addToFavoritesBtn.addEventListener('click', () => getIdFavorites(cardID));

function getIdFavorites(cardID) {
    refs.removeFromFavoritesBtn.classList.remove('hidden-btn');
    refs.addToFavoritesBtn.classList.add('hidden-btn');

    updateGallery(cardID);

    storedArrayAdd.push(cardID); // Оновлення масиву storedArrayAdd
    localStorage.setItem('addKeyID', JSON.stringify(storedArrayAdd));
}

refs.removeFromFavoritesBtn.addEventListener('click', () => removeIdFavorites(cardID));

export function removeIdFavorites(cardID) {
    refs.removeFromFavoritesBtn.classList.add('hidden-btn');
    refs.addToFavoritesBtn.classList.remove('hidden-btn');
    updateGallery(cardID);

    const cardToRemove = document.querySelector(`.list-favorites-item[data-id="${cardID}"]`);
    if (cardToRemove) {
        cardToRemove.classList.add('animation-items-remove'); // Додаємо клас для анімації видалення
        setTimeout(() => {
            cardToRemove.remove();
        }, 500); // Час, необхідний для виконання анімації
    }
    storedArrayAdd.splice(storedArrayAdd.indexOf(cardID), 1); // Оновлення масиву storedArrayAdd
    localStorage.setItem('addKeyID', JSON.stringify(storedArrayAdd));
}

function updateGallery(cardID) {
    const savedCards = storedArrayAdd.filter(card => card !== cardID);
    localStorage.setItem('addKeyID', JSON.stringify(savedCards));

    const cardToRemove = document.querySelector(`.list-favorites-item[data-id="${cardID}"]`);
    if (!cardToRemove) {
        createCardFavorites([cardID])
    }
}

function updateLicalStorage() {
    return localStorage.getItem('addKeyID');
}
