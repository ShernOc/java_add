// Rock Paper Scissor 
// global variable 
const randomNumber = Math.random();


//computer move/ constant functions
function pickComputerMove(){
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber<1/3){
    computerMove = 'rock';
}
  else if (randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }
  else if(randomNumber>= 2/3 && randomNumber<1){
  computerMove=('scissor');
  }

  return computerMove;
}
// call the function
console.log(pickComputerMove())

// My choice/
function playGame(playerMove){
  const computerMove = pickComputerMove()

  let results ='';
  if (playerMove===`rock`){
    if (computerMove === 'rock'){
    results = 'Its a tie '
    }else if (computerMove === 'paper'){
    results = 'Computer wins/ You loose'
  } else if (computerMove === 'scissor'){
    results = 'You win'
}

  }else if (playerMove === `paper`){
    if (computerMove === 'rock'){
      results = 'You win '
  }else if (computerMove === 'paper'){
      results = 'Its a tie'
  } else if (computerMove === 'scissor'){
      results = 'You loose, Computer wins'
  }
  
  }else if(playerMove ===`scissor`){
    if (computerMove === 'rock'){
      results =  'You loose, Computer wins';
  }else if (computerMove === 'paper'){
      results = 'You win ';
  } else if (computerMove === 'scissor'){
      results = 'Its a tie';
  }

  }

  // create a popup/ an alert function 
   alert(`You picked ${playerMove}, Computer picked ${computerMove}. Results=${result}`);

return results;
}

console.log(playGame())









