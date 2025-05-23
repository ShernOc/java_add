/*
 Functions - Reusable blocks of code that perform a specific task.
*/

let name = "Name";

// * Function declaration

function logName(name) {
  console.log(name);
}

// * Calling or invoking the function
logName();

/*
 Parameters and arguments
 Parameters are placeholders in the function definition.
 Arguments are the actual values passed to the function when it is called.
*/

function greet(firstName, secondName) {
  console.log(`Good morning, ${firstName} ${secondName}`);
}

// Example of calling the greet function with 2 arguments;

greet("John", "Doe");

// Create a function that takes in a name, an email address, and a phone number
// The function logs a string using the parameters above

function logEmail(name, email, phoneNumber) {
  console.log(`Name: ${name}, Email: ${email}, Phone Number: ${phoneNumber}`);
}

// Example of calling the logEmail function with arguments

logEmail("Jeff", "email@gmail.com", "0713545555");

// Function to calculate the sum of two numbers
function sumFunction(a, b) {
  return a + b;
}

// Example of calling the sumFunction and storing the result
let sum = sumFunction(3, 5); //  8

// Function to convert centimeters to meters
function cmToMeters(cm) {
  return cm / 100;
}

// Example of converting heights and widths from centimeters to meters
let height = cmToMeters(500);
let width = cmToMeters(1000);

// Calculate the total dimensions of a door
let doorDimensions = height + width;

console.log(doorDimensions); // Output will be 15 meters

// Function expressions;

const areaOfSquare = function (side) {
  return side * side;
};

// Example of calculating the area of squares with different side lengths
const square1Area = areaOfSquare(4); // 16
const square2Area = areaOfSquare(7); // 49

//  Arrow function;

// Arrow function for calculating the area of a rectangle
const areaOfRectangle = (length, width) => {
  return length * width;
};

// Example of calculating the area of a rectangle
const rectangleArea = areaOfRectangle(10, 12); // 120



// LOCATIONS EXERCISE 
// pickup location,=50  
// returns number of blocks from scuber hq  
const pickup = 50; 
const scubahq = 42; 

const distanceFromHqInBlocks = function(){
    return pickup-scubahq
}
console.log(distanceFromHqInBlocks()); // 8 


// returns blocks to feet 1 block = 264ft
const distanceFromHqInFeet = function (){ 
return (distanceFromHqInBlocks()* 264); // call the function 
}

console.log(distanceFromHqInFeet()); 

// calculate the distance in feet
const distanceTravelledInFeet = function(num5,num6){
    return (num6-num5)*264;

}
console.log(distanceTravelledInFeet(34,38));

// fare for the customer 
const calculatesFarePrice = function(){
    dist = distanceFromHqInFeet();
if (dist <= 400){
    return("free ride");
}else if (dist > 400 && dist<2000){
    return(dist *2);
}else if (dist>2000 && dist<2500){
    return("pay $25");
}else{
    return (`cannot travel that far`)
}
} 

console.log(calculatesFarePrice());

// 1. function declaration: 

function razz(){ // declared a function 
    console.log("You have been razzled");
}

razz(); // we are calling the function.  

// you can pass arguments.
// have a default argument activity = "roller-skater" passed as an paramenter and passed as an argument. 
function sarturdayFun(activity = "roller-skate"){
    console.log(`This Saturday, i want to ${activity}!`)
}
sarturdayFun();// will have a default value 
sarturdayFun("eat lots of food. ")

// HOISTING: The art of calling a function before they appear in the code: eg Hi() before function Hi(){} ; must be defined using the function declaration. 

// Anonymous Function: Function without a name or not declared: function(){}: it cannot be called, however they can be used as a callback function 

// A function as a function expression: Declaring a variable and assigning the function as a value. 
const func = function(m,n){
    return m+n;
}
console.log(func(3,4))

// Lab 
const mondayWork = function(activity = "Go to the office"){ // default argument if nothing is called 
    return(`This Monday, I will ${activity}`)
}

console.log(mondayWork("I will Study javascript"));
console.log(mondayWork());

// Another way to call an anonymous function is by creating (IIFE) :immediately-invoked function expression (IIFE): 

