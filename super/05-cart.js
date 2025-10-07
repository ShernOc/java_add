// Variables







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










