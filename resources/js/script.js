$(document).ready(function() {
    /* for the sticky nav */
    $('.js--about-campaign-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {offset: '60px'});
})

$('.js--mobile-nav-icon').click(function() {
    
    const nav = $('.js--main-nav-box');
    const icon = $('.js--mobile-nav-icon ion-icon');
    nav.slideToggle(200);
    
    if (icon.attr('name') == 'menu') {
        icon.attr('name', 'close');
    } else {
        icon.attr('name', 'menu');
    }
});
