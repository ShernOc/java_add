// Rock Paper Scissor 


const randomNumber = (Math.random());
let computerMove = '';
let results ='';

function rock(){
  if (randomNumber >= 0 && randomNumber<1/3){
    computerMove = 'rock';
}
  else if (randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }
  else if(randomNumber>= 2/3 && randomNumber<1){
  computerMove=('scissor');
  }

if (computerMove === 'rock'){
    results = 'Its a tie '
}else if (computerMove === 'paper'){
    results = 'Computer wins/ You loose'
} else if (computerMove === 'scissor'){
    results = 'You win'
}

}



console.log(rock(randomNumber))


