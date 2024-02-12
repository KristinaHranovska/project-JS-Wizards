import axios from 'axios';
import iziToast from 'izitoast';
import { createPaginationExercisesInner } from './pagination';

const refs = {
  gallery: document.querySelector('.gallery'),
  buttons: document.querySelector('.exercises-btns-div'),
  musclesBtn: document.querySelector('[data-filter="muscles"]'),
  bodypartsBtn: document.querySelector('[data-filter="bodypart"]'),
  equipBtn: document.querySelector('[data-filter="equipment"]'),
};

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';
function getLoader(act = 'show') {
  const loader = document.querySelector('.loader');
  if (act === 'show') {
    loader.style.display = 'inline-block';
  } else {
    loader.style.display = 'none';
  }
}

const params = {
  perPage: 12,
  page: 1,
  filter: 'Muscles',
  totalPages: 1,
  totalItems: 0,
};

async function getData() {
  getLoader();
  const data = await axios.get('/filters', {
    params: {
      filter: params.filter,
      page: params.page,
      limit: params.perPage,
    },
  });

  return data.data;
}

function handleError(message) {
  iziToast.error({
    position: 'topRight',
    message: message,
  });
}

function createMarkup(results) {
  refs.gallery.innerHTML = '';
  const markup = results
    .map(
      ({ name, filter, imgUrl }) => `<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${imgUrl}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${name}">
                <li class="name">${name}</li>
                <li class="filter">${filter}</li>
            </ul>
        </a>
    </li>`
    )
    .join('');

  refs.gallery.innerHTML = markup;
}

async function handleSearch() {
  params.page = 1;
  // Отримати дані з оновленим фільтром
  getData()
    .then(data => {
      const { results } = data;
      const totalItems = results.totalItems;
      const totalPages = Math.ceil(totalItems / refs.screenWidth);

      // createPagination(refs.screenWidth, totalPages);
      createMarkup(results);
    })
    .catch(error => {
      handleError(error.message);
    });
}
handleSearch();
refs.musclesBtn.classList.add('active');

refs.buttons.addEventListener('click', event => {
  selected(event);
  const targetMenu = event.target;

  if (targetMenu === event.currentTarget) {
    return;
  } else if (targetMenu === refs.musclesBtn) {
    // Оновити фільтр на 'Muscles'
    params.filter = 'Muscles';
  } else if (targetMenu === refs.bodypartsBtn) {
    // Оновити фільтр на 'Body parts'
    params.filter = 'Body parts';
  } else if (targetMenu === refs.equipBtn) {
    // Оновити фільтр на 'Equipment'
    params.filter = 'Equipment';
  }
  handleSearch();
});

let prevButton = null;

function selected(e) {
  const isButton = e.target.nodeName === 'BUTTON';
  refs.musclesBtn.classList.remove('active');

  if (!isButton) {
    return;
  }

  e.target.classList.add('active');

  if (prevButton !== null) {
    prevButton.classList.remove('active');
  }
  prevButton = e.target;

  if (prevButton === prevButton) {
    prevButton.classList.add('active');
  }
}
