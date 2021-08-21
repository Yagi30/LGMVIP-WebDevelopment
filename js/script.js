// scroll to shange header background
let oldBg = document.querySelector('header').style.background;
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('header').css({ 'background-color': '#111' });
      $('header').addClass('shadow');
    } else {
      $('header').css({ 'background-color': oldBg });
      $('header').removeClass('shadow');
    }
  });
});

// toggle mobile navigation
$(document).ready(function () {
  $('.toggle').click(function () {
    $('#mob-menu').slideDown('slow');
    $('.mobnav ul').show();
  });
  $('#close').click(function () {
    $('#mob-menu').slideUp('slow');
  });
  $('.mobnav ul li a').click(function () {
    $('#mob-menu').fadeOut();
  });
});

// background slider
(function () {
  var index = 0;

  $imageEls = $('.Slider .Slider-slide'); // Get the images to be cycled.

  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;

    // Show the next
    $imageEls.eq(index).addClass('show');

    // Hide the previous
    $imageEls.eq(index - 1).removeClass('show');
  }, 4000);
})();

// owl carousel
$('.slider-gallery').owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
  },
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  nav: true,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// image gallery
const display = document.querySelector('.display');
const boxes = document.querySelectorAll('#gallery .img_row .box');

boxes.forEach((item) => {
  item.addEventListener('click', (e) => {
    display.style.backgroundImage = item.style.backgroundImage;
  });
});
