const init = () => {
    //GET-RETRIEVE DATA 
    // card holding 
    function holdTheCard(book) {
        let card = document.createElement('li');
        card.className = "card";
        card.innerHTML = `
        <div class = "content"> 
        <img src = "${book.imagelink}">
        <h2>Title:${book.title}</h2>
         <p>
         <span class = "author"> Author:${book.author}</span>
         <br>
         <span class = "pages"> Pages:${book.pages}</span>
         <br>
         <span class = "links"> 
          <a href="${book.link}" target="_blank">Book-link</a>  <span>
           </p>
           <br>
           <button class = "buy">Buy</button>
           </div>
            `
        // append the li to the ul element
        const ul = document.querySelector('#list');
        ul.appendChild(card)
    };

// created a function that fetches all the books
//Get
function fetchAllBooks(){
    fetch("http://localhost:3000/books")
    .then(res=>res.json())
    .then(books =>{
        books.forEach(book=>holdTheCard(book))
    })
};

//POST 
form = document.querySelector('#bookform');
form.addEventListener('submit', handleSubmit); 

// create a form event handler object
function handleSubmit(e){
    e.preventDefault();
    let books = {
        title:e.target.title.value,
        author:e.target.author.value,
        imagelink:e.target.imagelink.value,
        pages:23
    }
// pass in the function that holds holds all the cards 
holdTheCard(books);
fetchOneBook(books);
}

// create a function that fetches the input of a user 
function fetchOneBook(books){
    fetch('http://localhost:3000/books',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(books)
    })
    .then(res=>res.json())
    .then(book=>console.log(book))
}


// console.log(holdTheCard());

// initial run of the code
// call the cards so that i can be displayed 
function runTheCode() {
  fetchAllBooks();
}

runTheCode();

}



console.log("life is great"); 

// DOM manipulation: 
document.addEventListener('DOMContentLoaded', init)