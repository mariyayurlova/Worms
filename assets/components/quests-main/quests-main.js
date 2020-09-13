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
    breakpoints: {
        1024: {
            pagination: {
                el: '.quests-main__pagination',
                clickable: true,
            }
        }
    }
});