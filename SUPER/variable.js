window.document
window.console.log('Sherlyne Window');
// window.alert('What is going on? ')

console.log('VARIABLE HTML')

/* products 
const Vaseline = 4350;
const Shoes = 2000;

*/ 
// object: 
// Array: take the prices, Take each price divide by 1000 and then return each product of the work. 

class Productscd {
  constructor(name, price, store) {
    this.name = name; 
    this.price = price; 
    this.store= store;

  }
}

const products = {
  name :'Vaseline',
  price:2000,
  name:'Shoes', 
  price: 1090,
  name:'Basket', 
  price: 2095,
  name:'Toaster', 
  price: 1890, 
  name:'T-shirt', 
  price: 799,
}

console.log(products); // why is it showing only the last items? 

// JSON OBJECTS 
const json = JSON.stringify(products); 
console.log(json)

const parse = JSON.parse(json)
console.log(parse); 


// Cart quantity 
let cartQuantity = 0; 

// Items: 

// Parameters. 
// how to input the cost of items, that don't have the same amount.i think use an object, a while loop, to hold all the items. 
const tax = 0.1; 
let cost = products.price;

// Array: take the prices, Take each price divide by 1000 and then return each product of the work. 
// const stuff = products.price.find()

function calculate(cost, tax=0.1){
  const taxed = ((cost) * tax) ; 
  const totalCost = taxed + cost; 
  return `Total Cost: ${totalCost/100}`; 
  }

console.log(calculate(456, 0.3))

// console.log(calculate(4567))

// showQuantity and remove cart button 
function ShowQuantity(stuff){
  if(stuff > 0 ){
    console.log(`Cart quantity:${cartQuantity}`)
  }else if (stuff == 0 ){
    cartQuantity = 0 ; console.log(`Cart was reset \n Cart Quantity : ${cartQuantity}`);
    
  } else {
    // display the quantity
  document.querySelector('.js-display-cart').innerHTML = `Cart quantity: ${cartQuantity}`; 
  }}

  
// Add to Cart
let items = ''; 

function AddCart(items){
  // reassigned a cart quantity
  // if items are 10 
  // ShowQuantity(); // updates the quantity so we 
  const maxItems = 30; // maximum items in the cart 
  if(cartQuantity + items > maxItems){
    alert(`you have ${cartQuantity} The cart is full`)
    return; 
  }else if (cartQuantity + items < 0){
    alert(`You have ${cartQuantity} \n add items in your cart `)
    return;
  }else {cartQuantity = cartQuantity + items} 

  // display the quantity
  document.querySelector('.js-display-cart').innerHTML = `Cart quantity: ${cartQuantity}`;


}

// Update cart 
function updateDomConsole(){
 ;
  // display the quantity
  document.querySelector('.js-display-cart').innerHTML = `Cart quantity: ${cartQuantity} Total Quantity = ${ ShowQuantity()}`;
}



// CALCULATOR 
// It's not working. 
let calculation ='';

function Cal(results){
  if(calculation){
    return calculation += results ;
  }else if(calculation = eval( `${calculation}`)){
    return calculation;
  }
  console.log(calculation);
}


// ROCK PAPER SCISSORS 
/*
Algorithm/Steps

We have a user and a computer:
if the computer select a move and a user selects a move(rock,paper,scissor)
We compare the moves to get the results, 
User Selects the move 
Display the results in a popup 

Criteria: 
if the number is between 0 and 1/3, = rock
if the number is between 1/3 and 2/3 = paper
if the number is between 2/3 and 1 = Scissors

Steps. 
1. User clicks the button by selecting a move, 
2. Computer randomly selects a move, 
3. Compare the moves to the results
4. Update the score
4. Display the results in a pop up and also in the page. 

 */ 

// 4. Update the score 
// store the scores.  
// const score = {
//   wins: 0,
//   losses: 0,
//   ties: 0
// }; 

//JSON convert to JS Object (parse)
// const getItem = localStorage.getItem('score')
// const JSobject = JSON.parse(getItem); 
// console.log(JSobject) // Its now an object and returns the scores.

// Here instead of having the original js-object you want to use the JSON.parse Object 

