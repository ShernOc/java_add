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

const score = {
    win:0,
    losses:0
}

function compPick(){
    let results = '';
    const randomNumber = Math.random();
    console.log(randomNumber)
    if(randomNumber > 0 && randomNumber <= 2/4){
        results = 'Heads';
     }else if(randomNumber > 2/4 && randomNumber <=1){
        results = 'Tails';
    }
    return results;
}

function userPick(){
    const randomNumber = Math.random();
    console.log(randomNumber)
    
    if(randomNumber > 0 && randomNumber <= 2/4){
        results = 'Heads';
     }else if(randomNumber > 2/4 && randomNumber <=1){
        results = 'Tails';
    }
    return results;
}


function playGame(){
    let user = userPick();
    let comp = compPick();

    console.log(`user: ${user}`)
    console.log(`computer: ${comp}`)

    if(user === 'Heads'){
        if(comp === 'Heads'){
            results = 'You win';
        }else if(comp === 'Tails'){
            results = 'You win';
        }
    }else if(user === 'Tails'){
        if(comp === 'Heads'){
            results ='You loose'
        }else if(comp === 'Tails'){
            results = 'You loose';
        }
    }

    // Update the score 
    if(results === 'You win'){
        score.win +=1;
    }else if(results === 'You loose'){
        score.losses +=1;
    }

    const choice = document.querySelector('.js-user-pick').innerText = `You picked: ${user} \n Computer picked : ${comp} \n Results : ${results} 
    Win: ${score.win}, Losses : ${score.losses}
    `

    return choice; 

}

// console.log(playGame())

// Ternary expression 
        // const guessCoin = guess === result?'You win':'You loose';

// Want to count how many wins and losses for both computer and User: 

