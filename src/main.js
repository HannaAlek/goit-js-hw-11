import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import getImagesByQuery from "./js/pixabay-api";

import {createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions";

const errorMsg='Sorry, there are no images matching your search query. Please try again!';

const form=document.querySelector('.form');
// form.addEventListener('submit',(event)=>{
// event.preventDefault();
// const searchText=event.target.elements.value;
// // console.log(event.target.elements.text.trim())
// if (!event.target.elements.value){
// iziToast.show(errorMsg);
// form.reset();
// return
// };
// showLoader();

const inputSearch=document.querySelector('input.text')
const searchText=inputSearch;
getImagesByQuery(searchText)
.then(response=>{
    const arr=response.data.hits;
    if (!arr.length){
        iziToast.show(errorMsg);
        clearGallery();
        hideLoader();
        return;
    };
    hideLoader();
    createGallery(arr);
    let galleryLightbox=new SimpleLightbox('.gallery a',{
        captionsData:'alt',
        captionsDelay:250
    });
    galleryLightbox.refresh();
})
.catch(Error=>{
    hideLoader();
    iziToast.show('Error connecting to server');
});
form.reset();
// })
