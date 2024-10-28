// // declared and assigned a variable of x, y. 
// let x = 10;
// x = 20;
// let y = 10;
// typeof x;
// y;
// console.log(x + y);

// const sherlyne = 36;

// console.log(typeof sherlyne)

// // String interpolation 
// age = 24;
// const howOld = `sherlyne is ${age} years old`;
// const old = 'sherlyne is + ${} years old '
// console.log(howOld);

// // Backlash / 
// const littleWomanEsque = '"Wait," said Jo, "Don\'t go without me!"';
// console.log(littleWomanEsque);

// // String + : used to join two string 

// const firstName = "sherlyne";
// const lastName = "Peter "
// let fullName = firstName + " " + lastName
// fullName = `${firstName} ${lastName}`
// console.log(fullName); // sherlynePeter 
// console.log(fullName);

// // use the string.toString() method to convert an object to a string. 
// const fact = "Spinach is "; // fact is of type `String`
// const tail = " years old"; // tail is of type `String`
// const mage = 5; // age is of type `Number`
// let life = fact + mage.toString() + tail; // using the toString() method 
// console.log(life)

// // Boolean; used in conditional expression if the condition is true/false (false, null, undefined, NaN, 0 are all false 
// Boolean("Hello world ");
// console.log(Boolean)

// /* Comparison operators 
// strict equality ===
// */

// // Ternary expression or the express conditional logic
// /*booleanExpression ? "thingToReturnIfTrue" : "thingToReturnIfFalse"; 
// Explanation: 
// If the expression in the first position evaluates to a truthy value, then the return value of the ternary expression is whatever is in the second position; here, "thingToReturnIfTrue". If the expression in the first position is falsey, however, whatever is in the last position is returned; here, "thingToReturnIfFalse".
// */

// const z = 45;
// const xy = z !== 45 ? "good girl" : "try again "; // 45 !== 45 
// console.log(xy); // return try again 

// /* if 45!==45 = false: therefore the expression above will return (try again)
// if 45 ===45 = true the expression will return( good girl) 
// */

// const e = 45;
// const f = e === 45 ? "good girl" : "try again "; // 45 === 45 
// console.log(f); // return good girl 


// // if the expression is true ? the the return value (good girl) is returned. : if the the expression (z !==45 is false), the expression in the last position is returned(try again)


// const names = "Spinach the Shiba";
// const probabilityOfRain = 0.2;
// const temperatureInC = 26;

// const likelyToRain = probabilityOfRain > 0.3;
// const sunIsDangerous = temperatureInC >= 26;
// const rainPercentage = probabilityOfRain * 100;

// // ternary expression can also be written im multiple lines and the value it return can also be assigned to the variable. 

// const rainAdvice = likelyToRain ? "take an umbrella" : "enjoy this rain-free day";
// const SunAdvice = sunIsDangerous
//     ? " and watch out for heatstroke!"
//     : " and bask in this fine weather.";

// const message = `Hello, ${names}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ` + rainAdvice + SunAdvice;


// console.log(message);
// const first = 2;
// const second = 1;
// const problem = 99;
// const luckyNumber = first < second ? (problem - 1) / 2 : problem / 3;
// console.log(luckyNumber); //=> ??? (Test it out yourself!)

// // default sequence: javascript runs the code from top to botton and from left-right;  

// // Selection:  uses the (if) default flow: top to bottom and 
// let favoriteNumber = 32;
// if (favoriteNumber >= 90) { // evaluating favoriteNumber >= 10 returns true/ if 
//     favoriteNumber = favoriteNumber + 10
// } // will excute {} if its true and favorite = 32 only if it's false. 
// console.log(favoriteNumber);

// // AGE ; 

// const jage = 40;

// if (jage >= 50) {
//     console.log("you can code")
// } else {
//     console.log("You are old")
// }
// // this is a comment marker (//)#

// //conditional If statement ; 
// /* if (condition to be checked ){
//      do this (block of code)
//  } else {
//     do this (block of code)
//  }
//     */
// const electricity = "on";
// let lightOn;

// if (electricity === "on") {
//     lightOn = "you can code";
// } else {
//     lightOn = "Get back to sleep";
// }

// console.log(lightOn);

// // make an interany expression; 
// const Lelectricity = "on";

// const lightOf = Lelectricity === "of" ? "you cannot code" : "Get back to sleep";

// console.log(lightOf);

// // Switch Statement; alternative way of expressing conditional code that is less repetetive. 
// const namez = "Alice";
// let greeting;

