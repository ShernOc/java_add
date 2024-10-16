// declared and assigned a variable of x, y. 
let x = 10;
x = 20;
let y = 10;
typeof x;
y;
console.log(x + y);

const sherlyne = 36;

console.log(typeof sherlyne)

// String interpolation 
age = 24;
const howOld = `sherlyne is ${age} years old`;
const old = 'sherlyne is + ${} years old '
console.log(howOld);

// Backlash / 
const littleWomanEsque = '"Wait," said Jo, "Don\'t go without me!"';
console.log(littleWomanEsque);

// String + : used to join two string 

const firstName = "sherlyne";
const lastName = "Peter "
let fullName = firstName + " " + lastName
fullName = `${firstName} ${lastName}`
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

// default sequence: javascript runs the code from top to botton and from left-right;  

// Selection:  uses the (if) default flow: top to bottom and 
let favoriteNumber = 32;
if (favoriteNumber >= 90) { // evaluating favoriteNumber >= 10 returns true/ if 
    favoriteNumber = favoriteNumber + 10
} // will excute {} if its true and favorite = 32 only if it's false. 
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

const lightOf = Lelectricity === "of" ? "you cannot code" : "Get back to sleep";

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
while (w < 10) {
    console.log("you are beautiful")
    w = w + 1;
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

function greetings(name) {
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
function add(x, y) {
    return x + y;
}
console.log(add(2, 4));

// second function 
function adds(num1, num2) {
    return (num1 + num2)
}
console.log(add(2, 8))



// or we can encapsulate the code into its own function and call them 

// const sums = add(num7,num8)
// function adds(){
//   return num7+num8;
// }
// const msg = `the sum of number is: ${sums}`; 
// console.log(msg(200,90))

const addition = (num4, num5) => {
    return num4 + num5;
};
const sum = addition(30, 45);
const mesage = `the sum of your number is ${sum}`
console.log(mesage);


// toUpperCase() method= return string to all caps or uppercase 
function shout(string) {
    return string.toUpperCase();
}

console.log(shout("mombasa"))

// to lower case = toLowerCase(); 
function whisper(string) {
    return string.toLowerCase();

}
console.log(whisper("MALUKI"));
// want the book to be in capital letter 
function book(bk) {
    return (`i like your ${bk} book`);
}

console.log(book("JAVASCRIPT".toLowerCase()));

function sayHiToHeadphonedRoommate(string) {

    if (string == string.toUpperCase()) {
        return ("YES INDEED!")
    } else if (string == string.toLowerCase()) {
        return "I can't hear you!"
    } else {
        return ("i would love to")
    }
}

console.log(sayHiToHeadphonedRoommate("Lets have dinner together!"));
console.log(sayHiToHeadphonedRoommate("LETS HAVE DINNER TOGETHER "));
console.log(sayHiToHeadphonedRoommate("lets have dinner together "));

/*Next : Javascript function parameter lab
parameter withing the parathesis after a function has been declared */
// has one parameter (name)
function introduction(name) {
    console.log(`Hi, my name is ${name}`);
}

// the function has two parameter separated by a comma (name,language)
function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name}and I am learning to program in ${language}`)
}

/*default/optional parameter (language is javascript)
if the function is called with an argument, the argument's value will supersede the default value. If it's called without an argument, the function will use the default value, logging "Hello, User!"
*/
function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name}and I am learning to program in ${language}`)
}


//ARRAY= A collection of that hold multiple pieces of data under a single name eg: Groceries =["bread", "milk","eggs"] , always wrapped in []
// An array is used to store a collection of data 

groceries = ["bread", "eggs", "milk", "banana"] // this is an array list of groceries. 

//Objects are like tables that have a name that is a piece of data, typically a Symbol or a String. This identifier is called a key.
// key: value objects 
const englishBandsByCity = {
    liverpool: "The Beatles",
    manchester: "The Smiths",
    coventry: "Delia Derbyshire and the BBC Radiophonic Band",
    london: "Ziggy Stardust and the Spiders from Mars",
};

// Nesting: collection of data within a collection. array of objects or objects of array; 
const englishMusicByCity = { // an object 
    manchester: [ // key
        { // value 
            bandName: "The Smiths",
            memberNames: ["Morrissey", "Johnny", "Andy", "Mike"], // An array 
        },
        {
            bandName: "Joy Division",
            memberNames: ["Peter", "Stephen", "Bernard", "Ian"], // array
        },
    ],
};

// ARRAY: 
//1. Array literals. 

const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
    console.log("Winning numbers:", numbers);
}
logWinningNumbers(winningNumbers);
// or you can do this too: 

const groc = ["This", "isanarray", "thathas", 5, "elements"];
function li(element) {
    return (element);
}
console.log(li(groc));

/* every element = a unique index value 
eg: const winningNumbers = [32, 9, 14, 33, 48, 5];
32 index = 0, 9 = 1, 14 =2, 33 =3 .. 
To access the element or the data eg 14 we use the bracket notation. */

console.log(winningNumbers[2]); // 14

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

console.log(alphabet)// execute all the alphabets. 
console.log(alphabet.length);// find the lenght of array //26 
console.log(alphabet[9]);//j
console.log(alphabet.length - 2); // looks at the element we want to access  = y 
console.log(alphabet[alphabet.length -2]);//y therefore to show the [alphabe.length -2] it will display y 

// UPDATING THE VALUE OF AN ELEMENT
alphabet[0] = "sherlyne" // this will update/ we are reasign the element [0] to sherlyne 
console.log(alphabet)
//The .shift() method removes the first element in an Array:
alphabet.shift();// removes sherlyne 
console.log(alphabet) // will start with "b"
//The .unshift() method adds the first element in an Array:
alphabet.unshift("a")
console.log(alphabet); // " a" is added 

// Spread Operator: 
const Newal =[...alphabet]; // want to add integers (1,2,)
console.log(Newal); // copy of the alphabet 
// Spread operator can be used to add element at the end beginning or middle
const mainArray = ["one", "two","three","four", "five"] // 
const newArray=["1","2","3",...mainArray, "4","5"] ; //"1","2","3","one", "two","three","four" "4","5"

console.log(newArray); 

//Splice; used to remove,replace and add 
const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs", // will be removed due to [2]
    "Nine of Diamonds",
    "Three of Hearts",
  ];
  
  // "Nine of Clubs", will be removed due to [2], and only one element will be removed. 
  cards.splice(2, 1, "Ace of Clubs");
  // => ["Nine of Clubs"]
  
  console.log(cards);
  // => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]