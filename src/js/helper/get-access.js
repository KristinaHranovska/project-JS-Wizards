import axios from 'axios';
import iziToast from 'izitoast';

export { getAccess, patchAccess };

/**
 * Виконує GET-запит до сервера за вказаною URL з вказаними параметрами.
 * @param {Object} options - Об'єкт з параметрами.
 * @param {string} options.filter - Фільтр для запиту.
 * @param {number} [options.page=1] - Номер сторінки (за замовчуванням 1).
 * @param {number} [options.limit] - Ліміт результатів на сторінці.
 * @param {string} options.typeFilter - Тип фільтра, який використовується у URL.
 * @returns {Promise} Об'єкт Promise, який розрішується у відповідь від сервера.
 */
async function getAccess({ filter, limit, page = 1, typeFilter, id = null }) {
  try {
    const url = id
      ? `https://energyflow.b.goit.study/api/${typeFilter}/${id}`
      : `https://energyflow.b.goit.study/api/${typeFilter}`;

    const response = await axios.get(url, {
      params: {
        filter,
        page,
        limit,
        id,
      },
    });
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

async function patchAccess({ id, formData }) {
  try {
    const response = await axios.patch(
      `https://energyflow.b.goit.study/api/exercises/${id}/rating`, formData);
    iziToast.info({
      message: 'Rating has been updated'
    })
    return response;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      if (statusCode === 400) {
        iziToast.error({
          message: 'Bad request! Please check your data.'
        });
      } else if (statusCode === 404) {
        iziToast.error({
          message: 'Exercises not found!'
        });
      } else if (statusCode === 409) {
        iziToast.error({
          message: 'Sorry! But you have already appreciated this exercise'
        });
      } else if (statusCode === 500) {
        iziToast.error({
          message: 'Internal server error! Please try again later.'
        });
      } else {
        iziToast.error({
          message: 'An error occurred! Please try again later.'
        });
      }
    } else {
      iziToast.error({
        message: 'An error occurred! Please try again later.'
      });
    }
    return statusCode;
  }
}