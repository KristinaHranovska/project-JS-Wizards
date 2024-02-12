import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

function createPagination(perPage, totalPages) {
  const container = document.querySelector('.tui-pagination');
  //   const visiblePages = totalPages < 3 ? totalPages : 3;
  const options = {
    totalItems: perPage * totalPages,
    itemsPerPage: perPage,
    visiblePages: 5,
    centerAlign: true,
  };
  const instance = new Pagination(container, options);

  //   if (visiblePages <= 1) {
  //     instance.style.display = 'none';
  //   } else {
  //     instance.style.display = 'block';
  //   }

  return instance;
}

export { createPagination };
