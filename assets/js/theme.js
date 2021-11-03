'use strict';





jQuery(document).ready(function () {

    $('#tab-2').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<div class="slider-btn-prev"><i class="fa fa-angle-left"></i></div>',
        nextArrow:'<div class="slider-btn-next"><i class="fa fa-angle-right"></i></div>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      });
      $('.testimonials-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="slider-btn-prev"><i class="fa fa-angle-left"></i></div>',
        nextArrow:'<div class="slider-btn-next"><i class="fa fa-angle-right"></i></div>',
      });



      $('tabs a').click(function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('active');
        $('.tab-pane').forEach(element => {
            element.removeClass('active');
        });

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('active');
      })
    // Prevent empty links
    // ---------------------------------------------------------------------------------------
  
    // Sticky header/menu
    // ---------------------------------------------------------------------------------------
    if ($().sticky) {
        $('.header.fixed').sticky({topSpacing: 0});
        //$('.header.fixed').on('sticky-start', function() { console.log("Started"); });
        //$('.header.fixed').on('sticky-end', function() { console.log("Ended"); });
    }
    // SuperFish menu
    // ---------------------------------------------------------------------------------------
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $('ul.sf-menu a').on('click', function () {
        body.scrollspy('refresh');
    });
    // Fixed menu toggle
    $('.menu-toggle').on('click', function () {
        if ($('.navigation').hasClass('opened')) {
            $('.navigation').removeClass('opened').addClass('closed');
        } else {
            $('.navigation').removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if ($('.navigation').hasClass('opened')) {
            $('.navigation').removeClass('opened').addClass('closed');
        } else {
            $('.navigation').removeClass('closed').addClass('opened');
        }
    });
    //
    
    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }
    
   

});




jQuery(window).scroll(function () {
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});