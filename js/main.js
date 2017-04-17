


// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }



 //      ----------------------------------------------------------------------------------------
//  PRELOADER JS
         
     // $(window).on('load', function () {
     //        $('.preloader').fadeOut();
     //        $('.preloader-area').delay(350).fadeOut('slow');
     //    });


// preloader

// preloader

  $(window).on('load', function () {
            $('.preloader .img').delay(2500).fadeOut();
            $('.preloader').delay(2500).hide('slow');
            $('header').delay(2500).fadeIn('slow');
             // $('.aHeader').delay(4000).fadeIn('slow');
        });


// nav
$('body').on('click', function(){
	
	$('.topnav').removeClass('responsive');
});

$("#myTopnav a.icon").on('click', function(e){
	e.preventDefault();
	e.stopPropagation();
	// var x = $('#myTopnav');
	$('.topnav').toggleClass('responsive');


});



// var vH;

// function windowH() {
//    wH = $(window).height();

//    $('#homepage').css({height: wH});
// };

// // $('window').on('resize'). windowH();
// ----------------------
// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  

}





// blog

$(".disabled").on('click',function(e){
    e.preventDefault();
});

$('#thedacbutton').on('click', function(){
    $('.addtext').toggle('1000');
    $("i", this).toggleClass("fa-angle-down fa-angle-up");


});