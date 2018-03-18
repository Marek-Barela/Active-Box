$(document).ready(function() {
    function scickyNav() {
        if($(window).scrollTop()) {
            $('.header__scicky-nav').addClass('scicky-nav--black');
            $('.header__logo').css('top', '20px')
            $('.header__logo img').css('width', '140px')
            $('.navigation__items').css('padding-top', '0')
        }
        else {
            $('.header__scicky-nav').removeClass('scicky-nav--black');
            $('.header__logo').css('top', '36px')
            $('.header__logo img').css('width', '189px')
            $('.navigation__items').css('padding-top', '20px')
        }
    }
    $(window).on('scroll', function() {
        scickyNav()
    })
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('.navigation__hidden-layer').removeClass('navigation__hidden-layer--is-active');
        $('.hamburger').removeClass('is-active');
        const target = this.hash;
        const $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top - 70 + "px"
        }, 800, 'swing')
    })
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('is-active');
        $('.navigation__hidden-layer').toggleClass('navigation__hidden-layer--is-active');
    })
    scickyNav()
})
