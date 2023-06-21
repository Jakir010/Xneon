
$(document).ready(function() {
    // Magnafic popup js
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });

    // counterup js
    $('.counter-up').counterUp({
        delay: 10,
        time: 10000
    });
    
    // slick js
    $('.testimonials').slick({
        arrows:false,
        slidesToScroll: 1,
        autoplay: true,
        loop: true,
        autoplaySpeed: 2000,
        dots: true,
    });
});

$(window).load(function(){

    //sticky function

    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else{
            $('.header-area').removeClass('sticky')
        }
    })
})