import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

const iziToastFunctions = {
  getInfo(messageInfo) {
    iziToast.info({
      title: 'Hello',
      message: messageInfo,
    });
  },

  getErrorInfo(messageInfo) {
    iziToast.error({
      title: 'Error',
      message: messageInfo,
    });
  },

  getSuccessInfo(messageInfo) {
    iziToast.success({
      title: 'OK',
      message: messageInfo,
    });
  },
};

function createMarkupFilter(filter, galleryContainer) {
  const markup = filter
    .map(
      ({ filter, imgUrl, name }) => `
      <li class="lists js-list">
      <img src="${imgUrl}" alt="${name}"class="pic">
      <div class="position-text">
      <h2 class="muscles-title">${name}</h2>
      <p class="filter-title">${filter}</p>
      </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  return markup;
}

function createCardExercises(arrayExercises) {
  return arrayExercises.map(({ name, target, bodyPart, burnedCalories, _id }) =>
    `<li class="list-favorites-item js-id js-animation" data-id="${_id}">

  <div class="container-worcaut">
      <div class="workout-thumb">
      <div class="workout">Workout</div>
      <button type="button" class="button-remove js-remove-favorites">
      <svg class="delete-favorites" data-id="${_id}" width="16" height="16">
          <use href="../img/icons/sprite.svg#icon-favorites-delete"></use>
      </svg>
      </button>
      </div>
      <button type="button" class="button-start js-start">
          Start
          <svg class="icon-arrow-body js-start" width="14" height="14">
              <use href="../img/icons/sprite.svg#icon-arrow-body-parts"></use>
          </svg>
      </button>
  </div>                  
          <div class="container-cards-favorites">
              <svg class="icon-parts-fitness" width="24" height="24">
                  <use href="../img/icons/sprite.svg#icon-body-parts-fitness"></use>
              </svg>
              <h3 class="subtitle-favorites">${name.charAt(0).toUpperCase() + name.slice(1)
    }</h3>
          </div>
          <div class="container-subtext-info">                           
             <span class="favorites-card-text-wrapper"> 
             <span class="subtext-info">Burned calories:</span>  
              <span class="mini-info">${burnedCalories}/ 3 min</span>  
              </span>
              <span class="favorites-card-text-wrapper">
              <span class="subtext-info">Body part:</span> 
              <span class="mini-info">${bodyPart}</span>  
              </span>
              <span class="favorites-card-text-wrapper">
              <span class="subtext-info">Target: </span>
              <span class="mini-info">${target}</span>                           
              </span>
         </div>
</li>`)
    .join('');
}

export { iziToastFunctions, createMarkupFilter, createCardExercises };
