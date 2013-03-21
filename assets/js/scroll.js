$(document).ready(function() {

  var page, speed, target;

  page  = $("html, body");
  speed = "slow";

  $(".scroll").click(function(){

    target = $(this).attr("href");

    page.animate({
      scrollTop: $(target).offset().top
    }, speed);

    return false;

  });

});
