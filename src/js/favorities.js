import { iziToastFunctions } from './helper/helpers.js';
// import { LOCAL_STORAGE_KEY } from './add-to-favorites.js';

const refs = {
favoritesCard: document.getElementById('favorites-container'),
removeCards: document.querySelector(".container-remove-favorites"),
deleteButtons: document.querySelectorAll('.delete-favorites'),
}


function savedCardsStorage() { 
    try {
        // const savedCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        const savedCards = [
            {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
              {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                  {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                    {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                      {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                        {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                          {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                                {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                  {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                    {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                      {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                        {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
                          {
                  id: 1,
                  name: "Name",
                  burnedCalories: 100,
                  bodyPart: "SWERT",
                  target: "wreter",
            },
        ]
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
    let savedCards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    savedCards = savedCards.filter(card => card.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedCards));
}

function setupDeleteButtonListeners() {
    refs.deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if(event.target.tagName === "svg") {
            const id = event.target.dataset.id;
            removeFavoriteCard(id);
                savedCardsStorage();
            }
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
    const itemsPerGroup = 9;
    const listItemHeight = 80; // Замініть це значення на висоту вашого елемента list-favorites-item
    const container = document.querySelector('.list-favorites');
    const items = document.querySelectorAll('.list-favorites-item');

    if (items.length > itemsPerGroup) {
        const currentGroupIndex = Math.floor(items.length / itemsPerGroup);
        const scrollTop = currentGroupIndex * itemsPerGroup * listItemHeight;
        container.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    }
}

 

savedCardsStorage();