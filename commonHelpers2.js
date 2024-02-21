import{i as x}from"./assets/add-to-favorites-95591f99.js";import{a as h,P as E,i as f}from"./assets/vendor-0a7c832e.js";const y={page:1,limit:1,filter:"Muscles"};function g(e){window.innerWidth>=1440?y.limit=9:y.limit=8,l.innerHTML="",b(e,y.page).then(t=>{if(t.results.length===0)document.querySelector(".tui-pagination").style.display="none",l.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';else{w(t.results);const s=document.querySelectorAll(".js-animation-exercises");s.forEach(i=>{i.classList.add("animation-items")}),setTimeout(()=>{s.forEach(i=>{i.classList.remove("animation-items")})},500),t.totalPages>1?(document.querySelector(".tui-pagination").style.display="flex",P(t.totalPages).on("afterMove",({page:i})=>{b(e,i).then(m=>{l.innerHTML="",w(m.results);const p=document.querySelectorAll(".js-animation-exercises");p.forEach(v=>{v.classList.add("animation-items")}),setTimeout(()=>{p.forEach(v=>{v.classList.remove("animation-items")})},500)})})):document.querySelector(".tui-pagination").style.display="none"}}).catch(t=>{handleError(t.message)})}async function b(e,t){return n.value.length>0?a.keyword=n.value.trim().toLowerCase():a.keyword="",(await h.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:t,limit:y.limit}})).data}function w(e){let t=e.map(s=>`<li class="exercise-item js-id js-animation-exercises" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${s.rating.toFixed(2)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${x}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${x}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${x}#icon-body-parts-fitness"></use></svg></span>
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
    </li>`).join("");l.innerHTML=t}const a={page:1,keyword:"",filter:"",filterGroup:""},l=document.querySelector(".gallery"),n=document.querySelector(".search-input");l&&(l.addEventListener("click",$),l.classList.add("exercises-card"));const r={searchButton:document.querySelector(".search-btn"),clearSearchButton:document.querySelector(".search-clear-btn"),filterButtonsContainer:document.querySelector(".exercises-btns-div"),searchFormContainer:document.querySelector(".ex-search"),sectionHeaderElement:document.querySelector(".exercises-header")};function $(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){r.searchButton.addEventListener("click",k),r.clearSearchButton.addEventListener("click",q),n.addEventListener("input",B),r.filterButtonsContainer.addEventListener("click",C),r.searchFormContainer.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;r.sectionHeaderElement.innerHTML=s,g(a.filter)}}function k(e){e.preventDefault(),n.value.length>0&&(a.page=1,a.keyword=n.value.trim().toLowerCase(),g(a.filter),n.value="",r.clearSearchButton.style.visibility="hidden")}function B(){n.value.length>0?r.clearSearchButton.style.visibility="visible":r.clearSearchButton.style.visibility="hidden"}function q(){n.value="",r.clearSearchButton.style.visibility="hidden",a.page=1,g(a.filter)}n.addEventListener("keypress",function(e){if(e.key==="Enter"){const t=n.value.trim().toLowerCase();a.keyword=t,r.clearSearchButton.style.visibility="hidden",a.page=1,g(a.filter),n.value=""}});function C(e){e.target.tagName==="BUTTON"&&(n.value="",r.searchFormContainer.style.display="none",l.innerHTML="",l.classList.remove("exercises-card"),r.searchButton.removeEventListener("click",k),r.clearSearchButton.removeEventListener("click",q),n.removeEventListener("input",B),r.filterButtonsContainer.removeEventListener("click",C),a.page=1,r.sectionHeaderElement.innerHTML="Exercises")}function P(e){window.innerWidth>=1440?a.limit=9:a.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:a.limit*e,itemsPerPage:a.limit,visiblePages:3,centerAlign:!0};return new E(t,s)}function M(e){window.innerWidth>=768?a.limit=12:a.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:a.limit*e,itemsPerPage:a.limit,visiblePages:3,centerAlign:!0};return new E(t,s)}const o={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};h.defaults.baseURL="https://energyflow.b.goit.study/api";function F(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const u={page:1,limit:1,filter:"Muscles"};async function S(e){return F(),(await h.get("/filters",{params:{filter:u.filter,limit:u.limit,page:e}})).data}function H(e){f.error({position:"topRight",message:e})}function L(e){o.gallery.innerHTML="";const t=e.map(({name:i,filter:m,imgUrl:p})=>`<li class="gallery-item js-animation">
        <a href="">
        <img class="gallery-image" src="${p}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${i}">
                <li class="name">${i}</li>
                <li class="filter">${m}</li>
            </ul>
        </a>
    </li>`).join("");o.gallery.innerHTML=t;const s=document.querySelectorAll(".js-animation");s.forEach(i=>{i.classList.add("animation-items")}),setTimeout(()=>{s.forEach(i=>{i.classList.remove("animation-items")})},500)}async function T(){window.innerWidth>=768?u.limit=12:u.limit=8,S(u.page).then(e=>{const{results:t}=e;L(t),e.totalPages>1?(document.querySelector(".tui-pagination").style.display="flex",M(e.totalPages).on("afterMove",({page:s})=>{S(s).then(i=>{const{results:m}=i;o.gallery.innerHTML="",L(m)})})):document.querySelector(".tui-pagination").style.display="none"}).catch(e=>{H(e.message)})}T();o.musclesBtn.classList.add("active");o.buttons.addEventListener("click",e=>{I(e);const t=e.target;t!==e.currentTarget&&(t===o.musclesBtn?u.filter="Muscles":t===o.bodypartsBtn?u.filter="Body parts":t===o.equipBtn&&(u.filter="Equipment"),T())});let d=null;function I(e){const t=e.target.nodeName==="BUTTON";o.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),d!==null&&d.classList.remove("active"),d=e.target,d===d&&d.classList.add("active"))}const c={emailPattern:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,footerForm:document.querySelector(".footer-subscription-form"),footerInput:document.querySelector(".footer-subscription-input"),feedbackForm:"feedback-subscribe-state"},j=async e=>{try{return(await h.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw t}},A=async e=>{e.preventDefault();const t=c.footerInput.value.trim();if(!c.emailPattern.test(t))f.error({message:"Enter the correct email!"});else{try{await j(t),f.success({message:"Successful subscription!"})}catch{f.error({message:"The user with this address is already subscribed!"})}localStorage.removeItem(c.feedbackForm),c.footerForm.reset()}};c.footerForm.addEventListener("submit",A);c.footerForm.addEventListener("input",()=>{const e=c.footerInput.value.trim(),t=JSON.stringify({footerEmail:e});localStorage.setItem(c.feedbackForm,t)});
//# sourceMappingURL=commonHelpers2.js.map
