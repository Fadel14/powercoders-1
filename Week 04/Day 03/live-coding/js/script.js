let testingNumber = 5;
if(testingNumber ==1){
  console.log("my number is 1");
} else if(testingNumber ==2){
  console.log("my number is 2");
} else if(testingNumber ==3){
  console.log("my number is 3");
} else if(testingNumber ==4){
  console.log("my number is 4");
} else if(testingNumber ==5){
  console.log("my number is " + testingNumber);
} else if(testingNumber ==6){
  console.log("my number is 6");
} else {
  console.log("my number is greater than 6 or less than 1");
}

switch(testingNumber){
  case 5:
    document.write("my number is " + testingNumber);
    break;
  case 2:
    document.write("my number is 2");
    break;
  case 4:
  default:
    document.write("my number is greater than 6 or less than 1");
}

if(6 > testingNumber){
  console.log("6 is bigger than my testing number.");
}

let titleTag = document.querySelector("h3");

switch(titleTag){
  case null:
    console.log("There is no title tag");
    break;
  default:
    titleTag.textContent = "the new title";
}

testingNumber = 4;
while(testingNumber < 6){
  document.write("<br>My testing number " + testingNumber + " is less than 6.<br>");
  testingNumber++;
}

for(testingNumber=3;testingNumber <= 6;testingNumber++){
  document.write("<br>For loop: My testing number " + testingNumber + " is less than 6.<br>");
  if(testingNumber==4){
    break;
  }
}

do {
  if(testingNumber==4 || testingNumber==5 || testingNumber==6){
    testingNumber++;
    continue;
  }
  document.write("<br>do while loop: My testing number " + testingNumber + " is less than 6.<br>");
  testingNumber++;
} while(testingNumber <= 8);

document.write(testingNumber);

if(!(titleTag) || (!(testingNumber <= 5) && 2==='2')){
  titleTag.textContent = "the new title";
} else {
  titleTag.textContent = "not a new title";
}

!(titleTag) || (!(testingNumber <= 5) && 2==='2') ?  titleTag.textContent = "the new title" : titleTag.textContent = "not a new title";