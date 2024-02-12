import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

function createPagination(screenWidth, totalPages) {
  let perPage;
  if (screenWidth <= 768) {
    perPage = 8;
  } else {
    perPage = 9;
  }

  const container = document.querySelector('.tui-pagination');
  const visiblePages = totalPages < 3 ? totalPages : 3;
  const options = {
    totalItems: perPage * totalPages,
    itemsPerPage: perPage,
    visiblePages,
    centerAlign: true,
  };
  const instance = new Pagination(container, options);

  return instance;
}

export { createPagination };
