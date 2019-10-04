/*let a = 15;
let b = 5;

if(a > b){
  document.write("The greater number of " + a + " and  " + b + " is  " + a + ".");
} else {
  document.write("The smaller number of " + a + " and  " + b + " is  " + b + ".");
}

console.log(globalVar);

let b = 0;
let a = 6;
let globalVar = 9;

checkNumber(0,6);


let myResulat = isFirstNumberBigger(b);
if(myResulat !== false){
  document.write("My number " + myResulat + " is bigger " + a);
}

document.write(c);




var person = {
  name: "Susanne",
  age: 38,
  favColor: "pink",
  hello: function() {
    return "Hello " + this.name;
  }
};

function person(name, age, favColor){ 
  this.name = name;
  this.age = age;
  this.favColor = favColor;
  this.hello = function(){
    return "Hello " + this.name;
  }
};

var susanne = new person("Susanne", 38, "pink");
var mahmoud = new person("Mahmoud", 5, "blue");

document.write(susanne.age + "<br><br>");
document.write(mahmoud.hello() + "<br><br>");

mahmoud.gender = "male";
susanne.gender = "female";
document.write(susanne.gender + "<br><br>");

susanne.age = 18;

delete susanne.age;

console.log(susanne);

document.write(susanne.age);


checkNumber(5,8);



var topics = ["HTML", "CSS", "Javascript"];
var emptyArray = ["HTML"];
var conactArray = emptyArray.concat(topics);
console.log(conactArray);
topics[3] = "jQuery";
topics.push("jQuery");
document.write(conactArray.pop()+"<br>");
document.write(conactArray.toString()+"<br>");
*/

let timeSpent = [
  ['Work', 9],
  ['Eat', 2],
  ['Commute', 1],
  ['Watch TV', 2],
  ['Sleep', 7]
];

function printTime(){
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let mins = currentDate.getMinutes();
  let secs = currentDate.getSeconds();

  document.body.innerHTML = hours + ":" + mins + ":" + secs;
}

setInterval(printTime, 1000); // prints current time each second

function checkNumber(a, b){   
  let c = 4;
  
  document.write(person.name.length);
  if(a > b){    
    document.write("The greater number of " + a + " and  " + b + " is  " + a + "." + globalVar);
  } else if(a > c) {
    document.write("The greater number of " + a + " and  " + c + " is  " + a + ".");    
  } else {
    document.write("The smaller number of " + a + " and  " + b + " is  " + a + ".");
  }
}

function isFirstNumberBigger(a,b){
  if(a > b){    
    return a;
  } else {
    return false;
  }
}