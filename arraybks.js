// First Class Functions
// Callback function

//   const booTitle = 
//     ["Things Fall Apart",
//      " Fairy tales",
//      " The Divine Comedy",
//       "Pride and Prejudice",
//       "Molloy, Malone Dies, The Unnamable, the trilogy",
//    "   The Decameron",
//     "  Ficciones",
//       "Poems",
//   "    Don Quijote De La Mancha",
//      " The Canterbury Tales",
//      " Stories"
//     ]

//     // First Class function where function can have different actions and reused in multiple places: 

//     //we are calling books array. and its displayed. You can also pass  

//     // function can also be saved as variable: 
//     // handlebooks function holds all the books. 
//     // the handle book takes (fun) as an argument function
//     // A function that makes the title to be Capitalized 
//     const handlebooksTitle = (fun)=>{
//       let  bookTitle = 
//     ["Things Fall Apart",
//      " Fairy tales",
//      " The Divine Comedy",
//       "Pride and Prejudice",
//       "Molloy, Malone Dies, The Unnamable, the trilogy",
//    "   The Decameron",
//     "  Ficciones",
//       "Poems",
//   "    Don Quijote De La Mancha",
//      " The Canterbury Tales",
//      " Stories"
//     ]
//     fun(bookTitle) // function will take bookTitle 
//     }

// // The loopThroughArray shows all the booksTitle 
// const loopThroughArray = (array)=>{
//       for(let item of array){ // for every item in the array consol.log the item 
//         // console.log(item) // will return all the 11 books. 
//         console.log(item)
//       }
//     }

//     //Function that converts letter to capital 
//     const capitalTitle = function (array) {
//       let newArray = []; // empty array of title 
//       for(let item of array){
//         newArray.push(item.toUpperCase())
//       } // for every element will be pushed to the NewArray[]
//       console.log (newArray); 

//     }// this function changes the title letters to capital. 

//   handlebooksTitle(capitalTitle);// The original function that holds titles and we now pass the function that converts letters to capital. 

//   // will now pass loopThroughArray that is meant to retun all the Items in the array. 
//   handlebooksTitle(loopThroughArray);


const books =
  [{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958,
    "inventory": 70
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "language": "Danish",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836,
    "inventory": 8
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "language": "Italian",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315,
    "inventory": 67
  },
  {
    "author": "Jane Austen",
    "country": "United Kingdom",
    "language": "English",
    "pages": 226,
    "title": "Pride and Prejudice",
    "year": 1813,
    "inventory": 41
  },
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "language": "French, English",
    "pages": 256,
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952,
    "inventory": 32
  },
  {
    "author": "Giovanni Boccaccio",
    "country": "Italy",
    "language": "Italian",
    "pages": 1024,
    "title": "The Decameron",
    "year": 1351,
    "inventory": 12
  },
  {
    "author": "Jorge Luis Borges",
    "country": "Argentina",
    "language": "Spanish",
    "pages": 224,
    "title": "Ficciones",
    "year": 1965,
    "inventory": 3
  },
  {
    "author": "Paul Celan",
    "country": "Romania, France",
    "language": "German",
    "pages": 320,
    "title": "Poems",
    "year": 1952,
    "inventory": 45
  },
  {
    "author": "Miguel de Cervantes",
    "country": "Spain",
    "language": "Spanish",
    "pages": 1056,
    "title": "Don Quijote De La Mancha",
    "year": 1610,
    "inventory": 5
  },
  {
    "author": "Geoffrey Chaucer",
    "country": "England",
    "language": "English",
    "pages": 544,
    "title": "The Canterbury Tales",
    "year": 1450,
    "inventory": 30
  },
  {
    "author": "Anton Chekhov",
    "country": "Russia",
    "language": "Russian",
    "pages": 194,
    "title": "Stories",
    "year": 1886,
    "inventory": 9
  },
  ]

// Function returns the total 
// printReport function : is reused several times. 
function printReport(foo) {
  return (foo(books))
}

function totalInventory(array) {
  let total = 0;
  for (let item of array) {
    total += item.inventory
  }
  return (`We have ${total} books in your store`);

}

// we now want to call the printReport on TotalInventory function 
console.log(printReport(totalInventory)) // totalInventory will show the number of Inventory or books we have. 

//Function that need to be restoked (what books we need to add)
function replenish(array) {
  let replenishBk = [];
  for (let item of array) {
    if ((item.invetory <= 15)) {
      replenishBk.push(item.title)
    }
  }
  return (` place an order for: ${replenishBk.join(' , ')}`)// joins() : joins the array elements 
};

// call in printReport that takes function replenish as the callback function 
console.log(printReport(replenish));


// Its not that dynamic: can just display title and not authors 
// To make a function dynamic we have to allow to pass two argument (array Updatebk): Updatebk: handles the dynamic change; it also works as a function.  
// We are now to reuse the LoopAndUpdate function
const loopAndUpdate = (array, updatebk) => {
  const newTitleArray = [];
  for (let item of array) {
    newTitleArray.push(updatebk(item))// 
  }
  return newTitleArray;
}
// console.log(printReport(loopAndUpdate)); 


// Return an array of Inventory 
const bkInventory = (item) => {
  return item.inventory;
}

console.log(loopAndUpdate(books, bkInventory));

