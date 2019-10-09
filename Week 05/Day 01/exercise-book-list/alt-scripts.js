var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4650/9780465050659.jpg',
    alreadyRead: false
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    cover: 'img/8884400.jpg',
    alreadyRead: true
  }
];

let newWrapperElement = document.createElement("ul");

for (let index = 0; index < books.length; index++) {
  const book = books[index];
  let newElement = document.createElement("li");
  let newTitleElement = document.createElement("strong");
  let newTitleContent = document.createTextNode(book.title);
  let newContent = document.createTextNode(" by " + book.author);
  let newImage = document.createElement("img");
  newImage.src = book.cover;
  newImage.style.display = "block";

  if(book.alreadyRead){
    newTitleElement.style.color = "green";
  } else {
    newTitleElement.style.color = "red";
  }

  // another way to get body element
  //let bodyElm = document.querySelector("body");
  
  newTitleElement.appendChild(newTitleContent);
  newElement.appendChild(newTitleElement);
  newElement.appendChild(newContent);
  newElement.appendChild(newImage);  

  newWrapperElement.appendChild(newElement);
}

document.body.appendChild(newWrapperElement);
