$(document).ready(function() {

  "use strict";

  var linkList, linkItems, linkRandom;

  $(".links").hide();

  linkList   = $(".item").toArray();
  linkItems  = linkList.length;
  linkRandom = linkList[Math.floor(Math.random() * linkItems)];

  $(".result").append(linkRandom);

  $(".reload").click(function() {
    location.reload();
  });

});
