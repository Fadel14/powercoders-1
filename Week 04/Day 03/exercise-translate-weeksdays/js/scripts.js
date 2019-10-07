let currentDay = "Thursday";

if(currentDay == "Monday"){
  document.write("Montag");
} else if(currentDay == "Tuesday"){
  document.write("Dienstag");
} else if(currentDay == "Wednesday"){
  document.write("Mittwoch");
} else if(currentDay == "Thursday"){
  document.write("Donnerstag");
} else if(currentDay == "Friday"){
  document.write("Freitag");
} else if(currentDay == "Saturday"){
  document.write("Samstag");
} else if(currentDay == "Sunday"){
  document.write("Sonntag");
}

/* alternative switch */

switch(currentDay){
  case "Monday":
    document.write("Montag");
    break;
  case "Tuesday":
    document.write("Dienstag");
    break;
  case "Wednesday":
    document.write("Mittwoch");
    break;
  case "Thursday":
    document.write("Donnerstag");
    break;
  case "Friday":
    document.write("Freitag");
    break;
  case "Saturday":
    document.write("Samstag");
    break;
  case "Sunday":
  default:
    document.write("Sonntag");
}