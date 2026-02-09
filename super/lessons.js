// LESSON 2 : NUMBERS AND MATH
// items 
const chicken_soup = 10;
const burger = (8*3); 
const ice_cream = 5; 

// calculate the order 
const people = 3; 
const orders = (chicken_soup + burger + ice_cream)/ people 
console.log(orders); // each person pays 13 shillings

// convert temperature to celsius and Fahrenheit; 
let temperature= 0; 
function celsius(temperature){
    const F = (temperature* 9/5) + 32; 
    const C = (temperature-32)*5/9
    return F;
}
console.log(celsius(-5))

//LESSON 3: STRINGS 
function strings(names){
    // use concatenation
    // alert(`my name is ${names}`);
    // return names;
    const name = `my name is ${names}`
    return name 
} 

console.log(strings('sherlyne'))

// Items In Cart :
const coffee2 = 599/100;
const bagel2 = 295/100; 
const soup = 9
const tax = 0.1
const cost= Math.round(coffee2 + bagel2 + soup); 
const totalTax = cost * tax; 
const totalCost = totalTax + cost; 
console.log(`Total Cost: $ ${totalCost}`);
alert(`Total Cost: $${totalCost} \n Thank you, come again!`);


const items = '$' + burger; 
console.log(items); 


//LESSON 4. HTML /: 
console.log('Welcome to the lessons page!');
console.log('Welcome');

//LESSON 5. VARIABLES 
// Use of interpolation and backticks.
// calculator 
// amazon cart

const elephantName = "Elephant";
console.log(`my name is ${elephantName}` ) ;

// restaurant order
const coffee = 5 
const bagels = 2*3;
const ting = 9
const costs = coffee + bagels + ting;65;'5636 m'
const tax2 = cost * 0.1
console.log(cost);
console.log(tax2); 
const totalCosts = cost +tax;
console.log(` Total cost:$$ ${totalCosts}`);

// Variables: 
let calculator ='';
function calCulation(number){
    if(calculator){
        calculator +=number;
    }else{calculator -= number}
}


//LESSON 6. BOOLEANS AND IF STATEMENTS/: 
const hour = 19 
const myname = 'Sherlyne'
 if(hour > 6 && hour < 12){
    console.log(`Good Morning ${myname} !`)
 }else if (hour > 13 && hour < 17){
    console.log(`Good afternoon ${myname}!`)
 }else{console.log(`Good night ${myname}!`)}

console.log(hour) // Good night Sherlyne! =


const shirt = 10;
const socks = 8; 
const plate = 20;

console.log(typeof(shirt))

function Total_cost(){
    total = (shirt+socks+plate);
    return total
}
console.log(Total_cost())


//AMUSEMENT PARK
/* there is a discount for children 6 and below or seniors 65 and above. */
function amusementPark(){
    const myAge = 89; 
    const isHoliday = false;
    if ((myAge >= 65 || myAge <=6) && isHoliday){
        return('Discount');  
    }else{
        return ('No discount')
    }
}
console.log(amusementPark())

//((ages<= 6 || ages>=65) && isHoliday ) 
    let ages = 0;  // create a constant work. 
    const isHoliday = true;
    function amusement(ages){
        if(isHoliday && (ages<= 6 || ages>=65) ){
            return 'Discount';
        }else{
            return 'No discount' ;
        }
    }; 
    console.log(amusement(70));

    // ternary operator
    let age = 70; 
    const discountTime = isHoliday && (age<=6 || age>=65)?`No Discount`:`Discount`
    console.log(discountTime)

// Flip coin  
const randomNu = Math.random(); 
 // having two conditions: if number is < 0.5 and if the guess == 'tails' results = 'you win'; 

// return results;
function coin(){   
    let results = '';
    let guess = 'Tails'; 
    console.log(randomNu);
    if(randomNu < 0.5? 'Heads':'Tails'){
        results = 'Tails'
        if(results === guess){
            console.log('You win');
        } else if (results !== guess){
             console.log ('You lose')}
        } else{console.log('Play again')}

        return results; 
    }

console.log(coin())
// I Have messed up this so bad. 

//Ternary Work:
const num  = randomNu <= 0.5? 'heads':'tails';
const newCoin = num==='tails'? `You win`:`You lose`; 
console.log(newCoin)

// LESSON 7: FUNCTIONS

