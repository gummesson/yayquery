$(document).ready(function() {
 
  var speed = 600;

  $(".dropdown-toggle").click(function() {

    if ($(".dropdown-item").is(":hidden")) {
      $(".dropdown-item").slideDown(speed);
    }

    else {
      $(".dropdown-item").slideUp(speed);
    }

  });

});
