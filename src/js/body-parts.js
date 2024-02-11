import axios from 'axios';
import icons from '../img/icons/sprite.svg';
import { galleryElement, searchInputField, exerciseParams } from './search.js';
export { updateExercisesList, loadExercises, renderExercises, getLoader };

function updateExercisesList(filter) {
  galleryElement.innerHTML = '';
  loadExercises(filter)
    .then(data => {
      if (data.results.length === 0) {
        galleryElement.innerHTML =
          '<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
      } else {
        renderExercises(data.results);
      }
      getLoader('hide');
    })
    .catch(error => {
      getLoader('hide');
      handleError(error.message);
    });
}

async function loadExercises(filter) {
  getLoader();
  if (searchInputField.value.length > 0) {
    exerciseParams.keyword = searchInputField.value.trim().toLowerCase();
  } else {
    exerciseParams.keyword = '';
  }
  const data = await axios.get('/exercises', {
    params: {
      [filter]: exerciseParams.filterGroup,
      keyword: exerciseParams.keyword,
      page: exerciseParams.page,
      limit: exerciseParams.limit,
    },
  });
  return data.data;
}

function renderExercises(data) {
  let markup = data
    .map(
      i =>
        `<li class="exercise-item" data-id="${i._id}">
      <p class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Number(i.rating).toFixed(1)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${icons}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${i._id}">
          <span>Start</span>
          <svg class="ex-arrow-icon" width="14" height="14"><use href="${icons}#icon-arrow-top"></use></svg>
        </a>
      </p>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${icons}#icon-body-parts-fitness"></use></svg></span>
        <h3 class="ex-item-name">${
          i.name.charAt(0).toUpperCase() + i.name.slice(1)
        }</h3>
      </span>
      <p class="ex-item-info">
        <span class="ex-info-group">
          <span class="ex-item-desc">Burned calories:</span>
          <span class="ex-item-value">${i.burnedCalories} / ${i.time} min</span>
        </span>
        <span class="ex-info-group">
          <span class="ex-item-desc">Body part:</span>
          <span class="ex-item-value">${
            i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)
          }</span>
        </span>
        <span class="ex-info-group">
          <span class="ex-item-desc">Target:</span>
          <span class="ex-item-value">${
            i.target.charAt(0).toUpperCase() + i.target.slice(1)
          }</span>
        </span>
      </p>
    </li>`
    )
    .join('');

  galleryElement.innerHTML = markup;
}

function getLoader(act = 'show') {
  const loader = document.querySelector('.loader');
  if (act === 'show') {
    loader.style.display = 'inline-block';
  } else {
    loader.style.display = 'none';
  }
}
