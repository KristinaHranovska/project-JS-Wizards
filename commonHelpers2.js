import{p as C}from"./assets/quote-120a9f83.js";import{a as f,i as u}from"./assets/vendor-a0f761d2.js";const a={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};f.defaults.baseURL="https://energyflow.b.goit.study/api";function I(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const l={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function M(){return I(),(await f.get("/filters",{params:{filter:l.filter,page:l.page,limit:l.perPage}})).data}function H(e){u.error({position:"topRight",message:e})}function O(e){a.gallery.innerHTML="";const t=e.map(({name:s,filter:$,imgUrl:T})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${T}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${$}</li>
            </ul>
        </a>
    </li>`).join("");a.gallery.innerHTML=t}function h(){l.page=1,M().then(e=>{const{results:t}=e;O(t)}).catch(e=>{H(e.message)})}h();a.musclesBtn.classList.add("active");a.musclesBtn.disabled=!0;a.buttons.addEventListener("click",e=>{U(e);const t=e.target;t!==e.currentTarget&&(t===a.musclesBtn?(a.musclesBtn.disabled=!0,a.bodypartsBtn.disabled=!1,a.equipBtn.disabled=!1,l.filter="Muscles"):t===a.bodypartsBtn?(a.musclesBtn.disabled=!1,a.bodypartsBtn.disabled=!0,a.equipBtn.disabled=!1,l.filter="Body parts"):t===a.equipBtn&&(a.musclesBtn.disabled=!1,a.bodypartsBtn.disabled=!1,a.equipBtn.disabled=!0,l.filter="Equipment"),h())});let o=null;function U(e){const t=e.target.nodeName==="BUTTON";a.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),o!==null&&o.classList.remove("active"),o=e.target,o===o&&o.classList.add("active"))}const d="/project-JS-Wizards/assets/sprite-afa54ed9.svg",r={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},i=document.querySelector(".gallery");i&&(i.addEventListener("click",F),i.classList.add("exercises-card"));const v=document.querySelector(".search-btn"),c=document.querySelector(".search-clear-btn"),n=document.querySelector(".search-input"),b=document.querySelector(".exercises-btns-div"),x=document.querySelector(".ex-search"),L=document.querySelector(".exercises-header");function F(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){v.addEventListener("click",B),c.addEventListener("click",w),n.addEventListener("input",S),b.addEventListener("click",E),x.style.display="block";const t=document.querySelector(".exercises-button.active");r.filter=t.dataset.filter,r.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${r.filterGroup.charAt(0).toUpperCase()+r.filterGroup.slice(1)}</span>`;L.innerHTML=s,g(r.filter)}}function B(e){e.preventDefault(),n.value.length>0&&(r.page=1,r.keyword=n.value.trim().toLowerCase(),g(r.filter))}function S(){n.value.length>0?c.style.visibility="visible":c.style.visibility="hidden"}function w(){n.value="",c.style.visibility="hidden",r.page=1,g(r.filter)}function E(e){e.target.tagName==="BUTTON"&&(n.value="",x.style.display="none",i.innerHTML="",i.classList.remove("exercises-card"),v.removeEventListener("click",B),c.removeEventListener("click",w),n.removeEventListener("input",S),b.removeEventListener("click",E),r.page=1,L.innerHTML="Exercises")}function g(e){i.innerHTML="",P(e).then(t=>{t.results.length===0?i.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':A(t.results),m("hide")}).catch(t=>{m("hide"),handleError(t.message)})}async function P(e){return m(),n.value.length>0?r.keyword=n.value.trim().toLowerCase():r.keyword="",(await f.get("/exercises",{params:{[e]:r.filterGroup,keyword:r.keyword,page:r.page,limit:r.limit}})).data}function A(e){let t=e.map(s=>`<li class="exercise-item" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Number(s.rating).toFixed(1)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${d}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span>Start</span>
          <svg class="ex-arrow-icon" width="14" height="14"><use href="${d}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${d}#icon-body-parts-fitness"></use></svg></span>
        <h3 class="ex-item-name">${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</h3>
      </span>
      <div class="ex-item-info">
        <span class="ex-info-group">
          <span class="ex-item-desc">Burned calories:</span>
          <span class="ex-item-value">${s.burnedCalories} / ${s.time} min</span>
        </span>
        <span class="ex-info-group">
          <span class="ex-item-desc">Body part:</span>
          <span class="ex-item-value">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</span>
        </span>
        <span class="ex-info-group">
          <span class="ex-item-desc">Target:</span>
          <span class="ex-item-value">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</span>
        </span>
      </div>
    </li>`).join("");i.innerHTML=t}function m(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const p={getInfo(e){u.info({title:"Hello",message:e})},getErrorInfo(e){u.error({title:"Error",message:e})},getSuccessInfo(e){u.success({title:"OK",message:e})}},G=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,y=document.querySelector(".footer-subscription-form"),k=document.querySelector(".footer-subscription-input"),q="feedback-subscribe-state",N=async e=>{e.preventDefault();const t=k.value.trim();if(!G.test(t))p.getErrorInfo("Enter the correct email!");else{try{await C({userEmail:{email:t},typeFilter:"subscription"}),p.getSuccessInfo("Successful subscription!")}catch{p.getErrorInfo("The user with this address is already subscribed!")}localStorage.removeItem(q),y.reset()}};y.addEventListener("submit",N);y.addEventListener("input",e=>{const t=k.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(q,s)});
//# sourceMappingURL=commonHelpers2.js.map
