import { updateExercisesList } from './body-parts.js';

const exerciseParams = {
  page: 1,
  keyword: '',
  filter: '',
  filterGroup: '',
};

const galleryElement = document.querySelector('.gallery');
const searchInputField = document.querySelector('.search-input');

if (galleryElement) {
  galleryElement.addEventListener('click', handleClickOnCard);
  galleryElement.classList.add('exercises-card');
}

const refs = {
  searchButton: document.querySelector('.search-btn'),
  clearSearchButton: document.querySelector('.search-clear-btn'),
  filterButtonsContainer: document.querySelector('.exercises-btns-div'),
  searchFormContainer: document.querySelector('.ex-search'),
  sectionHeaderElement: document.querySelector('.exercises-header'),
}

// обробляємо клік по карточці для групи вправ

function handleClickOnCard(event) {
  event.preventDefault();
  if (event.target.closest('ul').dataset.exercises) {
    refs.searchButton.addEventListener('click', handleSearchButtonClick);
    refs.clearSearchButton.addEventListener('click', handleClearSearchInput);
    searchInputField.addEventListener('input', handleSearchInput);
    refs.filterButtonsContainer.addEventListener('click', handleClickOnFilterButton);
    refs.searchFormContainer.style.display = 'block';

    const filterButton = document.querySelector('.exercises-button.active');
    exerciseParams.filter = filterButton.dataset.filter;
    exerciseParams.filterGroup = event.target.closest('ul').dataset.exercises;
    const headerContent = `Exercises / <span class="head-small">${exerciseParams.filterGroup.charAt(0).toUpperCase() +
      exerciseParams.filterGroup.slice(1)
      }</span>`;
    refs.sectionHeaderElement.innerHTML = headerContent;
    updateExercisesList(exerciseParams.filter);
  }
  return;
}
// обробляємо клік по кнопці пошуку  і також очищаємо поле пошуку

function handleSearchButtonClick(event) {
  event.preventDefault();
  if (searchInputField.value.length > 0) {
    exerciseParams.page = 1;
    exerciseParams.keyword = searchInputField.value.trim().toLowerCase();
    updateExercisesList(exerciseParams.filter, true);

    searchInputField.value = '';
    refs.clearSearchButton.style.visibility = 'hidden';
  }
  return;
}

// Обробка пошукового тексту в полі пошуку

function handleSearchInput() {
  if (searchInputField.value.length > 0) {
    refs.clearSearchButton.style.visibility = 'visible';
  } else {
    refs.clearSearchButton.style.visibility = 'hidden';
  }
}

// Очищаємо поле пошуку при натисканні на кнопку

function handleClearSearchInput() {
  searchInputField.value = '';
  refs.clearSearchButton.style.visibility = 'hidden';
  exerciseParams.page = 1;
  updateExercisesList(exerciseParams.filter, exerciseParams.filterGroup);
}

// Відбувається пошук по пошуковому слову та очищаємо поле пошуку при натисканні на enter

searchInputField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const keyword = searchInputField.value.trim().toLowerCase();
    exerciseParams.keyword = keyword;
    refs.clearSearchButton.style.visibility = 'hidden';
    exerciseParams.page = 1;
    updateExercisesList(exerciseParams.filter, exerciseParams.filterGroup);
    searchInputField.value = '';
  }
});

// Обробляємо клік по одній з трьох кнопок. Видаляємо слухачі подій. Очищаємо поле пошуку.

function handleClickOnFilterButton(event) {
  if (event.target.tagName === 'BUTTON') {
    searchInputField.value = '';
    refs.searchFormContainer.style.display = 'none';
    galleryElement.innerHTML = '';
    galleryElement.classList.remove('exercises-card');
    refs.searchButton.removeEventListener('click', handleSearchButtonClick);
    refs.clearSearchButton.removeEventListener('click', handleClearSearchInput);
    searchInputField.removeEventListener('input', handleSearchInput);
    refs.filterButtonsContainer.removeEventListener(
      'click',
      handleClickOnFilterButton
    );

    exerciseParams.page = 1;
    refs.sectionHeaderElement.innerHTML = 'Exercises';
  }
}

export { galleryElement, searchInputField, exerciseParams };
