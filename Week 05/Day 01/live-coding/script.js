let el = document.querySelector(".classname1");
el.style.color="#6600FF";
el.style.width="100px";
el.style.backgroundColor="red";

let h2 = document.createElement("h2");
let text = document.createTextNode("this is my h2 subtitle");
let body = document.getElementsByTagName("body");
h2.appendChild(text);
document.body.insertAdjacentElement("beforeend",h2);
//document.querySelector("html").removeChild(body[0]);

let span = document.createElement("span");
let node = document.createTextNode("Some new text");
let parent = document.querySelector("#demo");
let strong = parent.querySelector("strong");
span.appendChild(node);
parent.replaceChild(span, strong);

function sum(arg1 , arg2) {
  return arg1 + arg2;
}

let house = {doors: 2, windows: 8, rooms: 5};
for(let propName in house){
  let x = "";
  document.write(`${propName}: ${house[propName]} <br>`);
} 

let list = ["doors", "windows", "rooms"];
list.forEach(function(x){
  document.write("<br>"+x);
}); 

for(let x of list){
  document.write("<br>"+x);
}

for(let x = 0; x < list.length; x++){
  document.write("<br>"+list[x]);
}
document.write("<br><br>");

var animals = ["lion" , "tiger" ,"cat"];

if(animals[0]==="cat" && animals[0]!=="tiger"){
  document.write(`I have a ${animals[0]}`);
} else if(animals[0]=="lion"){
  document.write(`I have a very big ${animals[0]}`);
} else {
  document.write(`I do not have a cat, it is a ${animals[0]}`);
}

switch(animals[0]){
  case "lion":
    document.write(`I have a very big ${animals[0]}`);
    break;
  case "tiger":
    document.write(`I will be eaten by a nice ${animals[0]}`);
    break;
  case "cat":
  default:
    document.write(`I have a cute little ${animals[0]}`);
}


function getAllAnimals(){
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element = "new value";
  }
  document.write(element);
}