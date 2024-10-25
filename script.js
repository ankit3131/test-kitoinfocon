$(document).ready(function(){
    $('#slider1').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        400:{
          items: 2
        },
        500:{
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
    });
  });
  $(document).ready(function(){
    $('.col-content a').click(function(e) {
      e.preventDefault(); // Prevent default action of the link
      $('.col-content a').removeClass('active'); // Remove 'active' class from all links
      $(this).addClass('active'); // Add 'active' class to the clicked link
    });
  });

  $(document).ready(function(){
    $("#slider2 .owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        400:{
          items: 2
        },
        500:{
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 7
        }
      }
    });
  });

  $(document).ready(function(){
    $('#slider3').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  window.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if the click is outside the menu and the hamburger icon
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove('active');
    }
  });

