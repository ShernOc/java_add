// Rock Paper Scissors 

/*steps 
Random numbers: 
0-1/3 = rock 
1/3-2/3 = paper 
2/3-1= scissor

1. Computer randomly picks a move (rock,paper, scissors)
2. The user picks a a move by pressing the button. 
3. The win is compared to what a user picks. 
4. Update the score 
3. Display the results and score in a pop-up 
*/ 

// scores calculation : OBJECTS
// Update the score: 
// 1. create a variable object for score outside the function 
// const scores= {
//     wins: 0, 
//     losses: 0, 
//     ties: 0 
// }

//Load the page by getting the items saved and convert string to JS Object (JSON.parse)
let score= JSON.parse(localStorage.getItem('score'))
// if the score is null, give a default score which is the object.
if (score === null ){
    // You bring the JSON Object to the if statement 
    score={
        wins:0,
        losses:0,
        ties:0
    }
}
console.log(score) 
//returns  back to object {wins: 4, losses: 2, ties: 3}
// function displays the DOM element
updateScore(); 

// Computer move. 
function pickCompMove(){
    let computerMove = ''; 
    const randomNumber =Math.random();
    console.log(number); 

    if(randomNumber>=0 && randomNumber <= 1/3){
        computerMove = 'rock';
    }else if(randomNumber>=1/3 && randomNumber<=2/3){
        computerMove= 'paper';
    }else if(randomNumber>=2/3 && randomNumber<= 1){
        computerMove= 'scissors';
    }  
    return computerMove;
}

console.log(pickCompMove()); // show if its either scissor,rock or paper

// Compare the move of the computer and the user pick 
function playTheGame(user){
    let results = ''; 
    const computerMove = pickCompMove(); // 
    console.log(computerMove);

    // User picked (rock)
    if(user === 'rock'){
        if(computerMove === 'rock'){
            results = 'You tie';
        }else if(computerMove === 'paper'){
            results = 'You loose';
        }else if(computerMove ==='scissors'){
            results = 'You win';
        }
    
    // User picked(paper)
    }else if(user === 'paper' ){
        if(computerMove === 'paper'){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You win';
        }else if(computerMove === 'scissors'){
            results = 'You loose';
        }

        // User picked (scissors)
    }else if(user === 'scissors'){
        if(computerMove === 'scissors'){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You loose';
        }else if (computerMove === 'paper'){
            results = 'You win';
        }
    }

    // Update the score:
    if(results === 'You win'){
        // increase the win by 1. 
        score.wins +=1; 
     }else if (results === 'You loose'){
        score.losses +=1;
     }else if (results === 'You tie'){
        score.ties +=1;
     }
    
    //Saved score in the localStorage.setItem() permanently  and convert object a string  using JSON.stringify(object)
    localStorage.setItem('score',JSON.stringify(score)); 

    // update score function being called. 
    updateScore();
    document.querySelector('.js-results').innerHTML = results; 
    document.querySelector('.js-moves').innerHTML = `You:${user} \n Computer: ${computerMove}`; 

    return results; 
}

//console.log(playTheGame('paper'));

// function to update 
function updateScore(){
    //Display on the paragraph below 
    const displayDown = document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, \n Losses:${score.losses}, \n Ties:${score.ties}`; 

    return displayDown;
}






















