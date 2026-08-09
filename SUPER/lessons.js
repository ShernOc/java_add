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
// alert(`Total Cost: $${totalCost} \n Thank you, come again!`);


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
    // alert(`You picked ${userMove},\n Computer picked ${computerMove},\n ${results}`);
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

// JSON BUILT IN OBJECT: 
// JSON.stringify(Object) //convert to JSON BUILT IN OBJECT 
// JSON.parse(JSON.stringify(Object)) // back to JS Object 

const json = JSON.stringify(product1)// 
console.log(json); 

const parse = JSON.parse(json)
console.log(parse);

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
    document.querySelector('.js-moves').innerHTML=`You:${userMove}\n Computer:${compMove}`

    //alert 
    //  alert(`You picked:${userMove}.\n Computer picked: ${compMove}. \n Final Results: ${results} \n Wins:${score.win}, \n Ties: ${score.tie}, \n Losses : ${score.losses}`) ; 

}
// run playMove function 
// console.log(playerMove('rocks'));

function updateScore(){
    // Display the work at the website
    const displayDom = document.querySelector('.js-result').innerText =`Wins:${score.win} \n Ties: ${score.tie} \n Losses : ${score.losses}`; 

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

// DOM LESSON 
 
//9a
document.querySelector('.js-button-a').innerText = 'Button A'; 

//9b
document.querySelector('.js-button-b').innerText = '9b'; 

// 9d
function headsTails(click){
    if(click === 'Heads'){
        document.querySelector('.js-choice').innerHTML = 'You choose Heads';
    }else if (click === 'Tails'){
         document.querySelector('.js-choice').innerHTML = 'You choose Tails';
    }

}

//9d
// HandleEvent 
function handleNameKeyDown(event){
    if(event.key ==='Enter'){
        displayName();
    }
}

function displayName(){
   const name =  document.querySelector('.js-input-button');

  let inputValue = name.value;

  document.querySelector('.js-display-name').innerHTML = `Your name is: ${inputValue.toUpperCase()}`; 

}

// How do update the work every time i work on the job? 

function handleKeyup(event){
    if(event.key === 'up'){
        inputUp();}
}

function inputUp(){
    const up = document.querySelector('.js-pup')
    up.value;
}

// LESSON 11: ARRAY AND LOOPS 
// 11a. 
const arrayNumbers= [10,20,30]; 
console.log(arrayNumbers.reverse())

arrayNumbers[2]= 99; 
console.log(arrayNumbers); // [10, 20, 99]

//11b.  get an array return the last value
// const array = []; 
function getLastValue(array){
   const lastArray = array.splice(-1); // or 
   // const lastArray = array.splice(4,1)
   return lastArray;
}
console.log(getLastValue(['hi', 'hello', 'good']))

//11c. array and returns an array switched position
function arraySwap(array){
    const swap = array.reverse();
    return swap; 
}
console.log(arraySwap(['hi', 'hello', 'good'])) // ['good', 'hello', 'hi']
console.log(arraySwap([1,20,22,24,5])) // [5, 24, 22, 20, 1]

//11d. Create a for loop that counts up from 0 to 10 but counts up by 2. (0,2,4....,8,10)

for(let i=2; i<10; i+=2){
    console.log(i)
}

//11e. Create a for loop that counts down from 5 to 0. 
for(let i=5; i>=0; i-=1){
    console.log(i)
}

// 11f. Do exercise 11d and 11e but using while loops. 
let i = 2
while(i<=10){
    console.log(i)
    i+=2;
}

// let y = 10; 
// while(y>=0){
//     y+=2;
//     console.log(y);
// }

let u = 5
while(u>=0){
    console.log(i)
    u-=1;
}

for(let z=5; z>=0; z-=1){
  console.log(z)
}

// 11h. Add one to the array. addOne([1,2,3])=>[2,3,4], addOne([-2,-1,0,99])=>[-1,0,1,100]
function addOne(array){
    let store = []; // store the new array 
    // created the empty array to store the number 
    for(let i = 0; i <array.length; i++) {
        const values = array[i] +1;
        // take the empty array and store/add values
        store.push(values)}; 
        return store; 
};
    console.log(addOne([1,2,3])); //[2,3,4] 
    console.log(addOne([-2,-1,0,99])); //[-1,0,1,100] 

// 11i. Add a number to the array. 
function addNum(array, num){
    const addNumber = [];
    for(let i = 0; i<array.length; i++) {
        const values = array[i]+num;
        addNumber.push(values);
    }
    return addNumber;
};

console.log(addNum([1,2,3], 2)) // [3,4,5] 
console.log(addNum([1,2,3], 3)) // [4,5,6]
console.log(addNum([-2,-1,0,99],2)) // [0,1,2,101]

// 11j. take two arrays and add each number together/ sum them 

function addArray(array1, array2){
    const addA =[]; // store the array
    for(let i=0; i<= array1.length; i++){
        const life =(array1[i] + array2[i]); 
        addA.push(life);
    } 
    return addA; 
}

console.log(addArray([1, 1, 2], [1, 1, 3])); //[2,2,5] 
console.log(addArray( [1, 2, 3], [1, 2, 3]))// [2,4,6]
console.log(addArray([1, 2, 3], [4, 5, 6])); //[5,7,9] 

// Another Formula two: 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let sumArray = arr1.map((value, index) => value + arr2[index]);
console.log(sumArray);

// 11k.return how many numbers are greater than 0; 
function countPositive(array){
    let count = 0; // stores the numbers.
    for(let i=0; i<array.length; i++){ // loops through each values
        if(array[i]>0){ // if each value is greater than 0, 
            count++; 
        }
    }
    return count;
    };

console.log(countPositive([5, -1, 6]));// 2
console.log(countPositive([1, -3, 5])) // 2
console.log(countPositive([-2, 3,-5,7,10])) // 3

// Challenging 
  // 11l: 
function minMax(num){
    let min = num[0];
    let max = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
    if (num[i] < min) {
      min = num[i];
    }
  }
    return { min: min, max: max };
}
console.log(minMax([1,-3,5]))


