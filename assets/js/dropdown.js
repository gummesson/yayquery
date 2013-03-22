$(document).ready(function() {

  var slideSpeed = 600;

  $(".dropdown-item").hide();

  $(".dropdown-toggle").click(function() {

    $(".dropdown-item").slideToggle(slideSpeed);

  });

});