// Function-Level Scope
function outer(greeting, msg = "It's a fine day to learn") {
    // 2
    const innerFunction = function (name, lang = "Python") {
      // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    };
    return innerFunction("student", "JavaScript"); // 5
  }
  
  outer("Hello"); // 1
  //=> "Hello, student! It's a fine day to learn JavaScript"

  /*
  Let's break this down:

1. We call outer, passing "Hello" as an argument.
2. The argument ("Hello") is saved in outer's greeting parameter. The other parameter, msg, is set to a default value.
3. Here's our old friend the function expression. It expects two arguments, to be stored in the parameters name and lang, and lang is assigned the default value of "Python". The function expression itself is saved in the local variable innerFunction.
4. Inside innerFunction we make use of its parameters, name and lang, as well as the greeting and msg parameters defined in innerFunction's containing (parent) function, outer. innerFunction has access to those variables via the scope chain.
5. Finally, inside outer, we invoke innerFunction, passing arguments that get stored in innerFunction's name and lang parameters. */

// We can simplify by the scope by
function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }

outer("Hello")("student", "JavaScript");

/*We can tighten this code up a bit more: instead of assigning the function expression to innerFunction and returning that, let's just return the function expression.*/

function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"

const wrapAdjective = function(fn=`*`){
    return function(ad=" and special special"){
        return (`You are ${fn+ad}`)
    };
}

console.log(wrapAdjective("dedicated girl")())

// ARROW FUNCTION 
/*1.Not hoisted 
2. Not invoked before its called 
3. No need of parenthesis in parameters 
4. No implicit return/ or no need of return value 
5. You can remove curly braces in function body, and also replace the curly with the parenthesis  
6. The arrow function is on the right of the parameter not before 

Syntax.
const life = wow  => wow 
console.log(life("life is beautiful"))*/

// 
const life = wow  => wow ; // parenthesis is omitted, if there is only one single argument //wow 
console.log(life("life is beautiful")); 

// Sum of a+b
const sumz = (a,b)=>a+b; // we use parenthesis if there is more than one parameter 
console.log(sumz(7,8));

//.map() = The .map() method is called on an Array and takes a function as an argument.It iterates through the array, passing each element in turn to the function.

// calculate the array *2 
// const marays=["1","2","3","6","7","5"]
// const maxs = marays.map(marays=>marays *2)

// console.log(maxs());
// console.log(Arrays());

//CALLBACK FUNCTIONS: Functions passed as arguments into or to a function 
// function
// callback function
function callback(){
    console.log("am supposed to be a callback function");
}


function greet(name,callback) {
    console.log('Hi' + ' ' + name);
    return callback
}

function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

//An inline function/ anonymous function that will be called. it still a callback function.  instead of CallMe. 
greet((()=>console.log("am an inline function peter")));


// function main (cb) {
//     console.log(cb());
//   }
  
// main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
//   // LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!

/* SCOPE : 

1. Lexical
2.Global scope: cannot access the functonal scope 
3.Functional scope :can access the global scope 
Block scope : can access the function.  
*/

const createFareMultiplier = integer => {
    return fare => fare*integer; // arrow function 
    };  // Block scope 

const numc = (createFareMultiplier(4)); 
console.log(numc(10));

//Variables created without a const, let, or var keyword are always globally-scoped, regardless of where they sit in your code. If you create one inside of a block, it's still available globally:

firstName = "Ada"; // is globally available 
// 

const customerName = "bob"; 
console.log(customerName);// bob

function upperCaseCustomerName(){
    return customerName.toUpperCase(); 
}
console.log(upperCaseCustomerName()); //BOB

function setBestCustomer(bestBestCustomer){
    return bestBestCustomer = "not bob"; 
}

console.log(setBestCustomer());// not bob

function overwriteBestCustomer(){
    return bestBestCustomer = "maybe bob" ; 
}

console.log(overwriteBestCustomer(upperCaseCustomerName())) // maybob 


// Map(): The method creates a new array 
//Object)

// Array Objects with books 

//EVENT HANDLING 

// removing an element
// e.target.parentNode.remove(); // grab the parentNode, meaning it will delete anything in the parent element. 




