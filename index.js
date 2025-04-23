import{a as p,i as l,S as m}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="49870616-6fef29b5083a7d4b692a746ee";function y(s){const r=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${r}`)}const f=document.querySelector(".gallery");function g(s){f.innerHTML=s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:a,downloads:u})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${o}"
      />
      <ul class='info-list'>
      <li class='info-item'>
      <p class='info-text'>Likes</p>
      <p class='info-text'>${e}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Views</p>
      <p class='info-text'>${t}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Comments</p>
      <p class='info-text'>${a}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Downloads</p>
      <p class='info-text'>${u}</p>
      </li>
      </ul>
    </a>
  </li>
  `).join("")}const h=document.querySelector("div");function L(){f.innerHTML=""}function n(){h.classList.remove("loader")}const x="Sorry, there are no images matching your search query. Please try again!",c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=document.querySelector("input");y(r.value).then(i=>{const o=i.data.hits;if(!o.length){l.show({message:`${x}`}),L(),n();return}n(),g(o),new m(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(i=>{n(),l.show({message:"Error connecting to server"})}),c.reset()});
//# sourceMappingURL=index.js.map
