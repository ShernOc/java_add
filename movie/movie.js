// Doing this will involve a few steps:

// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page

const init = () =>{
    //1. Get/grab the event 
    const form = document.querySelector('form');
    form.addEventListener('submit', (e)=>{
     e.preventDefault(); //prevents the form/page from reloading
     fetchMovies(); //Fetch movie based on the user’s input
    })
    

    // 2. To access the input value: get/grab the input element/target the DOM element(input element)
    const inputform = document.querySelector('#searchByID'); 
 
    // 3.  Fetch the work  based on the input typed value by the user (${input.value})

 function fetchMovies(){
    fetch(`http://localhost:3000/movies/${inputform.value}`)
    .then(res =>res.json())
    // Display the fetched data to the DOM / get the elements 
    .then(data=>{
        const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");
    // we now change the contents of the title and summary based on the data retrieved. 
    title.innerText = data.title;
    summary.innerText = data.summary;
        
    inputform.value = ""; 
    })
    .catch(error => console.error('Error fetching movie:', error)); // catches the errors 

}};

document.addEventListener('DOMContentLoaded',init); 