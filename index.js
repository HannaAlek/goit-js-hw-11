import{a as u,i as c,S as p}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="49870616-6fef29b5083a7d4b692a746ee";function y(o){return u(`https://pixabay.com/api/?key=${m}`)}const a=document.querySelector(".gallery");function d(o){a.innerHTML=o.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:t,comments:i,downloads:f})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${l}"
        width="500"
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
      <p class='info-text'>${i}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Downloads</p>
      <p class='info-text'>${f}</p>
      </li>
      </ul>
    </a>
  </li>
  `).join("")}function g(){a.innerHTML=""}function n(){a.classList.remove("loader")}const h="Sorry, there are no images matching your search query. Please try again!",x=document.querySelector(".form");document.querySelector("input.text");y().then(o=>{const r=o.data.hits;if(!r.length){c.show(h),g(),n();return}n(),d(r),new p(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(o=>{n(),c.show("Error connecting to server")});x.reset();
//# sourceMappingURL=index.js.map
