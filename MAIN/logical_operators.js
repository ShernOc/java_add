

// Falsy Values: 0, NaN, undefined, "", false
// Truthy values: strings, objects, functions, numbers

/*

  AND - && Operator
  
expression1 && expression2 && expression3

- Returns true only when all expressions return true.
- If all values are truthy, it returns the last truthy value.
- If any value is falsy, it returns the first falsy value encountered.

*/

// * Boolean types: true, false
let example1 = true && true && true && true; // true
let example2 = true && true && true && false; // false

console.log(example1, example2);

// * Non-boolean types
let example3 = "Jeff" && 20 && "John" && 50 && "Joy" && 78 && "Name"; // "Name" (last truthy value)
let example4 = "Jeff" && "" && 34 && "Mary" && undefined; // "" (first falsy value)

console.log(example3);
console.log(example4);

// * Expressions with ranges
let example5 = 4 > 3 && 6 > 5 && 10 < 5; // false (because 10 < 5 is false)
let a = 16;

let attendance = 60;
let interaction_time = 60;

let checkIsValid = attendance > 50 && interaction_time > 40; // true

console.log(checkIsValid);

let example6 = a > 10 && a < 20;
console.log(example6);

// Program that checks if a number is between 100 and 200 and is even
let number = 150;
let isValid = number > 100 && number < 200 && number % 2 === 0;
console.log(isValid); // Output: true (because 150 is between 100 and 200 and is even)

/*
/ ! OR - || Operator

expression1 || expression2 || expression3 || expression4;

- Returns true if at least one expression evaluates to true.
- If none evaluate to true, it returns false.
- If all values are falsy, it returns the last falsy value encountered.
*/

// * Boolean types
let example7 = false || false || true || false; // true

// * Non-boolean types
let example8 = "Jeff" || 20 || "John" || 50 || "Joy" || 78 || "String"; // "Jeff" (first truthy value)

console.log(example7); // Output: true
console.log(example8); // Output: "Jeff"

// * Expressions: if a number is either less than 5 or more than 10
let x = 7;
let example9 = x < 5 || x > 10 || x > 5; // true (because x > 5 is true)

console.log(example9); // Output: true

// Providing default values/placeholders ( use cases )

let defaultAbout = "Hello, I am using WhatsApp";
let userAbout;

let displayedAbout = userAbout || defaultAbout; // "Hello, I am using WhatsApp"

console.log(displayedAbout); // Output: "Hello, I am using WhatsApp"

/*

// ! NOT - ! Operator

- Negates the boolean value.
- Converts a truthy value to false and a falsy value to true.
- Using double NOT (!!) converts a value to its boolean equivalent.

*/

// * negating ; Stops the action from happening

let example10 = 3 !== 3; // false (because 3 is equal to 3)

let string = 0;

// * convesion to boolean equivalent;

console.log(Boolean(string)); // Output: false (0 is falsy)

console.log(!!string); // Output: false (0 converted to boolean is false)
