const iziToastFunctions = {
  getInfo(messageInfo) {
    iziToast.info({
      title: 'Hello',
      message: messageInfo,
    });
  },

  getErrorInfo(messageInfo) {
    iziToast.error({
      title: 'Error',
      message: messageInfo,
    });
  },

  getSuccessInfo(messageInfo) {
    iziToast.success({
      title: 'OK',
      message: messageInfo,
    });
  },
};

function createMarkupFilterMuscles(muscles, galleryContainer) {
  const markup = muscles
    .map(
      ({ filter, imgUrl, name }) => `
      <li class="lists js-list">
      <img src="${imgUrl}" alt="${name}"class="pic">
      <div class="position-text">
      <h2 class="muscles-title">${name}</h2>
      <p class="filter-title">${filter}</p>
      </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export { iziToastFunctions };
export { createMarkupFilterMuscles };

