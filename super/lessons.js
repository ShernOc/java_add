//LESSON 1. 
const shirt = 10;
const socks = 8; 
const plate = 20;

console.log(typeof(shirt))

function Total_cost(){
    total = (shirt+socks+plate);
    return total
}
console.log(Total_cost())

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
   const doc= document.body.innerHTML = alert('blank');
   return doc
}

// console.log(page());


//LESSON 2 
// convert temperature to celsius and Fahrenheit; 
let temperature= 0; 
function celsius(temperature){
    const F = (temperature* 9/5) + 32; 
    const C = (temperature-32)*5/9
    return F;
}
console.log(celsius(-5))

//LESSON 3: 
function string(){
    const names ='Sherlyne';
    alert(`my name is ${names}`);
    return names;
} 

// console.log(string())

function order(){
    let coffee = 5.99;
    let bag = 3.98; 
    const total = alert(`Total cost: $${coffee + bag}\n Thank you, come again!`);
    return total
}

// console.log(order())

// LESSON 4 
function doc(){
    const bod = document.body.innerHTML = alert('Welcome!');
    return bod;
}
// console.log(doc());

// LESSON 5; 

// Variables: 
let calculator ='';

function calCulation(number){
    if(calculator){
        calculator +=number;
    }else{calculator -= number}

}
console.log(3<5);

console.log(calCulation('2')) ;

function displayResults(){
    const results = document.querySelector('.js-results').innerText =`Results = ${calculator}`;
    return results
}

console.log(displayResults())

// IF ELSE STATEMENT 
function elseIf(){
    if(condition === true ){
        console.log('Run this statement')
    }else if (condition === false ){
        console.log('Run this condition')
    }else{console.log('You are amazing'
    )}
};


//LESSON 6: 
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











