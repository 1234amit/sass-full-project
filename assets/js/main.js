//for create the smoth scorll
$(document).ready(function(){
    $('#nav').onePageNav({
        currentClass: 'current',
    })
    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    $('.counter-increment').counterUp();

    // mobile menu activate
    $('#nav').slicknav();
})

// for create the sticky navbar
$(window).on('scroll', function(){
    if($(this).scrollTop() > 25){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky')
    }
})