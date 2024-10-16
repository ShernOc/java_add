// Calculation in java script
// adding two numbers 
function add(num1,num2){
    return num1+num2;
}

console.log(add(1,80))

//subtract two numbers
function minus(num1,num2){
    return num1-num2;
}

console.log(minus(60,40))

// multiply two numbers 
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(2,3.4))

// divide two numbers
function div(num1,num2){
    return num1/num2;
}
console.log(div(5.0,2.5))

/*Math assignment

let number = 5;
number++; //=> 5... hmmmm
number; //=> 6 -- the number was incremented after it was evaluated
number--; //=> 6
number; //=> 5

Shorthand
let number = 5 
number += 3 // 8
number-=2 // 3
number *=10//50
number /=5 //1
++ is a plus 1 of a number  
*/
// let the number 10 

function ads(number){
    return (number +=5);
}
console.log(ads(10));//15

// sub
function sub(number ){
    return (number -=5);
}
console.log(sub(10));//5

// multi
function multi(number){
    return (number *= 4);
}
console.log(multi(10));//40

// div
function div(number){
    return(number/=2);
}
console.log(div(10)); //5

// parseInt() = passes a string argument and returns an integer of the specified radix(base=10 ) it accepts to argument. 

function makeInt(string){
    return parseInt(string,10);
}
console.log(makeInt("0987"));

// parseFloat() = passes a decimal string and returns a decimal/float interger 
function preserveDecimal(string){
    return parseFloat(string);
}
console.log(preserveDecimal("456.789"));