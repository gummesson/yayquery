$(document).ready(function() {

  var slideSpeed = 600;

  $(".dropdown-item").hide();

  $(".dropdown-toggle").click(function() {

    if ($(".dropdown-item").is(":hidden")) {
      $(".dropdown-item").slideDown(slideSpeed);
    }

    else {
      $(".dropdown-item").slideUp(slideSpeed);
    }

  });

});
