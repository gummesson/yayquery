$(document).ready(function() {

  'use strict';

  $('.links').hide();

  var linkList  = $('.item'),
      linkItems = linkList.length,
      linkRandom = linkList[Math.floor(Math.random() * linkItems)];

  $('.result').append(linkRandom);

  $('.reload').click(function() {
    location.reload();
  });

});