// We use the default operator   if not the left side which could be null, then we run the right side will be done. which is the original object. 
let score = JSON.parse(localStorage.getItem('score')) ||{
      wins: 0,
      losses: 0,
      ties: 0
  };

console.log(score)// 

updateScore(); 


// if the score is null, then will provide a default score as before using the json Object

  // if(!score){
  //   score = {
  //     wins: 0,
  //     losses: 0,
  //     ties: 0
  // };
  // }


// 1. Computer randomly selects a move, 
function radNumber(){
  let computerMove = '';
  const randomNumber= Math.random();
  console.log(randomNumber); 
  
  if(0 <= randomNumber <=1/3){
      computerMove = 'Rock';
  }else if ( 1/3 <= randomNumber <= 2/3 ){
    computerMove = 'Paper'; 
  }else if (2/3 <= randomNumber <= 1){
     computerMove = 'Scissors';
  }
  return computerMove;
}

console.log(radNumber())

function PlayTheGame(userMove){
  let result = '';
  let computerMove = radNumber(); // 
  console.log(computerMove); 
  // Rock
  if(userMove === 'Rock'){
    if (computerMove ==='Rock'){
      result = 'You tie.';
    }else if (computerMove ==='Paper'){
      result = 'You lose.'; 
    }else if (computerMove ==='Scissors'){
      result = 'You win.';
    }
    // Paper
  }else if(userMove === 'Paper'){
     if (computerMove ==='Rock'){
      result = 'You win.';
    }else if (computerMove ==='Paper'){
      result = 'You tie.'; 
    }else if (computerMove ==='Scissors'){
      result = 'You lose.';
    }
// Scissors 
  }else if(userMove === 'Scissors'){
     if(computerMove ==='Rock'){
      result = 'You lose.';
    }else if (computerMove ==='Paper'){
      result = 'You win.'; 
    }else if (computerMove ==='Scissors'){
      result = 'You tie.';
    } 
  }else{console.log('select a button')}


  // update the scores. // How many wins and losses. 

  if(result === 'You win.'){
    score.wins +=1;
  }else if (result === 'You lose.'){
    score.losses +=1; 
  }else if (result === 'You tie.'){
    score.ties +=1; 
  }; 

   // SAVE THE SCORE PERMANENTLY

   /* 
   1. Convert the score object to a string 
   2. Store the string to the localStorage 
   
   
   */ 
   const scoreString = JSON.stringify(score);
  // Save the score in the local storage
  localStorage.setItem('score',scoreString); 

  // create an alert  
  //  alert(`${result}
  //   \n You picked ${userMove}.
  //   \n Computer picked ${computerMove}.
  //   \n Wins: ${score.wins},\n Losses: ${score.losses}, \n Ties: ${score.ties}`);

  updateScore(); // will run the function and can be reused. 

  document.querySelector('.js-results').innerHTML = result; 

  document.querySelector('.js-moves').innerHTML =` \n You picked ${userMove}.
  \n Computer picked ${computerMove}.`; 
  
}

// DOM 
function updateScore(){
  document.querySelector('.js-scores').innerHTML =`
  \n Wins: ${score.wins},\n Losses: ${score.losses}, \n Ties: ${score.ties}`; 
}

// COIN FLIP 


/* When clicking 'heads' play the game with guess = 'heads' 
When clicking 'tails' play the game with guess = 'tails'
Create a function 'playGame(guess)' to reuse the code. 

Crete a score object {wins:0, losses:0}, update the score each time after playing, and display the score in the console. 

Use local storage to save and load the score(hint: you will need to use JSON.stringify() to convert the score object to a string)

SECOND SESSION 
Lets say we are trying to guess the result. Create a variable called guess and save your guess ('heads' or 'tails') 
 if your guess matches the results, display 'You win.! in the console.
 if your guess does not match the results, display 'You lose.'
 
 try switching to ternary operator*/


function coin(){
  const randomNumber = Math.random()
  let results ='heads'; 
  let guess = 'tails';
  const rNumber = randomNumber < 0.5? results:guess;
 return rNumber; 
}
console.log(coin())

let scores = localStorage.getItem(JSON.stringify('scores')) || {
  win:0,
  losses:0,
  ties:0
}