// if (namez === "Alice") {
//     greeting = "Hello, Alice!";
// } else if (namez === "The White Rabbit") {
//     greeting = "Don't be late, White Rabbit";
// } else if (namez === "The Mad Hatter") {
//     greeting = "Welcome to the tea party, Mad Hatter";
// } else if (namez === "The Queen of Hearts") {
//     greeting = "Please don't chop off my head!";
// } else {
//     greeting = "Whoooo are you?";
// }

// console.log(greeting);

// // with the switch we avoid the need to repeat the if (name === _____)

// switch (namez) {
//     case "Alice":
//         greeting = "Hello, Alice!";
//         break; // break is used to stop the switch
//     case "The White Rabbit":
//         greeting = "Don't be late, White Rabbit";
//     case "The Mad Hatter":
//         greeting = "Welcome to the tea party, Mad Hatter"
//     case "The Queen of Hearts":
//         greeting = "Please don't chop off my head!";
//     default: // is the same as else 
//         greeting = "Whoooo are you?";
// }

// console.log(greeting);

// /* WHILE LOOP : repeats an action in a loop based on a condition. while ([condition]) { [loop body]} */


// // the code will run infinitely 
// // while(true){
// //   console.log("say this forever..")
// // } 


// // the code will not run 
// // while (null){
// //   consol.log("i will not run")
// // }

// // let w = 0;
// // while (w < 10) {
// //     console.log("you are beautiful")
// //     w = w + 1;
// // }

// /*  Javascript functions
// 1. You have to declare the function 
// 2. you have you call it */

// function mary()  /* declared function */ {
//     console.log("i love you");
// }

// mary(); // called the function in order to be declared 

// function sayHelloToSamip() {
//     console.log("Hello, Samip!");
// }

// // to call the function sayHellosamip 
// sayHelloToSamip();

// // have a parameter (name)

// function greetings(name) {
//     console.log(`Good morning, ${name}!`);
// }

// greetings("sherlyne") // inside the parenthesis is the argument : where the  "sherlyne" is stored in the name. 

// function say(greeting, firstName) {
//     return (` Good morning ${greeting}, How was your day ${firstName}!`);
// }
// console.log(say("Julio", "hello"));
// /*JavaScript assigns values to parameters based solely on the order of the arguments that are passed.
// output: 
// fistname: hello
// greeting: Julio
// Julio, hello!
// */

// // Making the code do something for us: make a function that adds two numbers 
// function add(x, y) {
//     return x + y;
// }
// console.log(add(2, 4));

// // second function 
// function adds(num1, num2) {
//     return (num1 + num2)
// }
// console.log(add(2, 8))



// // or we can encapsulate the code into its own function and call them 

// // const sums = add(num7,num8)
// // function adds(){
// //   return num7+num8;
// // }
// // const msg = `the sum of number is: ${sums}`; 
// // console.log(msg(200,90))

// const addition = (num4, num5) => {
//     return num4 + num5;
// };
// const sum = addition(30, 45);
// const mesage = `the sum of your number is ${sum}`
// console.log(mesage);


// // toUpperCase() method= return string to all caps or uppercase 
// function shout(string) {
//     return string.toUpperCase();
// }

// console.log(shout("mombasa"))

// // to lower case = toLowerCase(); 
// function whisper(string) {
//     return string.toLowerCase();

// }
// console.log(whisper("MALUKI"));
// // want the book to be in capital letter 
// function book(bk) {
//     return (`i like your ${bk} book`);
// }

// console.log(book("JAVASCRIPT".toLowerCase()));

// function sayHiToHeadphonedRoommate(string) {

//     if (string == string.toUpperCase()) {
//         return ("YES INDEED!")
//     } else if (string == string.toLowerCase()) {
//         return "I can't hear you!"
//     } else {
//         return ("i would love to")
//     }
// }

// console.log(sayHiToHeadphonedRoommate("Lets have dinner together!"));
// console.log(sayHiToHeadphonedRoommate("LETS HAVE DINNER TOGETHER "));
// console.log(sayHiToHeadphonedRoommate("lets have dinner together "));

// /*Next : Javascript function parameter lab
// parameter withing the parathesis after a function has been declared */
// // has one parameter (name)
// function introduction(name) {
//     console.log(`Hi, my name is ${name}`);
// }

// // the function has two parameter separated by a comma (name,language)
// function introductionWithLanguage(name, language) {
//     console.log(`Hi, my name is ${name}and I am learning to program in ${language}`)
// }

