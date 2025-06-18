//Variables: container that holds, and gives and holds data.  

let variables1 =3;
console.log(variables1);

const word = "Amazing how you forgot shit";
console.log(word,variables1);
1
// resign a variable*
mine1 = 10;
mine1 = mine1 +1;
console.log(mine1)

// Start Quantity = 0 
let Quantity = 0; 

// add the value of Quantity to two and then reasign it to that quantity
Quantity = Quantity +2; 

Quantity = Quantity +3;  



// string interpolation the use of back ticks.
/*to make the quantity to be seen we have to do use a backticks for the work */
// string interpolation 
console.log(`Cart quantity:${Quantity}`)

// Variables
let cartQuantity=0;
const name = "sherlyne";
console.log(`my name is ${name}` ) ;
const coffee = 5 
const bagels = 2*3;
const soup = 9
const cost = coffee + bagels + soup;
const tax = cost * 0.1
console.log(cost);
console.log(tax); 
const totalCost = cost +tax;
console.log(` Total cost:$$ ${totalCost}`);



// Calculator  

function calculator(){
  let calculation = "";
  let calc;

 if (calculation === calculation){
  calc =  calculation += "1"
   calculation += "2"
 calculation += "3"
 calculation += "4";
 calculation += "5";
 calculation += "6";

 calculation += "+";
 calculation -= "-";
 }
}

console.log(calculator)

// if statement/boolean 

if (30>16){
  console.log("you can drive")

}else{
  console.log("You cannot drive")
}


// If statements 
let age = 2; // condition 
if (age>18){
  console.log("you can drive")
}else{
  console.log("You cannot drive")
}


function nameCat(cat){
  if(cat === "rose"){
    return "Hi Rose"
  }else if (typeof cat === "string"){
    return `Hi ${cat} your cat name is cute`
  }else {
    return "sorry pass in a cat name"
  }
 } 

console.log(nameCat("sherlyne"))

// switch 
function switchName(name){
  switch(name){
    case "sherlyne":
      return "Hi sherlyne"
    case "james":
      return "Hi james nice to meet you"
    default: 
    return `Hi ${name}`
  }
 }

// EXAMPLE OF SWITCH
 const order = 'cheeseburger';
 9/12
let ingredients;
 switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;//  stop the switch or running the loop. 
    default:
      //default is similar to else 
        console.log("Sorry, that's not on the menu right now.");
        break;
 }

 /*LOGICAL OPERATORS 
 NOT(!)
 AND(&&)
 OR(||)
 */

 // You can store a variable in 
 const cat = "Tiger" ? "Hi tiger":"What a cat"
 console.log(cat)
