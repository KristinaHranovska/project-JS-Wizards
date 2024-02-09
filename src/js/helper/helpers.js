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
  
  export { createMarkupFilterMuscles };
  