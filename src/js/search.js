import {
  updateExercisesList,
  loadExercises,
  renderExercises,
  getLoader,
} from './body-parts.js';
import { createPaginationExercisesInner } from './pagination';
export { galleryElement, searchInputField, exerciseParams };
// import axios from 'axios';
// import icons from '../img/icons/sprite.svg';

const exerciseParams = {
  page: 1,
  totalPages: 1,
  totalItems: 0,
  keyword: '',
  filter: '',
  filterGroup: '',
  limit: 12,
};

const galleryElement = document.querySelector('.gallery');

if (galleryElement) {
  galleryElement.addEventListener('click', handleClickOnCard);
  galleryElement.classList.add('exercises-card');
}

const searchButton = document.querySelector('.search-btn');
const clearSearchButton = document.querySelector('.search-clear-btn');
const searchInputField = document.querySelector('.search-input');
const filterButtonsContainer = document.querySelector('.exercises-btns-div');
const searchFormContainer = document.querySelector('.ex-search');
const sectionHeaderElement = document.querySelector('.exercises-header');

// обробляємо клік по карточці для групи вправ

function handleClickOnCard(event) {
  event.preventDefault();
  if (event.target.closest('ul').dataset.exercises) {
    searchButton.addEventListener('click', handleSearchButtonClick);
    clearSearchButton.addEventListener('click', handleClearSearchInput);
    searchInputField.addEventListener('input', handleSearchInput);
    filterButtonsContainer.addEventListener('click', handleClickOnFilterButton);
    searchFormContainer.style.display = 'block';

    const filterButton = document.querySelector('.exercises-button.active');
    exerciseParams.filter = filterButton.dataset.filter;
    exerciseParams.filterGroup = event.target.closest('ul').dataset.exercises;
    const headerContent = `Exercises / <span class="head-small">${
      exerciseParams.filterGroup.charAt(0).toUpperCase() +
      exerciseParams.filterGroup.slice(1)
    }</span>`;
    sectionHeaderElement.innerHTML = headerContent;
    updateExercisesList(exerciseParams.filter);
  }
  return;
}
// обробляємо клік по кнопці пошуку

function handleSearchButtonClick(event) {
  event.preventDefault();
  if (searchInputField.value.length > 0) {
    exerciseParams.page = 1;
    exerciseParams.keyword = searchInputField.value.trim().toLowerCase();
    updateExercisesList(exerciseParams.filter, true);
  }
  return;
}

// Обробка пошукового тексту в полі пошуку

function handleSearchInput() {
  if (searchInputField.value.length > 0) {
    clearSearchButton.style.visibility = 'visible';
  } else {
    clearSearchButton.style.visibility = 'hidden';
  }
}

// Очищаємо поле пошуку при натисканні на кнопку

function handleClearSearchInput() {
  searchInputField.value = '';
  clearSearchButton.style.visibility = 'hidden';
  exerciseParams.page = 1;
  updateExercisesList(exerciseParams.filter, exerciseParams.filterGroup);
}

// Обробляємо клік по одній з трьох кнопок. Видаляємо слухачі подій. Очищаємо поле пошуку.

function handleClickOnFilterButton(event) {
  if (event.target.tagName === 'BUTTON') {
    searchInputField.value = '';
    searchFormContainer.style.display = 'none';
    galleryElement.innerHTML = '';
    galleryElement.classList.remove('exercises-card');
    searchButton.removeEventListener('click', handleSearchButtonClick);
    clearSearchButton.removeEventListener('click', handleClearSearchInput);
    searchInputField.removeEventListener('input', handleSearchInput);
    filterButtonsContainer.removeEventListener(
      'click',
      handleClickOnFilterButton
    );

    exerciseParams.page = 1;
    sectionHeaderElement.innerHTML = 'Exercises';
  }
}
