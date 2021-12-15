$(window).scroll(function () {
  var $this = $(this),
      $head = $('.navbar');
  if ($this.scrollTop() > 70) {
     $head.addClass('shadow-transition');
  } else {
     $head.removeClass('shadow-transition');
  }
});
AOS.init({
   easing: 'ease-out-back',
   duration: 1000
});
var m=$(".navbar .container").html();$(".mobile-nav").append(m);
function addClassOpenNav() {
   var addOpenNav = document.getElementById("mobile-nav");
   addOpenNav.classList.add("show");
   var addOverlay = document.getElementById("overlay-mn");
   addOverlay.classList.add("show");
 }
 function removeClassOpenNav() {
   var removeOpenNav = document.getElementById("mobile-nav");
   removeOpenNav.classList.remove("show");
   var removeOverlay = document.getElementById("overlay-mn");
   removeOverlay.classList.remove("show");
 }