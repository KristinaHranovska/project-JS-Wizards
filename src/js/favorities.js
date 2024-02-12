import { iziToastFunctions } from './helper/helpers.js';

// const refs = {
// favoritesCard: document.getElementById('favorites-container'),
// removeCards: document.querySelector(".container-remove-favorites"),
// deleteButtons: document.querySelectorAll('.delete-favorites'),
// }


// function savedCardsStorage() {
//     // const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
  
//     try {
       

//         // const savedCards = [
//         //     {
//         //         id: '1',
//         //         name: 'Exercise 1',
//         //         burnedCalories: 300,
//         //         bodyPart: 'Body Part 1',
//         //         target: 'Target 1'
//         //     },
//         //     {
//         //         id: '2',
//         //         name: 'Exercise 2',
//         //         burnedCalories: 150,
//         //         bodyPart: 'Body Part 2',
//         //         target: 'Target 2'
//         //     },
//         //     {
//         //         id: '1',
//         //         name: 'Exercise 1',
//         //         burnedCalories: 300,
//         //         bodyPart: 'Body Part 1',
//         //         target: 'Target 1'
//         //     },
//         //     {
//         //         id: '2',
//         //         name: 'Exercise 2',
//         //         burnedCalories: 150,
//         //         bodyPart: 'Waist',
//         //         target: 'Quads'
//         //     },
//         // ];
//         displayFavoriteCards(savedCards);
//     } catch(error) {
//         iziToastFunctions.getErrorInfo('Wrong operation!!!');
//     } 
// }

// function displayFavoriteCards(savedCards) {
//     refs.favoritesCard.innerHTML = "";

//     if (!savedCards || savedCards.length === 0) {
//         removeCards.classList.remove("is-hidden");
//     } else {
//         const markup = renderExerciseCard(savedCards);
//         refs.favoritesCard.innerHTML = markup;
//         refs.removeCards.classList.add("is-hidden");
//     }
// }

// function renderExerciseCard(savedCards) {
//     const markup = savedCards.map(({ id, name, burnedCalories, bodyPart, target }) => {
//         return `
//             <li class="list-favorites-item">
//                 <div class="container-card">
//                     <div class="container-worcaut">
//                         <div class="workout">Workout</div>
//                         <svg class="delete-favorites" data-id="${id}" width="16" height="16">
//                             <use href="./img/icons/sprite.svg#icon-favorites-delete"></use>
//                         </svg>
//                         <button type="button" class="button-start">
//                             Start
//                             <svg class="icon-arrow-body" width="14" height="14">
//                                 <use href="./img/icons/sprite.svg#icon-arrow-body-parts"></use>
//                             </svg>
//                         </button>
//                     </div>                  
//                             <div class="container-cards-favorites">
//                                 <svg class="icon-parts-fitness" width="24" height="24">
//                                     <use href="./img/icons/sprite.svg#icon-body-parts-fitness"></use>
//                                 </svg>
//                                 <h3 class="subtitle-favorites">${name}</h3>
//                             </div>
//                             <div class="container-subtext-info">                           
//                                 <p class="subtext-info">Burned calories: <span class="mini-info">${burnedCalories}/ 3 min</span></p>                          
//                                 <p class="subtext-info">Body part: <span class="mini-info">${bodyPart}</span></p>    
//                                 <p class="subtext-info">Target: <span class="mini-info">${target}</span></p>                           
//                            </div>
//                    </div>
//             </li>
//         `;
//     }).join("");

//     // refs.favoritesCard.innerHTML = markup;

//     setupDeleteButtonListeners();

//     return markup;
// }

// function removeFavoriteCard(id) {
//     let savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
//     savedCards = savedCards.filter(card => card.id !== id);
//     localStorage.setItem('savedCards', JSON.stringify(savedCards));
//     // savedCardsStorage();
// }

// function setupDeleteButtonListeners() {
//     refs.deleteButtons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             if(event.target.tagName === "svg") {
//             const id = event.target.dataset.id;
//             removeFavoriteCard(id);
//             savedCardsStorage();
//             }
//         });
//     });
// }

// // function errorHandler(error) {
// //     iziToastFunctions.getErrorInfo('Wrong operation!!!'); 
// // }

// savedCardsStorage();

