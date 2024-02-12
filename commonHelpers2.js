import{g as N,p as W}from"./assets/quote-bc81ec82.js";import{a as x,i as p}from"./assets/vendor-a0f761d2.js";const a={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};x.defaults.baseURL="https://energyflow.b.goit.study/api";function z(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const l={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function R(){return z(),(await x.get("/filters",{params:{filter:l.filter,page:l.page,limit:l.perPage}})).data}function _(e){p.error({position:"topRight",message:e})}function J(e){a.gallery.innerHTML="";const t=e.map(({name:s,filter:f,imgUrl:g})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${g}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${f}</li>
            </ul>
        </a>
    </li>`).join("");a.gallery.innerHTML=t}function w(){l.page=1,R().then(e=>{const{results:t}=e;J(t)}).catch(e=>{_(e.message)})}w();a.musclesBtn.classList.add("active");a.musclesBtn.disabled=!0;a.buttons.addEventListener("click",e=>{K(e);const t=e.target;t!==e.currentTarget&&(t===a.musclesBtn?(a.musclesBtn.disabled=!0,a.bodypartsBtn.disabled=!1,a.equipBtn.disabled=!1,l.filter="Muscles"):t===a.bodypartsBtn?(a.musclesBtn.disabled=!1,a.bodypartsBtn.disabled=!0,a.equipBtn.disabled=!1,l.filter="Body parts"):t===a.equipBtn&&(a.musclesBtn.disabled=!1,a.bodypartsBtn.disabled=!1,a.equipBtn.disabled=!0,l.filter="Equipment"),w())});let c=null;function K(e){const t=e.target.nodeName==="BUTTON";a.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),c!==null&&c.classList.remove("active"),c=e.target,c===c&&c.classList.add("active"))}const h="/project-JS-Wizards/assets/sprite-afa54ed9.svg",r={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},i=document.querySelector(".gallery");i&&(i.addEventListener("click",Y),i.classList.add("exercises-card"));const E=document.querySelector(".search-btn"),u=document.querySelector(".search-clear-btn"),o=document.querySelector(".search-input"),k=document.querySelector(".exercises-btns-div"),C=document.querySelector(".ex-search"),B=document.querySelector(".exercises-header");function Y(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){E.addEventListener("click",j),u.addEventListener("click",M),o.addEventListener("input",V),k.addEventListener("click",$),C.style.display="block";const t=document.querySelector(".exercises-button.active");r.filter=t.dataset.filter,r.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${r.filterGroup.charAt(0).toUpperCase()+r.filterGroup.slice(1)}</span>`;B.innerHTML=s,q(r.filter)}}function j(e){e.preventDefault(),o.value.length>0&&(r.page=1,r.keyword=o.value.trim().toLowerCase(),q(r.filter))}function V(){o.value.length>0?u.style.visibility="visible":u.style.visibility="hidden"}function M(){o.value="",u.style.visibility="hidden",r.page=1,q(r.filter)}function $(e){e.target.tagName==="BUTTON"&&(o.value="",C.style.display="none",i.innerHTML="",i.classList.remove("exercises-card"),E.removeEventListener("click",j),u.removeEventListener("click",M),o.removeEventListener("input",V),k.removeEventListener("click",$),r.page=1,B.innerHTML="Exercises")}function q(e){i.innerHTML="",Z(e).then(t=>{t.results.length===0?i.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':Q(t.results),b("hide")}).catch(t=>{b("hide"),handleError(t.message)})}async function Z(e){return b(),o.value.length>0?r.keyword=o.value.trim().toLowerCase():r.keyword="",(await x.get("/exercises",{params:{[e]:r.filterGroup,keyword:r.keyword,page:r.page,limit:r.limit}})).data}function Q(e){let t=e.map(s=>`<li class="exercise-item js-id" data-id="${s._id}">
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
    </li>`).join("");i.innerHTML=t}function b(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const m=document.querySelector(".backdrop-thumb"),X=document.querySelector(".js-modal-window"),ee=document.querySelector(".js-gallery");ee.addEventListener("click",te);function te(e){if(e.target.classList.contains("js-start")){m.classList.remove("is-open"),document.body.style.overflow="hidden";const t=e.target.closest(".js-id");if(t){const s=t.dataset.id;ae(s)}}}X.addEventListener("click",T);document.addEventListener("keydown",se);function T(e){m.classList.add("is-open"),document.body.style.overflow="",re()}function se(e){e.code==="Escape"&&m.classList.add("is-open")}m.addEventListener("click",function(e){e.target===this&&T()});function ae(e){N({typeFilter:"exercises",id:e}).then(({data:t})=>{const{name:s,rating:f,target:g,bodyPart:A,equipment:F,popularity:H,burnedCalories:O,description:U,gifUrl:G,_id:D}=t;document.querySelector(".modal-window").setAttribute("data-modal-id",D);const n={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")},d=Math.round(f).toFixed(1);document.querySelectorAll(".raiting-item .icon-star").forEach((y,L)=>{L<Math.floor(d)||L===Math.floor(d)&&d%1!==0?y.classList.remove("non-activ"):y.classList.add("non-activ")}),n.img.setAttribute("src",G),n.title.textContent=s,n.raiting.textContent=d,n.targetValue.textContent=g,n.bodyPartValue.textContent=A,n.equipmentValue.textContent=F,n.popularValue.textContent=H,n.caloriesValue.textContent=O,n.descriptionValue.textContent=U}).catch(t=>console.error(t))}function re(){const e={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};e.img.setAttribute("src",""),e.title.textContent="",e.raiting.textContent="",e.targetValue.textContent="",e.bodyPartValue.textContent="",e.equipmentValue.textContent="",e.popularValue.textContent="",e.caloriesValue.textContent="",e.descriptionValue.textContent="",document.querySelectorAll(".raiting-item .icon-star").forEach(s=>{s.classList.add("non-activ")})}const v={getInfo(e){p.info({title:"Hello",message:e})},getErrorInfo(e){p.error({title:"Error",message:e})},getSuccessInfo(e){p.success({title:"OK",message:e})}},ne=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,S=document.querySelector(".footer-subscription-form"),I=document.querySelector(".footer-subscription-input"),P="feedback-subscribe-state",oe=async e=>{e.preventDefault();const t=I.value.trim();if(!ne.test(t))v.getErrorInfo("Enter the correct email!");else{try{await W({userEmail:{email:t},typeFilter:"subscription"}),v.getSuccessInfo("Successful subscription!")}catch{v.getErrorInfo("The user with this address is already subscribed!")}localStorage.removeItem(P),S.reset()}};S.addEventListener("submit",oe);S.addEventListener("input",e=>{const t=I.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(P,s)});
//# sourceMappingURL=commonHelpers2.js.map
