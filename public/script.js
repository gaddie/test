// navigation bar color

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 650);
});




$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      autoplay: true,
      nav: false,
      responsive: {
        0: {
          items: 1 // Show 1 item on screens less than 768px wide
        },
        768: {
          items: 2 // Show 2 items on screens 768px and wider
        },
        992: {
          items: 3 // Show 3 items on screens 992px and wider
        }
      }
    });
  });


// Auto play the slider
function autoPlaySlider() {
  const sliderNavs = document.querySelectorAll('.slider__nav');
  let currentSlide = 0;

  setInterval(() => {
    sliderNavs[currentSlide].checked = false;
    currentSlide = (currentSlide + 1) % sliderNavs.length;
    sliderNavs[currentSlide].checked = true;
  }, 3000); // Adjust the interval duration (in milliseconds) to change slide delay
}

// Start the autoplay when the page loads
window.addEventListener('load', autoPlaySlider);



 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});

 

