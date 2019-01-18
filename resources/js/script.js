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
