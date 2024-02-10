import { getAccess } from './helper/get-access.js';
import { createMarkupFilterMuscles } from './helper/helpers.js';

const list = document.querySelector('.js-gallery');

const datas = await getAccess({
  filter: 'Muscles',
  typeFilter: 'filters',
})
  .then(({ data }) => data)
  .catch(err => console.log(err));

const objMuscles = datas.results;
console.log(datas)

createMarkupFilterMuscles(objMuscles, list);


