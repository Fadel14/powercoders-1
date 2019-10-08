var leftPos = 0;

// calls the function each second
var myAnimation = setInterval(moveBox, 100);

function moveBox(){  
  if(leftPos==600){    
    clearInterval(myAnimation);
  } else {
    leftPos += 50;
    let box = document.getElementById("box");
    box.style.left = leftPos+"px";
  }
}
