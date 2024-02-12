import{g as U,p as F}from"./assets/quote-26c1a1f2.js";import{a as h,i as d}from"./assets/vendor-a0f761d2.js";const a={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};h.defaults.baseURL="https://energyflow.b.goit.study/api";function A(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const l={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function G(){return A(),(await h.get("/filters",{params:{filter:l.filter,page:l.page,limit:l.perPage}})).data}function N(e){d.error({position:"topRight",message:e})}function D(e){a.gallery.innerHTML="";const t=e.map(({name:s,filter:p,imgUrl:m})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${m}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${p}</li>
            </ul>
        </a>
    </li>`).join("");a.gallery.innerHTML=t}function x(){l.page=1,G().then(e=>{const{results:t}=e;D(t)}).catch(e=>{N(e.message)})}x();a.musclesBtn.classList.add("active");a.musclesBtn.disabled=!0;a.buttons.addEventListener("click",e=>{z(e);const t=e.target;t!==e.currentTarget&&(t===a.musclesBtn?(a.musclesBtn.disabled=!0,a.bodypartsBtn.disabled=!1,a.equipBtn.disabled=!1,l.filter="Muscles"):t===a.bodypartsBtn?(a.musclesBtn.disabled=!1,a.bodypartsBtn.disabled=!0,a.equipBtn.disabled=!1,l.filter="Body parts"):t===a.equipBtn&&(a.musclesBtn.disabled=!1,a.bodypartsBtn.disabled=!1,a.equipBtn.disabled=!0,l.filter="Equipment"),x())});let c=null;function z(e){const t=e.target.nodeName==="BUTTON";a.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),c!==null&&c.classList.remove("active"),c=e.target,c===c&&c.classList.add("active"))}const f="/project-JS-Wizards/assets/sprite-afa54ed9.svg",r={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},o=document.querySelector(".gallery");o&&(o.addEventListener("click",R),o.classList.add("exercises-card"));const S=document.querySelector(".search-btn"),u=document.querySelector(".search-clear-btn"),i=document.querySelector(".search-input"),q=document.querySelector(".exercises-btns-div"),L=document.querySelector(".ex-search"),w=document.querySelector(".exercises-header");function R(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){S.addEventListener("click",E),u.addEventListener("click",B),i.addEventListener("input",k),q.addEventListener("click",C),L.style.display="block";const t=document.querySelector(".exercises-button.active");r.filter=t.dataset.filter,r.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${r.filterGroup.charAt(0).toUpperCase()+r.filterGroup.slice(1)}</span>`;w.innerHTML=s,b(r.filter)}}function E(e){e.preventDefault(),i.value.length>0&&(r.page=1,r.keyword=i.value.trim().toLowerCase(),b(r.filter))}function k(){i.value.length>0?u.style.visibility="visible":u.style.visibility="hidden"}function B(){i.value="",u.style.visibility="hidden",r.page=1,b(r.filter)}function C(e){e.target.tagName==="BUTTON"&&(i.value="",L.style.display="none",o.innerHTML="",o.classList.remove("exercises-card"),S.removeEventListener("click",E),u.removeEventListener("click",B),i.removeEventListener("input",k),q.removeEventListener("click",C),r.page=1,w.innerHTML="Exercises")}function b(e){o.innerHTML="",W(e).then(t=>{t.results.length===0?o.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':_(t.results),y("hide")}).catch(t=>{y("hide"),handleError(t.message)})}async function W(e){return y(),i.value.length>0?r.keyword=i.value.trim().toLowerCase():r.keyword="",(await h.get("/exercises",{params:{[e]:r.filterGroup,keyword:r.keyword,page:r.page,limit:r.limit}})).data}function _(e){let t=e.map(s=>`<li class="exercise-item" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Number(s.rating).toFixed(1)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${f}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon" width="14" height="14"><use href="${f}#arrow"></use></svg>
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
    </li>`).join("");o.innerHTML=t}function y(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const $=document.querySelector(".backdrop-thumb"),J=document.querySelector(".js-modal-window"),K=document.querySelector(".exercises-card");K.addEventListener("click",Y);function Y(e){if(e.target.classList.contains("ex-arrow-icon")||e.target.classList.contains("js-start")){$.classList.remove("is-open"),document.body.style.overflow="hidden";const t=e.target.closest(".exercise-item");if(t){const s=t.dataset.id;Q(s)}}}J.addEventListener("click",Z);function Z(){$.classList.add("is-open"),document.body.style.overflow=""}function Q(e){U({typeFilter:"exercises",id:e}).then(({data:t})=>{const{name:s,rating:p,target:m,bodyPart:I,equipment:M,popularity:V,burnedCalories:P,description:H,gifUrl:O,_id:te}=t,n={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};n.img.setAttribute("src",O),n.title.textContent=s,n.raiting.textContent=p,n.targetValue.textContent=m,n.bodyPartValue.textContent=I,n.equipmentValue.textContent=M,n.popularValue.textContent=V,n.caloriesValue.textContent=P,n.descriptionValue.textContent=H}).catch(t=>console.error(t))}const g={getInfo(e){d.info({title:"Hello",message:e})},getErrorInfo(e){d.error({title:"Error",message:e})},getSuccessInfo(e){d.success({title:"OK",message:e})}},X=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,v=document.querySelector(".footer-subscription-form"),T=document.querySelector(".footer-subscription-input"),j="feedback-subscribe-state",ee=async e=>{e.preventDefault();const t=T.value.trim();if(!X.test(t))g.getErrorInfo("Enter the correct email!");else{try{await F({userEmail:{email:t},typeFilter:"subscription"}),g.getSuccessInfo("Successful subscription!")}catch{g.getErrorInfo("The user with this address is already subscribed!")}localStorage.removeItem(j),v.reset()}};v.addEventListener("submit",ee);v.addEventListener("input",e=>{const t=T.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(j,s)});
//# sourceMappingURL=commonHelpers2.js.map
