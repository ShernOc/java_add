// Coin flip Rules: 

//  Generate a random number both for computer and user: 
//If number < 0.5 = heads 
// if number > 0.5 = tails 
// save the result in a variable called 'result'
// computer === user = you win 
// computer !== user = 'You loose'
// if heads are more than 5 you win. else you loose 
// Count the number of tails from 

// Update the score 

// const score = {
//     win:0,
//     losses:0,
//     ties:0
// }

 let score = JSON.parse(localStorage.getItem('score'))
 if (score === null){{
    score = {
    win:0,
    losses:0,
    ties:0  }
 }}
 

function compPick(){
    const randomNumber = Math.floor(Math.random()*10 +1);
    let headTails= '';
    console.log(randomNumber) // run the numbers
    if(randomNumber > 0 && randomNumber <=5){
        headTails = 'Heads';
     }else if(randomNumber > 5 && randomNumber <=10){
        headTails = 'Tails';
    }
    return headTails; // tails or heads 
}


function playGame(user){
    let comp = compPick(); // calling the compPick function 
    console.log(`computer: ${comp}`)

    if(user === 'Heads'){
        if(comp === 'Heads'){
            results = 'You tie';
        }else if(comp === 'Tails'){
            results = 'You win';
        }
    }else if(user === 'Tails'){
        if(comp === 'Heads'){
            results ='You loose'
        }else if(comp === 'Tails'){
            results = 'You tie';
        }
    }

    // Update the score 
    if(results === 'You win'){
        score.win +=1;
    }else if(results === 'You loose'){
        score.losses +=1;
    }else if (results === 'You tie'){
        score.ties +=1; 
    }

// Store the score: // set the score 
localStorage.setItem('score', JSON.stringify(score))


    const choice = document.querySelector('.js-user-pick').innerText = `You picked: ${user}, \n Computer picked : ${comp} \n Results : ${results}, \n Win: ${score.win}, Losses : ${score.losses}, \nTies: ${score.ties}
    `
    return choice; 

}



// console.log(playGame())

// Ternary expression 
        // const guessCoin = guess === result?'You win':'You loose';

// Want to count how many wins and losses for both computer and User: 

