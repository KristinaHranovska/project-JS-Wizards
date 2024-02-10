import axios from 'axios';

const refs = {
  gallery: document.querySelector('.gallery'),
  bodypartsButton: document.querySelector('[data-filter="bodypart"]'),
};

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const params = {
  perPage: 12,
  page: 1,
  filter: 'Body Parts',
  totalPages: 1,
  totalItems: 0,
};

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

function handleSearch() {
  axios
    .get('/filters', { params })
    .then(response => {
      const { results } = response.data;
      createMarkup(results);
    })
    .catch(error => {
      getLoader('hide');
      showAlert(error.message, 'ERROR');
    });
}

handleSearch();
refs.bodypartsButton.classList.add('active');
// refs.bodypartsButton.disabled = true;
