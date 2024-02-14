import{a as j,f as w}from"./vendor-0a7c832e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const f=document.querySelector(".link-favorites"),p=document.querySelector(".link-home");(()=>{const e={openModalBtn:document.querySelector(".burger-menu-open"),closeModalBtn:document.querySelector(".burger-closed"),modal:document.querySelector(".backdrop"),backdrop:document.querySelector(".background-menu")};e.modal.classList.add("is-hidden"),e.openModalBtn.addEventListener("click",function(){n(),s()}),e.closeModalBtn.addEventListener("click",function(){n(),r()}),e.backdrop.addEventListener("click",function(t){t.target===e.backdrop&&(n(),r())});function n(){e.modal.classList.toggle("is-hidden"),e.backdrop.classList.toggle("hidden")}function s(){document.body.style.overflow="hidden"}function r(){document.body.style.overflow=""}})();window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(f.classList.add("active-link"),p.classList.remove("active-link")):(p.classList.add("active-link"),f.classList.remove("active-link"))});async function g({filter:e,limit:n,page:s=1,typeFilter:r,id:t=null}){try{const o=t?`https://energyflow.b.goit.study/api/${r}/${t}`:`https://energyflow.b.goit.study/api/${r}`;return await j.get(o,{params:{filter:e,page:s,limit:n,id:t}})}catch(o){console.error(o.message)}}function C(){const e=document.querySelector(".js-quote"),n=document.querySelector(".js-author"),r=w(new Date,"dd.MM.yyyy"),t=localStorage.getItem("dateNow");setTimeout(()=>{if(t===r){const o=JSON.parse(localStorage.getItem("quoteDay")),{author:c,quote:i}=o;e.textContent=i,n.textContent=c;return}},500),(!t||t!==r||!localStorage.getItem("quoteDay"))&&(localStorage.setItem("dateNow",r),g({typeFilter:"quote"}).then(({data:o})=>{const{author:c,quote:i}=o,d={author:c,quote:i};localStorage.setItem("quoteDay",JSON.stringify(d)),e.textContent=i,n.textContent=c}).catch(()=>{console.log(err)}))}C();const N="/project-JS-Wizards/assets/sprite-afa54ed9.svg",u=document.querySelector(".backdrop-thumb"),V=document.querySelector(".js-modal-window"),k=document.querySelector(".js-gallery"),E=document.querySelector(".link-home"),q=E.getAttribute("href"),h=window.location.pathname,S=document.querySelector(".buttons-modal");(h.includes("index.html")||q==="./index.html")&&S.classList.remove("visually-hidden");(h.includes("favorites.html")||q==="./favorites.html")&&S.classList.add("visually-hidden");k.addEventListener("click",M);function M(e){if(e.target.classList.contains("js-start")){u.classList.remove("is-open"),document.body.style.overflow="hidden";const n=e.target.closest(".js-id");if(n){const s=n.dataset.id;A(s)}}}V.addEventListener("click",v);document.addEventListener("keydown",P);function v(e){u.classList.add("is-open"),document.body.style.overflow="",O()}function P(e){e.code==="Escape"&&(u.classList.add("is-open"),document.body.style.overflow="")}u.addEventListener("click",function(e){e.target===this&&v()});function A(e){g({typeFilter:"exercises",id:e}).then(({data:n})=>{const{name:s,rating:r,target:t,bodyPart:o,equipment:c,popularity:i,burnedCalories:d,description:b,gifUrl:L,_id:x}=n;document.querySelector(".modal-window").setAttribute("data-modal-id",x);const a={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")},l=Math.round(r).toFixed(1);document.querySelectorAll(".raiting-item .icon-star").forEach((m,y)=>{y<Math.floor(l)||y===Math.floor(l)&&l%1!==0?m.classList.remove("non-activ"):m.classList.add("non-activ")}),a.img.setAttribute("src",L),a.title.textContent=s.charAt(0).toUpperCase()+s.slice(1),a.raiting.textContent=l,a.targetValue.textContent=t,a.bodyPartValue.textContent=o,a.equipmentValue.textContent=c,a.popularValue.textContent=i,a.caloriesValue.textContent=d,a.descriptionValue.textContent=b}).catch(n=>console.error(n))}function O(){const e={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};e.img.setAttribute("src",""),e.title.textContent="",e.raiting.textContent="",e.targetValue.textContent="",e.bodyPartValue.textContent="",e.equipmentValue.textContent="",e.popularValue.textContent="",e.caloriesValue.textContent="",e.descriptionValue.textContent="",document.querySelectorAll(".raiting-item .icon-star").forEach(s=>{s.classList.add("non-activ")})}export{g,N as i};
//# sourceMappingURL=modal-window-cc934ccc.js.map
