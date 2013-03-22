$(document).ready(function() {

  "use strict";

  var slideSpeed, fadeSpeed;

  slideSpeed = 4000;
  fadeSpeed  = 2000;

  $(".slideshow-item:gt(0)").hide();
  
  setInterval(function(){
    $(".slideshow-item:first-child").fadeOut(fadeSpeed)
      .next(".slideshow-item").fadeIn(fadeSpeed)
      .end().appendTo(".slideshow");
    }, slideSpeed);

});
