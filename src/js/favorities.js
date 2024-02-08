// const favoritesContainer = document.getElementById('favorites-container');

// function savedCardsStorage() {
//     try {
//         const savedCards = JSON.parse(localStorage.getItem());
//         displayFavoriteCards(savedCards);
//     } catch(error) {
//         errorCardStorage(error);
//     }
// }

// function displayFavoriteCards(savedCards) {
//     favoritesContainer.innerHTML = "";

//     if (!savedCards || savedCards.length === 0) {
//         return favoritesContainer.innerHTML = `
//         <img src="./favorites_1440.webp" alt="">
//         <p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
//         `
//     } else {
//         const markup = renderExerciseCard(savedCards);
//         favoritesContainer.insertAdjacentHTML("beforeend", markup);

//          const deleteButtons = document.querySelectorAll('.delete-button');
//          deleteButtons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const cardIndex = button.dataset.index;
//                 removeFavoriteCard(cardIndex);
//             });
//         });
//     }
// }

// function renderExerciseCard(exercise) {
//    return exercise.map(({ name, burnedCalories, bodyPart, target }) => {
//        return `
//     <div class="card-list>
//     <h3>${name}<h3>
//     <p>Burned calories: ${burnedCalories} / 3 min</p>
//     <p>Body part: ${bodyPart}<p>
//     <p>Target: ${target}</p>
//     </div>
//         `;
//     }).join("");

// }

// function removeFavoriteCard(index) {
//     let savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
//     savedCards.splice(index, 1);
//     localStorage.setItem('savedCards', JSON.stringify(savedCards));
//     savedCardsStorage(); 
// }


// savedCardsStorage();

// function errorCardStorage(error) {
//   iziToast.error({
//         title: 'Error',
//         message: 'Wrong operation!!!',
//     });
// }