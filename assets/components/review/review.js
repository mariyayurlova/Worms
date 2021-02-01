import './review.scss';
import $ from 'jquery';
import Swiper from 'swiper';

var swiper = new Swiper('.review__container', {
    navigation: {
        nextEl: '.review__button-next',
        prevEl: '.review__button-prev',
    },
});

