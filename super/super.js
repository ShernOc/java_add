//LESSON 5: Variables
//Variables: is a container that holds data or values; 

let variables1 =3; 
console.log(variables1);// 3

const Day = "Tuesday";
console.log(Day,variables1);// 

// resign a variable*
let calculation = 2+2;
console.log(calculation *6);//24
let results = calculation + 5; 
console.log(results) /9

let mine1 = 10;
mine1 = mine1 +1;
console.log(mine1) //11

mine1= 56 // re-assigning a value. 
console.log(mine1)//56

// Start Quantity = 0 
let Quantity = 0; 
const animal = 'Tiger' // const variable used 

// add the value of Quantity to two and then reasign it to that quantity
Quantity = Quantity +2; //2
Quantity = Quantity +3; // 5

console.log(typeof(Quantity)) // type of number
console.log(Quantity)//5


//LESSONS 6: BOOLEANS AND IF STATEMENTS
// Booleans: 
true
false; 
console.log(3<5)// true because 3 is less than 5. 

//IF ELSE STATEMENTS

// IF ELSE STATEMENT 
function elseIf(){
    if(condition === true ){
        console.log('Run this statement')
    }else if (condition === false ){
        console.log('Run this condition')
    }else{console.log('You are amazing'
    )}
};

// explain the code . 
// if (if the condition is true ){
//   return' this statement'
//  } else if { return this if the statement is false or otherwise this; 
//  } else{
//   return this as the final work 
//  }

function elseIfStatement(){
  if(true===1){
    console.log('run this code');
  }else if(false){
    console.log('Return this code')
  } else {
    console.log('run this code as the last resort');
  }

  console.log('Yeah we did it')
}

//Ternary Statement

function isCat(cat){
    return cat === "tiger"?"Hi tiger you are cute": `Hi ${cat}`; 
    }

console.log(isCat('tiger')); 


// Calculator  
function calculator(){
  let calculation = 0; 
  if (calculation){
    results = calculation += 19;}
    return results;
}

console.log(calculator())

// IF ELSE STATEMENTS 
function ageLimit(){
// if statement/boolean 
    const currentAge = 15; 
    if (currentAge>16 && currentAge<21){
      console.log("you can drive")
    }else if (currentAge> 21 && currentAge <70){
      console.log("You can drink ")
    }else{
      console.log('Wait you cannot drink and drive')
    }

}

function nameCat(cat){
  if(cat === "rose"){
    return "Hi Rose"
  }else if (typeof cat === "string"){
    return `Hi ${cat} your cat name is cute`
  }else {
    alert("sorry pass in a cat name") 
 } 
 return cat;
}

console.log(nameCat("Tiger"))


// EXAMPLE OF SWITCH STATEMENT 
 const order = 'cheeseburger';
 9/12
let ingredients;
 switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;//  stop the switch or running the loop. 
    default:
      //default is similar to else 
        console.log("Sorry, that's not on the menu right now.");
      break;
    }
    
    // Another switch function 
    function switchName(name){
     switch(name){
       case "sherlyne":
         return "Hi sherlyne"
       case "james":
         return "Hi james nice to meet you"
       default: 
       return `Hi ${name.toUpperCase()}`
     }
    }


 // Ternary operator: 
 const cat = "Tiger" ? "Hi tiger":"What a cat"
 console.log(cat)

  // this are shortcuts for it statements 
    const message = false && `hello`;
    const result = 0? `truthy`:`falsy`;

    console.log(message)
    console.log(result)
    
    function ages(age){
    if (age>18){
      return ("You are allowed to drive")
    }else{
      return("You cannot drive")
    }
    }

    const catAge = 18 ; 

    function isRose(cat){
      if(cat === "rose"){
        return "Hi Rose"
      }else if (typeof cat === "string"){
        return `Hi ${cat} your cat name is cute`
      }else {
        return "sorry pass in a cat name"
      }
    } 

    function ternaryCat(cat){
      return cat === "tiger"?"Hi tiger you are cute": `Hi ${cat}`; 
     };

    function addFive(number){
      let result 
      if(number>0){
        result = number +5;
      }
      return result; 
    }

  console.log(isRose("sherlyne"))
  console.log(isCat("tiger"));
  console.log(switchName("Mary"))
  console.log(ages(5))

  // LESSON 7 : FUNCTIONS 
   function function1() {
         console.log(2 + 2); 
         return "hello";
      
      }
      function1(); // calling the function/running the function

      // This functions takes a parameter named cost
      // taxPercent = 0.3 = default value 
      function calculateTax(cost,taxPercent = 0.3) {
        console.log(cost* taxPercent);
      }
      calculateTax(200,0.2); // passing a value into the function= parameter, is an argument(200),
      calculateTax(5000) // 500 is an argument or a value

      // alert('hell0') // is a function that takes: 

