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

refs.addToFavoritesBtn.addEventListener('click', getIdFavorites);
function getIdFavorites() {
    refs.removeFromFavoritesBtn.classList.remove('hidden-btn');
    refs.addToFavoritesBtn.classList.add('hidden-btn');

    const storedArrayFavorites = JSON.parse(localStorage.getItem('addKeyID'));
    storedArrayFavorites.push(cardID);
    localStorage.setItem('addKeyID', JSON.stringify(storedArrayFavorites));
}

refs.removeFromFavoritesBtn.addEventListener('click', removeIdFavorites);

function removeIdFavorites() {
    refs.removeFromFavoritesBtn.classList.add('hidden-btn');
    refs.addToFavoritesBtn.classList.remove('hidden-btn');

    updateGallery();
}

function updateGallery() {
    const savedCards = storedArrayAdd.filter(card => card !== cardID);
    localStorage.setItem('addKeyID', JSON.stringify(savedCards));

    const cardToRemove = document.querySelector(`.list-favorites-item[data-id="${cardID}"]`);

    if (cardToRemove) {
        cardToRemove.remove();
    }
}

function updateLicalStorage() {
    return localStorage.getItem('addKeyID');
} 