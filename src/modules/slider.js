import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

let swiper = new Swiper(".gallery__slider", {
    modules: [Pagination],
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + '</div>'
        }
    }
})

document.querySelector('.gallery__navigation-next').addEventListener('click', () => {
    swiper.slideNext();
  });
  
document.querySelector('.gallery__navigation-prev').addEventListener('click', () => {
    swiper.slidePrev();
});