// LESSON 8: OBJECTS:
// This is an object: 
 const object1 = {
  property: 'value', 
  price: '1090'}

 const fullName = {
        name:'sherlyne',  // name is a property/key, 'sherlyne is the value 

        title:'SoftDev' // this is property value pair
    }

console.log(object1)
console.log( typeof(object1)); // object 


// CREATE AN OBJECT
// The first way. 
const education = {}; // create an empty object 

// created a property named girls and added the names. 
education.girls = ["Rahab","Alice","Sherlyne"]; 

// another property named type 
education.type = ["science","therapy", "computer"],

education.school = ["Maseno University"]

console.log(education); 

// the next way
const newObject = new Object();
newObject.naming = 'Sherlyne'
newObject.school = 'St.Mary';
newObject.age='55';

console.log(newObject); // will return 
// newObject = {age: "55" , names: "Sherlyne", school: "St.Mary"}

// CONSTRUCTION FUNCTION 
// Another way to create an object by a function 
// pass the properties
function Products(name,price,quantity){
  this.name = name;
  this.price = price;
  this.quantity=quantity
}

// create the values by creating the object
// we are now assigning the property to it's value. 
const amazonProducts = new Products('Shoes','2909','3'); 

// console.log(Products.amazonProducts.name)

//GET // ACCESS 
// to access object: (Object.property) // dot notation 
console.log(object1.naming) // alice
console.log(object1['school']) // St.Mary

//Object.key(Object itself) // returns an array of given key properties
console.log(Object.keys(newObject))//  ['names', 'school', 'age'] 

// Object.values() // returns the values of the object: 
console.log(Object.values(newObject)) // ['Sherlyne', 'St.Mary', '55']

const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// ADD 

//UPDATE 
naming = 'Sherlyne' // accessing the property name: sherlyne

object1['naming'] = 'Tiger' // changed the name from sherlyne to Tiger
console.log(object1)//


// REMOVE 
// delete object.property // dot notation 
// delete object[property] // bracket notation 

delete newObject.age;
console.log(newObject) // this removed the age from the newObject property. {name:'sherlyne', school:'St.Mary}

// bracket notation lets us use when the property don't work with dot notation
delete newObject['name'];
console.log(newObject);

// DELETE 
//delete object.property
//delete object[property] // bracket notation 


// Update the score:create a objects 
// Heads or tails object that stores wins or tails
// wins:0 starts with zero 
const scores = {
  wins:0,
  losses:0,
  fun:function life1(){
    console.log('Function inside an object')

  }
}

// when a function is inside a object it's called a method

function headTails(){
  // choses a random number that indicates if a number is greater or less than 5 its a heads, otherwise tails.
  number = Math.floor(Math.random()*10 +1); 
  console.log(number)
  let headTails = ''; 
  if (number>0 && number<=5){
    headTails = 'Heads';
  }else if (number>5 && number <=10){
    headTails = 'Tails'
  }

  return headTails;
}

// The function is called when the button is clicked
function playHeadTails(){
  const headT = headTails();
  let results = '';
  if (headT === 'Heads'){
    results = 'You win'; 
  }else if(headT === 'Tails'){
    results = 'You loose';
  }

  // update the score
  if (results === 'You win'){
    // increase the wins by +1; 
    scores.wins +=1; 
  }else if (results === 'You loose'){
    scores.losses +=1;
  }

 alert (`Your picked: ${headT} \n results: ${results} \n Wins:${scores.wins} \n Losses:${scores.losses}`)

 return results; 
}

  // you can also add a function inside an object which is called a method
const books = {
  books:function book(){
        console.log('Avengers');
    },
   // you can also have a nested object, meaning an object inside an object
    rating:{
        stars:4.5,
        count:87
    },
}
// run the code 
// console.log(playHeadTails())


// 1. JSON BUILT-OBJECTS: 
//JSON = javascript Object Notation, which is a syntax 
// - It uses less syntax 
//- must use the string
//-used to store data 

// Normal Objects 
const JSONb = {
  books:"Harry potter",
    rating:"44"
}

//2.  HOW TO STORE DATA </b>
/* 1. CONVERTING JS object to JSON built object 

To convert JS object to JSON use 
JSON.stringify(object) = method(takes an object we want to convert to json) which results in a string
*/ 
// JSONb is a JS object
console.log(JSON.stringify(JSONb)) 
// will return a string 
/* {
  "books":"Harry potter",
   " rating":"44"}
   */
console.log(typeof JSON.stringify(JSONb) ) // will return a string 

// 2. Convert the JSON BUILT OBJECT string to JS object we use = JSON.parse(JSON OBJECT))

const jsonString = JSON.stringify(JSONb);
const jsonObject = JSON.parse(jsonString); 

