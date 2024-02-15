import{i as h}from"./assets/add-to-favorites-a2ada29b.js";import{a as f,P as L,i as p}from"./assets/vendor-0a7c832e.js";const m={page:1,limit:1,filter:"Muscles"};function y(e){window.innerWidth>=1440?m.limit=9:m.limit=8,o.innerHTML="",x(e,m.page).then(t=>{t.results.length===0?(document.querySelector(".tui-pagination").style.display="none",o.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'):(b(t.results),t.totalPages>1?(document.querySelector(".tui-pagination").style.display="flex",P(t.totalPages).on("afterMove",({page:s})=>{x(e,s).then(u=>{o.innerHTML="",b(u.results)})})):document.querySelector(".tui-pagination").style.display="none"),v("hide")}).catch(t=>{v("hide"),handleError(t.message)})}async function x(e,t){return v(),i.value.length>0?r.keyword=i.value.trim().toLowerCase():r.keyword="",(await f.get("/exercises",{params:{[e]:r.filterGroup,keyword:r.keyword,page:t,limit:m.limit}})).data}function b(e){let t=e.map(s=>`<li class="exercise-item js-id" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${s.rating.toFixed(2)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${h}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${h}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${h}#icon-body-parts-fitness"></use></svg></span>
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
    </li>`).join("");o.innerHTML=t}function v(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const r={page:1,keyword:"",filter:"",filterGroup:""},o=document.querySelector(".gallery"),i=document.querySelector(".search-input");o&&(o.addEventListener("click",C),o.classList.add("exercises-card"));const a={searchButton:document.querySelector(".search-btn"),clearSearchButton:document.querySelector(".search-clear-btn"),filterButtonsContainer:document.querySelector(".exercises-btns-div"),searchFormContainer:document.querySelector(".ex-search"),sectionHeaderElement:document.querySelector(".exercises-header")};function C(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){a.searchButton.addEventListener("click",k),a.clearSearchButton.addEventListener("click",E),i.addEventListener("input",B),a.filterButtonsContainer.addEventListener("click",q),a.searchFormContainer.style.display="block";const t=document.querySelector(".exercises-button.active");r.filter=t.dataset.filter,r.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${r.filterGroup.charAt(0).toUpperCase()+r.filterGroup.slice(1)}</span>`;a.sectionHeaderElement.innerHTML=s,y(r.filter)}}function k(e){e.preventDefault(),i.value.length>0&&(r.page=1,r.keyword=i.value.trim().toLowerCase(),y(r.filter),i.value="",a.clearSearchButton.style.visibility="hidden")}function B(){i.value.length>0?a.clearSearchButton.style.visibility="visible":a.clearSearchButton.style.visibility="hidden"}function E(){i.value="",a.clearSearchButton.style.visibility="hidden",r.page=1,y(r.filter)}i.addEventListener("keypress",function(e){if(e.key==="Enter"){const t=i.value.trim().toLowerCase();r.keyword=t,a.clearSearchButton.style.visibility="hidden",r.page=1,y(r.filter),i.value=""}});function q(e){e.target.tagName==="BUTTON"&&(i.value="",a.searchFormContainer.style.display="none",o.innerHTML="",o.classList.remove("exercises-card"),a.searchButton.removeEventListener("click",k),a.clearSearchButton.removeEventListener("click",E),i.removeEventListener("input",B),a.filterButtonsContainer.removeEventListener("click",q),r.page=1,a.sectionHeaderElement.innerHTML="Exercises")}function P(e){window.innerWidth>=1440?r.limit=9:r.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:r.limit*e,itemsPerPage:r.limit,visiblePages:3,centerAlign:!0};return new L(t,s)}function T(e){window.innerWidth>=768?r.limit=12:r.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:r.limit*e,itemsPerPage:r.limit,visiblePages:3,centerAlign:!0};return new L(t,s)}const n={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};f.defaults.baseURL="https://energyflow.b.goit.study/api";function M(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const c={page:1,limit:1,filter:"Muscles"};async function w(e){return M(),(await f.get("/filters",{params:{filter:c.filter,limit:c.limit,page:e}})).data}function F(e){p.error({position:"topRight",message:e})}function S(e){n.gallery.innerHTML="";const t=e.map(({name:s,filter:u,imgUrl:g})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${g}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${u}</li>
            </ul>
        </a>
    </li>`).join("");n.gallery.innerHTML=t}async function $(){window.innerWidth>=768?c.limit=12:c.limit=8,w(c.page).then(e=>{const{results:t}=e;S(t),e.totalPages>1?(document.querySelector(".tui-pagination").style.display="flex",T(e.totalPages).on("afterMove",({page:s})=>{w(s).then(u=>{const{results:g}=u;n.gallery.innerHTML="",S(g)})})):document.querySelector(".tui-pagination").style.display="none"}).catch(e=>{F(e.message)})}$();n.musclesBtn.classList.add("active");n.buttons.addEventListener("click",e=>{H(e);const t=e.target;t!==e.currentTarget&&(t===n.musclesBtn?c.filter="Muscles":t===n.bodypartsBtn?c.filter="Body parts":t===n.equipBtn&&(c.filter="Equipment"),$())});let d=null;function H(e){const t=e.target.nodeName==="BUTTON";n.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),d!==null&&d.classList.remove("active"),d=e.target,d===d&&d.classList.add("active"))}const l={emailPattern:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,footerForm:document.querySelector(".footer-subscription-form"),footerInput:document.querySelector(".footer-subscription-input"),feedbackForm:"feedback-subscribe-state"},I=async e=>{try{return(await f.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw t}},O=async e=>{e.preventDefault();const t=l.footerInput.value.trim();if(!l.emailPattern.test(t))p.error({message:"Enter the correct email!"});else{try{await I(t),p.success({message:"Successful subscription!"})}catch{p.error({message:"The user with this address is already subscribed!"})}localStorage.removeItem(l.feedbackForm),l.footerForm.reset()}};l.footerForm.addEventListener("submit",O);l.footerForm.addEventListener("input",()=>{const e=l.footerInput.value.trim(),t=JSON.stringify({footerEmail:e});localStorage.setItem(l.feedbackForm,t)});
//# sourceMappingURL=commonHelpers2.js.map
