import{a as f,i as a,S as u}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="49870616-6fef29b5083a7d4b692a746ee";function m(o){return f(`https://pixabay.com/api/?key=${p}`)}const n=document.querySelector(".gallery");function y(o){n.innerHTML=o.map(({webformatURL:r,largeImageURL:i,tags:l,likes:e,views:t,comments:s,downloads:c})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${l}"
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
      <p class='info-text'>${s}</p>
      </li>
      <li class='info-item'>
      <p class='info-text'>Downloads</p>
      <p class='info-text'>${c}</p>
      </li>
      </ul>
    </a>
  </li>
  `).join("")}function d(){n.classList.remove("loader")}const g="Sorry, there are no images matching your search query. Please try again!",h=document.querySelector(".form");document.querySelector("input.text");m().then(o=>{const r=o.data.hits;if(!r.length){a.show(g);return}y(r),new u(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(o=>{d(),a.show("Error connecting to server")});h.reset();
//# sourceMappingURL=index.js.map
