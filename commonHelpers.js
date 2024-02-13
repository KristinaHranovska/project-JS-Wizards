import{i as d,g as l,a as r}from"./assets/modal-window-5a533bbb.js";import"./assets/vendor-a0f761d2.js";const o={favoritesCard:document.getElementById("favorites-container"),removeCards:document.querySelector(".container-remove-favorites"),deleteButtons:document.querySelectorAll(".button-remove"),galleryWindow:document.querySelector(".js-gallery")};function v(){try{const e=JSON.parse(localStorage.getItem("addKeyID"))||[];console.log(e),u(e)}catch{d.getErrorInfo("Wrong operation!!!")}}function u(e){!e||e.length===0?n():(h(e),g(),p())}o.galleryWindow.addEventListener("click",f);function f(e){if(e.target.classList.contains("js-remove-favorites")){const t=e.target.closest(".list-favorites-item").dataset.id;m(t),e.target.closest(".list-favorites-item").remove(),(JSON.parse(localStorage.getItem("addKeyID"))||[]).length===0&&n()}}function m(e){let t=JSON.parse(localStorage.getItem("addKeyID"))||[];t=t.filter(s=>s!==e),localStorage.setItem("addKeyID",JSON.stringify(t))}function n(){o.removeCards.classList.remove("is-hidden")}function g(){o.removeCards.classList.add("is-hidden")}function p(){const e=document.querySelector(".scroll");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*1,behavior:"smooth"})}}v();function h(e){Promise.all(e.map(t=>l({typeFilter:"exercises",id:t}))).then(t=>{const s=t.map(a=>a.data);o.favoritesCard.insertAdjacentHTML("beforeend",y(s))}).catch(t=>console.error(t))}function y(e){return e.map(({name:t,target:s,bodyPart:a,burnedCalories:c,_id:i})=>`<li class="list-favorites-item js-id" data-id="${i}">
    <div class="container-card">
        <div class="container-worcaut">
            <div class="workout-thumb">
            <div class="workout">Workout</div>
            <button type="button" class="button-remove js-remove-favorites">
            <svg class="delete-favorites" data-id="${i}" width="16" height="16">
                <use href="${r}#icon-favorites-delete"></use>
            </svg>
            </button>
            </div>
            <button type="button" class="button-start">
                Start
                <svg class="icon-arrow-body" width="14" height="14">
                    <use href="${r}#icon-arrow-body-parts"></use>
                </svg>
            </button>
        </div>                  
                <div class="container-cards-favorites">
                    <svg class="icon-parts-fitness" width="24" height="24">
                        <use href="${r}#icon-body-parts-fitness"></use>
                    </svg>
                    <h3 class="subtitle-favorites">${t}</h3>
                </div>
                <div class="container-subtext-info">                           
                    <p class="subtext-info">Burned calories: <span class="mini-info">${c}/ 3 min</span></p>                          
                    <p class="subtext-info">Body part: <span class="mini-info">${a}</span></p>    
                    <p class="subtext-info">Target: <span class="mini-info">${s}</span></p>                           
               </div>
       </div>
</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
