import { getAccess } from './helper/get-access.js';
import { createMarkupFilter } from './helper/helpers.js';
import { iziToastFunctions } from './helper/helpers.js';

const list = document.querySelector('.js-gallery');
const buttonBodyparts = document.querySelector('.js-buttonBodyparts');

buttonBodyparts.addEventListener('click', handlerBodyparts);

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

createMarkupFilter(objMuscles, list);

async function handlerBodyparts() {
 
  const datas = await getAccess({
    filter: 'Body parts',
    typeFilter: 'filters',
  })

  const objBodyparts =  datas.data.results;
  list.innerHTML = createMarkupFilter(objBodyparts, list)

}
