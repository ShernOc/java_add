
// String Interpolation - Inject dynamic values into strings

let name = "Mary";
let email = "j@gmail.com";
let occupation = "Engineer";

// Traditional string concatenation
let introduction = "Hello, my name is John Doe. I am a technical mentor";

// String interpolation using template literals
let intIntroduction = `Hello, my name is ${name}. I am a ${occupation}. You can reach me through ${email}. I am ${
  20 + 20
} years old.`;

console.log(intIntroduction);

// ! Boolean Expressions - Evaluates to either true or false

// Truthy and falsy values
// Falsy values in JavaScript: false, 0, '', null, undefined, NaN

// Example of a falsy value
let divide = 5 / "string"; // NaN is a falsy value

let array = ["Frontend", "Backend"]; // Non-empty array is truthy

console.log(typeof array); // Output: object
console.log(Boolean(array)); // Output: true

let i = 0;
let condition = i < 10;

console.log(condition);

// ! Operators - Symbols used to perform operations on values

// * Arithmetic Operators

// Operand - The values on which operators operate

// Addition
let sum = 2 + 2;

// Subtraction
let minus = 8 - 4;

// Division
let division = 5 / 2;

// Multiplication
let multiplication = 20 * 4;

// Exponential
let exponential = 4 ** 2;

// Modulus - Remainder
let modulus = 5 % 2;

// ! Assignment Operators

let a = 5;

a += 6; // a is now 11
a -= 3; // a is now 8
a *= 2; // a is now 16
a /= 2; // a is now 8
a **= 10; // a is now 1073741824
a %= 7; // a is now 2

// ! Comparison Operators - Compare two operands

// * Equality Operators

// Loose equality operator - Does not consider datatype; compares value only
let isEqual = 4 == "5"; // false

// Strict equality operator - Considers datatype; compares value and datatype
let isSEqual = 4 === 4; // true

// Loose inequality operator - Does not consider datatype
let isNotEqual = 4 != "4"; // false

// Strict inequality operator - Considers datatype
let isSNotEqual = 4 !== "4"; // true


// * Relational Operators

// Greater than
let greaterThan = 1 > 4; // false

// Less than
let lessThan = 1 < 4; // true

// Less than or equal to
let lessThanOrEqualTo = 1 <= 1; // true

// Greater than or equal to
let greaterThanOrEqualTo = 10 >= 10; // true


// * Logical Operators



