//Communicating with the server 

/* JSON:
 1. install :  npm install json-server
 2. run : json-server --watch db.json 

*/

//FETCH: An asynchronysed function that allows us to make a request then an action (POST,PUT,DELETE) are met 
const url = 'http://localhost:3000/books';
// fetch();// get this information of books 
fetch(url).then(res=>console.log(res))// One info is received then  do this (console.log () ) 

console.log(`this is the ${url}`);

function getAllbooks(){
    fetch('http://localhost:3000/books')
    .then(res=>res.json()) // take the response and then converts= it to json method. 
    .then(data=>console.log(data)); // take the data/ object then you display it. 
    // data is the where your getting the info db.json object.  
}
