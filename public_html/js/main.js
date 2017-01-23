particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
$(document).ready(function () {
    $('.bxslider').bxSlider({
        pager: false,
        adaptiveHeight: true,
        auto: true
    });
});
