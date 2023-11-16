// Updated syntax
$(function ($) {
    let carouselWidth = $('.carousel-inner')[0].scrollWidth;
    let cardWidth = $('.carousel-item').width();
    let scrollPosition = 0;
  
    $('.carousel-control-next').click(function() {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    });
  });
  