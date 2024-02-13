import { iziToastFunctions } from './helper/helpers.js';

const refs = {
favoritesCard: document.getElementById('favorites-container'),
removeCards: document.querySelector(".container-remove-favorites"),
deleteButtons: document.querySelectorAll('.delete-favorites'),
}


function savedCardsStorage() { 
    try {
        const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || []; 
        // const quote = JSON.parse(localStorage.getItem('quoteDay')) || [];
        // console.log(quote);
       
        displayFavoriteCards(savedCards);
    } catch(error) {
        iziToastFunctions.getErrorInfo('Wrong operation!!!');
    } 
}

function displayFavoriteCards(savedCards) {
    if (!savedCards || savedCards.length === 0) {
            showRemoveCards();
    } else {
        const markup = renderExerciseCard(savedCards);
        refs.favoritesCard.innerHTML = markup;
        setupDeleteButtonListeners();
        hideRemoveCards();
        smoothScrollToNextGroup();
    }
  
}

function renderExerciseCard(savedCards) {
    let markup = "";
    if (savedCards && savedCards.length > 0) {
        markup = savedCards.map(({ id, name, burnedCalories, bodyPart, target }) => {
            return `
            <li class="list-favorites-item js-id" data-id="${id}">
                <div class="container-card">
                    <div class="container-worcaut">
                        <div class="workout">Workout</div>
                        <svg class="delete-favorites" data-id="${id}" width="16" height="16">
                            <use href="./img/icons/sprite.svg#icon-favorites-delete"></use>
                        </svg>
                        <button type="button" class="button-start">
                            Start
                            <svg class="icon-arrow-body" width="14" height="14">
                                <use href="./img/icons/sprite.svg#icon-arrow-body-parts"></use>
                            </svg>
                        </button>
                    </div>                  
                            <div class="container-cards-favorites">
                                <svg class="icon-parts-fitness" width="24" height="24">
                                    <use href="./img/icons/sprite.svg#icon-body-parts-fitness"></use>
                                </svg>
                                <h3 class="subtitle-favorites">${name}</h3>
                            </div>
                            <div class="container-subtext-info">                           
                                <p class="subtext-info">Burned calories: <span class="mini-info">${burnedCalories}/ 3 min</span></p>                          
                                <p class="subtext-info">Body part: <span class="mini-info">${bodyPart}</span></p>    
                                <p class="subtext-info">Target: <span class="mini-info">${target}</span></p>                           
                           </div>
                   </div>
            </li>
        `;
        }).join("");
    }

    setupDeleteButtonListeners();

    return markup;
}

function removeFavoriteCard(id) {
    let savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
    savedCards = savedCards.filter(card => card !== id);
    localStorage.setItem('addKeyID', JSON.stringify(savedCards));

    // const storedArrayAdd = JSON.parse(localStorage.getItem('addKeyID')) || [];
    // const index = storedArrayAdd.indexOf(id);
    // if (index !== -1) {
    //     storedArrayAdd.splice(index, 1);
    //     localStorage.setItem('addKeyID', JSON.stringify(storedArrayAdd));
    // }
   
}

function setupDeleteButtonListeners() {
    refs.deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.currentTarget.closest('.list-favorites-item').dataset.id;
            // const id = event.target.dataset.id;
                removeFavoriteCard(id);
                savedCardsStorage();
            
        });
    });
}


function showRemoveCards() {
    if (refs.removeCards) {
        refs.removeCards.classList.remove("is-hidden");
    }
}

function hideRemoveCards() {
    if (refs.removeCards) {
        refs.removeCards.classList.add("is-hidden");
    }
}

function smoothScrollToNextGroup() {
    const favoritesItem = document.querySelector(".scroll");
    if (favoritesItem) {
      const galleryItemHeight = favoritesItem.getBoundingClientRect().height;
      window.scrollBy({
        top: galleryItemHeight * 1, 
        behavior: "smooth",
      });
    }
  }
 
savedCardsStorage();