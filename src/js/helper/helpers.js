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

function createMarkup(arrayExercises, codeWord, icons) {
  return arrayExercises
    .map(
      ({ name, target, bodyPart, burnedCalories, _id, rating, time }) => {
        let template;
        const tamplateRating = `<span class="ex-rating-group">
        <span class="ex-item-rating">${(rating).toFixed(
          2
        )}</span>
        <svg class="ex-star-icon" width="18" height="18"><use href="${icons}#icon-rating-star"></use></svg>
      </span>`
        const tamplateRemove = `<button type="button" class="button-remove js-remove-favorites">
        <svg class="delete-favorites" data-id="${_id}" width="16" height="16">
            <use href="${icons}#icon-favorites-delete"></use>
        </svg>
        </button>`

        if (codeWord === 'remove') {
          template = tamplateRemove;
        } else if (codeWord === 'rating') {
          template = tamplateRating
        }

        return `<li class="exercise-item js-id js-animation-exercises js-list" data-id="${_id}">
  <div class="ex-item-head">
    <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
  ${template}
    </span>
    <a class="ex-item-start" href="#" data-id="${_id}">
      <span class="js-start">Start</span>
      <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${icons}#arrow"></use></svg>
    </a>
  </div>
  <span class="ex-title">
    <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${icons}#icon-body-parts-fitness"></use></svg></span>
    <h3 class="ex-item-name">${name.charAt(0).toUpperCase() + name.slice(1)
          }</h3>
  </span>
  <div class="ex-item-info">
    <span class="ex-info-group">
      <span class="ex-item-desc">Burned calories:</span>
      <span class="ex-item-value">${burnedCalories} / ${time} min</span>
    </span>
    <span class="ex-info-group">
      <span class="ex-item-desc">Body part:</span>
      <span class="ex-item-value">${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
          }</span>
    </span>
    <span class="ex-info-group">
      <span class="ex-item-desc">Target:</span>
      <span class="ex-item-value">${target.charAt(0).toUpperCase() + target.slice(1)
          }</span>
    </span>
  </div>
</li>`}
    )
    .join('');
}

export { iziToastFunctions, createMarkup, createMarkupFilter };
