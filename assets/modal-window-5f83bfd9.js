import{a as j,f as w}from"./vendor-0a7c832e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p=document.querySelector(".link-favorites"),g=document.querySelector(".link-home");(()=>{const e={openModalBtn:document.querySelector(".burger-menu-open"),closeModalBtn:document.querySelector(".burger-closed"),modal:document.querySelector(".backdrop")};document.querySelector(".backdrop").classList.add("is-hidden"),e.openModalBtn.addEventListener("click",function(){r(),s()}),e.closeModalBtn.addEventListener("click",function(){r(),t()});function r(){e.modal.classList.toggle("is-hidden")}function s(){document.body.style.overflow="hidden"}function t(){document.body.style.overflow=""}})();window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(p.classList.add("active-link"),g.classList.remove("active-link")):(g.classList.add("active-link"),p.classList.remove("active-link"))});async function q({filter:e,limit:n,page:r=1,typeFilter:s,id:t=null}){try{const o=t?`https://energyflow.b.goit.study/api/${s}/${t}`:`https://energyflow.b.goit.study/api/${s}`;return await j.get(o,{params:{filter:e,page:r,limit:n,id:t}})}catch(o){console.error(o.message)}}function C(){const e=document.querySelector(".js-quote"),n=document.querySelector(".js-author"),s=w(new Date,"dd.MM.yyyy"),t=localStorage.getItem("dateNow");setTimeout(()=>{if(t===s){const o=JSON.parse(localStorage.getItem("quoteDay")),{author:c,quote:i}=o;e.textContent=i,n.textContent=c;return}},500),(!t||t!==s||!localStorage.getItem("quoteDay"))&&(localStorage.setItem("dateNow",s),q({typeFilter:"quote"}).then(({data:o})=>{const{author:c,quote:i}=o,m={author:c,quote:i};localStorage.setItem("quoteDay",JSON.stringify(m)),e.textContent=i,n.textContent=c}).catch(()=>{console.log(err)}))}C();const N="/project-JS-Wizards/assets/sprite-afa54ed9.svg",d=document.querySelector(".backdrop-thumb"),V=document.querySelector(".js-modal-window"),k=document.querySelector(".js-gallery"),M=document.querySelector(".link-home"),u=M.getAttribute("href"),h=window.location.pathname,S=document.querySelector(".buttons-modal");(h.includes("index.html")||u==="./index.html")&&(console.log(u),S.classList.remove("visually-hidden"));(h.includes("favorites.html")||u==="./favorites.html")&&(console.log(u),S.classList.add("visually-hidden"));k.addEventListener("click",E);function E(e){if(e.target.classList.contains("js-start")){d.classList.remove("is-open"),document.body.style.overflow="hidden";const n=e.target.closest(".js-id");if(n){const r=n.dataset.id;A(r)}}}V.addEventListener("click",v);document.addEventListener("keydown",P);function v(e){d.classList.add("is-open"),document.body.style.overflow="",O()}function P(e){e.code==="Escape"&&(d.classList.add("is-open"),document.body.style.overflow="")}d.addEventListener("click",function(e){e.target===this&&v()});function A(e){q({typeFilter:"exercises",id:e}).then(({data:n})=>{const{name:r,rating:s,target:t,bodyPart:o,equipment:c,popularity:i,burnedCalories:m,description:b,gifUrl:L,_id:x}=n;document.querySelector(".modal-window").setAttribute("data-modal-id",x);const a={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")},l=Math.round(s).toFixed(1);document.querySelectorAll(".raiting-item .icon-star").forEach((y,f)=>{f<Math.floor(l)||f===Math.floor(l)&&l%1!==0?y.classList.remove("non-activ"):y.classList.add("non-activ")}),a.img.setAttribute("src",L),a.title.textContent=r.charAt(0).toUpperCase()+r.slice(1),a.raiting.textContent=l,a.targetValue.textContent=t,a.bodyPartValue.textContent=o,a.equipmentValue.textContent=c,a.popularValue.textContent=i,a.caloriesValue.textContent=m,a.descriptionValue.textContent=b}).catch(n=>console.error(n))}function O(){const e={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};e.img.setAttribute("src",""),e.title.textContent="",e.raiting.textContent="",e.targetValue.textContent="",e.bodyPartValue.textContent="",e.equipmentValue.textContent="",e.popularValue.textContent="",e.caloriesValue.textContent="",e.descriptionValue.textContent="",document.querySelectorAll(".raiting-item .icon-star").forEach(r=>{r.classList.add("non-activ")})}export{q as g,N as i};
//# sourceMappingURL=modal-window-5f83bfd9.js.map
