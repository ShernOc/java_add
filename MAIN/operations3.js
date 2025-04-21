
// MATH WORK: 
// declared and assigned a variable of x, y. 
let x = 10;
x = 20; // redeclare a variable 
let y = 10;
typeof x; // integer  shows the datatype
y;
console.log(x + y);//

const sherlyne = 36;

console.log(typeof sherlyne)

// String interpolation 
const age = 24;
const howOld = `sherlyne is ${age} years old`;
const old = 'sherlyne is + ${} years old '
console.log(howOld);

// Backlash / 
const littleWomanEsque = '"Wait," said Jo, "Don\'t go without me!"';
console.log(littleWomanEsque);

// concatinating + : used to join two string 

const firstName = "sherlyne";
const lastName = "Peter "
let fullName = firstName + " " + lastName 
fullName = `${firstName} ${lastName}` // string literals 
console.log(fullName); // sherlynePeter 
console.log(fullName);

// use the string.toString() method to convert an object to a string. 
const fact = "Spinach is "; // fact is of type `String`
const tail = " years old"; // tail is of type `String`
const mage = 5; // age is of type `Number`
let life = fact + mage.toString() + tail; // using the toString() method 
console.log(life)

// Boolean; used in conditional expression if the condition is true/false (false, null, undefined, NaN, 0 are all false 
Boolean("Hello world ");
console.log(Boolean)

/* Comparison operators 
strict equality ===
*/

// Ternary expression or the express conditional logic
/*booleanExpression ? "thingToReturnIfTrue" : "thingToReturnIfFalse"; 
Explanation: 
If the expression in the first position evaluates to a truthy value, then the return value of the ternary expression is whatever is in the second position; here, "thingToReturnIfTrue". If the expression in the first position is falsey, however, whatever is in the last position is returned; here, "thingToReturnIfFalse".
*/

const z = 45;
const xy = z !== 45 ? "good girl" : "try again "; // 45 !== 45 
console.log(xy); // return try again 

/* if 45!==45 = false: therefore the expression above will return (try again)
if 45 ===45 = true the expression will return( good girl) 
*/

const e = 45;
const f = e === 45 ? "good girl" : "try again "; // 45 === 45 
console.log(f); // return good girl 


// if the expression is true ? the the return value (good girl) is returned. : if the the expression (z !==45 is false), the expression in the last position is returned(try again)


const names = "Spinach the Shiba";
const probabilityOfRain = 0.2;
const temperatureInC = 26;

const likelyToRain = probabilityOfRain > 0.3;
const sunIsDangerous = temperatureInC >= 26;
const rainPercentage = probabilityOfRain * 100;

// ternary expression can also be written im multiple lines and the value it return can also be assigned to the variable. 

const rainAdvice = likelyToRain ? "take an umbrella" : "enjoy this rain-free day";
const SunAdvice = sunIsDangerous
    ? " and watch out for heatstroke!"
    : " and bask in this fine weather.";

const message = `Hello, ${names}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ` + rainAdvice + SunAdvice;


console.log(message);
const first = 2;
const second = 1;
const problem = 99;
const luckyNumber = first < second ? (problem - 1) / 2 : problem / 3;
console.log(luckyNumber); //=> ??? (Test it out yourself!)

// default sequence: javascript runs the code from top to bottom and from left-right;  

// Selection:  uses the (if) default flow: top to bottom and 
let favoriteNumber = 32;

if (favoriteNumber >= 90) { // evaluating favoriteNumber >= 10 returns true/ if 
    favoriteNumber = favoriteNumber + 10;
} 
else {
  return favoriteNumber;
}// will excute {} if its true and favorite = 32 only if it's false. 

console.log(favoriteNumber);

// AGE ; 
const jage = 40;

if (jage >= 50) {
    console.log("you can code")
} else {
    console.log("You are old")
}
// this is a comment marker (//)#

//conditional If statement ; 
/* if (condition to be checked ){
     do this (block of code)
 } else {
    do this (block of code)
 }
    */
const electricity = "on";
let lightOn;

if (electricity === "on") {
    lightOn = "you can code";
} else {
    lightOn = "Get back to sleep";
}

console.log(lightOn);

// make an interany expression; 
const Lelectricity = "on";

const lightOf = Lelectricity === "of"? "you cannot code":"Get back to sleep"; 

console.log(lightOf);

// Switch Statement; alternative way of expressing conditional code that is less repetetive. 
const namez = "Alice";
let greeting;

