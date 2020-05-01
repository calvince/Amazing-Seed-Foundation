(function($) { //document ready
  "use strict"

  // Fixed sticky header when scrolling 
  $(window).scroll(function() {
    // condition statement
    if($(window).scrollTop > 0){
      $("#main-navbar").addClass("stickyNav");
    }else{
      $("#main-navbar").removeClass("stickyNav")
    }
  });


  // Mobile Nav button toggle
  $('.navbar-toggle-btn').on('click', function() {
    $('.navbar-menu').toggleClass('navbar-menu-active');
  });

  // Mobile Search button toggle
  $('.search-toggle-btn').on('click', function() {
    $('.navbar-search').toggleClass('navbar-search-active');
  });

  // Loader effect
  $(document).ready(function () {
    //Loader
    $("#Loader").fadeOut(3000);
  $("#head").addClass("onLoad").fadeIn(4000);
  $("html, body").scrollTop(0);
  });

  

  // button click
  // $("buttonId").click(function(){
  //   $("#imgId").show();
  //   $.ajax({
  //     success:function(result){
  //       $
  //     }
  //   })
  // })

  // Mobile dropdown
  $('.navbar-menu .has-dropdown > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('dropdown-active');
  });

  // perform button action for every click
  $('button').on('click',function() {


  });

  // Home Owl
  $('#home-owl').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });

  // Testimonial Owl
  $('#testimonial-owl').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

	// Parallax Background
	$.stellar({
		responsive: true
	});


})(jQuery);

// window.addEventListener("load",function(){
//   const loader = this.document.querySelector(".loader");
//   loader.className += " hidden"; 

// });
// Stick navbar
window.addEventListener("scroll",function() {
  var header = this.document.querySelector("#main-navbar"); 
  header.classList.toggle("sticky",window.scrollY > 0);
} );