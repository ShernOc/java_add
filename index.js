// Calculation in java script
// adding two numbers 
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 80))

//subtract two numbers
function minus(num1, num2) {
    return num1 - num2;
}

console.log(minus(60, 40))

// multiply two numbers 
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3.4))

// divide two numbers
function div(num1, num2) {
    return num1 / num2;
}
console.log(div(5.0, 2.5))

/*Math assignment

let number = 5;
number++; //=> 5... hmmmm
number; //=> 6 -- the number was incremented after it was evaluated
number--; //=> 6
number; //=> 5

Shorthand
let number = 5 
number += 3 // 8
number-=2 // 3
number *=10//50
number /=5 //1
++ is a plus 1 of a number  
*/
// let the number 10 

function ads(number) {
    return (number += 5);
}
console.log(ads(10));//15

// sub
function sub(number) {
    return (number -= 5);
}
console.log(sub(10));//5

// multi
function multi(number) {
    return (number *= 4);
}
console.log(multi(10));//40

// div
function div(number) {
    return (number /= 2);
}
console.log(div(10)); //5

// parseInt() = passes a string argument and returns an integer of the specified radix(base=10 ) it accepts to argument. 

function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt("0987"));

// parseFloat() = passes a decimal string and returns a decimal/float interger 
function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal("456.789"));

//ARRAYS 

const Cats = ["Milo", "Otis", "Garfield"];
console.log(Cats);

function append(cats) {
    return Cats.push(cats);

    ; // prepends/ adds at the end of the array (.push())
}
console.log(append("Ralph")); // returns the length of the array. 
console.log(Cats); // [ 'Milo', 'Otis', 'Garfield', 'Ralph' ]

// Prepend: add a new element at the beggining (.unshift)
function prepend(cats) {
    return Cats.unshift(cats);
}
console.log(prepend("mary"));// length of array 
console.log(Cats); //[ 'mary','Milo', 'Otis', 'Garfield', 'Ralph' ]

// remove the first cat: shift(), or splice 
function shift() {
    return Cats.shift(0) // remove mary 
}
console.log(shift()); // length of array: 
console.log(Cats);

// using splice to remove the first element 
function splice() {
    return Cats.splice(0, 1)
}
console.log(splice());
console.log(Cats);

// prepend another cat/element  leaving the cat unchanged
function prependspread() {
    array = ["Blaze", ...Cats,]; // will show up at the beginning
    return array;
}

console.log(prependspread());
console.log(Cats);

function appendspread() {
    array = [...Cats, "Jumbo"]; // will show up at the end of elements 
    return array;
}
console.log(appendspread());
console.log(Cats);

// remove last cat usin the slice()
function removeLastCat() {
    lastCat = Cats.slice(0, 2)
    return lastCat;
}

console.log(removeLastCat());
console.log(Cats);

function removeFistCat() {
    firstCat = Cats.splice(0, 1);
    return firstCat;
}

console.log(removeFistCat());// shows which elements have been removed [otis]
console.log(Cats); // [ garfield, ralph]

// while loop : Decreament loop 

function reverseNumber() {
    let int = 10;
    while (int >= 0) {
        console.log(int--);}
}
reverseNumber(); // 10,10 9 8 76 5 4 3 2 1 0

// while loop increament (normal)
function normalNumber(){
    let n = 1; // the starting point 
    while(n<=5){ // where the loop will stop
        console.log(`${n} .Wow you are now understanding the concept`); n++
    }
}
normalNumber(); // 1. Wow Wow you are now understanding the concept

// Math: 
const Arrays=["1","2","3","6","7","5"]

function max(target){
    const inter = target.map(Number);// converts each string in the array to number 
        return Math.max(...inter);// use the spread operator to pass the elements as arguments
}

console.log(max(Arrays));

// multiplication 
const num1=31;
const num2 = 2; 
const times = num1 * num2; 

console.log(times);

// remainder % 
const num3 =20;
const num4 = 8; 

const mod = function(){
   return num3 % num4 ; 
 
}

console.log(mod());


/*returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the first two drivers in the array:*/

const arr = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(names){
    return names.slice(0,2); }

console.log(returnFirstTwoDrivers(arr)); 

/*returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the last two drivers in the array:*/

const returnLastTwoDrivers = function(names){
    return names.slice(2);
}
console.log(returnLastTwoDrivers(arr));

/*selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).*/

const selectingDrivers = function (){
    returnFirstTwoDrivers();
    returnLastTwoDrivers(); 
}

/*createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.*/

const createFareMultiplier = function(integer){
    return function(fare){
        return fare **4; 
    };  
}

const numc = createFareMultiplier(4); 
console.log(numc);
 


/*fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.*/


/*fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.*/


/*selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.*/


