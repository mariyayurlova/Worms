import './how.scss';
import $ from 'jquery';
import Swiper from 'swiper';

var swiper = new Swiper('.how__container', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        768: {
            spaceBetween: 20,
            slidesPerView: 3},
        1024: {
            spaceBetween: 30,
            slidesPerView: 4},
        1280: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    }
});