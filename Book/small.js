//console.log(books);// This brings out all the contents we are working with. We have access to it. 

const init = () => {
    // build the books card holder
    
    //2. We will get the form element and an event listener 
    const formInput = document.querySelector("#bookform");
    formInput.addEventListener('submit', e => {
        e.preventDefault();
        let books = {
            title:e.target.title.value,
            imageLink:e.target.imageLink.value,
            pages:e.target.pages.value,
        }

        getAllbooks(books); // calling the fetched books
    });

    // Initial render: will load first thing 
    // Get data and load/render the books through the dom 

//Going to create a function that fetches and renders the books based on user input

    // Going to grab the input element 

    function getAllbooks(books) {
        let card = document.createElement('li');
                card.className = "card";
                // we will be using the innerHTML; // that will be displayed: 
                card.innerHTML = `    
                <div class = "content"> 
                <img src = "${data.imageLink}"> 
                <h2>Title:${data.title}</h2>
                <p>
               <span class = "author"> Author:${data.author}</span>
                <br>
               <span class = "pages"> Pages:${data.pages}</span>
                <br>
                <span class = "links"> 
                  <a href="${data.link}" target="_blank">Book-link</a>  <span>
                </p>
                <br>
                <button class = "buy">Buy</button>
                </div>
                `
                // console.log the card to see that it will show up console.log(card)
                const ul = document.querySelector('#list');
                ul.appendChild(card)
                ul.value = ""; 
            }


        // fetch request 
        const inputarea = document.querySelector('.inputarea');
        fetch(`http://localhost:3000/books/${inputarea.value.trim()}`)
            .then(res => res.json())
            .then(books=>{ books.forEach(book=>renderOneBook(book))})    
    }
    
    // initial call to fetch and render books
    function initialize() {
        // books.forEach(book=>renderOneBook(book))
        // we are now going to call in getAllbooks
        getAllbooks();
    }


    // call the cards so that i can be displayed 
    initialize();


document.addEventListener('DOMContentLoaded', init)