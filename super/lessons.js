//LESSON 2  STRINGS 
// convert temperature to celsius and Fahrenheit; 
let temperature= 0; 
function celsius(temperature){
    const F = (temperature* 9/5) + 32; 
    const C = (temperature-32)*5/9
    return F;
}
console.log(celsius(-5))

//LESSON 3: STRINGS 
function string(names){
    // use concatenation
    // alert(`my name is ${names}`);
    // return names;
    const name = `my name is ${names}`
    return name 
} 

console.log(string('sherlyne'))

// Items In Cart :
const coffee2 = 5.99;
const bagel2 = 2.95; 
const soup = 9
const tax = 0.1
const cost= Math.round(coffee2 + bagel2 + soup); 
const totalTax = cost * tax; 
const totalCost = totalTax + cost; 
console.log(`Total Cost: $${totalCost}`);
// alert(`Total Cost: $${totalCost}`);

//LESSON 4. HTML /: 
console.log('Welcome to the lessons page!')

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
const costs = coffee + bagels + ting;
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
    let ages = 0;  // create a constant work. 
    const isHoliday = true;
    //((ages<= 6 || ages>=65) && isHoliday ) 

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

// coins; 
    const randomNu = Math.random(); 
    let results = '';
    let guess = 'tails';
    
 // having two conditions: if number is < 0.5 and if the guess == 'tails' results = 'you win'; 

// return results;
function randomNumber(){   
    console.log(randomNu);
    if(randomNu <=0.5){
        results = 'heads'; 
        return 'You loose';
    }else if(guess === 'tails'){ 
        results = 'tails'
        return 'You win'
    }else{
        results = 'tails';
        return 'Lose';
        }
}; 

console.log(randomNumber())

//Ternary Work:
const num  = randomNu <= 0.5? 'heads':'tails';
const newCoin = num==='tails'? `You win`:`You lose`; 
console.log(newCoin)

// LESSON 7: FUNCTIONS

//ROCK PAPER SCISSORS: 
// Pick computer move
function pickCompMove(){
    let computerMove = ''
    const randomNumber = Math.random()
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock';
    }else if(randomNumber >=1/3 && randomNumber <2/3){
        computerMove = 'paper';
    }else if(randomNumber >=2/3 && randomNumber <1){
        computerMove = 'scissors';
    }

    //return a value 
    return computerMove;
}; 

// calling a function : pickCompMove(); 
console.log(pickCompMove()) // Return either rock,scissor,or paper

// userPick= parameter of what the user will insert
function playGame(userPick){
    // we picked the computer function
    const computerMove = pickCompMove(); // called the function 
    console.log(computerMove)
    let results = ''; 

    if(userPick ==='rock'){
        if(computerMove ==='rock'){
            results = 'You tie ';
        }else if(computerMove ==='paper'){
                results = 'You loose';
        }else if(computerMove ==='scissors'){
                results = 'You win' ; 
        }
    }
    // user pick = paper
    else if(userPick === 'paper'){
        if(computerMove === 'paper'){
            results = 'You tie';
        }else if (computerMove ==='rock'){
            results = 'You win';
        }else if(computerMove === 'scissors'){
            results = 'You loose'; 
        }
    } // user pick = scissors
    else if(userPick ==='scissors'){
        if(computerMove ==='scissors'){
            results = 'You tie';
        }else if (computerMove === 'rock'){
            results = 'You loose'; 
        }else if (computerMove ==='paper')
            results ='You win';
    };

    // popup
    // alert(`You picked ${userPick},\n Computer picked ${computerMove},\n ${results}`);
    return results;
}

console.log(playGame('rock')) // user pressed rock: 

// call this functions
// console.log(playGame('rock'));
// console.log(playGame('scissor'))


// Challenge: learn about, functions, parameter
function greet(name){
    if(name){
       console.log(`Hello!${name}`) 
    }else{
        console.log('Hi there!')
    }
}
// call the function
greet();

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
// function doc(){
//     const bod = document.body.innerHTML = alert('Welcome!');
//     return bod;
// }
// console.log(doc());

function displayResults(){
    const results = document.querySelector('.js-results').innerText =`Results = ${calculator}`;
    return results
}

console.log(displayResults())































