import Pagination from 'tui-pagination';
import { exerciseParams } from './search.js';

function createPaginationExercisesInner(totalPages) {
  if (window.innerWidth >= 1440) {
    exerciseParams.limit = 9;
  } else {
    exerciseParams.limit = 8;
  }

  const container = document.querySelector('.tui-pagination');
  const options = {
    totalItems: exerciseParams.limit * totalPages,
    itemsPerPage: exerciseParams.limit,
    visiblePages: 3,
    centerAlign: true,
  };

  const instance = new Pagination(container, options);

  return instance;
}

function createPaginationExercisesOuter(totalPages) {
  if (window.innerWidth >= 768) {
    exerciseParams.limit = 12;
  } else {
    exerciseParams.limit = 8;
  }

  const container = document.querySelector('.tui-pagination');
  const options = {
    totalItems: exerciseParams.limit * totalPages,
    itemsPerPage: exerciseParams.limit,
    visiblePages: 3,
    centerAlign: true,
  };

  const instance = new Pagination(container, options);

  return instance;
}

export { createPaginationExercisesInner, createPaginationExercisesOuter };
