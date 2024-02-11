import { getAccess } from './helper/get-access.js';
import { createMarkupFilterMuscles } from './helper/helpers.js';
import { iziToastFunctions } from './helper/helpers.js';

const list = document.querySelector('.js-gallery');

const datas = await getAccess({
  filter: 'Muscles',
  typeFilter: 'filters',
})
  .then(({ data }) => data)
  .catch(err =>
    iziToastFunctions.getErrorInfo(
      'Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.'
    )
  );

const objMuscles = datas.results;

createMarkupFilterMuscles(objMuscles, list);
