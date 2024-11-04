console.log(books);// This brings out all the contents we are working with. We have access to it. 

// take the animal tat 



// Dom manipulation / Renders 
    // build the books
function renderOneBook(book){
    //we are creating a card, that will hold the books. 
    let card = document.createElement('li');
    card.className = "card"; 
    // we will be using the innerHTML; // that will be displayed: 
    card.innerHTML = `
    <img src = "${book.imageLink}"> 
    <div class = "content"> 
    <h3> Book Title : ${book.title}</h3|>
    <p>
    Author:<span class = "Author " >${book.author}</span>
    <br>
    Pages:<span class = "pages" >${book.pages}</span>
    </p>
    </div>
    <button>Buy</button>
    `
    // console.log the card to see that it will show up console.log(card)
// What will be shown on the animal; 

const ul = document.querySelector('#book-list'); 
ul.appendChild(card)
}


// Initial render: will load first thing 
// Get data and load/render the books through the dom 



function initialize(){
   // books.forEach(book=>renderOneBook(book))
}

// call the cards so that i can be displayed 
initialize(); 