import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

function createPaginationExercisesInner(totalPages) {
  let perPage = 0;
  if (window.innerWidth <= 768) {
    perPage = 8;
  } else {
    perPage = 9;
  }

  const container = document.querySelector('.tui-pagination');
  const options = {
    totalItems: perPage * totalPages,
    itemsPerPage: perPage,
    visiblePages: 3,
    centerAlign: true,
  };

  const instance = new Pagination(container, options);

  return instance;
}

export { createPaginationExercisesInner };
