import{a as u,f}from"./vendor-a0f761d2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".link-favorites"),i=document.querySelector(".link-home");(()=>{const o={openModalBtn:document.querySelector(".burger-menu-open"),closeModalBtn:document.querySelector(".burger-closed"),modal:document.querySelector(".backdrop")};document.querySelector(".backdrop").classList.add("is-hidden"),o.openModalBtn.addEventListener("click",function(){console.log("Open modal button clicked"),s()}),o.closeModalBtn.addEventListener("click",s);function s(){o.modal.classList.toggle("is-hidden")}})();window.addEventListener("load",()=>{window.location.pathname.endsWith("favorites.html")?(l.classList.add("active-link"),i.classList.remove("active-link")):(i.classList.add("active-link"),l.classList.remove("active-link"))});async function m({filter:o,page:r=1,limit:s=12,typeFilter:n,id:e=null}){try{const t=e?`https://energyflow.b.goit.study/api/${n}/${e}`:`https://energyflow.b.goit.study/api/${n}`;return await u.get(t,{params:{filter:o,page:r,limit:s,id:e}})}catch{console.error(error.message)}}async function y({userEmail:o,typeFilter:r}){try{return await u.post(`https://energyflow.b.goit.study/api/${r}`,o)}catch(s){console.error(s.message)}}function p(){const o=document.querySelector(".js-quote"),r=document.querySelector(".js-author"),n=f(new Date,"dd.MM.yyyy"),e=localStorage.getItem("dateNow");setTimeout(()=>{if(e===n){const t=JSON.parse(localStorage.getItem("quoteDay")),{author:c,quote:a}=t;o.textContent=a,r.textContent=c;return}},500),(!e||e!==n||!localStorage.getItem("quoteDay"))&&(localStorage.setItem("dateNow",n),m({typeFilter:"quote"}).then(({data:t})=>{const{author:c,quote:a}=t,d={author:c,quote:a};localStorage.setItem("quoteDay",JSON.stringify(d)),o.textContent=a,r.textContent=c}).catch(()=>{console.log(err)}))}p();export{m as g,y as p};
//# sourceMappingURL=quote-06190aaa.js.map
