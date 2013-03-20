$(document).ready(function() {

  var $page  = $("html, body");
  var $speed = 1500;

  $(".scroll").click(function(){

    var target = $(this).attr("href");

    $page.animate({
      scrollTop: $(target).offset().top
    }, $speed);

    return false;
  });

});
