import{i as S}from"./assets/modal-window-8b4f9dd3.js";import{a as h,P as q,i as g}from"./assets/vendor-0a7c832e.js";const y={page:1,limit:1,filter:"Muscles"};function b(e){window.innerWidth>=1440?y.limit=9:y.limit=8,i.innerHTML="",w(e,y.page).then(t=>{t.results.length===0?(document.querySelector(".tui-pagination").style.display="none",i.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'):(I(t.results),document.querySelector(".tui-pagination").style.display="flex",H(t.totalPages).on("afterMove",({page:s})=>{w(e,s).then(l=>{i.innerHTML="",I(l.results)})})),x("hide")}).catch(t=>{x("hide"),handleError(t.message)})}async function w(e,t){return x(),n.value.length>0?a.keyword=n.value.trim().toLowerCase():a.keyword="",(await h.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:t,limit:y.limit}})).data}function I(e){let t=e.map(s=>`<li class="exercise-item js-id" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Math.round(s.rating).toFixed(1)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${S}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${S}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${S}#icon-body-parts-fitness"></use></svg></span>
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
    </li>`).join("");i.innerHTML=t}function x(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const a={page:1,keyword:"",filter:"",filterGroup:""},i=document.querySelector(".gallery");i&&(i.addEventListener("click",F),i.classList.add("exercises-card"));const B=document.querySelector(".search-btn"),u=document.querySelector(".search-clear-btn"),n=document.querySelector(".search-input"),M=document.querySelector(".exercises-btns-div"),T=document.querySelector(".ex-search"),$=document.querySelector(".exercises-header");function F(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){B.addEventListener("click",D),u.addEventListener("click",P),n.addEventListener("input",O),M.addEventListener("click",C),T.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;$.innerHTML=s,b(a.filter)}}function D(e){e.preventDefault(),n.value.length>0&&(a.page=1,a.keyword=n.value.trim().toLowerCase(),b(a.filter))}function O(){n.value.length>0?u.style.visibility="visible":u.style.visibility="hidden"}function P(){n.value="",u.style.visibility="hidden",a.page=1,b(a.filter)}function C(e){e.target.tagName==="BUTTON"&&(n.value="",T.style.display="none",i.innerHTML="",i.classList.remove("exercises-card"),B.removeEventListener("click",D),u.removeEventListener("click",P),n.removeEventListener("input",O),M.removeEventListener("click",C),a.page=1,$.innerHTML="Exercises")}function H(e){window.innerWidth>=1440?a.limit=9:a.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:a.limit*e,itemsPerPage:a.limit,visiblePages:3,centerAlign:!0};return new q(t,s)}function J(e){window.innerWidth>=768?a.limit=12:a.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:a.limit*e,itemsPerPage:a.limit,visiblePages:3,centerAlign:!0};return new q(t,s)}const r={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};h.defaults.baseURL="https://energyflow.b.goit.study/api";function U(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const o={page:1,limit:1,filter:"Muscles"};async function k(e){return U(),(await h.get("/filters",{params:{filter:o.filter,limit:o.limit,page:e}})).data}function j(e){g.error({position:"topRight",message:e})}function E(e){r.gallery.innerHTML="";const t=e.map(({name:s,filter:l,imgUrl:v})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${v}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${l}</li>
            </ul>
        </a>
    </li>`).join("");r.gallery.innerHTML=t}async function A(){window.innerWidth>=768?o.limit=12:o.limit=8,k(o.page).then(e=>{const{results:t}=e;E(t),document.querySelector(".tui-pagination").style.display="flex",J(e.totalPages).on("afterMove",({page:s})=>{k(s).then(l=>{const{results:v}=l;r.gallery.innerHTML="",E(v)})})}).catch(e=>{j(e.message)})}A();r.musclesBtn.classList.add("active");r.buttons.addEventListener("click",e=>{G(e);const t=e.target;t!==e.currentTarget&&(t===r.musclesBtn?o.filter="Muscles":t===r.bodypartsBtn?o.filter="Body parts":t===r.equipBtn&&(o.filter="Equipment"),A())});let c=null;function G(e){const t=e.target.nodeName==="BUTTON";r.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),c!==null&&c.classList.remove("active"),c=e.target,c===c&&c.classList.add("active"))}const m=document.querySelector(".add-to-favorities"),p=document.querySelector(".js-remove");document.querySelector(".modal-window");const R=document.querySelector(".js-gallery"),f=JSON.parse(localStorage.getItem("addKeyID"))||[];JSON.parse(localStorage.getItem("addKremoveKeyIDeyID"));let d;R.addEventListener("click",W);function W(e){const t=e.target.closest(".js-id");t&&(d=t.dataset.id,f.includes(d)?(p.classList.remove("hidden-btn"),m.classList.add("hidden-btn")):(p.classList.add("hidden-btn"),m.classList.remove("hidden-btn")))}if(!localStorage.getItem("addKeyID")){const e=[];localStorage.setItem("addKeyID",JSON.stringify(e))}if(!localStorage.getItem("removeKeyID")){const e=[];localStorage.setItem("removeKeyID",JSON.stringify(e))}m.addEventListener("click",z);function z(){p.classList.remove("hidden-btn"),m.classList.add("hidden-btn");const e=JSON.parse(localStorage.getItem("addKeyID"));e.push(d),localStorage.setItem("addKeyID",JSON.stringify(e))}p.addEventListener("click",_);function _(){console.log("click"),console.log(d),p.classList.add("hidden-btn"),m.classList.remove("hidden-btn");const e=JSON.parse(localStorage.getItem("removeKeyID"));e.push(d),localStorage.setItem("removeKeyID",JSON.stringify(e));const t=f.indexOf(d);t!==-1&&(f.splice(t,1),localStorage.setItem("addKeyID",JSON.stringify(f)))}const V=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,L=document.querySelector(".footer-subscription-form"),N=document.querySelector(".footer-subscription-input"),K="feedback-subscribe-state",Y=async e=>{try{return(await h.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw t}},Z=async e=>{e.preventDefault();const t=N.value.trim();if(!V.test(t))g.error({message:"Enter the correct email!"});else{try{await Y(t),g.success({message:"Successful subscription!"})}catch{g.error({message:"The user with this address is already subscribed!"})}localStorage.removeItem(K),L.reset()}};L.addEventListener("submit",Z);L.addEventListener("input",e=>{const t=N.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(K,s)});
//# sourceMappingURL=commonHelpers2.js.map