//ROCK PAPER SCISSORS: 
// Pick computer move
function pickCompMove(){
    let computer = ''; 
    const randomNumber = Math.random(); 
    if(randomNumber>= 0 && randomNumber< 1/3){
        computer = 'rock';
    }else if(randomNumber >=1/3 && randomNumber <2/3){
        computer = 'paper';
    }else if(randomNumber >=2/3 && randomNumber <1){
        computer = 'scissors';
    }

    // return computerMove; 
    return computer;
}; 

// calling a function : pickCompMove(); 
console.log(pickCompMove()) // Return either rock,scissor,or paper

// userPick= parameter of what the user will pick either rock, paper or scissors 
function playGame(userMove){
    const computerMove = pickCompMove(); // called the computer pick move ; 
    console.log(computerMove)
    let results = ''; 

    if(userMove ==='rock'){
        if(computerMove ==='rock'){
            results = 'You tie';
        }else if(computerMove ==='paper'){
            results = 'You loose';
        }else if(computerMove ==='scissors'){
            results = 'You win' ; 
        }
    }
    // user pick = paper
    else if(userMove === 'paper'){
        if(computerMove === 'paper'){
            results = 'You tie';
        }else if (computerMove ==='rock'){
            results = 'You win';
        }else if(computerMove === 'scissors'){
            results = 'You loose'; 
        }
    } // user pick = scissors
    else if(userMove === 'scissors'){
        if(computerMove ==='scissors'){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You loose'; 
        }else if (computerMove ==='paper')
            results ='You win';
    };

 // popup alert 
    alert(`You picked ${userMove},\n Computer picked ${computerMove},\n ${results}`);
    return results;
}

//call this functions
console.log(playGame('rock'));
console.log(playGame('scissors')); 
console.log(playGame('paper')); 

// Challenge: learn about, functions, parameter
function greet(name ='Mary'){
    if(name){
       return `Hello! ${name}`;
    }else if(!name){
        return('Hi there!');
    }
}
console.log(greet()); // 'Hello! Mary' 

function convertBothFahrenheitAndCelsius(number){
    const F = (number * 9/5) +32;
    const C = (number-32)*5/9; 
    return C; 
}

console.log(convertBothFahrenheitAndCelsius(90));

//convert miles to 
// 7g. create a function convertLenght(length,from,to) that takes a number and unit(km or miles)and convert the length to another unit(km,miles) noteL 1 mile = 1.6 km 
// function convertLenght(length,from,to){ 
//       km = length * 1.61 
//     miles = length * 0.62;

//     let from = km; 
//     return km;
// }

// console.log(convertLenght(50,'km', ))

/* 7h. Update convertLength to support convert between km,miles, and also feet. Note: 1 mile = 5280ft, 1 km = 3281ft. eg: 5 miles = 8km */
/* 7i. Update convertLength so that if you give it an invalid unit, it will return 'Invalid unit:${unit}.
*/ 

// convert to length to ft 
// function convertLengthFt(length, from, to){
//     mile = length * 5280 
//     km = length * 3281 
//     // converts the number to 
//     //return miles + `${unit}`;
    
//     if(length){
//         return miles + `${from}`;
//     }else{
//         return `Invalid unit:${unit}`; 
//     }

// }
// console.log(convertLengthFt(5, 'km', ))


// MISSELENOUS: 

// How i spend the money
const bank = 100; 
const lunch = 20;
const dinner = 50; 
const earn = 200; 
// Use the Array.reduce to add ([].reduce((a+b)=>a+b,0))
function moneyHave(){
    // const lif= bank+lunch+dinner+earn
    // return lif
    const sum = [bank,lunch,dinner,earn].reduce((partialSum,a)=> partialSum +a,0);
    return sum;
}
console.log(moneyHave())//370

function page(){
    const doc = 'Doctor'
//    const doc= document.body.innerHTML = alert('blank');
   return doc
}

// console.log(page());

function order(){
    let coffee = 5.99;
    let bag = 3.98; 
    // const total = alert(`Total cost: $${coffee + bag}\n Thank you, come again!`);
    return total
}

// console.log(order())

// LESSON 8: OBJECTS : 
// Product. 
const product1= {
    name: 'Basketball', 
    price: 2095/100,
}

console.log(product1.price) 

