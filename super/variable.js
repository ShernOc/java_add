console.log('VARIABLE HTML')

/* products 
const Vaseline = 4350;
const Shoes = 2000;

*/ 

// object: 
// Array: take the prices, Take each price divide by 1000 and then return each product of the work. 

class Products {
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
const cost = products.price;

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
    
  } else {console.log(`Cart Quantity: ${cartQuantity}`) ; 
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
  console.log(`Cart quantity: ${cartQuantity}`) ; 
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
  console.log(calculation)
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
// const JSobect = JSON.parse(getItem); 
// console.log(JSobect) // Its now an object and returns the scores.

// Here instead of having the original js-object you want to use the JSON.parse Object 

// We use the default operator   if not the left side which could be null, then we run the right side will be done. which is the original object. 
let score = JSON.parse(localStorage.getItem('score')) ||{
      wins: 0,
      losses: 0,
      ties: 0
  };

console.log(score)// 


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

   
   console.ll
  // create an alert  
   alert(`You picked <b>${userMove}.</b> \nComputer picked <b>${computerMove}.</b> \n<b>${result}</b> \nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

   // DOM 
  const scores = document.querySelector('.js-results').innerHTML = `You picked <b>${userMove}.</b> \nComputer picked <b>${computerMove}.</b> \n<b>${result}</b> \nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

// COIN FLIP 
const randNumb = Math.random(); 
console.log(randNumb)
const  results = 'Head';
const rNumber = randNumb < 0.5? results:'Tails';
console.log(rNumber); 

/* Lets say we are trying to guess the result. Create a variable called guess and save your guess ('heads' or 'tails') 
 if your guess matches the results, display 'You win.! in the console.
 if your guess does not match the results, display 'You lose.'
 
 try switching to ternary operator*/
const guess = 'heads or tails'



