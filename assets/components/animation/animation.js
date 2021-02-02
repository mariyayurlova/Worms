import './animation.scss';
import $ from 'jquery';
import Swiper from 'swiper';


var swiper = new Swiper('.animation__container', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        768: {
            spaceBetween: 20,
            slidesPerView: 2},
        1024: {
            spaceBetween: 30,
            slidesPerView: 3},
        1280: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});