// increase the price by 500 
function priceCalculate(){
    const products = product1.price*500
    console.log(products)

}

console.log(priceCalculate())
// add another property 'delivery-time:'3 days' using bracket notation  
product1.delivery =['3 days']; 

console.log(product1)

const product2  = {
    name: 'Sherlyne',
    price:45
}

// compare two objects 
function comparePrice(){
    const pro = product1 === product2
    return pro
}

console.log(comparePrice())

// LESSON 9 DOM: 
// Youtube button subscription 
/*if subscribe button === subscribe change change it to subscribed otherwise change it back to subscribe */

function subscribeButton(){
    const youtubeButton = document.querySelector('.js-subscribe-button'); // takes the button 

    if (youtubeButton.innerText ==='Subscribe'){
        youtubeButton.innerText ='Subscribed'; 
    }else{
        youtubeButton.innerText ='Subscribe'
    }
    return youtubeButton; 
}

// console.log(subscribeButton())

// ROCK PAPER SCISSOR SMALL PROJECT 
// store the scores permanently, 
let score = JSON.parse(localStorage.getItem('score'))

if(score === null ){
    score= {
    win:0,
    tie:0, 
    losses:0
}
    }

    // update the score ; 
updateScore(); 
 
function randomNumber(){
    const randomNumber = Math.random()
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber<1/3){
         computerMove = 'Rock';
    }else if (randomNumber>=1/3 && randomNumber<2/3 ){
        computerMove ='Paper';
    }else if(randomNumber>= 2/3 && randomNumber < 1){
        computerMove = 'Scissor';
    }
    
    return computerMove; 
}

console.log(randomNumber()) // returns the random object , rock, paper, or scissor

function playerMove(userMove){
    const compMove = randomNumber();
    console.log(compMove);
    let results = '';

    // user picks rocks
    if(userMove === 'Rock'){
        if(compMove === 'Rock'){
            results = 'You tie'; 
        }else if(compMove === 'Paper'){
            results = 'You loose'; 
        }else if(compMove === 'Scissor'){
            results = 'You win';
        }

        // user picks paper
    }else if(userMove === 'Paper'){
        if(compMove === 'Rock'){
            results = 'You win'; 
        }else if(compMove === 'Paper'){
            results = 'You tie'; 
        }else if(compMove === 'Scissor'){
            results = 'You loose';
        }

        // user picks scissors
    }else if (userMove === 'Scissor'){
        if(compMove === 'Rock'){
            results = 'You loose'; 
        }else if(compMove === 'Paper'){
            results = 'You win'; 
        }else if(compMove === 'Scissor'){
            results = 'You tie';
        }
    }

    // update the score 
    if(results === 'You win' ){
        score.win +=1; 
    }else if(results === 'You tie'){
        score.tie +=1; 
    }else if(results === 'You loose'){
        score.losses +=1; 
    }

    // store the score in the local storage
    localStorage.setItem('score', JSON.stringify(score));

    // will call the update function. 
    updateScore(); 
    // results: 
    document.querySelector('.js-final-result').innerHTML = `${results}`;
    document.querySelector('.js-moves').innerHTML=`You:${userMove} -- \n Computer:${compMove}`

    //alert 
    //  alert(`You picked:${userMove}.\n Computer picked: ${compMove}. \n Final Results: ${results} \n Wins:${score.win}, \n Ties: ${score.tie}, \n Losses : ${score.losses}`) ; 

}
// run playMove function 
// console.log(playerMove('rocks'));

function updateScore(){
    // Display the work at the website
    const displayDom = document.querySelector('.js-result').innerText =`Wins:${score.win}, \n Ties: ${score.tie} \n Losses : ${score.losses}`; 

    // upgrade the work 
    return displayDom; 
}

// Amazon Shipping Calculator 
/* When we click the button, 
1. Get the text in the text box, 
2. If amount < 40 add 10 
3. Display Total on the page 

*/ 

function amazonShip(order){
    const inputElement = document.querySelector('.js-cost-input')  
    // used Number() to convert the number to a string 
    let cost = Number(inputElement.value) ; // this will produce and output of the value inside the text box once typed. 
    
    if(cost < 40 ){
        cost +=10; 
    }

    const display = document.querySelector('.js-total-cost').innerHTML =` Total: $${cost}`; 

    return display; 

}
