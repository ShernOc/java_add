console.log('VARIABLE HTML')

// Cart quantity 
let cartQuantity = 0; 
// Items: 

const Vaseline = 4350;
const Shoes = 2000;
const cost = (Vaseline + Shoes)/100; 
console.log(`Cost ${cost}`); 
const tax = 0.1; 
const totalCost = cost + tax; 
console.log(`Total Cost: ${totalCost}`); 

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
    return alert(`you have ${cartQuantity} items in a cart`)
  }else if (cartQuantity + items < 0){
    return alert(`You have ${cartQuantity} \n add items in your cart `)
  }else {cartQuantity = cartQuantity + items}
  console.log(`Cart quantity: ${cartQuantity}`) ; 
}


// CALCULATOR 
let calculation ='';

function Calculation(results){
  if(calculation + results){
    return calculation += results ;
  }else {
    return calculation -= results; 
  }
  console.log('life')
          
}

// ROCK PAPER SCISSORS 
/*
Algorithm/Steps

We have a user and a computer:
if the computer select a move, 
We compare the move to get the results, 
User Selects the move 
Display the results in a popup 

if the number is between 0 and 1/3, = rock
if the number is between 1/3 and 2/3 = paper
if the number is between 2/3 and 1 = Scissors
 */ 

const randomNumber= Math.random();
console.log(randomNumber); 
let computer = '';
let selected = ''; 

function radNumber(){
  if(randomNumber >= 0 && randomNumber <= 1/3){
     return computer = 'Rock';
  }else if (randomNumber >= 1/3 && randomNumber <= 2/3 ){
    return computer = 'Paper'; 
  }else if (randomNumber >= 2/3 && randomNumber <= 1){
    return computer = 'Scissors';
  }else {
    return randomNumber;
  }
}

console.log(radNumber())

let result = '';

function PlayTheGame(user){
  let computerMove = radNumber(); // 
  console.log(computerMove); 
  // Rock
  if(user === 'Rock'){
    if (computerMove ==='Rock'){
      result = 'You tie';
    }else if (computerMove ==='Paper'){
      result = 'You lose'; 
    }else if (computerMove ==='Scissors'){
      result = 'You win';
    }
    // Paper
  }else if(user === 'Paper'){
     if (computerMove ==='Rock'){
      result = 'You win';
    }else if (computerMove ==='Paper'){
      result = 'You tie'; 
    }else if (computerMove ==='Scissors'){
      result = 'You lose';
    }
// Scissors 
  }else if(user === 'Scissors'){
     if(computerMove ==='Rock'){
      result = 'You lose';
    }else if (computerMove ==='Paper'){
      result = 'You win'; 
    }else if (computerMove ==='Scissors'){
      result = 'You tie';
    } 
  }else{console.log('select a button')}

   console.log(result); 
  // create an alert 
  alert(`You picked ${user}.\nComputer picked ${computerMove}.\n${result}`)
 
}

// COIN FLIP 
const randNumb = Math.random(); 
console.log(randNumb)
const  results = 'Head';
const rNumber = randNumb < 0.5? results:'Tails';
console.log(rNumber); 

/* Lets say we are trying to guess the result. Create a variable called guess and save your guess ('heads' or 'tails') 
 if your guess matches the results, display 'You win! in the console.
 if your guess does not match the results, display 'You lose'
 
 try switching to ternary operator*/
const guess = 'heads or tails'

