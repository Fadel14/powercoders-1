let images = [
  "https://images.unsplash.com/photo-1569430044663-054ffc0c50c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60",
  "https://images.unsplash.com/photo-1569346332452-876d0eef389f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60",
  "https://images.unsplash.com/photo-1569243963117-78bb6e7ff948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60",
  "https://images.unsplash.com/photo-1568322714397-333fc0b6f229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=60"
];

let counter = 0;

let buttons = document.getElementsByTagName("button");
let prevButton = buttons[0];
let nextButton = buttons[1];
let image = document.getElementById("slider");

/* alternative variable assignment 
let prevButton = document.querySelector("button");
let nextButton = document.querySelector("img + button");
*/

prevButton.addEventListener("click",showPrev,true);
nextButton.addEventListener("click",showNext,true);

function showPrev(){
  counter--;  
  if(counter < 0){
    counter = images.length-1;
  }
  image.src = images[counter];
}

function showNext(){
  counter++;
  if(counter > images.length-1){
    counter = 0;
  }
  image.src = images[counter];  
}