// Return the an array of books title:
const bkTitleArray = (item) => {
  return item.title;
}

console.log(loopAndUpdate(books, bkTitleArray));

// Return the an array of country 
const bkCountry = (item) => {
  return item.country;
}

// call the loopAndUpdate function with two arguments
console.log(loopAndUpdate(books, bkCountry));

// Create a new Array: 
const halfOff = (item) => {
  let invetoryCopy = Object.assign({}, item)// 
  invetoryCopy.inventory = Math.floor(invetoryCopy.inventory / 2)

  return invetoryCopy;
}

console.log(loopAndUpdate(books, halfOff));

// MAP()// runs a function and adds a new array through the title index. 
// map(callbackFn)
// map(callbackFn, thisArg)
//.map() returns an array, so there's no need to call it afterward like a function.
const titBook = books.map((item) => item.title);

console.log(titBook);// will return book title 

const InvBooks = books.map((item) => item.inventory)// will return an array of inventory 
console.log(InvBooks)


// lOOP THROUGH BOOKS: 
// finder the first objects  finder is a function 
function loopAndFind(inventory, finder) {
  let result = null;  //returns  nothing if nothing is finds ite
  for (let item of inventory) {
    if (finder(item) === true) { // finder is our callback function. 
      result = item
      break
    }
  }
  return result;
}

function oneBook(books) {
  return books.title === "Pride and Prejudice"; // if the book is found the function will return true; 
}
console.log(loopAndFind(books, oneBook));

// To find the first book that needs to be restocked: books that are less than 15 
function restock(item) {
  return item.inventory <= 15;
}
// calling the LoopAndFind function that will 
console.log(loopAndFind(books, restock));

// FIND METHOD : find() 
const findloop = books.find(restock)
console.log(findloop);

// find a book named hings Fall Apart using array.find()
const bk2 = books.find(book => book.title === "Things Fall Apart")// you want to put a function 

console.log(bk2) // 

// array.forEach() takes in a callback function, array
books.forEach(item => console.log(item.title.toUpperCase()));
// It does not need to be called. 

/* Finding a single element that meets a condition	indexOf(), find()
Finding and returning a list of elements that meet a condition	filter()
Modifying each element and returning the modified array	map()
Creating a summary or aggregation of values in an array	reduce()*/


// Array.prototype.function 
const odd = [4, 7, , 5, 8, 10];
// create a function that find number that are odd.
// takes in the element, index of the array array.  
// returns the index of the first matching element
function isOdd(element, index, array) {
  return (element % 2 === 1);
}

console.log(odd.find(isOdd));//5 is on the index 1. 
//Array.indexOf() does not take a callback function. 
//Array.prototype.indexOf() == array.index(); 
//Array.prototype.indexOf() returns -1 if either the value isn't found or if the start position you pass in is after the element you're looking for.
const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

cards.indexOf('jack of clubs'); //=> 1
cards.indexOf('jack of hearts'); //=> -1
cards.indexOf('ace of spades', 2); //=> 3
cards.indexOf('jack of clubs', 2); //=> -1 : 2 is the index to start from 


const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
]

const superbowlWin = (element, index, array) => {
  for (let item of array) {
    return item.result === "W";
  }
  if (item.result !== "W") {
    return undefined;
  }
}
const recordB = record.find(superbowlWin);// take in one argument. 
console.log(recordB); // year 2015. 

/*FILTERING ARRAY; Array.prototype.filter()
array.filter(); 
Example 
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);*/

// to make it dynamic 
const allBooks = (item) => {
  for (const books of item) {
    if (books.inventory >= 15) {
      return books.author
    }
  }
}

console.log(allBooks(books));// Only showed one author but we want all books 

// Array.prototype.filter(): Which filters through the array and finds everthing that we are looking for 
// cb is a callback function 
// books is the array.
// book is each item in the array as we iterate.
// book.inventory refers to the inventory of each individual book object.
const filterBooks = (item, cb) => {
  const newBks = [];
  for (const book of item) { // the filter function goes to each book in the item array 
    if (cb(book)) {// The function checks if the book meets the condition specified by cb
      newBks.push(book)
    }
  }
  return newBks // if the condition is met return book.author 
}

//we now use the filter()
// The callback function (cb)=function(book) returns books >500.  function is then used 
const authorbk = filterBooks(books, function (book) {
  return book.pages > 500;
});

console.log(authorbk); // will return an new Array of books with pages > 500;

// Using Array.prototype.filter()
/*array/element.filter(function(value eg book)){
return book.pages>500 
 }
and constructs a new array of all the values for which callbackFn returns a truthy value. 
 */

// We can make it even more easier by: using array.filter() method 
// want the array of books title greater than 500 
const morebooks = books.filter(book => book.pages>=500). map(book => book.title); // map() used to create new array containing only title of books 

console.log(morebooks);

//MAP() : array.map(): 
const sddf = [1,2,3,];
const sdffx = (item, fn)=>{
  const newsddf = []; 
  for(const element of item ){
     newsddf.push(fn(element))
  }
   return newsddf;
}

// now we want the square of the number 
// sdffx function takes in the array, and the callback function (fn)
const squareing = sdffx(sddf,function(num){
  return num * num; 
}); 

console.log(squareing);// a new array with the squareroot numbers 

// To Use Map; 

//REDUCE() : array.reduce(): 

