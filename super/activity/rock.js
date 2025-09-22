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


function randomNumber(){
    let compMove = ''; 
    const number =Math.random();
    // console.log(number);
    if (number>=0 && number< 1/3){
        compMove = 'rock'
    }else if (number>=1/3 && number<2/3){
        compMove= 'paper';
    }else if(number>=2/3 && number< 1){
        compMove= 'scissors';
    }
    return compMove;
}

// console.log(randomNumber()); 

// Compare the move of the computer and the user pick 
function compMove(userPick){
    let results = ''; 
    const computerMove = randomNumber(); 
    console.log(`computer picked ${computerMove}`);
    // User picked (rock)
    if(userPick === 'rock'){
        if (computerMove === userPick){
            results = 'You tie';
        }else if(computerMove === 'paper'){
            results = 'You Loose';
        }else if(computerMove ==='scissors'){
            results = 'You win';
        }
    // User picked(paper)
    }else if(userPick === 'paper' ){
        if(computerMove === userPick){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You win';
        }else if(computerMove === 'scissors'){
            results = 'You loose';
        }
        // User picked (scissors)
    }else if(userPick === 'scissors'){
        if(computerMove === userPick){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You loose';
        }else if (computerMove === 'paper'){
            results = 'You win';
        }
    }
    console.log(`User picked,${userPick}`);

    //Display on the paragraph below 
    const displayDown = document.querySelector('.js-results').innerText = `Computer Pick: ${computerMove}\n Your Pick:${userPick}\n Results:${results}`
    return displayDown;
}

// console.log(compMove('paper'));



function userMove(userPick){
    // pass the computerMove() function 
    const computer = compMove();
    if(computer === 'rock'){
        if(computer === userPick){
            results = 'You tie';
        }else{
            results = 'Loose'} 
    }else if (computer ==='paper'){
        if(computer=== userPick){
            results = 'You tie';
        }else{results = 'You loose'}
        
    }else if (computer === 'scissors'){
        if(computer === userPick){
            results = 'You tie';
        }else{
            results = 'You loose '
        }
    }
    return results
}; 


// console.log(`you picked 'scissors'`)












