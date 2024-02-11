  const localStorageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (localStorageData && localStorageData.some(item => item._id === obj._id)) {
    return `
      <div class="modal-content">
        <img class="modal-img" src="${obj.gifUrl}" alt="">

        <div class="modal-info">
          <h4 class="modal-title">${obj.name}</h4>

          <div class="modal-rating">
            <p class="modal-rating-value">${parseFloat(obj.rating)}</p>
          <div class="ex-rating">
                    <div class="ex-rating-body">
                      <div class="ex-rating-active"></div>
                      <div class="ex-rating-items">
                        <input
                          type="radio"
                          class="ex-rating-item"
                          value="1"
                          name="exrating"
                        /><input
                          type="radio"
                          class="ex-rating-item"
                          value="2"
                          name="exrating"
                        /><input
                          type="radio"
                          class="ex-rating-item"
                          value="3"
                          name="exrating"
                        /><input
                          type="radio"
                          class="ex-rating-item"
                          value="4"
                          name="exrating"
                        /><input type="radio" class="ex-rating-item" value="5" name="exrating" />
                      </div>
                    </div>
                  </div>
              </div>

          <ul class="modal-list">
            <li class="modal-list-item">
              <p class="modal-list-item-name">Target</p>
              <p class="modal-list-item-value">${obj.target}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Body Part</p>
              <p class="modal-list-item-value">${obj.bodyPart}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Equipment</p>
              <p class="modal-list-item-value">${obj.equipment}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Popular</p>
              <p class="modal-list-item-value">${obj.popularity}</p>
            </li>
            <li class="modal-list-item">
              <p class="modal-list-item-name">Burned calories</p>
              <p class="modal-list-item-value">${obj.burnedCalories}/3 min</p>
            </li>
          </ul>

          <p class="modal-description">${obj.description}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-buttons">
        <button class="modal-button-favorites-rem" type="button" data-id="${obj._id}">
         Remove from
          <svg
            class="modal-button-favorites-icon"
            width="20"
            height="20"
            aria-label="heart-icon"
          >
            <use href="${heart}#heart"></use>
          </svg>
        </button>

        <button class="modal-button-rating" data-id="${obj._id}">Give a rating</button>
      </div>
  `;
}
  const addToFavoritesBtn = document.querySelector('.modal-button-favorites');
const modalExercises = document.querySelector('.modal');
const body = document.querySelector('body');
modalExercises.addEventListener('click', addToFavorites);

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
        inLocalStorage.push(data);
      } else {
        return;
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inLocalStorage));
    
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