const modalExercises = document.querySelector('.button');
if (modalExercises) {
  const addToFavoritesBtn = modalExercises.querySelector('.modal-button-favorites');
  addToFavoritesBtn.addEventListener('click', addToFavorites);
} else {
}


export const LOCAL_STORAGE_KEY = 'favoriteData';
export let inLocalStorage;

async function addToFavorites(e) {
  try {
    if (e.target.classList.contains('modal-button-favorites')) {
      inLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      const itemId = await getData(e.target.dataset.id);
      const data = itemId.data;
      const findCopy = inLocalStorage.some(item => item._id === data._id);

      if (!findCopy) {

        const itemName = e.target.getAttribute('data-name');
        const newData = { _id: itemId, name: itemName };
        inLocalStorage.push(newData);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inLocalStorage)); 
      } else {
        return;
      }
    
      setTimeout(() => {
        modalExercises.classList.remove('is-open');
      }, 550);

      body.classList.remove('body-modal');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    
  }
}
function addToLocalStorage(id) {
  try {
    const localStorageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const isIdInStorage = localStorageData.some(item => item._id === id);
    if (!isIdInStorage) {
      const newData = { _id: id };
      localStorageData.push(newData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData));
    }
  } catch (error) {
    console.error('Помилка під час додавання ідентифікатора до локального сховища:', error);
  }
}