console.log(JSON.parse(jsonString)); // 44 
console.log(typeof jsonObject)// object 

// Example two 
const num = 123
const myJSON = JSON.stringify(num); // 
console.log(myJSON) // 123 but it's a string 
console.log(typeof myJSON); // string 

// Example 3 Object 
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

  console.log(typeof family) // family object
  const familyJSON = JSON.stringify(family)// converts family to JSON OBJECT 
  console.log(familyJSON);
  const familyOb = JSON.parse(familyJSON)
  
  // back to js object 
  console.log(familyOb)


// ANOTHER BUILT OBJECT 
//LOCAL STORAGE: = saves the values more permanently: 
    // Allows the word to be saved permanently. 
    // You are going to pass a name and value string we want to save in the local storage: name = message, value = hello a string 
    //we use the localStorage.setItem(name=value,value="string")

  // There are steps to storing data permanently one you have to 
  // 1. Set or name what you are going set (setItem)
  // 2. Get, getting a value out of the local storage,  what you had set earlier, get (getItem)

  localStorage.setItem('message','hello') // put it in. 
  localStorage.getItem('message') // get it out (You pass the string that you had set "message ")


    // To get the string out of local storage, 
    localStorage.getItem('message')
    console.log(localStorage.getItem('message')); // hello 

    //Example  object 
    const score = {
    wins: 0, 
    losses: 0, 
    ties: 0 
  }

  // localStorage only accepts strings

  //Save the scores permanently (localstorage.setItem)
     // convert the score object to string 
     const scoreString = JSON.stringify(score)
     console.log(scoreString) // string

     // save score in the localStorage
    localStorage.setItem('score', scoreString); 
  
     // We are now going to get what we stored out of local storage
     console.log(localStorage.getItem('score')) // name 

     // 2. Covert the local storage back to JSON OBJECT (JSON.parse)
     const backJs = JSON.parse(localStorage.getItem('score')); 
     console.log(backJs)
     console.log(typeof backJs) // object 

     // if the score is null, give a default score which is the object.
    if (score === null ){
        score={
            wins:0,
            losses:0,
            ties:0
        }
    }

    // Not score they are all the same. 
    // The default operator,
    // All this score are doing the same thing 
    // if left side is truth, we use that else we do the right side. 
    let newScore = JSON.parse(localStorage.getItem('score'))|| {
  
            wins:0,
            losses:0,
            ties:0  }

    if(!score){
     score={
            wins:0,
            losses:0,
            ties:0
        }

    }
  
// to remove scores from the local storage too, 
     localStorage.removeItem('score') // 

//AUTO BOXING: 
console.log('hello'.length)
console.log('hello'.toUpperCase())

// OBJECT SHORTCUTS/REFERENCES
// destructuring shortcut: take properties out of an object

  const familyS = {
      firstName: "Susan",
      lastName: "Doyle",
      age: 32,
    }
    const {firstName} = familyS; // this will get the FirstName of susan
    console.log(firstName);

    //Will take the property out, 
  const {age,lastName} = family; // this will get the FirstName of susan
    console.log(age,lastName);

  // Shorthand property 
  const object5 ={
     //firstName:firstName  // we are borrowing the name
    // if the property and the value are the same you just type it once:
    firstName  
  }

  console.log(object5)

  // Shorthand method
  //  Creating a new object, 
    const object6 ={
     //firstName:firstName  // we are borrowing the nam
     message:message,
    // if the property and the value are the same you just type it once:
    firstName,

  // Shorthand Method 
    // method: function function1(){
    //   console.log("A method function inside an object ");
    // }
// This method is the same as the one above, // Shorthand method. 
    method(){
      console.log('method')
    }
  }

    console.log(object6); 
    object6.method();  // this will run the object and display the "method"

  // LESSON 9 DOM: 
  //  DOM: Document Object Model:</b> its a built in object provided by js. that combines javascript and HTML together 
  // PROPERTIES OF DOCUMENT 
  document.title = 'DOM MANIPULATION'; // This changes the title of the document, referencing the HTML document. 
  document.body.innerHTML = 'New Webpage Creation'; // This removes everything on the webpage and returns 'Hello' on the webpage or al the HTML inside the body.
  
  // We can also replace the innerHTML with a new HTML code:  
    document.body.innerHTML = '<button>New HTML code</button>';

    // DOM METHODS
    document.querySelector('html element');   
    document.querySelectorAll('.js-button')

   document.querySelector('button') //takes the first button element
  //  document.querySelector('button').innerHTML= 'You are awesome' // This changes the name of the button. 

   // To get the second button, you use the class attribute: class = js-second-button. Here we use the class selectors. 
   const buttonElement = document.querySelector('.js-second-button').innerHTML = 'Sherlyne'; 

   console.log (buttonElement); 


   












 

  








  