// (BubbleSort)
// 1. Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.
// Research Areas: 
// 1. Loops 
// 2. Array Methods

const numArray = [5,6,1,3,4,2]
const newArray = numArray.sort()
console.log(newArray)// Expected output = [1,2,3,4,5,6]

 
// (Loops)
// 2. Staircase problem 
// Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

const stairs = (int) =>{
for(let i in range(0,int)){
    if (i==int){
        console.log("#" * (int++))
    }
}
}
console.log(stairs(7))

// const stair = (integer)=>{
//     for(let i = 1; i<=integer; i++){
//         console.log ("#" * (i)); 
//     }
// }


// e.g steps(2)  #
//               ##

//     steps(3)  #
//               ##
//               ###

// Research Areas 
// 1. Array methods 
// 2. Nested Loops
// 3. Conditional statements


// (Objects)
// 3. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

// Research Areas 
// 1. Objects. 
// 2. Object constructor.
// 3. constructor templates.

//MAP
const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];


  //We want all the titles to be "title case", in other words, the first letter of each word should be capitalized. We want all the titles to be "title case", in other words, the first letter of each word should be capitalized. Create a new array containing the names of the tutorials with proper title case formatting. For example, 'what does the this keyword mean?' should become 'What Does The This Keyword Mean?'.

  //Your job is to write the following function:

//titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.

// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?