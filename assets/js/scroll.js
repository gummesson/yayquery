$(document).ready(function() {

  "use strict";

  var pageBody    = $("html, body"),
      scrollSpeed = "slow";

  $(".scroll").click(function(){

    var idTarget = $(this).attr("href");

    pageBody.animate({
      scrollTop: $(idTarget).offset().top
    }, scrollSpeed);

    return false;

  });

});
