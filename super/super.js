//LESSON 5: Variables
//Variables: is a container that holds data or values; 

let variables1 =3; 
console.log(variables1);// 3

const Day = "Tuesday";
console.log(Day,variables1);// 

// resign a variable*
let calculation = 2+2;
console.log(calculation *6);//24
let results = calculation + 5; 
console.log(results) /9

let mine1 = 10;
mine1 = mine1 +1;
console.log(mine1) //11

mine1= 56 // re-assigning a value. 
console.log(mine1)//56

// Start Quantity = 0 
let Quantity = 0; 
const animal = 'Tiger' // const variable used 

// add the value of Quantity to two and then reasign it to that quantity
Quantity = Quantity +2; //2
Quantity = Quantity +3; // 5

console.log(typeof(Quantity)) // type of number
console.log(Quantity)//5


//LESSONS 6: BOOLEANS AND IF STATEMENTS

// Booleans: 
true
false; 
console.log(3<5)// true because 3 is less than 5. 

//IF ELSE STATEMENTS

// if (if the condition is true ){
//   return this statement
//  } else if { return this if the statement is false or otherwise this; 
//  } else{
//   return this as the final work 
//  }

function elseIfStatement(){
  if(true===1){
    console.log('run this code');
  }else if(false){
    console.log('Return this code')
  } else {
    console.log('run this code as the last resort');
  }

  console.log('Yeah we did it')
}


//Ternary Statement

function isCat(cat){
    return cat === "tiger"?"Hi tiger you are cute": `Hi ${cat}`; 
    }

console.log(isCat('tiger')); 


// Calculator  
function calculator(){
  let calculation = 0; 
  if (calculation){
    results = calculation += 19;}
    return results;
}

console.log(calculator())

// IF ELSE STATEMENTS 
function ageLimit(){
// if statement/boolean 
    const currentAge = 15; 
    if (currentAge>16 && currentAge<21){
      console.log("you can drive")
    }else if (currentAge> 21 && currentAge <70){
      console.log("You can drink ")
    }else{
      console.log('Wait you cannot drink and drive')
    }

}

function nameCat(cat){
  if(cat === "rose"){
    return "Hi Rose"
  }else if (typeof cat === "string"){
    return `Hi ${cat} your cat name is cute`
  }else {
    alert("sorry pass in a cat name") 
 } 
 return cat;
}

console.log(nameCat("Mogaka"))

// Switch Statement 
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

    const catAge = 18 ; 

    function isRose(cat){
      if(cat === "rose"){
        return "Hi Rose"
      }else if (typeof cat === "string"){
        return `Hi ${cat} your cat name is cute`
      }else {
        return "sorry pass in a cat name"
      }
    } 

    function ternaryCat(cat){
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

