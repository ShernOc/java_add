/*FOR LOOP : 
- Write a repeated action once: and perform the action on every items in the collection: */
 
/* FOR LOOP = syntax
for ([initialization]; [condition]; [iteration]) {
  [loop body]
}*/

const age = ()=>{
    for(let age = 0; /* initialization*/  age<=5; /*condition*/ age++ /*iteration */){
        console.log(`Good morning you are ${age} years old!`); /*Loop body*/
    }
    }

age(); // Good morning you are age years old till it stops at 55. 

const normalLoop = ()=>{
    for (let x =1; x <=10; x++){
    console.log(`${x}. Good afternoon`)
} }
console.log(normalLoop())// will say Good morning ten times. 

// Function has to show the reverse 10,9,8,7,6,5,4,3,2,1,0
const reverseLoop = ()=>{
    for (let x=10; x>=0;x--){
    console.log(x);
} }
reverseLoop(); 
/*
2. FOR LOOP WITH ARRAY: it iterates through each element in an array.  */ 
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);

/*3. WHILE LOOP: 
 Printing Numbers from 1 to 10 using While Loop in JavaScript */ 

function oneToTen(){
    let i=0;
    while(i<=10){
        console.log(i);i++ }
}

oneToTen();

//Summing the First N Natural Numbers with JavaScript While Loop

function sum(sumz){ 
    let x=0;
    while(x<=10){
        console.log(sumz+=x); x++
    }
}

console.log(sum(10)); //10,11,13,16,20,25,31,38,46,55,65






// Calculating Factorial Using While Loop in JavaScript
// Generating Fibonacci Sequence up to N Terms with While Loop

//Reversing a Number with JavaScript While Loop

//Checking Prime Numbers Using While Loop in JavaScript

// Summing the Digits of a Number with While Loop

// Finding the Largest Digit in a Number Using While Loop

// Computing the GCD of Two Numbers with JavaScript While Loop

// Printing Number Patterns Using While Loop in JavaScript


