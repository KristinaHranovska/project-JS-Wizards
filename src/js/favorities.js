// const favoritesContainer = document.getElementById('favorites-container');
// const removeCards = document.querySelector(".container-remove-favorites");
// const infoFavorite = document.querySelector(".list-info-favorites");
// const deleteFavorite = document.querySelector(".delete-favorites");

// function savedCardsStorage() {
//     try {
//         const savedCards = JSON.parse(localStorage.getItem()) || [];
//         displayFavoriteCards(savedCards);
//     } catch(error) {
//         errorCardStorage(error);
//     }
// }

// function displayFavoriteCards(savedCards) {
//     favoritesContainer.innerHTML = "";

//     if (!savedCards || savedCards.length === 0) {
//         removeCards.classList.remove("is-hidden");
//     } else {
// removeCards.classList.add("is-hidden");
//      createTaskMarkup(obj)
//         const markup = renderExerciseCard(savedCards);
    

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
//     <li> 
//     <div class="container-cards-favorites">
//       <svg class="icon-parts-fitness" width="24" height="24">
//         <use href="./img/icons/sprite.svg#icon-body-parts-fitness"></use>
//       </svg>
//       <h3 class="subtitle-favorites">${name}</h3>
//     </div>
//     <div class="subtext-container">
//       <p class="subtext-favorites">${burnedCalories} / 3 min</p>
//       <p class="subtext-favorites">${bodyPart}: Waist</p>
//     </div>
//     <p class="subtext-favorites">${target}: Quads</p>
//   </li >`;
// }).join("");
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


// function createTaskMarkup(obj) {
//    return `
//       <li class="list-favorites-item">
//           <div class="container-card">
//             <div class="container-worcaut">
//               <button class="workout">Workout</button>
//               <svg class="delete-favorites" data-id="${id}" width="16" height="16">
//                 <use href="./img/icons/sprite.svg#icon-favorites-delete"></use>
//               </svg>
//               <button type="button" class="button-strart">
//                 Start
//                 <svg class="icon-arrow-body" width="14" height="14">
//                   <use
//                     href="./img/icons/sprite.svg#icon-arrow-body-parts"
//                   ></use>
//                 </svg>
//               </button>
//             </div>
//             <ul class="list-info-favorites">
//             </ul>
//           </div>
//         </li>
//     ` 
//      favoritesContainer.insertAdjacentHTML("beforeend", markup);
// }

// deleteFavorite.addEventListener("click", deleteTask);
// function deleteTask(evt) {
//     if (evt.target.nodeName === "BUTTON") {
//         const id = evt.target.dataset.id;
// }
// }