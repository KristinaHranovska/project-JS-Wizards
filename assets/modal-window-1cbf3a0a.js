import{a as q,f as j,i as p}from"./vendor-0a7c832e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const g=document.querySelector(".link-favorites"),f=document.querySelector(".link-home");(()=>{const e={openModalBtn:document.querySelector(".burger-menu-open"),closeModalBtn:document.querySelector(".burger-closed"),modal:document.querySelector(".backdrop")};document.querySelector(".backdrop").classList.add("is-hidden"),e.openModalBtn.addEventListener("click",function(){console.log("Open modal button clicked"),r()}),e.closeModalBtn.addEventListener("click",r);function r(){e.modal.classList.toggle("is-hidden")}})();window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(g.classList.add("active-link"),f.classList.remove("active-link")):(f.classList.add("active-link"),g.classList.remove("active-link"))});async function S({filter:e,limit:n,page:r=1,typeFilter:s,id:t=null}){try{const o=t?`https://energyflow.b.goit.study/api/${s}/${t}`:`https://energyflow.b.goit.study/api/${s}`;return await q.get(o,{params:{filter:e,page:r,limit:n,id:t}})}catch(o){console.error(o.message)}}async function B({userEmail:e,typeFilter:n}){try{return await q.post(`https://energyflow.b.goit.study/api/${n}`,e)}catch(r){console.error(r.message)}}function w(){const e=document.querySelector(".js-quote"),n=document.querySelector(".js-author"),s=j(new Date,"dd.MM.yyyy"),t=localStorage.getItem("dateNow");setTimeout(()=>{if(t===s){const o=JSON.parse(localStorage.getItem("quoteDay")),{author:c,quote:i}=o;e.textContent=i,n.textContent=c;return}},500),(!t||t!==s||!localStorage.getItem("quoteDay"))&&(localStorage.setItem("dateNow",s),S({typeFilter:"quote"}).then(({data:o})=>{const{author:c,quote:i}=o,d={author:c,quote:i};localStorage.setItem("quoteDay",JSON.stringify(d)),e.textContent=i,n.textContent=c}).catch(()=>{console.log(err)}))}w();const D={getInfo(e){p.info({title:"Hello",message:e})},getErrorInfo(e){p.error({title:"Error",message:e})},getSuccessInfo(e){p.success({title:"OK",message:e})}},N="/project-JS-Wizards/assets/sprite-afa54ed9.svg",u=document.querySelector(".backdrop-thumb"),x=document.querySelector(".js-modal-window"),C=document.querySelector(".js-gallery"),V=window.location.pathname;if(V.includes("index.html")){const e=document.querySelector(".buttons-modal");e&&e.classList.remove("visually-hidden")}C.addEventListener("click",E);function E(e){if(e.target.classList.contains("js-start")){u.classList.remove("is-open"),document.body.style.overflow="hidden";const n=e.target.closest(".js-id");if(n){const r=n.dataset.id;k(r)}}}x.addEventListener("click",h);document.addEventListener("keydown",M);function h(e){u.classList.add("is-open"),document.body.style.overflow="",O()}function M(e){e.code==="Escape"&&(u.classList.add("is-open"),document.body.style.overflow="")}u.addEventListener("click",function(e){e.target===this&&h()});function k(e){S({typeFilter:"exercises",id:e}).then(({data:n})=>{const{name:r,rating:s,target:t,bodyPart:o,equipment:c,popularity:i,burnedCalories:d,description:b,gifUrl:v,_id:L}=n;document.querySelector(".modal-window").setAttribute("data-modal-id",L);const a={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")},l=Math.round(s).toFixed(1);document.querySelectorAll(".raiting-item .icon-star").forEach((m,y)=>{y<Math.floor(l)||y===Math.floor(l)&&l%1!==0?m.classList.remove("non-activ"):m.classList.add("non-activ")}),a.img.setAttribute("src",v),a.title.textContent=r.charAt(0).toUpperCase()+r.slice(1),a.raiting.textContent=l,a.targetValue.textContent=t,a.bodyPartValue.textContent=o,a.equipmentValue.textContent=c,a.popularValue.textContent=i,a.caloriesValue.textContent=d,a.descriptionValue.textContent=b}).catch(n=>console.error(n))}function O(){const e={img:document.querySelector(".js-img"),title:document.querySelector(".js-title"),raiting:document.querySelector(".js-raiting"),targetValue:document.querySelector(".js-target"),bodyPartValue:document.querySelector(".js-body-part"),equipmentValue:document.querySelector(".js-equipment"),popularValue:document.querySelector(".js-popular"),caloriesValue:document.querySelector(".js-calories"),descriptionValue:document.querySelector(".js-description")};e.img.setAttribute("src",""),e.title.textContent="",e.raiting.textContent="",e.targetValue.textContent="",e.bodyPartValue.textContent="",e.equipmentValue.textContent="",e.popularValue.textContent="",e.caloriesValue.textContent="",e.descriptionValue.textContent="",document.querySelectorAll(".raiting-item .icon-star").forEach(r=>{r.classList.add("non-activ")})}export{N as a,S as g,D as i,B as p};
//# sourceMappingURL=modal-window-1cbf3a0a.js.map
