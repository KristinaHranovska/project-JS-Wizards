import{i as g}from"./assets/add-to-favorites-580362db.js";import{a as m,P as S,i as d}from"./assets/vendor-0a7c832e.js";const p={page:1,limit:1,filter:"Muscles"};function f(e){window.innerWidth>=1440?p.limit=9:p.limit=8,r.innerHTML="",x(e,p.page).then(t=>{t.results.length===0?(document.querySelector(".tui-pagination").style.display="none",r.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'):(w(t.results),t.totalPages>1?(document.querySelector(".tui-pagination").style.display="flex",U(t.totalPages).on("afterMove",({page:s})=>{x(e,s).then(o=>{r.innerHTML="",w(o.results)})})):document.querySelector(".tui-pagination").style.display="none"),h("hide")}).catch(t=>{h("hide"),handleError(t.message)})}async function x(e,t){return h(),n.value.length>0?i.keyword=n.value.trim().toLowerCase():i.keyword="",(await m.get("/exercises",{params:{[e]:i.filterGroup,keyword:i.keyword,page:t,limit:p.limit}})).data}function w(e){let t=e.map(s=>`<li class="exercise-item js-id" data-id="${s._id}">
      <div class="ex-item-head">
        <span class="ex-item-head-group">
          <span class="ex-item-workout">WORKOUT</span>
          <span class="ex-rating-group">
            <span class="ex-item-rating">${Math.round(s.rating).toFixed(1)}</span>
            <svg class="ex-star-icon" width="18" height="18"><use href="${g}#icon-rating-star"></use></svg>
          </span>
        </span>
        <a class="ex-item-start" href="#" data-id="${s._id}">
          <span class="js-start">Start</span>
          <svg class="ex-arrow-icon js-start" width="14" height="14"><use href="${g}#arrow"></use></svg>
        </a>
      </div>
      <span class="ex-title">
        <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${g}#icon-body-parts-fitness"></use></svg></span>
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
    </li>`).join("");r.innerHTML=t}function h(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const i={page:1,keyword:"",filter:"",filterGroup:""},r=document.querySelector(".gallery");r&&(r.addEventListener("click",O),r.classList.add("exercises-card"));const k=document.querySelector(".search-btn"),c=document.querySelector(".search-clear-btn"),n=document.querySelector(".search-input"),E=document.querySelector(".exercises-btns-div"),q=document.querySelector(".ex-search"),B=document.querySelector(".exercises-header");function O(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){k.addEventListener("click",$),c.addEventListener("click",M),n.addEventListener("input",T),E.addEventListener("click",P),q.style.display="block";const t=document.querySelector(".exercises-button.active");i.filter=t.dataset.filter,i.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${i.filterGroup.charAt(0).toUpperCase()+i.filterGroup.slice(1)}</span>`;B.innerHTML=s,f(i.filter)}}function $(e){e.preventDefault(),n.value.length>0&&(i.page=1,i.keyword=n.value.trim().toLowerCase(),f(i.filter),n.value="",c.style.visibility="hidden")}function T(){n.value.length>0?c.style.visibility="visible":c.style.visibility="hidden"}function M(){n.value="",c.style.visibility="hidden",i.page=1,f(i.filter)}n.addEventListener("keypress",function(e){if(e.key==="Enter"){const t=n.value.trim().toLowerCase();i.keyword=t,c.style.visibility="hidden",i.page=1,f(i.filter),n.value=""}});function P(e){e.target.tagName==="BUTTON"&&(n.value="",q.style.display="none",r.innerHTML="",r.classList.remove("exercises-card"),k.removeEventListener("click",$),c.removeEventListener("click",M),n.removeEventListener("input",T),E.removeEventListener("click",P),i.page=1,B.innerHTML="Exercises")}function U(e){window.innerWidth>=1440?i.limit=9:i.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:i.limit*e,itemsPerPage:i.limit,visiblePages:3,centerAlign:!0};return new S(t,s)}function A(e){window.innerWidth>=768?i.limit=12:i.limit=8;const t=document.querySelector(".tui-pagination"),s={totalItems:i.limit*e,itemsPerPage:i.limit,visiblePages:3,centerAlign:!0};return new S(t,s)}const a={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};m.defaults.baseURL="https://energyflow.b.goit.study/api";function F(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const l={page:1,limit:1,filter:"Muscles"};async function b(e){return F(),(await m.get("/filters",{params:{filter:l.filter,limit:l.limit,page:e}})).data}function G(e){d.error({position:"topRight",message:e})}function L(e){a.gallery.innerHTML="";const t=e.map(({name:s,filter:o,imgUrl:y})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${y}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${o}</li>
            </ul>
        </a>
    </li>`).join("");a.gallery.innerHTML=t}async function C(){window.innerWidth>=768?l.limit=12:l.limit=8,b(l.page).then(e=>{const{results:t}=e;L(t),e.totalPages>1?(document.querySelector(".tui-pagination").style.display="flex",A(e.totalPages).on("afterMove",({page:s})=>{b(s).then(o=>{const{results:y}=o;a.gallery.innerHTML="",L(y)})})):document.querySelector(".tui-pagination").style.display="none"}).catch(e=>{G(e.message)})}C();a.musclesBtn.classList.add("active");a.buttons.addEventListener("click",e=>{j(e);const t=e.target;t!==e.currentTarget&&(t===a.musclesBtn?l.filter="Muscles":t===a.bodypartsBtn?l.filter="Body parts":t===a.equipBtn&&(l.filter="Equipment"),C())});let u=null;function j(e){const t=e.target.nodeName==="BUTTON";a.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),u!==null&&u.classList.remove("active"),u=e.target,u===u&&u.classList.add("active"))}const D=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,v=document.querySelector(".footer-subscription-form"),H=document.querySelector(".footer-subscription-input"),I="feedback-subscribe-state",N=async e=>{try{return(await m.post("https://energyflow.b.goit.study/api/subscription",{email:e})).data}catch(t){throw t}},W=async e=>{e.preventDefault();const t=H.value.trim();if(!D.test(t))d.error({message:"Enter the correct email!"});else{try{await N(t),d.success({message:"Successful subscription!"})}catch{d.error({message:"The user with this address is already subscribed!"})}localStorage.removeItem(I),v.reset()}};v.addEventListener("submit",W);v.addEventListener("input",e=>{const t=H.value.trim(),s=JSON.stringify({footerEmail:t});localStorage.setItem(I,s)});
//# sourceMappingURL=commonHelpers2.js.map