// SECOND EXERCISE 
// // exercise
// // 11a. 
// const nums = [10,20,30]
// nums[2]=99
// console.log(nums) // [10,20,99]

// //11b. 
// function getLastValue(array){
//   const lastValue = array.splice(-1)
//   return lastValue;
// }
// console.log(getLastValue([34,56,45])) // [45]

// //11c
// function arraySwap(array){
//   const reverseArray= array.reverse();
//   return reverseArray;
// }
// console.log(arraySwap([34,56,45])); //[45, 56, 34]

// //11d. 

// for(let i=0; i<=10; i+=2){
//   console.log(i)
// }

// // 11e. countdown from 5 to 0
// for(let i=5; i>=0; i-=1){
//   console.log(i)
// }

// // llfd while loop
// let t=0;
// while(t<=10){
//   console.log(t)
//   t+=2;
// }

// //11fe
// let r=5;
// while(r>=0){
//   console.log(r);
//   i-=1
// }

// 11g  increase an array by one 
function increaseOne(array){
  let value = []; 
  for(let i=0; i< array.length; i++){
    const oneray = array[i]+1;
    value.push(oneray);
  }
  return value;
}
 console.log(increaseOne([20,56,34])); //[21,57,35] 


// 11i
function addOneNum(array,num){
    let store = []; // store the new array 
    // created the empty array to store the number 
    for(let i = 0; i <array.length; i++) {
        const values = array[i] + num;
        // take the empty array and store/add values
        store.push(values)}; 
        return store; 
};
    console.log(addOneNum([45,67,34],4)); //[49, 71, 38]

// 11j
function addArrays(array1,array2,){
    let numA = []; // store the new array 
    // created the empty array to store the number 
    for(let i = 0; i <array1.length; i++) {
        const values = array1[i] + array2[i];
        // take the empty array and store/add values
        numA.push(values)}; 
        return numA; 
};
    console.log(addArrays([45,67,34],[20,56,34])); //[49, 71, 38]

// 11k returns how many are greater than one
  function countPositive(nums){
    let count = 0; 
    for(let i=0; i<nums.length; i++){
      if(nums[i]>0){
        count ++;
      }
    }
    return count;
  }
  console.log(countPositive([45,-9,2]))// 2
  console.log(countPositive([-2,3,-5,7,10]))// 3

  // Challenging 
  // 11l:  Find the min and max of an array
function minMax(nu){
    let min = [0]; 
    let max = [0]; // initialize by the first index number
    for(let i=1; i<nu.length; i++){
      if(nu[i]> max){
        max= nu[i];
    }
    if(nu[i]< min){
        min = nu[i]
      }
      
    }
    return `min:${nu}, max:${nu}`; 
}
  console.log(minMax([67,9,0]))
//   console.log(minMax([-2,3,7,10]))

// update exercise 11l to handle this cases:
// minMax([])=>{min:null, max:null}
//minMax([3)=>{min:3 max:3
function minMax(nu){
    let min = [0]; 
    let max = [0]; // initialize by the first index number
    for(let i=1; i<nu.length; i++){
      if(nu[i]> max){
        max= nu[i];
    }else if(nu[i]!=max){
       max=0; 
    }
    
    if(nu[i]< min){
        min = nu[i]
    } else if(nu[i]!=min){
        min=0;
    }
      
    }
    return `min:${nu}, max:${nu}`; 
}
  console.log(minMax([3]))
console.log(minMax([]))
//   console.log(minMax([-2,3,7,10]))

// 11n. create a function countWords (words)that takes any array of string and returns an object with how many times each strands appeared. countWords(['apple','grape', 'apple', 'apple'])=>{apple:3,grape:1} (Hint: you can access property using variable: object[variable];This uses the value inside the variable as a the property name). 

function countWords(words){
    let variable = '';
    for(let i = 0; i<words.length; i++){
        const eachWord= words[].length;
        return eachWord;
    }
}

console.log(countWords(['apple']))


