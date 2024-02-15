import{g as v,i}from"./assets/add-to-favorites-8b22d82c.js";import{i as a}from"./assets/vendor-0a7c832e.js";const f={getInfo(e){a.info({title:"Hello",message:e})},getErrorInfo(e){a.error({title:"Error",message:e})},getSuccessInfo(e){a.success({title:"OK",message:e})}},o={favoritesCard:document.getElementById("favorites-container"),removeCards:document.querySelector(".container-remove-favorites"),deleteButtons:document.querySelectorAll(".button-remove"),galleryWindow:document.querySelector(".js-gallery")};function u(){try{const e=JSON.parse(localStorage.getItem("addKeyID"))||[];console.log(e),g(e)}catch{f.getErrorInfo("Wrong operation!!!")}}function g(e){!e||e.length===0?l():(w(e),p(),y()),n()}o.galleryWindow.addEventListener("click",m);function m(e){if(e.target.classList.contains("js-remove-favorites")){const t=e.target.closest(".list-favorites-item").dataset.id;h(t),e.target.closest(".list-favorites-item").remove(),(JSON.parse(localStorage.getItem("addKeyID"))||[]).length===0&&l()}n()}function h(e){let t=JSON.parse(localStorage.getItem("addKeyID"))||[];t=t.filter(s=>s!==e),localStorage.setItem("addKeyID",JSON.stringify(t))}function l(){o.removeCards.classList.remove("is-hidden")}function p(){o.removeCards.classList.add("is-hidden")}function y(){const e=document.querySelector(".scroll");e&&(e.getBoundingClientRect().height,window.scrollBy({top:0,behavior:"smooth"}))}function n(){const e=o.favoritesCard,t=e.querySelector(".list-favorites"),s=4;t&&(Math.ceil(t.children.length/3)>s?e.style.overflowY="scroll":e.style.overflowY="hidden")}u();function w(e){Promise.all(e.map(t=>v({typeFilter:"exercises",id:t}))).then(t=>{const s=t.map(r=>r.data);o.favoritesCard.insertAdjacentHTML("beforeend",b(s)),n()}).catch(t=>console.error(t))}function b(e){return e.map(({name:t,target:s,bodyPart:r,burnedCalories:d,_id:c})=>`<li class="list-favorites-item js-id" data-id="${c}">
    <div class="container-card">
        <div class="container-worcaut">
            <div class="workout-thumb">
            <div class="workout">Workout</div>
            <button type="button" class="button-remove js-remove-favorites">
            <svg class="delete-favorites" data-id="${c}" width="16" height="16">
                <use href="${i}#icon-favorites-delete"></use>
            </svg>
            </button>
            </div>
            <button type="button" class="button-start js-start">
                Start
                <svg class="icon-arrow-body js-start" width="14" height="14">
                    <use href="${i}#icon-arrow-body-parts"></use>
                </svg>
            </button>
        </div>                  
                <div class="container-cards-favorites">
                    <svg class="icon-parts-fitness" width="24" height="24">
                        <use href="${i}#icon-body-parts-fitness"></use>
                    </svg>
                    <h3 class="subtitle-favorites">${t.charAt(0).toUpperCase()+t.slice(1)}</h3>
                </div>
                <div class="container-subtext-info">                           
                   <div class="favorites-card-text-wrapper"> 
                   <h4 class="subtext-info">Burned calories:</h4>  
                    <p class="mini-info">${d}/ 3 min</p>  
                    </div>
                    <div class="favorites-card-text-wrapper">
                    <h4 class="subtext-info">Body part:</h4> 
                    <p class="mini-info">${r}</p>  
                    </div>
                    <div class="favorites-card-text-wrapper">
                    <h4 class="subtext-info">Target: </h4>
                    <p class="mini-info">${s}</p>                           
                    </div>
               </div>
       </div>
</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
