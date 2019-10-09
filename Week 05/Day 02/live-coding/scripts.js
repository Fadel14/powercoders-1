function myClickFunc(elm){
  elm.innerHTML='You clicked me';
  elm.style.color='green';
}

function clickme(){
  alert("no, I am a paragraph, not your section");
}

let h1 = document.querySelector("h1");
let section = document.querySelector("section");
let p = document.querySelector("p");
let input = document.querySelectorAll("input");

// let h1 = document.getElementsByTagName("h1")[0];
//h1.onclick = function() { myClickFunc(this) };
h1.addEventListener("click", function(){ myClickFunc(this) });

//one click on p inside section triggers first clickme > with useCapture = true
p.addEventListener("click", clickme, true);
//same click triggers afterwards section listener which calls the removeHandler function (useCapture = false)
section.addEventListener("click", removeHandler, false);

//addEventListener and removeEventListener have to have the same useCapture Value to work (both true or both false)
function removeHandler(){
  p.removeEventListener("click", clickme, true);
}

document.addEventListener("focus", function(e){
  console.log(e.target);
}, true);


h1.onmouseover = function() { 
  this.style.color="red";
  this.innerHTML = "some other text";
 };

 window.onload = function(){
  // alert("window is loaded");
 }

 window.addEventListener("load", function(){
  //alert("window is loaded");
 });

 window.onresize = function(){
   console.log(window.innerWidth);
 }

 window.onscroll = function(){
   console.log(document.body.scrollTop);
 }