  //CLASS NOTES WK1
  
  const currentUser = 'Sherlyne'; 
  // the '' single quates as a string and everything in between is part of the string. to have variable we have to use the Interpolation ${} and (+) concanation 
 // const WelcomeMessage = 'Welcome to Flatbook, currentUser'; // currentUser is observed as a string which is wrong. 

  // We can use the  string (+) Concatenate and add or combine other strings to create a long string, with using the single or double quotes eg "Welcome to Flatbook" + currentUser; 
  //const WelcomeMessage = 'Welcome to Flatbook' + currentUser; 

  // We can also INTERPOLATE A VARIABLE : lets a variable in the middle of a string. The interpolation is done where the template literals which are string is wrapped in backsticks (''), The variable is then wrapped in curly braces {} and preceded by a dollar sign $; ${variable}, 
const WelcomeMessage =`Welcome to Flatbook, ${currentUser}!`; 

//To change characters or strings to Uppercase we use (.toUpperCase()), and to change the character to lower case we use (.toLowerCase()).
const welcomeMessage = `Welcome to Flatbook, ${currentUser.slice(0,4)}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase(); // This will change the characters to Upper case (WELCOME TO FLABOOK SHERLYNE)

//To create a SHORT VERSION : By truncating or shortens the words we use the String.charAt(). eg 'Edgar Dijkstra'.charAt(0); this will remove the E. , or we can use "cat"[0] which is the array-like object. 

const Fistinitial = 'Sherlyne';
// To return only S, we say return which is index 0.
console.log(`The character 0 is ${Fistinitial.charAt(0)}`); 
// To shorten characters to tow instead of one eg Sh, we can also use the string.slice() method. The method takes two arguments: the index at which the extraction should begin and the index before which it should end. When we talk about indexes of a string, we're talking about how to access specific characters at various points within the string.

console.log(currentUser); 
console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(welcomeMessage);

// Conitionals 
// IF else, else if 
function isRose(cat){
  if (cat==='rose'){
    return `Hi Rose you are cute!`
  }else if(typeof cat === `string`) {
    return `Hi ${cat}!`
  }else{
    return `Sorry, please pass in a cat name`
  }
}
// Example 2 : If else statement 
const sage = 30;

let isAdult;

if (age >= 18) {
    isAdult = true; // if the condition is true i
}else { // the else does not take a condition (isAdult=true)
  isAdult = false; 
}

// Ternary: Shortcut or simplifies the code for if else statement that turns the code to single lines
// Ternary is an expression; it returns a value
function isMary(cat){
  return cat===`Mary`? `Hi Mary you are cute`:`Hi ${cat}!`}

const ages = 26;
const isAdults = age >= 18 ? true : false;

isAdult;


//SWICH CODE 
function isTina(cat){
  switch(cat){
  case `Tina`: 
    return `Hi Tina`
  case `ted`: return `Hi ted nice to see you`
  default: 
   return `Hi ${cat}`
  }
  }

const age = 15;

let isTeenager;

switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19: // similar to else if 
        isTeenager = true;
        break; // is used to stop the switch statement from continuing. 
    default: // is similar to else
        isTeenager = false;
}

  /*CODE CHALLENGE GRADING 
grade=Input(number)
grade = 89;
 i = 1; i <=100; i ++;
let markGrade = 89; {
if (markgrade > 79){
return `You have an A`
}else if (markGrade>=60 && markGrade<=79){
  return `You have a B`
}else if (markGrade>=49 && markGrade<=59){
  return`You have a C`
}else if(markGrade>=40 && markGrade<=49){
  return`You have a D`
} else {return`You have an E`}} 
 */

/* Example 2 code grade 
function markGrade(grade=89) {
 if (markGrade > 79){
return `You have an A`
}else if (markGrade>=60 && markGrade<=79){
  return `You have a B`
}else if (markGrade>=49 && markGrade<=59){
  return`You have a C`
}else if(markGrade>=40 && markGrade<=49){
  return`You have a D`
} else {return`You have an E`}
}*/

/* EXAMPLE 3 code grade 
const TotalGrade = 89;
let isScore;
 if (TotalGrade > 79){
 return `You have an A`
}else if (TotalGrade>=60 && TotalGrade<=79){
  return `You have a B`
}else if (TotalGrade>=49 && TotalGrade<=59){
  return`You have a C`
}else if(TotalGrade>=40 && TotalGrade<=49){
  return`You have a D`
} else {return`You have an E`}
isScore;*/

/* Ternary : Can you have more than one value? 
const Grades = 89
const TotalGrades=Grades>70?`You have an A`: `You have a B`: `You have a C`: `You have a D`: `You have an E`; 
console.log(Grades)
*/

// /* Example 5: tyring to use the codegrade using the switch expression*/
const grade = 66;
let totalGrade;
switch (grade) {
    case grade >= 70:
        totalGrade = `You have an A`;
    case grade >= 60 && grade<=79:
       totalGrade = `You have an B`;
    case grade >= 49 && grade<=59:
        totalGrade = `You have an C`;
    case grade>=49 && grade<=59:
        totalGrade = `You have an D`;
    default : totalGrade = `You have an E`;
}

console.log(totalGrade)





