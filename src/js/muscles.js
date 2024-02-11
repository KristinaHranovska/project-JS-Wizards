import { getAccess } from './helper/get-access.js';
import { createMarkupFilter } from './helper/helpers.js';
import { iziToastFunctions } from './helper/helpers.js';

const list = document.querySelector('.js-gallery');
const buttonMuscles = document.querySelector('.js-buttonMuscles');
const buttonBodyparts = document.querySelector('.js-buttonBodyparts');
const buttonEquipment = document.querySelector('.js-buttonEquipment');

buttonBodyparts.addEventListener('click', handlerBodyparts);
buttonEquipment.addEventListener('click', handlerEquipment);

reflectMarkupMuscles();
async function reflectMarkupMuscles() {
  buttonBodyparts.classList.remove('active');
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
}

async function handlerBodyparts() {
  buttonBodyparts.classList.add('active');
  buttonMuscles.classList.remove('active');
  buttonEquipment.classList.remove('active');
  const datas = await getAccess({
    filter: 'Body parts',
    typeFilter: 'filters',
  });

  const objBodyparts = datas.data.results;
  list.innerHTML = createMarkupFilter(objBodyparts, list);
}

async function handlerEquipment() {
  buttonEquipment.classList.add('active');
  if (
    buttonMuscles.classList.contains('active') ||
    buttonBodyparts.classList.contains('active')
  ) {
    buttonMuscles.classList.remove('active');
    buttonBodyparts.classList.remove('active');
  }
  const datas = await getAccess({
    filter: 'Equipment',
    typeFilter: 'filters',
  });

  const objEquipment = datas.data.results;
  list.innerHTML = createMarkupFilter(objEquipment, list);
}
