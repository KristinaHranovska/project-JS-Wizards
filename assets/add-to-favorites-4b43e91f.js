import{a as b,f as L}from"./vendor-0a7c832e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();(()=>{const e={openModalBtn:document.querySelector(".burger-menu-open"),closeModalBtn:document.querySelector(".burger-closed"),modal:document.querySelector(".backdrop"),backdrop:document.querySelector(".background-menu")};e.modal.classList.add("is-hidden"),e.openModalBtn.addEventListener("click",function(){n(),r();const o=document.getElementsByClassName("js-main-link-home"),t=document.getElementsByClassName("js-main-link-favorites"),s=window.location.pathname,d="favorites.html";s.endsWith(d)?(console.log("FAVORITES"),Array.from(t).forEach(i=>i.classList.add("active-link")),Array.from(o).forEach(i=>i.classList.remove("active-link"))):(console.log("HOME"),Array.from(o).forEach(i=>i.classList.add("active-link")),Array.from(t).forEach(i=>i.classList.remove("active-link")))}),e.closeModalBtn.addEventListener("click",function(){n(),a()}),e.backdrop.addEventListener("click",function(o){o.target===e.backdrop&&(n(),a())});function n(){e.modal.classList.toggle("is-hidden"),e.backdrop.classList.toggle("hidden")}function r(){document.body.style.overflow="hidden"}function a(){document.body.style.overflow=""}})();const g=document.querySelector(".link-favorites"),f=document.querySelector(".link-home");window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(g.classList.add("active-link"),f.classList.remove("active-link")):(f.classList.add("active-link"),g.classList.remove("active-link"))});async function p({filter:e,limit:n,page:r=1,typeFilter:a,id:o=null}){try{const t=o?`https://energyflow.b.goit.study/api/${a}/${o}`:`https://energyflow.b.goit.study/api/${a}`;return await b.get(t,{params:{filter:e,page:r,limit:n,id:o}})}catch(t){console.error(t.message)}}function j(){const e=document.querySelector(".js-quote"),n=document.querySelector(".js-author"),a=L(new Date,"dd.MM.yyyy"),o=localStorage.getItem("dateNow");setTimeout(()=>{if(o===a){const t=JSON.parse(localStorage.getItem("quoteDay")),{author:s,quote:d}=t;e.textContent=d,n.textContent=s;return}},500),(!o||o!==a||!localStorage.getItem("quoteDay"))&&(localStorage.setItem("dateNow",a),p({typeFilter:"quote"}).then(({data:t})=>{const{author:s,quote:d}=t,i={author:s,quote:d};localStorage.setItem("quoteDay",JSON.stringify(i)),e.textContent=d,n.textContent=s}).catch(()=>{console.log(err)}))}j();const T="/project-JS-Wizards/assets/sprite-afa54ed9.svg",m=document.querySelector(".backdrop-thumb"),w=document.querySelector(".js-modal-window"),C=document.querySelector(".js-gallery"),y=document.querySelectorAll(".raiting");C.addEventListener("click",E);function E(e){if(e.target.classList.contains("js-start")){m.classList.remove("is-open"),document.body.style.overflow="hidden";const n=e.target.closest(".js-id");if(n){const r=n.dataset.id;V(r)}}}w.addEventListener("click",v);document.addEventListener("keydown",I);function v(e){m.classList.add("is-open"),document.body.style.overflow="",k()}function I(e){e.code==="Escape"&&(m.classList.add("is-open"),document.body.style.overflow="")}m.addEventListener("click",function(e){e.target===this&&v()});function V(e){p({typeFilter:"exercises",id:e}).then(({data:n})=>{const{name:r,rating:a,target:o,bodyPart:t,equipment:s,popularity:d,burnedCalories:i,description:S,gifUrl:h,_id:q}=n;document.querySelector(".modal-window").setAttribute("data-modal-id",q);const l={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};l.img.setAttribute("src",h),l.title.textContent=r.charAt(0).toUpperCase()+r.slice(1),l.raiting.textContent=a,l.targetValue.textContent=o,l.bodyPartValue.textContent=t,l.equipmentValue.textContent=s,l.popularValue.textContent=d,l.caloriesValue.textContent=i,l.descriptionValue.textContent=S,y.length>0&&x()}).catch(n=>console.error(n))}function k(){const e={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};e.img.setAttribute("src",""),e.title.textContent="",e.raiting.textContent="",e.targetValue.textContent="",e.bodyPartValue.textContent="",e.equipmentValue.textContent="",e.popularValue.textContent="",e.caloriesValue.textContent="",e.descriptionValue.textContent="",document.querySelectorAll(".raiting-item .icon-star").forEach(r=>{r.classList.add("non-activ")})}function x(){let e,n;for(let t=0;t<y.length;t++){const s=y[t];r(s)}function r(t){a(t),o()}function a(t){e=t.querySelector(".raiting-active"),n=t.getElementsByClassName("raiting-value")[0],console.log(n)}function o(t=n.innerHTML){const s=t/.05;e.style.width=`${s}%`}}const B=JSON.parse(localStorage.getItem("addKeyID"))||[];let u;const c={addToFavoritesBtn:document.querySelector(".add-to-favorities"),removeFromFavoritesBtn:document.querySelector(".js-remove"),idModul:document.querySelector(".js-gallery")};c.idModul.addEventListener("click",F);function F(e){const n=e.target.closest(".js-id");n&&(u=n.dataset.id,D().includes(u)?(c.removeFromFavoritesBtn.classList.remove("hidden-btn"),c.addToFavoritesBtn.classList.add("hidden-btn")):(c.removeFromFavoritesBtn.classList.add("hidden-btn"),c.addToFavoritesBtn.classList.remove("hidden-btn")))}if(!localStorage.getItem("addKeyID")){const e=[];localStorage.setItem("addKeyID",JSON.stringify(e))}c.addToFavoritesBtn.addEventListener("click",A);function A(){c.removeFromFavoritesBtn.classList.remove("hidden-btn"),c.addToFavoritesBtn.classList.add("hidden-btn");const e=JSON.parse(localStorage.getItem("addKeyID"));e.push(u),localStorage.setItem("addKeyID",JSON.stringify(e))}c.removeFromFavoritesBtn.addEventListener("click",M);function M(){c.removeFromFavoritesBtn.classList.add("hidden-btn"),c.addToFavoritesBtn.classList.remove("hidden-btn"),O()}function O(){const e=B.filter(r=>r!==u);localStorage.setItem("addKeyID",JSON.stringify(e));const n=document.querySelector(`.list-favorites-item[data-id="${u}"]`);n&&n.remove()}function D(){return localStorage.getItem("addKeyID")}export{p as g,T as i};
//# sourceMappingURL=add-to-favorites-4b43e91f.js.map
