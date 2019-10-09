let images = [
  "https://images.unsplash.com/photo-1567626143573-dfee80dddb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568322503878-6c2762c21724?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1461863109726-246fa9598dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];
var currentImage = 0;

let slider = document.getElementById("slider");
let prevButton = document.querySelector("button");
let nextButton = document.querySelector("img + button");

prevButton.addEventListener("click",prev,false);
nextButton.addEventListener("click",next,false);

function prev(){
  currentImage--;
  if(currentImage <0){
    currentImage = images.length-1;
  }
  slider.src = images[currentImage];
}

function next(){
  currentImage++;
  if(currentImage >= images.length){
    currentImage = 0;
  }
  slider.src = images[currentImage];
}