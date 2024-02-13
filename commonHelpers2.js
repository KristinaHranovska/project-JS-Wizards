import{a as f,i as g,p as C}from"./assets/modal-window-5a533bbb.js";import{a as h,i as M}from"./assets/vendor-a0f761d2.js";const n={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};h.defaults.baseURL="https://energyflow.b.goit.study/api";function F(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const o={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function N(){return F(),(await h.get("/filters",{params:{filter:o.filter,page:o.page,limit:o.perPage}})).data}function A(e){M.error({position:"topRight",message:e})}function K(e){n.gallery.innerHTML="";const t=e.map(({name:s,filter:$,imgUrl:O})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${O}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${$}</li>
            </ul>
        </a>
    </li>`).join("");n.gallery.innerHTML=t}async function x(){o.page=1,N().then(e=>{const{results:t}=e;K(t)}).catch(e=>{A(e.message)})}x();n.musclesBtn.classList.add("active");n.buttons.addEventListener("click",e=>{J(e);const t=e.target;t!==e.currentTarget&&(t===n.musclesBtn?o.filter="Muscles":t===n.bodypartsBtn?o.filter="Body parts":t===n.equipBtn&&(o.filter="Equipment"),x())});let l=null;function J(e){const t=e.target.nodeName==="BUTTON";n.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),l!==null&&l.classList.remove("active"),l=e.target,l===l&&l.classList.add("active"))}const a={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},i=document.querySelector(".gallery");i&&(i.addEventListener("click",H),i.classList.add("exercises-card"));const b=document.querySelector(".search-btn"),d=document.querySelector(".search-clear-btn"),r=document.querySelector(".search-input"),L=document.querySelector(".exercises-btns-div"),I=document.querySelector(".ex-search"),k=document.querySelector(".exercises-header");function H(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){b.addEventListener("click",w),d.addEventListener("click",q),r.addEventListener("input",E),L.addEventListener("click",B),I.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;k.innerHTML=s,v(a.filter)}}function w(e){e.preventDefault(),r.value.length>0&&(a.page=1,a.keyword=r.value.trim().toLowerCase(),v(a.filter))}function E(){r.value.length>0?d.style.visibility="visible":d.style.visibility="hidden"}function q(){r.value="",d.style.visibility="hidden",a.page=1,v(a.filter)}function B(e){e.target.tagName==="BUTTON"&&(r.value="",I.style.display="none",i.innerHTML="",i.classList.remove("exercises-card"),b.removeEventListener("click",w),d.removeEventListener("click",q),r.removeEventListener("input",E),L.removeEventListener("click",B),a.page=1,k.innerHTML="Exercises")}function v(e){i.innerHTML="",U(e).then(t=>{t.results.length===0?i.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':j(t.results),y("hide")}).catch(t=>{y("hide"),handleError(t.message)})}async function U(e){return y(),r.value.length>0?a.keyword=r.value.trim().toLowerCase():a.keyword="",(await h.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:a.page,limit:a.limit}})).data}function j(e){let t=e.map(s=>`<li class="exercise-item js-id" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Math.round(s.rating).toFixed(1)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${f}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${f}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${f}#icon-body-parts-fitness"></use></svg></span>
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
    </li>`).join("");i.innerHTML=t}function y(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const u=document.querySelector(".add-to-favorities"),m=document.querySelector(".js-remove");document.querySelector(".modal-window");const P=document.querySelector(".js-gallery"),p=JSON.parse(localStorage.getItem("addKeyID"))||[];JSON.parse(localStorage.getItem("addKremoveKeyIDeyID"));let c;P.addEventListener("click",G);function G(e){const t=e.target.closest(".js-id");t&&(c=t.dataset.id,p.includes(c)?(m.classList.remove("hidden-btn"),u.classList.add("hidden-btn")):(m.classList.add("hidden-btn"),u.classList.remove("hidden-btn")))}if(!localStorage.getItem("addKeyID")){const e=[];localStorage.setItem("addKeyID",JSON.stringify(e))}if(!localStorage.getItem("removeKeyID")){const e=[];localStorage.setItem("removeKeyID",JSON.stringify(e))}u.addEventListener("click",R);function R(){m.classList.remove("hidden-btn"),u.classList.add("hidden-btn");const e=JSON.parse(localStorage.getItem("addKeyID"));e.push(c),localStorage.setItem("addKeyID",JSON.stringify(e))}m.addEventListener("click",z);function z(){console.log("click"),console.log(c),m.classList.add("hidden-btn"),u.classList.remove("hidden-btn");const e=JSON.parse(localStorage.getItem("removeKeyID"));e.push(c),localStorage.setItem("removeKeyID",JSON.stringify(e));const t=p.indexOf(c);t!==-1&&(p.splice(t,1),localStorage.setItem("addKeyID",JSON.stringify(p)))}const _=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,S=document.querySelector(".footer-subscription-form"),D=document.querySelector(".footer-subscription-input"),T="feedback-subscribe-state",V=async e=>{e.preventDefault();const t=D.value.trim();if(!_.test(t))g.getErrorInfo("Enter the correct email!");else{try{await C({userEmail:{email:t},typeFilter:"subscription"}),g.getSuccessInfo("Successful subscription!")}catch{g.getErrorInfo("The user with this address is already subscribed!")}localStorage.removeItem(T),S.reset()}};S.addEventListener("submit",V);S.addEventListener("input",e=>{const t=D.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(T,s)});
//# sourceMappingURL=commonHelpers2.js.map
