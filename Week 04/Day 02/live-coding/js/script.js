//alert("hello world");
/* console.log("hello world");
document.write("hello world"); */

let myHeading = document.querySelector("h1");
//let myHeading2 = document.getElementsByTagName("h1")[0];
myHeading.innerText = "Something new ...";
myHeading.style.color = "blue";

let myFirstParagraph = document.querySelector("#my_id");
//getElementById same than line above
let myFirstParagraph2 = document.getElementById("my_id"); //without #

let variable = document.querySelector("input:checked");
let variable2 = document.querySelector("input[type=email]");

let mySecondParagraph = document.querySelector(".my_class");
let classElements = document.querySelectorAll(".my_class");
let mySecondParagraph2 = document.getElementsByClassName("my_class")[0]; //without .

let myInteger = 10;
let myBoolean = true;
let myString = "They said \"What's up\"";
let newString = 'They said "What\'s up"';
let myFloat = 2.35;
//document.write(myInteger / (myFloat * 1.2));
//document.write(3**3);
//document.write("<br>" + myString + " " + newString + myInteger);

let a=25, b=10;
a+=b;
a = a+b;
console.log(a + ", " + b);

let aNewFloat = 3.4;
console.log(aNewFloat);

let x = 'This is a ';
//adding more to existing value
x = x + 'string';
//assigning new value
x = 'This is my new value';
console.log(x);

function chooseNumber(){
  myNumber = 12;
  let myNumber = 11;
}