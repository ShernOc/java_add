const init = () => {
    // card holding 
    function holdTheCard(book) {
        let card = document.createElement('li');
        card.className = "card";
        card.id= book.id
        card.innerHTML = `
        <div class = "content"> 
        <img src = "${book.imagelink}">
        <h2>${book.title}</h2>
         <p>
         Author:${book.author}
         <br>
         <span class = "pages"> Pages:${book.pages}</span>
         <br>
          <a href="${book.link}" target="_blank">Book-link</a>  
        </p>
           <br>
           <button id= "buy">Buy</button>
           <button id= "delete">Delete</button>
           </div>
           `
        // Update section: by grabbing the card button
        card.querySelector('#buy').addEventListener('click',()=>{
            book.pages +=1;
            card.querySelector('span').textContent = `Pages:${book.pages} `
            // call in the update function 
            updateOneBook(book) })


        //Delete button:
        card.querySelector('#delete').addEventListener('click',()=>{
            card.remove();
            //  have a calling function for delete 
            handleDelete(book.id)
        })

        // append the li to the ul element
        const ul = document.querySelector('#list');
        ul.appendChild(card)
    };

// created a function that fetches all the books
//GET
function fetchAllBooks(){
    fetch("http://localhost:3000/books")
    .then(res=>res.json())
    .then(books =>{
        books.forEach(book=>holdTheCard(book))
    })
};

//POST -CREATE 
form = document.querySelector('#bookform');
form.addEventListener('submit', handleSubmit); 

// create a form event handler object for the books
function handleSubmit(e){
    e.preventDefault();
    let books = {
        title:e.target.title.value,
        author:e.target.author.value,
        country:e.target.country.value,
        imagelink:e.target.imagelink.value,
        language:e.target.language.value,
        link:e.target.link.value,
        pages:e.target.pages.value,
        year:e.target.year.value,
    }
// pass in the function that holds holds all the cards 
holdTheCard(books);
fetchOneBook(books);
}

// create/POST a function that fetches the input of a user 
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

// Update /PATCH = Needs the object id to make the update
// Grab the button for donate: 
function updateOneBook(books){
    fetch(`http://localhost:3000/books/${books.id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(books)
    })
    .then(res=>res.json())
    .then(books=>console.log(books))
}

// function to delete the books/object 
function handleDelete(id){
    fetch(`http://localhost:3000/books/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>res.json())
    .then(book=>console.log(book))
}


// initial run of the code/ function calls the cards so that i can be displayed 
function runTheCode() {
  fetchAllBooks();
}

runTheCode();

}


console.log("life is great"); 

// DOM manipulation: 
document.addEventListener('DOMContentLoaded', init)