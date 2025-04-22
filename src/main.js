import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  })
.then(response => console.log(response))
	.catch(error => console.log(error));