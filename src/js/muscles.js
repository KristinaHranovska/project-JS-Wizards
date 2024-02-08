import axios from 'axios';

import { getAccess } from './helper/get-access.js';

const list = document.querySelector('.js-gallery');

const datas = await getAccess({
  filter: 'Muscles',
  typeFilter: 'filters',
})
  .then(({ data }) => data)
  .catch(err => console.log(err));

const objMuscles = datas.results;
console.log(objMuscles);

function createMarkupFilterMuscles(muscles) {
  const markup = muscles
    .map(
      ({ filter, imgUrl, name }) => `<li class="list js-list">
  <a href="${imgUrl}" target="_blank" rel="noopener noreferrer">
  <img src="${imgUrl}" alt="${name}" width="295" height="232">
  <h2>${name}</h2>
  <p>${filter}</p>
</a>
</li>`
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

createMarkupFilterMuscles(objMuscles);