function coinFlip(users){
  const flip = coin();
  let results = '';
  if(users === 'heads'){
    if(flip === 'heads'){
      results = 'You tie'
    }else if (flip === 'tails'){
      results = 'You win'
  }else if (users === 'tails' ){
    if(flip === 'tails'){
      results = 'You tie'
    }else if(flip === 'heads'){
      results = 'You loose'
    }
  }
}
return results; 

// Update the score

localStorage.getItem(JSON.stringify('scores'))
}

// DOM: Documents Oject Manipulation 
// GET/ SELECT THE ELEMENT USE: Query selector. 
// const where = document.querySelector('.js-dom'); 

// 1. CREATE AN ELEMENT 
const newElement = document.createElement('h3');

// 2. ADD CONTENT OR ATTRIBUTE 
const hiMe = newElement.textContent = 'WHAT IS YOUR NAME '
// ATTACH IT TO THE PAGE: 
const here = document.body.appendChild(newElement); 

// CREATE OR CHANGE .innerHTML = 'This Button'
const but = document.createElement('button');
const bT = but.innerHTML = 'New Button '; 
const newButton = document.body.append(but); 

// 24/02/2026. 
// Youtube subscribe button 
function SubscribeButton(){
  // get the button. 
  const subscribeButton = document.querySelector('.js-youtube-button');

  if (subscribeButton.innerText === 'Subscribe'){
    subscribeButton.innerText = 'Subscribed';
  }else {
    subscribeButton.innerText = 'Subscribe'
  }

}

// 05/03/2026.
// Amazon shipping 

// HandleKeydown event listener 

function handleKeydownEvent(event){
   if(event.key === 'Enter'){
    amazonShipping()
    }
}

function amazonShipping(){
  const inputElement = document.querySelector('.js-cost-input');
  let numberValue = Number(inputElement.value);

  if(numberValue <= 40){
    numberValue += 10; 
  }else{
    numberValue;
  };
  // display the cost, grab the html element
  document.querySelector('.js-total-cost').innerHTML = ` $${numberValue}`; 
}

// LESSON 11; ARRAY
const mainArray = [50,69,30,'sherlyne', true];
const array1 = [90,40,20,16,30,'life', mainArray]
console.log(array1);
console.log(array1[4]); // this shows the first index value of the array that is 10. 
console.log(typeof(array1[3]));
array1[1]=245; 
console.log(array1); 4

// To check if an array is an array we use Array.array()
console.log(Array.isArray(mainArray)) // true meaning that mainArray is an Array. 

// Array Properties
const newArray = array1.sort() // Sorts an array in place. This method mutates the array and returns a reference to the same array.
console.log(newArray);// 
console.log(array1.length) // 5 Gets or sets the length of the array. This is a number one higher than the highest index in the array.
console.log(mainArray.at(4)) // Returns the item located at the specified index.
// array1.concat
// array1.copyWithin
// array1.every
// array1.filter
// array1.fill()
// array1.forEach
// console.log(array1.find);// 
// console.log(array1.toString());// Returns a string representation of an array.
// console.log(array1.findIndex); 
// console.log(array1.slice()); 

const removeElements = array1.splice(5,2); 
// 1. what index do we want to remove, 
// 2. What do we want to add 
//Will return an array containing the elements that were deleted.
console.log(removeElements); // [90,40,20,16,30]

console.log(array1.splice());//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


console.log(array1.includes());// checks whether an array includes a certain element, returning true or false as appropriate.
console.log(mainArray.keys())// Returns an iterable of keys in the array

console.log(array1.map) //Calls a defined callback function on each element of an array, and returns an array that contains the results.

const reverS =mainArray.reverse() //Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(reverS); 

const AddElementEnd = mainArray.push('Adhiambo')//Appends new elements to the end of an array, and returns the new length of the array.
console.log(AddElementEnd); // returns 6 as the new length 
console.log(mainArray)
const removeElementEnd = mainArray.pop() //Removes the last element from an array and returns it . If the array is empty, undefined is returned and the array is not modified.
console.log(removeElementEnd) // Adhiambo;
console.log(mainArray)

const AddElementBeginning = mainArray.unshift('newList'); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(AddElementBeginning); 

const removeElementBeginning = mainArray.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(removeElementBeginning)








