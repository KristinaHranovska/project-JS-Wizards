const addToFavoritesBtn = document.querySelector('.add-to-favorities');
const removeFromFavoritesBtn = document.querySelector('.js-remove');
const modal = document.querySelector('.modal-window');
const idModul = document.querySelector('.js-gallery');
const storedArrayAdd = JSON.parse(localStorage.getItem('addKeyID')) || [];
const storedArrayRemove = JSON.parse(localStorage.getItem('addKremoveKeyIDeyID')) || [];
let cardID;
idModul.addEventListener('click', getIDModul);
function getIDModul(e) {
    const liElement = e.target.closest('.js-id');
    if (liElement) {
        cardID = liElement.dataset.id;
        if (storedArrayAdd.includes(cardID)) {
            removeFromFavoritesBtn.classList.remove('hidden-btn');
            addToFavoritesBtn.classList.add('hidden-btn');
        } else {
            removeFromFavoritesBtn.classList.add('hidden-btn');
            addToFavoritesBtn.classList.remove('hidden-btn');
        }
    }
}
if (!localStorage.getItem('addKeyID')) {
    const emptyArrayAdd = [];
    localStorage.setItem('addKeyID', JSON.stringify(emptyArrayAdd));
}
if (!localStorage.getItem('removeKeyID')) {
    const emptyArrayRemove = [];
    localStorage.setItem('removeKeyID', JSON.stringify(emptyArrayRemove));
}
addToFavoritesBtn.addEventListener('click', getIdFavorites);
function getIdFavorites() {
    removeFromFavoritesBtn.classList.remove('hidden-btn');
    addToFavoritesBtn.classList.add('hidden-btn');
    const storedArrayFavorites = JSON.parse(localStorage.getItem('addKeyID'));
    storedArrayFavorites.push(cardID);
    localStorage.setItem('addKeyID', JSON.stringify(storedArrayFavorites));
}
removeFromFavoritesBtn.addEventListener('click', removeIdFavorites)
function removeIdFavorites() {
    console.log('click')
    console.log(cardID)
    removeFromFavoritesBtn.classList.add('hidden-btn');
    addToFavoritesBtn.classList.remove('hidden-btn');
    const storedArrayRemove = JSON.parse(localStorage.getItem('removeKeyID'));
    storedArrayRemove.push(cardID);
    localStorage.setItem('removeKeyID', JSON.stringify(storedArrayRemove));
    const index = storedArrayAdd.indexOf(cardID);
    if (index !== -1) {
        storedArrayAdd.splice(index, 1);
        localStorage.setItem('addKeyID', JSON.stringify(storedArrayAdd));
    }
}