// Rock Paper Scissors 

/*steps 
1. Computer randomly picks a move 
    if number between 1-1/3 = 
2. You pick a move and the results are compared
3. Display the results in a pop-up 
*/ 

/*
Random numbers: 
0-1/3 = rock 
1/3-2/3 = paper 
2/3-1= scissor
*/ 

function pickCompMove(){
    let computerMove = ''; 
    const randomNumber =Math.random();
    // console.log(number);
    if (randomNumber>=0 && randomNumber< 1/3){
        computerMove = 'rock'
    }else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove= 'paper';
    }else if(randomNumber>=2/3 && randomNumber< 1){
        computerMove= 'scissors';
    }  
    return computerMove;
}

console.log(pickCompMove()); // show if its either scissor,rock or paper

// Compare the move of the computer and the user pick 
function playTheGame(userPick){
    let results = ''; 
    const computerMove = pickCompMove(); 
    console.log(computerMove);

    // User picked (rock)
    if(userPick === 'rock'){
        if (computerMove === 'rock'){
            results = 'You tie';
        }else if(computerMove === 'paper'){
            results = 'You Loose';
        }else if(computerMove ==='scissors'){
            results = 'You win';
        }
    
    // User picked(paper)
    }else if(userPick === 'paper' ){
        if(computerMove === 'paper'){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You win';
        }else if(computerMove === 'scissors'){
            results = 'You loose';
        }

        // User picked (scissors)
    }else if(userPick === 'scissors'){
        if(computerMove === 'scissors'){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You loose';
        }else if (computerMove === 'paper'){
            results = 'You win';
        }
    }

    console.log(`User picked,${userPick}`);

    //Display on the paragraph below 
    const displayDown = document.querySelector('.js-results').innerText = `Computer Pick:${computerMove}\n Your Pick:${userPick}\n Results:${results}`
    return displayDown;
}

console.log(playTheGame('paper'));

// score: 













