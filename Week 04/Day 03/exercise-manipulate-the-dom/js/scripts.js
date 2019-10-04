let titleTag = document.querySelector("h1");
let paragraphTag = document.querySelector("p");
let anchorTag = document.querySelector("a");

for(let i = 0; i < 2; i++){
  titleTag.textContent += " " + i;
}

for(let i = 0; i < 4; i++){
  paragraphTag.textContent = i + " " + paragraphTag.textContent;
}

for(let i = 0; i < 7; i++){
  anchorTag.textContent = i;
}