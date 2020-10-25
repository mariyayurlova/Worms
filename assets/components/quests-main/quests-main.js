import './quests-main.scss';
import $ from 'jquery';
import './../../../node_modules/@fortawesome/fontawesome-free/js/all.min';
import Swiper from 'swiper';

// Swiper
var swiper = new Swiper('.quests-main__container', {
    pagination: {
        el: '.quests-main__pagination',
        clickable: true,
    },
    breakpointsInverse: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 3,
            pagination: {
                el: '.quests-main__pagination',
                clickable: true,
            },
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});