// /*default/optional parameter (language is javascript)
// if the function is called with an argument, the argument's value will supersede the default value. If it's called without an argument, the function will use the default value, logging "Hello, User!"
// */
// function introductionWithLanguageOptional(name, language = "JavaScript") {
//     console.log(`Hi, my name is ${name}and I am learning to program in ${language}`)
// }


 //ARRAY= A collection of that hold multiple pieces of data under a single name eg: Groceries =["bread", "milk","eggs"] , always wrapped in []
// An array is used to store a collection of data 

groceries = ["bread", "eggs", "milk", "banana"] // this is an array list of groceries. 

//Objects are like tables that have a name that is a piece of data, typically a Symbol or a String. This identifier is called a key.
// // key: value objects 
// const englishBandsByCity = {
//     liverpool: "The Beatles",
//     manchester: "The Smiths",
//     coventry: "Delia Derbyshire and the BBC Radiophonic Band",
//     london: "Ziggy Stardust and the Spiders from Mars",
// };

// // Nesting: collection of data within a collection. array of objects or objects of array; 
// const englishMusicByCity = { // an object 
//     manchester: [ // key
//         { // value 
//             bandName: "The Smiths",
//             memberNames: ["Morrissey", "Johnny", "Andy", "Mike"], // An array 
//         },
//         {
//             bandName: "Joy Division",
//             memberNames: ["Peter", "Stephen", "Bernard", "Ian"], // array
//         },
//     ],
// };

// // ARRAY: 
// //1. Array literals. 

// const winningNumbers = [32, 9, 14, 33, 48, 5];

// function logWinningNumbers(numbers) {
//     console.log("Winning numbers:", numbers);
// }
// logWinningNumbers(winningNumbers);
// // or you can do this too: 

// const groc = ["This", "isanarray", "thathas", 5, "elements"];
// function li(element) {
//     return (element);
// }
// console.log(li(groc));

// /* every element = a unique index value 
// eg: const winningNumbers = [32, 9, 14, 33, 48, 5];
// 32 index = 0, 9 = 1, 14 =2, 33 =3 .. 
// To access the element or the data eg 14 we use the bracket notation. */



//FOR LOOP:   
const todo = [
    "Pray", "BrushTeeth", "WashFace", "MakeBed", "Shower", "Breakfast", "Study", "CleanRoom", "have no idea"
];

// function goodJob(todo){ // accepts an array of strings
//     for (let i = 0; i<todo.length;
//         /* it went through the array length of the element till i was at the end of the array and the loop stoped.)*/  i++) {
//         console.log(`You did a good job for ${todo[i]}`);
//     }
//     return todo; 
// }

// goodJob(todo);

// The array; 
const majina = ["sherlyne", "daniel", "rahab", "Alice"];
// let event="birthday";

function writeCards(majina, event) {
    const newArray = [];
    for (counter = 0; counter < majina.length; counter++) {
        // instead of console.log we create another const that holds what is needed to be executed.
        const message = (`Thank you ${majina[counter]} for a wonderful ${event} it was a blast`);

        newArray.push(message); // The newArray holds the messages. uses the array.push

    }

    return newArray; // returns the new Array. 

}

console.log(writeCards(majina, " Birthday"));

/*Using array.forEach(): takes two parameter,(callbackfn, thisArg)
- callbackfn =  (element, index of the element, or the array)
-this Arg= the value to use this when excuting callbackfn */

//Array is declared: 

const life = ["Maluki", "daniel", "rahab", "Alice"];

// function deathwish is defined with two parameter(life,events)

function Deathwish(life, events) {
    const nowArray = []; // empty array to store the messages; 

    // used for each to iterarate or go through the array; 
    life.forEach((person) => { nowArray.push(`Thank you ${person} for a wonderful ${events} your ${events} was a blast`); });

    return nowArray;

}

console.log(Deathwish(life, "Death"));

/* Using while loop ( in array): the initilization is outside the body of the loop. iteration moves inside the body

let i = 0; initialization 
while ([condition]) {
    [loop body]; i++ interation 
  }
    */
const items = ["Laptop", "Java", "Am not sure"]
// funtion 
function lifeCrazy() {
    let y = 0;// initilization 
    while (y < items.length) // the condition 
    { console.log(`What is this ? it's a ${items[y]} Lord have mercy`); y++ }

    return items;
}

lifeCrazy(items);

//For..of loop 
/*
for (const element of object) {}*/

// using for...of loop
const item = ["Books", "pen", "laptop", "notepad"]

for (const element of item) {
    console.log("a " + element + " is a great tool to use in school ")
}

// adding element using for..of
const numbers = [1, 2, 3, 4, 5];
for (const element of numbers) {
    console.log(element + 10);
}// 11,12,13,14,15 

