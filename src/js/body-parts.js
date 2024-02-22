// відображення вправ після натискання на картку, перенести потім у файл боді-партс

import axios from 'axios';
import icons from '../img/icons/sprite.svg';
import { galleryElement, searchInputField, exerciseParams } from './search.js';
import { createPaginationExercisesInner } from './pagination';
export { updateExercisesList, loadExercises, renderExercises };

const params = {
  page: 1,
  limit: 1,
  filter: 'Muscles',
};

// Ця функція оновлює список вправ на основі наданого фільтра.Він очищає вміст galleryElement.

function updateExercisesList(filter) {
  if (window.innerWidth >= 1440) {
    params.limit = 9;
  } else {
    params.limit = 8;
  }
  galleryElement.innerHTML = '';
  loadExercises(filter, params.page)
    .then(data => {
      if (data.results.length === 0) {
        document.querySelector('.tui-pagination').style.display = 'none';
        galleryElement.innerHTML =
          '<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
      } else {
        renderExercises(data.results);
        const filterCards = document.querySelectorAll('.js-animation-exercises');
        filterCards.forEach(card => {
          card.classList.add('animation-items');
        });
        const disappearance = setTimeout(() => {
          filterCards.forEach(card => {
            card.classList.remove('animation-items');
          });
        }, 500);
        if (data.totalPages > 1) {
          document.querySelector('.tui-pagination').style.display = 'flex';
          createPaginationExercisesInner(data.totalPages).on(
            'afterMove',
            ({ page }) => {
              loadExercises(filter, page).then(data => {
                galleryElement.innerHTML = '';
                renderExercises(data.results);
                const filterCards = document.querySelectorAll('.js-animation-exercises');
                filterCards.forEach(card => {
                  card.classList.add('animation-items');
                });
                const disappearance = setTimeout(() => {
                  filterCards.forEach(card => {
                    card.classList.remove('animation-items');
                  });
                }, 500);
              });
            }
          );
        } else {
          document.querySelector('.tui-pagination').style.display = 'none';
        }
      }

    })
    .catch(error => {

      handleError(error.message);
    });
}

// Ця функція завантажує дані вправ із сервера на основі наданого фільтра.

async function loadExercises(filter, page) {

  if (searchInputField.value.length > 0) {
    exerciseParams.keyword = searchInputField.value.trim().toLowerCase();
  } else {
    exerciseParams.keyword = '';
  }
  const data = await axios.get('/exercises', {
    params: {
      [filter]: exerciseParams.filterGroup,
      keyword: exerciseParams.keyword,
      page,
      limit: params.limit,
    },
  });
  return data.data;
}
// Ця функція відтворює дані вправ у DOM. Він приймає отримані дані як вхідні дані. Він генерує HTML-розмітку для кожного елемента вправи за допомогою шаблонних літералів і наданих піктограм.

function renderExercises(data) {
  let markup = data
    .map(
      i =>
        `<li class="exercise-item js-id js-animation-exercises" data-id="${i._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${(i.rating).toFixed(
          2
        )}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${icons}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${i._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${icons}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${icons}#icon-body-parts-fitness"></use></svg></span>
        <h3 class="ex-item-name">${i.name.charAt(0).toUpperCase() + i.name.slice(1)
        }</h3>
      </span>
      <div class="ex-item-info">
        <span class="ex-info-group">
          <span class="ex-item-desc">Burned calories:</span>
          <span class="ex-item-value">${i.burnedCalories} / ${i.time} min</span>
        </span>
        <span class="ex-info-group">
          <span class="ex-item-desc">Body part:</span>
          <span class="ex-item-value">${i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)
        }</span>
        </span>
        <span class="ex-info-group">
          <span class="ex-item-desc">Target:</span>
          <span class="ex-item-value">${i.target.charAt(0).toUpperCase() + i.target.slice(1)
        }</span>
        </span>
      </div>
    </li>`
    )
    .join('');

  galleryElement.innerHTML = markup;
}
