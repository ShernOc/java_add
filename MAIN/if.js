/*
// ! If Statements

 - Used to perform different actions based on different conditions.
*/

let age = 19;
let isBanned = true;
let name = "Jeff";

// Check if the name is not "Jeff" and the age is greater than 18
if (name != "Jeff" && age > 18) {
  console.log(`Good morning, ${name}`);
} else {
  console.log(`Good Friday, ${name}`);
}

// Check if the age is greater than or equal to 18

if (age >= 18) {
  console.log("Welcome");
} else if (isBanned) {
  console.log("Banned");
}

/*

// ! Ternary Operator

 - A shorthand for if-else statements
 
 */

// * Syntax: condition ? valueIfTrue : valueIfFalse;

let attendance = 60;
let interaction_time = 60;

// Use a ternary operator to decide if the student should proceed to the next phase
let example11 =
  attendance > 50 && interaction_time > 40
    ? "Proceed to the next phase"
    : "Drop them";

// Check the temperature to see if someone should carry a jacket

let temperature = 20;

let checkTemperature =
  temperature < 25 ? "Carry a jacket" : "Leave the jacket behind";

console.log(checkTemperature); // Output: Carry a jacket
console.log(example11); // Output: Proceed to the next phase
