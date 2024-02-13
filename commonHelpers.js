import{g as l,i as a}from"./assets/modal-window-5f83bfd9.js";import{i}from"./assets/vendor-0a7c832e.js";const v={getInfo(e){i.info({title:"Hello",message:e})},getErrorInfo(e){i.error({title:"Error",message:e})},getSuccessInfo(e){i.success({title:"OK",message:e})}},o={favoritesCard:document.getElementById("favorites-container"),removeCards:document.querySelector(".container-remove-favorites"),deleteButtons:document.querySelectorAll(".button-remove"),galleryWindow:document.querySelector(".js-gallery")};function f(){try{const e=JSON.parse(localStorage.getItem("addKeyID"))||[];console.log(e),u(e)}catch{v.getErrorInfo("Wrong operation!!!")}}function u(e){!e||e.length===0?c():(y(e),h(),p())}o.galleryWindow.addEventListener("click",m);function m(e){if(e.target.classList.contains("js-remove-favorites")){const t=e.target.closest(".list-favorites-item").dataset.id;g(t),e.target.closest(".list-favorites-item").remove(),(JSON.parse(localStorage.getItem("addKeyID"))||[]).length===0&&c()}}function g(e){let t=JSON.parse(localStorage.getItem("addKeyID"))||[];t=t.filter(s=>s!==e),localStorage.setItem("addKeyID",JSON.stringify(t))}function c(){o.removeCards.classList.remove("is-hidden")}function h(){o.removeCards.classList.add("is-hidden")}function p(){const e=document.querySelector(".scroll");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*1,behavior:"smooth"})}}f();function y(e){Promise.all(e.map(t=>l({typeFilter:"exercises",id:t}))).then(t=>{const s=t.map(r=>r.data);o.favoritesCard.insertAdjacentHTML("beforeend",b(s))}).catch(t=>console.error(t))}function b(e){return e.map(({name:t,target:s,bodyPart:r,burnedCalories:d,_id:n})=>`<li class="list-favorites-item js-id" data-id="${n}">
    <div class="container-card">
        <div class="container-worcaut">
            <div class="workout-thumb">
            <div class="workout">Workout</div>
            <button type="button" class="button-remove js-remove-favorites">
            <svg class="delete-favorites" data-id="${n}" width="16" height="16">
                <use href="${a}#icon-favorites-delete"></use>
            </svg>
            </button>
            </div>
            <button type="button" class="button-start js-start">
                Start
                <svg class="icon-arrow-body js-start" width="14" height="14">
                    <use href="${a}#icon-arrow-body-parts"></use>
                </svg>
            </button>
        </div>                  
                <div class="container-cards-favorites">
                    <svg class="icon-parts-fitness" width="24" height="24">
                        <use href="${a}#icon-body-parts-fitness"></use>
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
