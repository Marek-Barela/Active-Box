$(document).ready(function() {
    const $stickyNavigation = $('.header__scicky-nav'),
    $logo = $('.header__logo'),
    $logoImage = $('.header__logo img'),
    $navigationItem = $('.navigation__items'),
    $navigationHiddenLayer = $('.navigation__hidden-layer'),
    $hamburgerButton = $('.hamburger');
    function stickyNav() {
        if($(window).scrollTop()) {
            $stickyNavigation.addClass('scicky-nav--black');
            $logo.css('top', '20px');
            $logoImage.css('width', '140px');
            $navigationItem.css('padding-top', '0');
        }
        else {
            $stickyNavigation.removeClass('scicky-nav--black');
            $logo.css('top', '36px');
            $logoImage.css('width', '189px');
            $navigationItem.css('padding-top', '20px');
        }
    }
    function removeNavClass() {
        $navigationHiddenLayer.removeClass('navigation__hidden-layer--is-active');
        $hamburgerButton.removeClass('is-active');
    };
    function toggleLayer() {
        $hamburgerButton.toggleClass('is-active');
        $navigationHiddenLayer.toggleClass('navigation__hidden-layer--is-active');
    };
    function scrollToLink(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top - 70 + "px"
        }, 800, 'swing')
        removeNavClass()
    };

    function nextQuote() {
        const currentImage = $('.quote--active'),
        nextImage = currentImage.next();

        if (nextImage.length) {
            currentImage.removeClass('quote--active');
            nextImage.addClass('quote--active');
        }
        else if (nextImage.length == 0) {
            currentImage.removeClass('quote--active');
            $('.quote--start').addClass('quote--active');
        }
    };
    setInterval(nextQuote, 5000)
    $('a[href*="#"]').on('click', scrollToLink)
    $hamburgerButton.on('click', toggleLayer)
    $(window).on('scroll', stickyNav)
    stickyNav()
})