// to interate through every element we can also create a function that iterates/ or goes through the number array using for .. in loop 
function nm(nms) {
    for (const key in nms) {
        console.log(nms[key]);
    }
}

console.log(nm(numbers))// 1,2,3,4, 

/* for ... in = iterates through the properties of an object: 

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

// show what each person will recieve for a birthday
// object = presents 
// key = alice 
// value = shoe box 
const presents = {
    alice: "Shoe box",
    rahab: "Beautiful Dog",
    daniel: "Television",
    sherlyne: "Pajamas ",

    friends: [
        {
            firstName: "Nancy",
            lastName: "Burgess",
            company: {
                name: "Flatbook Labs",
                jobTitle: "Developer Apprentice",
            },
        }
    ]
};


for (const key in presents) {
    console.log(key + " " + "will get" + " " + presents[key] + " " + "for christmas");
}

// to review a value in an object we use (object.key) 
console.log(presents.alice);

// to get the nested propertied in an array. object.key[index].element
console.log(presents.friends[0].firstName);


// to iterate through the object using for in . we want to get everything in that present / to get the array content we 

function bird(target) {
    for (const key in target) {
        if (typeof target[key] === "object") {
            for (const nestedKey in target[key]) {
                console.log(target[key][nestedKey]);
            }// displays the first nested object friends
        } else {
            console.log(target[key]);
        }
    }
}
bird(presents);

// or we can RECURSE: RECURSION: A function that calls itself(function): used when we have a bunch of nested. 

function b2(life) {
    if (typeof life === "object") {
        for (const key in life) {
            b2(life[key]); // functio calling itself 
        }
    } else {
        console.log("life is great", life);
    }
}

b2(presents);

// We can reverse the action by using: for...of and for in for object 1. check if an object has an array, if not work on achieving the work. handle arrays/  
function lf(wow) {
    if (Array.isArray(wow)) { // checking in if there is an array
        for (const element of wow) {
            lf(element)// return the function of the element recursion
        }
    } else if (typeof wow === "object") {
        for (const key in wow) {
            lf(wow[key])// return the keys
        }

    } else {
        console.log(wow)
    }

}

lf(presents); 


//DOM : Document Object Model: 

// To make it easier: the metadata: ID, CLASS attributes: are used as tools to find the html elements

function header() {
    const alice = document.getElementById("alice");
    const header = document.createElement("header");
    const h1header = document.createElement("h1");

    header.append(h1header);

    h1header.textContent = "HAPPY BIRTHDYA ALICE";

    alice.append(header);
}

header();

// main element with id of main 
function main(){
    const alice = document.getElementById("alice");
    const mainsection = document.createElement("main");
    
    // p element with id of info
    const psection = document.createElement("p");

    mainsection.append(psection);

    psection.textContent = "It must feel nice to be 29 years old Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores minima itaque magnam quaerat sit reprehenderit quae assumenda in, repudiandae quam nam laborum dolore repellendus, consectetur qui sed explicabo earum."

    alice.append(mainsection); 
}

main();

// div element with id of logo 

function logo(){
    const alice = document.getElementById("alice");
    const logo = document.createElement("div");
    logo.id ="logo";

    // image createion 
    const img = document.createElement("img");
    img.src = "images/cofee2.jpg"; 
    img.alt="IMAGE OF ALICE"; 

    logo.append(img); 


    alice.append(logo);

}

logo(); // calling the logo 


// footer element with class of footer 

// 2. Another way to add element to the DOM: 
// element.innerHTML  
const main = document.getElementById("alice");
main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

//USING element.innerHTML = to write what we want. 
const mainZ = document.getElementById("alice");
mainZ.innerHTML = "<header><h1>HAPPY BIRTHDAY ALICE </h1></header><main><p>It must feel nice to be 29 years old Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores minima itaque magnam quaerat sit reprehenderit quae assumenda in, repudiandae quam nam laborum dolore repellendus, consectetur qui sed explicabo earum.</p></main><div><img src=IMAGE OF ALICE ></img></div><footer><p>life is good </p></footer>"; 

//CHANGING STYLE: PROPERTY- 

//1. Element.classList.remove or add. = works with the collection of classes/ a 

// remove or add 
className.classList.remove("banner");
className.classList.add("Yess");

// add or remove multiple classes 

className.classList.remove("banner","sherlyne", "adthiambo");
className.classList.add("Yess", "what",bar);

// remove id of alice: 
div.classList.remove("alice"); 

//add a different id of birthday
div.classList.add("birthday"); 


//To replace a className from alice to birthday element.classList.replace 
alice.classList.replace("alice","birthday");



