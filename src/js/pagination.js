import Pagination from 'tui-pagination';
import { exerciseParams } from './search.js';

function createPaginationExercisesInner(totalPages) {
  if (window.innerWidth >= 1440) {
    exerciseParams.limit = 9;
  } else {
    exerciseParams.limit = 8;
  }

  console.log(exerciseParams.limit);

  const container = document.querySelector('.tui-pagination');
  const options = {
    totalItems: exerciseParams.limit * totalPages,
    itemsPerPage: exerciseParams.limit,
    visiblePages: 3,
    centerAlign: true,
  };

  const instance = new Pagination(container, options);
  console.log(instance);

  return instance;
}

function createPaginationExercisesOuter(totalPages) {
  if (window.innerWidth >= 768) {
    exerciseParams.limit = 12;
  } else {
    exerciseParams.limit = 8;
  }

  console.log(exerciseParams.limit);

  const container = document.querySelector('.tui-pagination');
  const options = {
    totalItems: exerciseParams.limit * totalPages,
    itemsPerPage: exerciseParams.limit,
    visiblePages: 3,
    centerAlign: true,
    // template: {
    //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    //   currentPage:
    //     '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    //   moveButton:
    //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
    //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //     '</a>',
    //   disabledMoveButton:
    //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
    //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //     '</span>',
    //   moreButton:
    //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
    //     '<span class="tui-ico-ellip">...</span>' +
    //     '</a>',
    // },
  };

  const instance = new Pagination(container, options);
  console.log(instance);

  return instance;
}

export { createPaginationExercisesInner, createPaginationExercisesOuter };
