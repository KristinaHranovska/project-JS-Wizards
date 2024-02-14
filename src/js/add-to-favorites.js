const storedArrayAdd = JSON.parse(localStorage.getItem('addKeyID')) || [];
const storedArrayRemove = JSON.parse(localStorage.getItem('addKremoveKeyIDeyID')) || [];
let cardID;

const refs = {
    addToFavoritesBtn: document.querySelector('.add-to-favorities'),
    removeFromFavoritesBtn: document.querySelector('.js-remove'),
    modal: document.querySelector('.modal-window'),
    idModul: document.querySelector('.js-gallery'),
}

refs.idModul.addEventListener('click', getIDModul);
function getIDModul(e) {
    const liElement = e.target.closest('.js-id');
    if (liElement) {
        cardID = liElement.dataset.id;
        if (storedArrayAdd.includes(cardID)) {
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
if (!localStorage.getItem('removeKeyID')) {
    const emptyArrayRemove = [];
    localStorage.setItem('removeKeyID', JSON.stringify(emptyArrayRemove));
}

refs.addToFavoritesBtn.addEventListener('click', getIdFavorites);
function getIdFavorites() {
    refs.removeFromFavoritesBtn.classList.remove('hidden-btn');
    refs.addToFavoritesBtn.classList.add('hidden-btn');

    const storedArrayFavorites = JSON.parse(localStorage.getItem('addKeyID'));
    storedArrayFavorites.push(cardID);
    localStorage.setItem('addKeyID', JSON.stringify(storedArrayFavorites));
}

refs.removeFromFavoritesBtn.addEventListener('click', removeIdFavorites)
function removeIdFavorites() {
    refs.removeFromFavoritesBtn.classList.add('hidden-btn');
    refs.addToFavoritesBtn.classList.remove('hidden-btn');

    const storedArrayRemove = JSON.parse(localStorage.getItem('removeKeyID'));
    storedArrayRemove.push(cardID);
    localStorage.setItem('removeKeyID', JSON.stringify(storedArrayRemove));

    const index = storedArrayAdd.indexOf(cardID);
    if (index !== -1) {
        storedArrayAdd.splice(index, 1);
        localStorage.setItem('addKeyID', JSON.stringify(storedArrayAdd));
    }
}