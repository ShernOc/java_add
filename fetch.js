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
