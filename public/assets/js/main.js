/*
    Template Name: Nego - Fashion Ecommerce Bootstrap 4 Template
    Description: This is html5 template
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. jQuery MeanMenu
    03. Owl Carousel
    04. NivoSlider
    05. Slick Slider
    06. Countdown
	07. ScrollUp
    08. MagnificPopup
    09. Counter Up
    10. Wow js
    11. Price Slider
    12. EasyZoom instances
    13. Isotope & Imageload
    14. Scroll Down
    15. Product Modal
    16. Login Toggle
    17. Coupon Toggle
    18. Account Toggle
    19. Ship Address Toggle
 
======================================
[ End table content ]
======================================*/

(function($) {
  'use strict';

  /*------------------------------------
    01. Sticky Menu
-------------------------------------- */

  var windows = $(window);
  var stick = $('.header-sticky');
  windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 245) {
      stick.removeClass('sticky');
    } else {
      stick.addClass('sticky');
    }
  });

  /*------------------------------------
    02. jQuery MeanMenu
-------------------------------------- */
  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu-area .mobile-menu'
  });

  /*----------------------------------------
    03. Owl Carousel
---------------------------------------- */
  $('.product-carousel').owlCarousel({
    loop: true,
    items: 4,
    dotClass: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      600: {
        items: 3
      },
      800: {
        items: 3
      },
      1024: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  $('.product-carousel-1').owlCarousel({
    loop: true,
    items: 5,
    dotClass: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      600: {
        items: 3
      },
      800: {
        items: 3
      },
      1024: {
        items: 4
      },
      1200: {
        items: 4
      },
      1400: {
        items: 4
      },
      1920: {
        items: 5
      }
    }
  });
  $('.product-carousel-2').owlCarousel({
    loop: true,
    items: 3,
    dotClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1024: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.small-product-carousel').owlCarousel({
    loop: true,
    items: 1,
    dotClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1024: {
        items: 2
      },
      1200: {
        items: 1
      }
    }
  });
  $('.blog-carousel').owlCarousel({
    loop: true,
    items: 1,
    dotClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1024: {
        items: 2
      },
      1200: {
        items: 1
      }
    }
  });
  $('.blog-carousel-2').owlCarousel({
    loop: true,
    items: 4,
    dotClass: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1024: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  $('.product-carousel-3').owlCarousel({
    loop: true,
    items: 6,
    dotClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1024: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });
  $('.blog-carousel-3').owlCarousel({
    loop: true,
    items: 3,
    dotClass: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
  $('.gallery-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: [
      '<i class="fa fa-caret-left"></i>',
      '<i class="fa fa-caret-right"></i>'
    ]
  });

  /*----------------------------------------
    Product Details Slick Slider
------------------------------------------
    $('.product-thumbnail-slider').slick({
        autoplay: false,
        infinite: true,
        centerPadding: '0px',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-image-slider',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    $('.product-image-slider').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        asNavFor: '.product-thumbnail-slider',
        arrows: false,
        swipeToSlide : false,
        swipe : false
    });
    
/*---------------------------------
    06. Countdown
----------------------------------- */

  $('[data-countdown]').each(function() {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(
        event.strftime(
          '<div class="cdown days"><span class="counting">%-D</span>Days</div><div class="cdown hours"><span class="counting">%-H</span>Hrs</div><div class="cdown minutes"><span class="counting">%M</span>Mins</div><div class="cdown seconds"><span class="counting">%S</span>Secs</div>'
        )
      );
    });
  });

  /*------------------------------------------
    07. ScrollUp
------------------------------------------- */

  $.scrollUp({
    scrollText: '<i class="fa fa-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  /*-------------------------------------
    08. MagnificPopup
--------------------------------------- */
  $('.img-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*-----------------------------------------
    09. Counter Up
------------------------------------------ */

  $('.counter').counterUp({
    delay: 70,
    time: 5000
  });

  /*------------------------------------------
    10. Wow js
-------------------------------------------- */

  new WOW().init();

  /*------------------------------------------
    11. Price Slider
-------------------------------------------- */

  $('#slider-range').slider({
    range: true,
    min: 110,
    max: 300,
    values: [120, 240],
    slide: function(event, ui) {
      $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });
  $('#amount').val(
    '$' +
      $('#slider-range').slider('values', 0) +
      ' - $' +
      $('#slider-range').slider('values', 1)
  );

  /*------------------------------------------
    12. EasyZoom instances
-------------------------------------------- */

  var $easyzoom = $('.easyzoom').easyZoom();

  /*------------------------------------------
    13. Isotope & Imageload
-------------------------------------------- */

  var isotopFilter = $('.isotop-filter');
  var isotopGrid = $('.isotop-grid');
  var isotopGridItem = '.isotop-item';
  /*-- Images Loaded --*/
  isotopGrid.imagesLoaded(function() {
    /*-- Filter List --*/
    isotopFilter.on('click', 'button', function() {
      isotopFilter.find('button').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      isotopGrid.isotope({ filter: filterValue });
    });
    /*-- Filter Grid Layout FitRows --*/
    isotopGrid.isotope({
      itemSelector: isotopGridItem,
      layoutMode: 'fitRows',
      masonry: {
        columnWidth: 1
      }
    });
  });

  /*------------------------------------
    14. Scroll Down
-------------------------------------- */

  $('.scroll-down').on('click', function() {
    $('html, body').animate(
      { scrollTop: $('.scroll-area').offset().top - 100 },
      'slow'
    );
    return false;
  });

  /*------------------------------------------
    15. Product Modal
-------------------------------------------- */

  $('.modal').on('shown.bs.modal', function(e) {
    $('.single-slide-menu').resize();
  });
  $('.single-slide-menu a').on('click', function(e) {
    e.preventDefault();
    var $href = $(this).attr('href');
    $('.single-slide-menu a').removeClass('active');
    $(this).addClass('active');
    $('.product-details-large .tab-pane').removeClass('active show');
    $('.product-details-large ' + $href).addClass('active show');
  });

  /*------------------------------------------
    16. Login Toggle
-------------------------------------------- */
  $('#showlogin').on('click', function() {
    $('#checkout-login').slideToggle(900);
  });

  /*------------------------------------------
    17. Coupon Toggle
-------------------------------------------- */
  $('#showcoupon').on('click', function() {
    $('#checkout_coupon').slideToggle(900);
  });

  /*------------------------------------------
    18. Account Toggle
-------------------------------------------- */
  $('#cbox').on('click', function() {
    $('#cbox_info').slideToggle(900);
  });

  /*------------------------------------------
    19. Ship Address Toggle
-------------------------------------------- */
  $('#ship-box').on('click', function() {
    $('#ship-box-info').slideToggle(1000);
  });
})(jQuery);
