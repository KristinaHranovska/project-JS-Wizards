import axios from 'axios';

export { getAccess, postAccess };

/**
 * Виконує GET-запит до сервера за вказаною URL з вказаними параметрами.
 * @param {Object} options - Об'єкт з параметрами.
 * @param {string} options.filter - Фільтр для запиту.
 * @param {number} [options.page=1] - Номер сторінки (за замовчуванням 1).
 * @param {number} [options.limit] - Ліміт результатів на сторінці.
 * @param {string} options.typeFilter - Тип фільтра, який використовується у URL.
 * @returns {Promise} Об'єкт Promise, який розрішується у відповідь від сервера.
 */
async function getAccess({ filter, page = 1, typeFilter, id = null }) {
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
  } catch {
    console.error(error.message);
  }
}

/**
 * Виконує POST-запит до сервера за вказаною URL з вказаними даними.
 * @param {Object} options - Об'єкт з параметрами
 * @param {Object} options.userEmail - Дані, які відправляються у POST-запиті (відправляються у форматі JSON)
 * @param {string} options.typeFilter - Тип фільтра, який використовується у URL (в данному випадку потрібно вказувати subscription)
 * @returns {Promise} Об'єкт Promise, який розрішується у відповідь від сервера.
 */
async function postAccess({ userEmail, typeFilter }) {
  try {
    const response = await axios.post(
      `https://energyflow.b.goit.study/api/${typeFilter}`,
      userEmail
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
}
