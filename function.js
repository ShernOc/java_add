// pickup location,=50  
// returns number of blocks from scuber hq  
const pickup = 50; 
const scubahq = 42; 



const distanceFromHqInBlocks = function(){
    return pickup-scubahq
}
console.log(distanceFromHqInBlocks()); // 8 


// returns blocks to feet 1 block = 264ft
const distanceFromHqInFeet = function (){ 
return (distanceFromHqInBlocks()* 264); // call the function 
}

console.log(distanceFromHqInFeet()); 

// calculate the distance in feet
const distanceTravelledInFeet = function(num5,num6){
    return (num6-num5)*264;

}
console.log(distanceTravelledInFeet(34,38));

// fare for the customer 
const calculatesFarePrice = function(){
    dist = distanceFromHqInFeet();
if (dist <= 400){
    return("free ride");
}else if (dist > 400 && dist<2000){
    return(dist *2);
}else if (dist>2000 && dist<2500){
    return("pay $25");
}else{
    return (`cannot travel that far`)
}
} 

console.log(calculatesFarePrice());

// 1. function declaration: 

function razz(){ // declared a function 
    console.log("You have been razzled");
}

razz(); // we are calling the function.  

// you can pass arguments.
// have a default argument activity = "roller-skater" passed as an paramenter and passed as an argument. 
function sarturdayFun(activity = "roller-skate"){
    console.log(`This Saturday, i want to ${activity}!`)
}
sarturdayFun();// will have a default value 
sarturdayFun("eat lots of food. ")

// HOISTING: The art of calling a function before they appear in the code: eg Hi() before function Hi(){} ; must be defined using the function declaration. 

// Anonymous Function: Function without a name or not declared: function(){}: it cannot be called, however they can be used as a callback function 

// A function as a function expression: Declaring a variable and assigning the function as a value. 
const func = function(m,n){
    return m+n;
}
console.log(func(3,4))

// Lab 
const mondayWork = function(activity = "Go to the office"){ // default argument if nothing is called 
    return(`This Monday, I will ${activity}`)
}

console.log(mondayWork("I will Study javascript"));
console.log(mondayWork());

// Another way to call an anoymous function is by creating (IIFE) :immediately-invoked function expression (IIFE): 

// Function-Level Scope
function outer(greeting, msg = "It's a fine day to learn") {
    // 2
    const innerFunction = function (name, lang = "Python") {
      // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    };
    return innerFunction("student", "JavaScript"); // 5
  }
  
  outer("Hello"); // 1
  //=> "Hello, student! It's a fine day to learn JavaScript"

  /*
  Let's break this down:

1. We call outer, passing "Hello" as an argument.
2. The argument ("Hello") is saved in outer's greeting parameter. The other parameter, msg, is set to a default value.
3. Here's our old friend the function expression. It expects two arguments, to be stored in the parameters name and lang, and lang is assigned the default value of "Python". The function expression itself is saved in the local variable innerFunction.
4. Inside innerFunction we make use of its parameters, name and lang, as well as the greeting and msg parameters defined in innerFunction's containing (parent) function, outer. innerFunction has access to those variables via the scope chain.
5. Finally, inside outer, we invoke innerFunction, passing arguments that get stored in innerFunction's name and lang parameters. */

// We can simplify by the scope by
function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }

outer("Hello")("student", "JavaScript");

/*We can tighten this code up a bit more: instead of assigning the function expression to innerFunction and returning that, let's just return the function expression.*/

function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"

const wrapAdjective = function(fn=`*`){
    return function(ad=" and special special"){
        return (`You are ${fn+ad}`)
    };
}

console.log(wrapAdjective("dedicated girl")())