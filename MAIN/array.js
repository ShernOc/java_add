
// ARRAY 
// console.log(winningNumbers[2]); // 14

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

console.log(alphabet)// execute all the alphabets. 
console.log(alphabet.length);// find the lenght of array //26 
console.log(alphabet[9]);//j
console.log(alphabet.length - 2); // looks at the element we want to access  = y 
console.log(alphabet[alphabet.length -2]);//y therefore to show the [alphabe.length -2] it will display y 

// UPDATING THE VALUE OF AN ELEMENT
alphabet[0] = "sherlyne" // this will update/ we are reasign the element [0] to sherlyne 
console.log(alphabet)
//The .shift() method removes the first element in an Array:
alphabet.shift();// removes sherlyne 
console.log(alphabet) // will start with "b"
//The .unshift() method adds the first element in an Array:
alphabet.unshift("a")
console.log(alphabet); // " a" is added 

// Spread Operator: 
const Newal =[...alphabet]; // want to add integers (1,2,)
console.log(Newal); // copy of the alphabet 
// Spread operator can be used to add element at the end beginning or middle
const mainArray = ["one", "two","three","four", "five"] // 
const newArray=["1","2","3",...mainArray, "4","5"] ; //"1","2","3","one", "two","three","four" "4","5"

console.log(newArray); 

//Splice; used to remove,replace and add 
const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs", // will be removed due to [2]
    "Nine of Diamonds",
    "Three of Hearts",
  ];

  // "Nine of Clubs", will be removed due to [2], and only one element will be removed. 
  cards.splice(2, 1, "Ace of Clubs");
  // => ["Nine of Clubs"]

  console.log(cards);
  // => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]


const item = ["Books", "pen", "laptop", "notepad"]
console.log(item[0]);
console.log(item[1]);
console.log(item[2]);

// to change the index 3  notepad to cup of water 
item[3]= "cup of water " 
console.log(item[3]);

//OBJECT 
const Bk = {
    title: "i love you ", 
    author: "sherlyne ", 
    publisher: "Me "
}

// To accesses the title of the book console.log(Object.key )
console.log(Bk.title); // i love you 
Bk.title = "python"
console.log(Bk.title); // "python"
console.log(Bk); // the object itself. 
// to delete an object. 
delete Bk.title;
console.log(Bk);

Bk.title = "Vision"; 
console.log(Bk); 

 const menu = [
  "Jalapeno Poppers",
  "Cheeseburger",
  "Fish and Chips",
  "French Fries",
  "Onion Rings",
];

const newMenu = [
  ...menu.slice(0, 1), // include the element index 0, and only 1 element. jalapeno 
  "Veggie Burger", // add this element following 
  "House Salad",// add this element following 
  "Teriyaki Tofu",// add this element following 
  ...menu.slice(3), // include element from index 3. french fries. 
];

menu;
// => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]

newMenu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]


//OBJECTS: collection of data that consist of (Key-value bounded by curly braces {})
const object = {
    key1:"value1",
    key2:{
        life: "No life", // this is a nested object 
        shoes: "Adidas"
    }
}; 

//Another nested object 
const address = { // has the keys: street, city,state,zip-code 
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };

  // to access the object key: 
  //1. Use the Dot Notation. (address.street )
console.log(address.street); 

// 2. Use the Bracket Notation 
console.log(address["city"]); 

// OBJECT METHODS:  Object.keys(Object) and() returns 
//calling Object.keys() and passing the Object instance as an argument. The return value is an Array containing all of the keys at the top level of the Object instance.

console.log(Object.keys(address)) // bring an array [street,city,state,Zip]

console.log(Object.keys(address.street))// will bring the keys of street key: [line1,line2]

// Object.values(); returns array containing values

console.log(Object.values(address));

//MODIFYING OBJECT / Dot / Bracket Notation 

const education = {}; // create an empty object 
education.girls = ["Rahab","Alice","Sherlyne"]; // Dot 
education.type = ["science","therapy", "computer"],
education.school = "Maseno University"

console.log(education); 

//Updating the school to Joyland// It mutates/changes the school from Maseno, to Joyland. 
function updatesSchool(education, key,value ) {
    education[key] = value; 
    return education;
  }
  console.log(updatesSchool(education,"school", "Joyland"));
  
// We can use the spread operator (... obj)// does not mutate the education 
const schools = (education, key, value )=>{
    newsch = {...education}; 
    newsch[key] = value; 
    return newsch; 
}
console.log(schools(education,"school","Uthiru Genesis")); 

// To remove 
const del = delete education.school
console.log(education)

console.log(typeof[]);


/*ERROR 
1. console.table (); logs in a table 
2. console.log(): logs the general information 
3. console.error(): prints out an error to the console
4. console.warn():  */


const family = {
    mother: {
      firstName: "Susan",
      lastName: "Doyle",
      age: 32,
    },
    father: {
      firstName: "John",
      lastName: "Doyle",
      age: 33,
    },
    daughter: {
      firstName: "Lily",
      lastName: "Doyle",
      age: 5,
    },
    son: {
      firstName: "Mike",
      lastName: "Doyle",
      age: 8,
    },
  };

  console.table(family); 
  console.error("This is an error in this code ")
  console.warn("This a warning slow down")


