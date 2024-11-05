// //console.log(books);// This brings out all the contents we are working with. We have access to it. 

// const init = () => {
//     // build the books card holder
    
//     //2. We will get the form element and an event listener 
//     const formInput = document.querySelector("#bookform");
//     formInput.addEventListener('submit', e => {
//         e.preventDefault();
//         getAllbooks(); // calling the fetched books
//     });

//     // Initial render: will load first thing 
//     // Get data and load/render the books through the dom 

// //Going to create a function that fetches and renders the books based on user input

//     // Going to grab the input element 

//     function getAllbooks() {


        
//         const inputarea = document.querySelector('.inputarea');
//         fetch(`http://localhost:3000/books/${inputarea.value.trim()}`)
//             .then(res => res.json())
//             .then(data => { 
//                 let card = document.createElement('li');
//                 card.className = "card";
//                 // we will be using the innerHTML; // that will be displayed: 
//                 card.innerHTML = `    
//                 <div class = "content"> 
//                 <img src = "${data.imageLink}"> 
//                 <h2>Title:${data.title}</h2>
//                 <p>
//                <span class = "author"> Author:${data.author}</span>
//                 <br>
//                <span class = "pages"> Pages:${data.pages}</span>
//                 <br>
//                 <span class = "links"> 
//                   <a href="${data.link}" target="_blank">Book-link</a>  <span>
//                 </p>
//                 <br>
//                 <button class = "buy">Buy</button>
//                 </div>
//                 `
//                 // console.log the card to see that it will show up console.log(card)
//                 const ul = document.querySelector('#list');
//                 ul.appendChild(card)
//                 ul.value = ""; 
//             }
            
//         )    
        
      
//     }
    
 

//     // // initial call to fetch and render books
//     // function initialize() {
//     //     // books.forEach(book=>renderOneBook(book))
//     //     // we are now going to call in getAllbooks
//     //     getAllbooks();
//     // }


//     // // call the cards so that i can be displayed 
//     // initialize();
// }


// document.addEventListener('DOMContentLoaded', init)

// // the fetching tack tick, 

// function fetchAllBooks(books){
//     const input = document.querySelector('input');
//             fetch(`http://localhost:3000/books/${input.value.trim()}`)
//                 .then(res => res.json())
//                 .then(books=>{ books.forEach(book=>renderOneBook(book))})    
//         }
//     }
    


// // The second session of the book 
// //console.log(books);// This brings out all the contents we are working with. We have access to it. 

// const init = () => {
//     // build the books card holder
    
//     //2. We will get the form element and an event listener 
//     const formInput = document.querySelector("#bookform");
//     formInput.addEventListener('submit', handleSubmit);

    
//     const handleSubmit  = (e)=> {
//         e.preventDefault();
//         let books = {
//             title:e.target.title.value,
//             author: e.target.author.value,  
//             pages:0,
//             imageLink:e.target.imageLink.value,
//         }

//     // getAllbooks(books); // build the animals. 
//     fetchAllBooks(books);

//     }
    

// //Going to create a function that fetches and renders the books based on user input

//     // Going to grab the input element 
// // Build the cards. 
//     function getAllbooks() {
//         let card = document.createElement('li');
//                 card.className = "card";
//                 // we will be using the innerHTML; // that will be displayed: 
//                 card.innerHTML = `    
//                 <div class = "content"> 
//                 <img src = "${data.imageLink}"> 
//                 <h2>Title:${data.title}</h2>
//                 <p>
//                <span class = "author"> Author:${data.author}</span>
//                 <br>
//                <span class = "pages"> Pages:${data.pages}</span>
//                 <br>
//                 <span class = "links"> 
//                   <a href="${data.link}" target="_blank">Book-link</a>  <span>
//                 </p>
//                 <br>
//                 <button class = "buy">Buy</button>
//                 </div>
//                 `
//                 // console.log the card to see that it will show up console.log(card)
//                 const ul = document.querySelector('#list');
//                 ul.appendChild(card)
//                 ul.value = ""; 
//             }

// function fetchAllBooks(){
//     fetch("http://localhost:3000/books")
//     .then(res => res.json())
//     .then(books=>{ books.forEach(book=>getAllbooks(book))})    
//     }
// }

// // function fetchOneBook(){
// //     fetch()
// // }

    
    
// //     // initial call to fetch and render books
//     function initialize() {
//         // books.forEach(book=>renderOneBook(book))
//         // we are now going to call in getAllbooks
//        getAllbooks();
//     }

//     // call the cards so that i can be displayed 
//     initialize();


// document.addEventListener('DOMContentLoaded', init)



// // const init = () => {
// //     const inputForm = document.querySelector("form");
  
// //     inputForm.addEventListener("submit", (event) => {
// //       event.preventDefault();
// //       const input = document.querySelector("input#searchByID");
  
// //       fetch(`http://localhost:3000/movies/${input.value}`)
// //         .then((response) => response.json())
// //         .then((data) => {
// //           const title = document.querySelector("section#movieDetails h4");
// //           const summary = document.querySelector("section#movieDetails p");
  
// //           title.innerText = data.title;
// //           summary.innerText = data.summary;
// //         });
// //     });
// //   };
  
// //   document.addEventListener("DOMContentLoaded", init);