if (namez === "Alice") {
  greeting = "Hello, Alice!";
} else if (namez === "The White Rabbit") {
  greeting = "Don't be late, White Rabbit";
} else if (namez === "The Mad Hatter") {
  greeting = "Welcome to the tea party, Mad Hatter";
} else if (namez === "The Queen of Hearts") {
  greeting = "Please don't chop off my head!";
} else {
  greeting = "Whoooo are you?";
}

console.log(greeting);

// with the switch we avoid the need to repeat the if (name === _____)

switch (namez) { 
    case "Alice":
    greeting = "Hello, Alice!";
    break; // break is used to stop the switch
    case "The White Rabbit": 
    greeting = "Don't be late, White Rabbit";
    case "The Mad Hatter":
    greeting = "Welcome to the tea party, Mad Hatter"
    case "The Queen of Hearts":
    greeting = "Please don't chop off my head!";
    default: // is the same as else 
    greeting = "Whoooo are you?";
  }
  
  console.log(greeting);

  // WHILE LOOP 
  // the code will run infinitely 
  // while(true){
  //   console.log("say this forever..")
  // } 
  

  // // the code will not run 
  // while (null){
  //   consol.log("i will not run")
  // }

let w = 0; 
while(w<10){
  console.log("you are beautiful")
  w=w+1;
}

/*  Javascript functions
1. You have to declare the function 
2. you have you call it */

function mary()  /* declared function */ { 
  console.log("i love you");
}

mary(); // called the function in order to be declared 

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}

// to call the function sayHellosamip 
sayHelloToSamip(); 

// have a parameter (name)

function greetings(name){
  console.log(`Good morning, ${name}!`);
}

greetings("sherlyne") // inside the parenthesis is the argument : where the  "sherlyne" is stored in the name. 

function say(greeting, firstName) {
  return (` Good morning ${greeting}, How was your day ${firstName}!`);
}
console.log(say("Julio", "hello"));
/*JavaScript assigns values to parameters based solely on the order of the arguments that are passed.
output: 
fistname: hello
greeting: Julio
Julio, hello!
*/

// Making the code do something for us: make a function that adds two numbers 
function add (x,y){
  return x+y; 
}
console.log(add(2,4));

// second function 
function adds (num1, num2){
   return (num1+num2) 
}
console.log(add(2,8))



// or we can encapsulate the code into its own function and call them 

// const sums = add(num7,num8)
// function adds(){
//   return num7+num8;
// }
// const msg = `the sum of number is: ${sums}`; 
// console.log(msg(200,90))

const addition = (num4, num5)=>{
  return num4+num5;
};
const sum =addition(30,45);
const messagee = `the sum of your number is ${sum}`
console.log(messagee); 


// toUpperCase() method= return string to all caps or uppercase 
function shout(string) {
  return string.toUpperCase();
}

console.log(shout("mombasa"))

// to lower case = toLowerCase(); 
function whisper(string){
  return string.toLowerCase();

}
console.log(whisper("MALUKI"));
// want the book to be in capital letter 
function book(bk){
return (`i like your ${bk} book`);
}

console.log(book("JAVASCRIPT".toLowerCase()));

function sayHiToHeadphonedRoommate(string){


  if (string == string.toUpperCase()){
    return ("YES INDEED!")
  }else if (string == string.toLowerCase()) {
    return "I can't hear you!"
  }else {
    return ("i would love to")
  }
}

console.log(sayHiToHeadphonedRoommate("Lets have dinner together!")); 
console.log(sayHiToHeadphonedRoommate("LETS HAVE DINNER TOGETHER "));
console.log(sayHiToHeadphonedRoommate("lets have dinner together ")); 

 /*Next : Javascript function parameter lab
 parameter withing the parathesis after a function has been declared */
 // has one parameter (name)
 function introduction(name){
  console.log (`Hi, my name is ${name}`);
}

// the function has two parameter separated by a comma (name,language)
function introductionWithLanguage(name,language){
  console.log(`Hi, my name is ${name}and I am learning to program in ${language}`)
}

/*default/optional parameter (language is javascript)
if the function is called with an argument, the argument's value will supersede the default value. If it's called without an argument, the function will use the default value, logging "Hello, User!"
*/
function introductionWithLanguageOptional(name,language="JavaScript"){
  console.log(`Hi, my name is ${name}and I am learning to program in ${language}`)
}