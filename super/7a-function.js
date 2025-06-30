
/*7a. create a function called greet that displays the message hello in the console. */

function greet(){
    return 'Hello !';
}
console.log(greet);

/*
7b. continue: add a parameter called name to the greet function and display the message Hello ${name}
*/


function greet(name){
    return `Hello ${name}`;
}
console.log(greet('sherlyne'));

/*
7c. Try calling greet() without a name (it will display "Hello undefined"). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
 */

function greet(name){
    if (!name){
        return `Hello there`
    }else {
        return `Hello ${name}`;
    }
    
}
console.log(greet());


// second work
function greets(names){
    if(!names){
        return 'Hi there!'
    }else{
         return `Hello ${names}!` 
    }
}
console.log(greets())

/*
7d. Create a function 'covertTo Fahrenheit(celsius)' That takes a number in degrees Celsius and returns a number in degrees Fahrenheit. 
Formula: Fa = (Cel*9/5) + 32
*/

function convertToFahrenheit(celsius){
     const Fa= (celsius*9/5)+32;
    return Fa;
}

console.log(convertToFahrenheit(25))//77

/*7e. Create a function 'covertToCelsius(fahrenheit)' That takes a number in degrees fahrenheit and returns a number in degrees celsius. 
 Formula: Fa = (Fahrenheit-32)* 5/9*/
function convertToCelsius(fahrenheit){
    return (fahrenheit-32)*5/9
}

console.log(convertToCelsius(86)) //30
 
/* 7f. Create a function 'convert to Temperature(degree,unit)' that takes a number and unit('C' or 'F') and convert it into the other unit
-convertTemperature(25,C)=77F
-convertTemperature(86,F)=30C
 Note: return a string, and try to reuse the function from 7d and 7e. */

 function convertTemperature(degrees,units){
    //return (convertToCelsius(degrees)) + `${units}`
    return (convertToFahrenheit(degrees)) + `${units}`

}
console.log(convertTemperature(25,'F')); // 

/* 7g. Create a function convertLength(length,from,to) that takes a number and a unit (km, or miles ) and converts the length to another unit (km or miles) Note: i mile = 1.6 km(approximately). 50 miles = 80 km */

// convert to length
function convertLenght(length, from){  miles = length * 1.6 
    km = length/1.6 
    // converts the number to 
    //return miles + `${unit}`;
    return miles + `${from}`;
}

console.log(convertLenght(50, 'km', ))

/* 7h. Update convertLength to support convert between km,miles, and also feet. Note: 1 mile = 5280ft, 1 km = 3281ft. eg: 5 miles = 8km */

// convert to length to ft 
function convertLengthFt(length, from, to){
    mile = length * 5280 
    km = length * 3281 
    // converts the number to 
    //return miles + `${unit}`;
    return miles + `${from}`;

}
console.log(convertLengthFt(5, 'km', ))


/* 7i. Update convertLength so that if you give it an invalid unit, it will return 'Invalid unit:${unit}.
*/ 

// Not sure how to do this one,










