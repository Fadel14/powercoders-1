const today = function() { 
  var { DateTime } = require('luxon');
  // Browser
  // var DateTime = luxon.DateTime;
  DateTime.local();
  var dt = DateTime.local();

  console.log(dt.toLocaleString(DateTime.DATE_HUGE));
}
today(); //'Wednesday, April 24, 2019'