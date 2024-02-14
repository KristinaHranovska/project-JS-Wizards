import{a as w,f as x}from"./vendor-0a7c832e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();(()=>{const e={openModalBtn:document.querySelector(".burger-menu-open"),closeModalBtn:document.querySelector(".burger-closed"),modal:document.querySelector(".backdrop"),backdrop:document.querySelector(".background-menu")};e.modal.classList.add("is-hidden"),e.openModalBtn.addEventListener("click",function(){n(),s();const t=document.getElementsByClassName("js-main-link-home"),o=document.getElementsByClassName("js-main-link-favorites");window.location.pathname==="/"+"favorites.html"?(Array.from(o).forEach(a=>a.classList.add("active-link")),Array.from(t).forEach(a=>a.classList.remove("active-link"))):(Array.from(t).forEach(a=>a.classList.add("active-link")),Array.from(o).forEach(a=>a.classList.remove("active-link")))}),e.closeModalBtn.addEventListener("click",function(){n(),r()}),e.backdrop.addEventListener("click",function(t){t.target===e.backdrop&&(n(),r())});function n(){e.modal.classList.toggle("is-hidden"),e.backdrop.classList.toggle("hidden")}function s(){document.body.style.overflow="hidden"}function r(){document.body.style.overflow=""}})();const y=document.querySelector(".link-favorites"),g=document.querySelector(".link-home");window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(y.classList.add("active-link"),g.classList.remove("active-link")):(g.classList.add("active-link"),y.classList.remove("active-link"))});async function p({filter:e,limit:n,page:s=1,typeFilter:r,id:t=null}){try{const o=t?`https://energyflow.b.goit.study/api/${r}/${t}`:`https://energyflow.b.goit.study/api/${r}`;return await w.get(o,{params:{filter:e,page:s,limit:n,id:t}})}catch(o){console.error(o.message)}}function C(){const e=document.querySelector(".js-quote"),n=document.querySelector(".js-author"),r=x(new Date,"dd.MM.yyyy"),t=localStorage.getItem("dateNow");setTimeout(()=>{if(t===r){const o=JSON.parse(localStorage.getItem("quoteDay")),{author:c,quote:l}=o;e.textContent=l,n.textContent=c;return}},500),(!t||t!==r||!localStorage.getItem("quoteDay"))&&(localStorage.setItem("dateNow",r),p({typeFilter:"quote"}).then(({data:o})=>{const{author:c,quote:l}=o,a={author:c,quote:l};localStorage.setItem("quoteDay",JSON.stringify(a)),e.textContent=l,n.textContent=c}).catch(()=>{console.log(err)}))}C();const D="/project-JS-Wizards/assets/sprite-afa54ed9.svg",d=document.querySelector(".backdrop-thumb"),k=document.querySelector(".js-modal-window"),V=document.querySelector(".js-gallery"),E=document.querySelector(".link-home"),h=E.getAttribute("href"),q=window.location.pathname,v=document.querySelector(".buttons-modal");(q.includes("index.html")||h==="./index.html")&&v.classList.remove("visually-hidden");(q.includes("favorites.html")||h==="./favorites.html")&&v.classList.add("visually-hidden");V.addEventListener("click",P);function P(e){if(e.target.classList.contains("js-start")){d.classList.remove("is-open"),document.body.style.overflow="hidden";const n=e.target.closest(".js-id");if(n){const s=n.dataset.id;A(s)}}}k.addEventListener("click",S);document.addEventListener("keydown",M);function S(e){d.classList.add("is-open"),document.body.style.overflow="",B()}function M(e){e.code==="Escape"&&(d.classList.add("is-open"),document.body.style.overflow="")}d.addEventListener("click",function(e){e.target===this&&S()});function A(e){p({typeFilter:"exercises",id:e}).then(({data:n})=>{const{name:s,rating:r,target:t,bodyPart:o,equipment:c,popularity:l,burnedCalories:a,description:b,gifUrl:L,_id:j}=n;document.querySelector(".modal-window").setAttribute("data-modal-id",j);const i={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")},u=Math.round(r).toFixed(1);document.querySelectorAll(".raiting-item .icon-star").forEach((m,f)=>{f<Math.floor(u)||f===Math.floor(u)&&u%1!==0?m.classList.remove("non-activ"):m.classList.add("non-activ")}),i.img.setAttribute("src",L),i.title.textContent=s.charAt(0).toUpperCase()+s.slice(1),i.raiting.textContent=u,i.targetValue.textContent=t,i.bodyPartValue.textContent=o,i.equipmentValue.textContent=c,i.popularValue.textContent=l,i.caloriesValue.textContent=a,i.descriptionValue.textContent=b}).catch(n=>console.error(n))}function B(){const e={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};e.img.setAttribute("src",""),e.title.textContent="",e.raiting.textContent="",e.targetValue.textContent="",e.bodyPartValue.textContent="",e.equipmentValue.textContent="",e.popularValue.textContent="",e.caloriesValue.textContent="",e.descriptionValue.textContent="",document.querySelectorAll(".raiting-item .icon-star").forEach(s=>{s.classList.add("non-activ")})}export{p as g,D as i};
//# sourceMappingURL=modal-window-02685f69.js.map
