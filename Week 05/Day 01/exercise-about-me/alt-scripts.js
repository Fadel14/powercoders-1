document.body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").textContent = "Hasoun";
document.getElementById("favorites").textContent = "AMG, AOS, MFG";
document.getElementById("hometown").textContent = "Damascus";

let liTags = document.querySelectorAll("li");
liTags.forEach(function(singleLi){
  singleLi.className = "list-item";
});

let newImage = document.createElement("img");
newImage.src = "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg";

document.body.appendChild(newImage);

let styleTag = document.createElement("link");
styleTag.rel = "stylesheet";
styleTag.href = "style.css";

document.head.appendChild(styleTag);

