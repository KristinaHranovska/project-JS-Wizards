import{a as h,i as v,p as K}from"./assets/modal-window-78ccbed5.js";import{a as x,P as q,i as H}from"./assets/vendor-0a7c832e.js";const g={page:1,limit:1,filter:"Muscles"};function b(e){window.innerWidth>=1440?g.limit=9:g.limit=8,n.innerHTML="",w(e,g.page).then(t=>{t.results.length===0?(document.querySelector(".tui-pagination").style.display="none",n.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'):(I(t.results),document.querySelector(".tui-pagination").style.display="flex",U(t.totalPages).on("afterMove",({page:s})=>{w(e,s).then(l=>{n.innerHTML="",I(l.results)})})),S("hide")}).catch(t=>{S("hide"),handleError(t.message)})}async function w(e,t){return S(),r.value.length>0?a.keyword=r.value.trim().toLowerCase():a.keyword="",(await x.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:t,limit:g.limit}})).data}function I(e){let t=e.map(s=>`<li class="exercise-item js-id" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Math.round(s.rating).toFixed(1)}</span>
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
    </li>`).join("");n.innerHTML=t}function S(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const a={page:1,keyword:"",filter:"",filterGroup:""},n=document.querySelector(".gallery");n&&(n.addEventListener("click",J),n.classList.add("exercises-card"));const B=document.querySelector(".search-btn"),u=document.querySelector(".search-clear-btn"),r=document.querySelector(".search-input"),T=document.querySelector(".exercises-btns-div"),M=document.querySelector(".ex-search"),$=document.querySelector(".exercises-header");function J(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){B.addEventListener("click",D),u.addEventListener("click",P),r.addEventListener("input",O),T.addEventListener("click",A),M.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;$.innerHTML=s,b(a.filter)}}function D(e){e.preventDefault(),r.value.length>0&&(a.page=1,a.keyword=r.value.trim().toLowerCase(),b(a.filter))}function O(){r.value.length>0?u.style.visibility="visible":u.style.visibility="hidden"}function P(){r.value="",u.style.visibility="hidden",a.page=1,b(a.filter)}function A(e){e.target.tagName==="BUTTON"&&(r.value="",M.style.display="none",n.innerHTML="",n.classList.remove("exercises-card"),B.removeEventListener("click",D),u.removeEventListener("click",P),r.removeEventListener("input",O),T.removeEventListener("click",A),a.page=1,$.innerHTML="Exercises")}function U(e){window.innerWidth>=1440?a.limit=9:a.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:a.limit*e,itemsPerPage:a.limit,visiblePages:3,centerAlign:!0};return new q(t,s)}function j(e){window.innerWidth>=768?a.limit=12:a.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:a.limit*e,itemsPerPage:a.limit,visiblePages:3,centerAlign:!0};return new q(t,s)}const i={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};x.defaults.baseURL="https://energyflow.b.goit.study/api";function G(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const o={page:1,limit:1,filter:"Muscles"};async function E(e){return G(),(await x.get("/filters",{params:{filter:o.filter,limit:o.limit,page:e}})).data}function R(e){H.error({position:"topRight",message:e})}function k(e){i.gallery.innerHTML="";const t=e.map(({name:s,filter:l,imgUrl:y})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${y}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${l}</li>
            </ul>
        </a>
    </li>`).join("");i.gallery.innerHTML=t}async function C(){window.innerWidth>=768?o.limit=12:o.limit=8,E(o.page).then(e=>{const{results:t}=e;k(t),document.querySelector(".tui-pagination").style.display="flex",j(e.totalPages).on("afterMove",({page:s})=>{E(s).then(l=>{const{results:y}=l;i.gallery.innerHTML="",k(y)})})}).catch(e=>{R(e.message)})}C();i.musclesBtn.classList.add("active");i.buttons.addEventListener("click",e=>{W(e);const t=e.target;t!==e.currentTarget&&(t===i.musclesBtn?o.filter="Muscles":t===i.bodypartsBtn?o.filter="Body parts":t===i.equipBtn&&(o.filter="Equipment"),C())});let c=null;function W(e){const t=e.target.nodeName==="BUTTON";i.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),c!==null&&c.classList.remove("active"),c=e.target,c===c&&c.classList.add("active"))}const m=document.querySelector(".add-to-favorities"),p=document.querySelector(".js-remove");document.querySelector(".modal-window");const z=document.querySelector(".js-gallery"),f=JSON.parse(localStorage.getItem("addKeyID"))||[];JSON.parse(localStorage.getItem("addKremoveKeyIDeyID"));let d;z.addEventListener("click",_);function _(e){const t=e.target.closest(".js-id");t&&(d=t.dataset.id,f.includes(d)?(p.classList.remove("hidden-btn"),m.classList.add("hidden-btn")):(p.classList.add("hidden-btn"),m.classList.remove("hidden-btn")))}if(!localStorage.getItem("addKeyID")){const e=[];localStorage.setItem("addKeyID",JSON.stringify(e))}if(!localStorage.getItem("removeKeyID")){const e=[];localStorage.setItem("removeKeyID",JSON.stringify(e))}m.addEventListener("click",V);function V(){p.classList.remove("hidden-btn"),m.classList.add("hidden-btn");const e=JSON.parse(localStorage.getItem("addKeyID"));e.push(d),localStorage.setItem("addKeyID",JSON.stringify(e))}p.addEventListener("click",Y);function Y(){console.log("click"),console.log(d),p.classList.add("hidden-btn"),m.classList.remove("hidden-btn");const e=JSON.parse(localStorage.getItem("removeKeyID"));e.push(d),localStorage.setItem("removeKeyID",JSON.stringify(e));const t=f.indexOf(d);t!==-1&&(f.splice(t,1),localStorage.setItem("addKeyID",JSON.stringify(f)))}const Z=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,L=document.querySelector(".footer-subscription-form"),F=document.querySelector(".footer-subscription-input"),N="feedback-subscribe-state",Q=async e=>{e.preventDefault();const t=F.value.trim();if(!Z.test(t))v.getErrorInfo("Enter the correct email!");else{try{await K({userEmail:{email:t},typeFilter:"subscription"}),v.getSuccessInfo("Successful subscription!")}catch{v.getErrorInfo("The user with this address is already subscribed!")}localStorage.removeItem(N),L.reset()}};L.addEventListener("submit",Q);L.addEventListener("input",e=>{const t=F.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(N,s)});
//# sourceMappingURL=commonHelpers2.js.map
