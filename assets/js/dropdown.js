$(document).ready(function() {

  $(".dropdown-item").hide();

  var slideSpeed = 600;

  $(".dropdown-toggle").click(function() {

    if ($(".dropdown-item").is(":hidden")) {
      $(".dropdown-item").slideDown(slideSpeed);
    }

    else {
      $(".dropdown-item").slideUp(slideSpeed);
    }

  });

});
