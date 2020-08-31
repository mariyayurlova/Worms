import './header.scss';
import $ from 'jquery';

//Hamburger
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $(".header__menu").toggleClass("header__menu_active");
});

//Menu hover
$(".header__menu-item").hover(function() {
    $(this).addClass("header__menu-item_active");
}, function() {
    $(this).removeClass("header__menu-item_active");
});
