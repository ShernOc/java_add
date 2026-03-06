// Rock Paper Scissors 

/*steps 
Random numbers: 
0-1/3 = Rock 
1/3-2/3 = Paper 
2/3-1= scissor

1. Computer randomly picks a move (Rock,Paper, Scissors)
2. The user picks a a move by pressing the button. 
3. The win is compared to what a user picks. 
4. Update the score 
3. Display the results and score in a pop-up 
*/ 


// Update the score. // Use JSON and local storage to store the data. 
let score2= JSON.parse(localStorage.getItem('score2')) || {
        wins:0,
        losses:0,
        ties:0
    }
    
console.log(score2) 

updateScore2(); // returns the update functions 

// Computer move. 
function pickCompMove2(){
    let computerMove = ''; 
    const randomNumber =Math.random();
    console.log(randomNumber); 

    if(randomNumber>=0 && randomNumber <= 1/3){
        computerMove = 'Rock2';
    }else if(randomNumber>=1/3 && randomNumber<=2/3){
        computerMove= 'Paper2';
    }else if(randomNumber>=2/3 && randomNumber<= 1){
        computerMove= 'Scissors2';
    }  
    return computerMove;
}

console.log(pickCompMove2()); // show if its either scissor,Rock or Paper

// Compare the move of the computer and the user pick 
function playTheGame2(user){
    let results = ''; 
    const computerMove = pickCompMove2(); // 
    console.log(computerMove);

    // User picked (Rock)
    if(user === 'Rock2'){
        if(computerMove === 'Rock2'){
            results = 'You tie';
        }else if(computerMove === 'Paper2'){
            results = 'You loose';
        }else if(computerMove ==='Scissors2'){
            results = 'You win';
        }
    
    // User picked(Paper)
    }else if(user === 'Paper2' ){
        if(computerMove === 'Paper2'){
            results = 'You tie';
        }else if (computerMove === 'Rock2'){
            results = 'You win';
        }else if(computerMove === 'Scissors2'){
            results = 'You loose';
        }

        // User picked (Scissors)
    }else if(user === 'Scissors2'){
        if(computerMove === 'Scissors2'){
            results = 'You tie';
        }else if (computerMove === 'Rock2'){
            results = 'You loose';
        }else if (computerMove === 'Paper2'){
            results = 'You win';
        }
    }

    // Update the score:
    if(results === 'You win'){
        // increase the win by 1. 
        score2.wins +=1; 
     }else if (results === 'You loose'){
        score2.losses +=1;
     }else if (results === 'You tie'){
        score2.ties +=1;
     }
    
    //Saved score in the localStorage.setItem(string) 
    const scoreObject = JSON.stringify(score2)
    localStorage.setItem('score2',scoreObject); 

    // update score function being called. 
    updateScore2();
    document.querySelector('.js-results2').innerHTML = results; 
    document.querySelector('.js-moves2').innerHTML = `You Picked :${user} \n Computer Picked: ${computerMove}`; 

    return results; 
}

//console.log(playTheGame('Paper'));

// function to update 
function updateScore2(){
    //Display on the paragraph below 
    const displayDown = document.querySelector('.js-score2').innerHTML = `Wins: ${score2.wins}, \n Losses: ${score2.losses}, \n Ties: ${score2.ties}`; 

    return displayDown;
}






















