// відображення вправ після натискання на картку, перенести потім у файл боді-партс
import axios from 'axios';
import icons from '../img/icons/sprite.svg';
import { galleryElement, searchInputField, exerciseParams } from './search.js';
export { updateExercisesList, renderExercises };
async function updateExercisesList(filter) {
  try {
    const data = await getExercisesData(filter);
    const results = data.results;

    if (results.length === 0) {
      // No results found
      galleryElement.innerHTML = `<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`;
    } else {
      // Results found, render exercises
      renderExercises(results);
    }
  } catch (error) {
    // Error handling
    handleError(error.message);
  }
}

async function getExercisesData(filter) {
  const keyword = searchInputField.value.trim().toLowerCase();
  const params = {
    [filter]: exerciseParams.filterGroup,
    keyword: keyword,
    page: exerciseParams.page,
    limit: exerciseParams.limit,
  };

  const response = await axios.get('/exercises', { params });
  return response.data;
}

function renderExercises(data) {
  let markup = data
    .map(i => {
      return `
      <li class="exercise-item" data-id="${i._id}">
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
          <h3 class="ex-item-name">${capitalizeFirstLetter(i.name)}</h3>
        </span>
        <p class="ex-item-info">
          <span class="ex-info-group">
            <span class="ex-item-desc">Burned calories:</span>
            <span class="ex-item-value">${i.burnedCalories} / ${
        i.time
      } min</span>
          </span>
          <span class="ex-info-group">
            <span class="ex-item-desc">Body part:</span>
            <span class="ex-item-value">${capitalizeFirstLetter(
              i.bodyPart
            )}</span>
          </span>
          <span class="ex-info-group">
            <span class="ex-item-desc">Target:</span>
            <span class="ex-item-value">${capitalizeFirstLetter(
              i.target
            )}</span>
          </span>
        </p>
      </li>`;
    })
    .join('');

  galleryElement.innerHTML = markup;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function handleError(message) {
  iziToast.error({
    position: 'topRight',
    message: message,
  });
}
