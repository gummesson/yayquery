$(document).ready(function() {

  "use strict";

  var weekDays    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      currentDate = new Date(),
      currentDay  = weekDays[currentDate.getDay()];

  $(".day").append("Have a nice " + currentDay + "!");

});
