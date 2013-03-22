$(document).ready(function() {

  "use strict";

  var pageBody, scrollSpeed, idTarget;

  pageBody    = $("html, body");
  scrollSpeed = "slow";

  $(".scroll").click(function(){

    idTarget = $(this).attr("href");

    pageBody.animate({
      scrollTop: $(idTarget).offset().top
    }, scrollSpeed);

    return false;

  });

});
