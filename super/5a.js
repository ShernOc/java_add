// Variables

const catName = "Tiger"
console.log(`My name is ${catName}`)
const coffee = 5;
const bagels = 3 ;
const soup = 9 ;

const cost = (2 * bagels) + coffee +soup;

console.log(`Cost of food:$ ${cost} `);

const tax= (coffee + (2 * bagels) + soup) * 0.1;
console.log(`Tax(10%):$${tax} `);

const totalCost = cost + tax; 
console.log(`Total cost: $${totalCost}`); 

const age = 56;
if (age>=18){
    return "you can drive"
}else{
    return "please learn how to drive"
}

// ROCK PAPER SCISSOR
// Generate a random number 
// O-1/3 = ROCK 
// 1/3=2/3 = PAPER 
// 2/3-1  = SCISSOR; 
const randomNumber = Math.random();
let compMove = ""; // empty string

let playerMove = ""; 

function computerMove(){
    if (randomNumber>=0 && randomNumber<1/3){
     compMove = "Rock"
    }else if (randomNumber>=1/3 && randomNumber<2/3){
   compMove = "Paper" ;
        } else if (randomNumber>=2/3 && randomNumber<1){
        compMove="Scissors";
    }else{

    console.log(compMove)
    let result = "";
    
    if (compMove === "rock"){
        result = "Tie"
    }else if (compMove === "Paper"){
        result = "You loose"
    }else if (compMove === "Scissor"){
        result = "You win "
    }
} 


}
  
if (randomNumber>=0 && randomNumber<1/3){
     compMove = "Rock"
}else if (randomNumber>=1/3 && randomNumber<2/3){
   compMove = "Paper" ;
} else if (randomNumber>=2/3 && randomNumber<1){
    compMove="Scissors";
}else{
    console.log(compMove)
    
    let result = "";
    if (compMove === "rock"){
        result = "Tie"
    }else if (compMove === "Paper"){
        result = "You loose"
    }else if (compMove === "Scissor"){
        result = "You win "
    }

}










