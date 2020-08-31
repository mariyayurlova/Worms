import './banner-main.scss';
import $ from 'jquery';
import Swiper from 'swiper';

// Swiper
var swiper = new Swiper('.banner-main__container', {
    pagination: {
        el: '.banner-main__pagination',
    },
});
