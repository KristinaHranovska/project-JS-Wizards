import{i as c,g as d}from"./assets/modal-window-615455e1.js";import"./assets/vendor-a0f761d2.js";const o={favoritesCard:document.getElementById("favorites-container"),removeCards:document.querySelector(".container-remove-favorites"),deleteButtons:document.querySelectorAll(".button-remove"),galleryWindow:document.querySelector(".js-gallery")};function l(){try{const e=JSON.parse(localStorage.getItem("addKeyID"))||[];console.log(e),v(e)}catch{c.getErrorInfo("Wrong operation!!!")}}function v(e){!e||e.length===0?r():(p(e),m(),g())}o.galleryWindow.addEventListener("click",u);function u(e){if(e.target.classList.contains("js-remove-favorites")){const t=e.target.closest(".list-favorites-item").dataset.id;f(t),e.target.closest(".list-favorites-item").remove(),(JSON.parse(localStorage.getItem("addKeyID"))||[]).length===0&&r()}}function f(e){let t=JSON.parse(localStorage.getItem("addKeyID"))||[];t=t.filter(s=>s!==e),localStorage.setItem("addKeyID",JSON.stringify(t))}function r(){o.removeCards.classList.remove("is-hidden")}function m(){o.removeCards.classList.add("is-hidden")}function g(){const e=document.querySelector(".scroll");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*1,behavior:"smooth"})}}l();function p(e){Promise.all(e.map(t=>d({typeFilter:"exercises",id:t}))).then(t=>{const s=t.map(i=>i.data);o.favoritesCard.insertAdjacentHTML("beforeend",h(s))}).catch(t=>console.error(t))}function h(e){return e.map(({name:t,target:s,bodyPart:i,burnedCalories:n,_id:a})=>`<li class="list-favorites-item js-id" data-id="${a}">
    <div class="container-card">
        <div class="container-worcaut">
            <div class="workout-thumb">
            <div class="workout">Workout</div>
            <button type="button" class="button-remove js-remove-favorites">
            <svg class="delete-favorites" data-id="${a}" width="16" height="16">
                <use href="./img/icons/sprite.svg#icon-favorites-delete"></use>
            </svg>
            </button>
            </div>
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
                    <h3 class="subtitle-favorites">${t}</h3>
                </div>
                <div class="container-subtext-info">                           
                    <p class="subtext-info">Burned calories: <span class="mini-info">${n}/ 3 min</span></p>                          
                    <p class="subtext-info">Body part: <span class="mini-info">${i}</span></p>    
                    <p class="subtext-info">Target: <span class="mini-info">${s}</span></p>                           
               </div>
       </div>
</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
