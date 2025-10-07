//Variables: is a container that holds data or values; 

let variables1 =3; 
console.log(variables1);// 3

const Day = "Tuesday";
console.log(word,variables1);// 

// resign a variable*
let calculation = 2+2;
console.log(calculation *6);
let results = calculation + 5
console.log(results)

let mine1 = 10;
mine1 = mine1 +1;
console.log(mine1)

mine1= 56 // re-assigning a value. 



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
const names = "sherlyne";
console.log(`my name is ${names}` ) ;
const coffee = 5 
const bagels = 2*3;
const soup = 9
const cost = coffee + bagels + soup;
const tax = cost * 0.1
console.log(cost);
console.log(tax); 
const totalCost = cost +tax;
console.log(` Total cost:$$ ${totalCost}`);


//IF ELSE STATEMENT 
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
const ages = 15; 
if (age >=16){
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

  // this are shortcuts for it statements 
    const message = false && `hello`;
    const result = 0? `truthy`:`falsy`;

    console.log(message)
    console.log(result)
    
    function ages(age){
    if (age>18){
      return ("You are allowed to drive")
    }else{
      return("You cannot drive")
    }
    }

    const catAge = 18? 

    function isRose(cat){
      if(cat === "rose"){
        return "Hi Rose"
      }else if (typeof cat === "string"){
        return `Hi ${cat} your cat name is cute`
      }else {
        return "sorry pass in a cat name"
      }
    } 

    function isCat(cat){
     return cat === "tiger"?"Hi tiger you are cute": `Hi ${cat}`; 
     };

     // switch 
    function switchName(name){
      switch(name){
        case "sherlyne":
          return "Hi sherlyne"
        case "james":
          return "Hi james nice to meet you"
        default: 
        return `Hi ${name.toUpperCase()}`
      }
     }

    function addFive(number){
      let result 
      if(number>0){
        result = number +5;
      }
      return result; 
    }

  console.log(isRose("sherlyne"))
  console.log(isCat("tiger"));
  console.log(switchName("Mary"))
  console.log(ages(5))

