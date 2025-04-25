    //VARIABLES AND VALUES 

    DATATYPES = VALUES 
    PRIMITIVE DATATYPES
    -Numbers = 1, 
    -typeof returns the datatype of a value 

    -string = anything between single or double quotes = "sherlyne ", "1" , 

    -Boolean - either one of two values true or false
    - undefined = is a empty values 
    -BigInt
    -Symbol

    STRUCTURED DATATYPES 
    - Objective 
    - Functions 
    STRUCTURED ROOT PRIMITIVE 
    -Null = is the absent of a value 

    2 . VARIABLES(Identifiers) : this that contain the values 

    -let : can allows the reassigment of values 
    eg: 
    
   let cat = "rose" // this is a statement 
   cat = "ted"

    1. expression : anything that returns a value
    2. Statement : a set of instructions does not return a value 
    -var 
    -const : protects the variables 

    /* Variable is a container that stores values. ;

    We use const, let, var to declare a variable. 
    -const: because it cannot be redeclared. or reassigned 
    -let only when changing the variable later
    -var : not used in javascript

    -variable are written in camelCase;

typeof something shows the type of value in 
*/

const myName = "Sherlyne" ; 
console.log(typeof myName)

// you have to initialize and then assign a variable. 
let names= "Sherlyne"; 
console.log(names) // Sherlyne 

// Interpolation &{}

//  concatenation + using a plus sign 

const myString = 'template literal';
const myNumber = 10;
const myBoolean = false;

console.log(`This is a string interpolation ${myString}`) // this is a template literal having a value inside a string.

// JAVASCRIPT KEYWORDS 
// var- Declares a variable
// let-Declares a block variable
// const- Declares a block constant
// if	Marks a block of statements to be executed on a condition
// switch	Marks a block of statements to be executed in different cases
// for	Marks a block of statements to be executed in a loop
// function	Declares a function
// return	Exits a function
// try	Implements error handling to a block of statements


// STRINGS 
// length = str.length
// console.log(str.length)
// console.log([...str].length);
// const iterate = (str[Symbol.iterator]());console.log(iterate.value);

const strings = " The Universe is greate ";

function string(str){
    //  let m = str.charAt(3);
    //  return(m); // Sherlyne // r 
     let y = str.slice()
     return (y) 
}
//charAt() : specific character
console.log(string("Sherlyne")) // 

console.log(string("TheUniverseisgreat")) // split the character
console.log(string("MYNAME").toLowerCase())

// convert string to a number 
const num = "43";
const num2 = parseInt(num,10);
console.log(num2); 










