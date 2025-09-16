/* JUNE 26/ 2024 

- ARRAY-  a list like objects that contain multiple values stored in a list 
- Array can store various data types, mix the data type eg: 
-Array are enclosed in square bracket and the list is seperated by commas ["milk", 789, [0, "life", 43]] eg: below 
*/
const life = ["great", 123, "month"]; 
console.log(life.length); // returns 3 

/* Accessing Arrays  
Items in array are numbersed starting from 0, and the number is called (index) therefore the fist item has number Index 0, To acces the array of index 1 you indicate which index item you want and supply it in the console.log (life. [1]) it will return great.  
*/ 
console.log (life.[1]); 

/* To modify an item in an array by giving/ assigning  a single array item , a new value. 

life[2]  = 34.6  giving/ assigning  a single array item , a new value. and you console log */
console.log (shopping)

/* Array inside an array is an multidimensional array const life = ["great", 123, "month" ["great", 123, "month" ]]; 
*/
const life = ["great", 123, "month" ["great", 123, "month" ]]

//CLASS NOTES JUNE 26  
// ACCESSING THE HTML DOCUMENT 
const square = document.getElementById ("square"); 
// We select and pass (square), thus we assign the ID (square ) a variable by using let, const 

const circle = document.getElementsByClassName("circle");

const bill = document.getElementsByClassName ("bill");
//console.log (bill,"Runing"); 
const finance = document.getElementById("Finance bill") ; 

// Class selector- 
// query selects the first element only  
const square2 = document.querySelector ("#square"); 
const bill2 = document.querySelector ("#bill"); 
const circle2= document.querySelector ("#circle"); 
const button2 = document.querySelector ("button"); 

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
//console.log ("Hello World"); 
//console.log ('Running');
let nothing = document.querySelector (".nothing");

//console.log ("nothing")

// ARRAY - 
// allows to select the child, and then find the parent element)  
const child1 = document.querySelector ("child1")
// const parent = child1.parentElementChild; (Needs to be fixed )
//console.log (parent); 

// To know the children of parents. You select the first div, (square): Get the children of the first div (element)
const children  = square.children; 
//console.log (children); 

// Finding the first and last child:  (its the first element child )
const firstChild = square.firstElementChild;
const lastChild = square.lastElementChild; 
//console.log (children[2]); // refer to the sibling 

// Siblings : YOu have to use the previous child to call in the other siblings. 

const child2 = document.querySelector ("#child2");
const previousSibling = child2.previousElementSibling;
const nextSibling = child2.nextElementSibling;

console.log("#child [4]"); 
/*QUERY SELECTOR CAN BE USED TO RETURN MULTIPLE VALUES By utilizing (querySelectorAll)*/


/*MANIPULATING THE JS IN DOM 
MANUPILATING OR CHANGING THE JS DOCUMENT (DOM) : 
-Change contect: 
-Changing attribute 
-Change styling;  */ 

// Change Content ( ) 1. And you can access using 1. 
// textContent: Only returns plain text content 
// InnerHTML : manipulates everything, with the tag , attribute, and content  
const header = document.querySelector("header"); 
console.log("InnerHTML", header.innerHTML); 
console.log("textContect")
header.innerHTML = "Good morning"; 
console.log ("innerHTML"); 
header.textContent = "Good morning Jeff"; 
// manipulate 
header.innerHTMl= <button3>Click me</button3>


// To change the values : 
// to clear body or change the body 
   const body = document.body;  // the code allos us to have access to the body so that we can clear it. 
   console.log   // Replace it with an empty string 
 body.innerHTML = ""; // This clears the contenct where it becomes blanks in the body tag .

 // To add your own htlm document you body, and you put the HTML document inside the back stroke element, to now have a new website 
 body.innerHTML = ` `

 // Change Attributes  

 const image = documents.querySelector ("img"); 
 console.log (image.alt)
 // image.src = "" ;  This is an attributes, where
 // image.alt = "Something else"

 console.log ()

 // To set an new Value : or changing a value and access two arguments. 
 image. setAttribute("src", "/home/sherl/Development/code/class_work/f1/image/image1.png" ); 

 // To change a style :  update or manipulate using java

 const rect= document.querySelector ("#rect"); 
 console.log (rect); 
 console.dir (rect); // access the element in js. 
 // to have access now to the property style of the css. 
// To change Style Property, eg height from 200 to 100 px 
 rect.style.height = "200px"
 rect.style.width = "400px"


 /*HOW DO YOU FULLY CREATE A DOCUMENT USING JS ONLY */
 
 // JUNE 27/ 2024 
/* Declaring fuction 
Using Parameter and arguments 
*/

let name = "Sherlyne"; // This is an argument 
let Occupation = "Doctor";
let email = "sherlyne@email" ;
 
 function Profile4(name,Occupation, name) {
  console.log (`My name is + $ {name}, My occupation is ${Occupation} and email is  ${email}`); 
  // You can also concatinate 
  console.log  (`My name is + name + my occuption is + Occupation + and email is + email`);
 }

 let output
 profile (Don, "SoftwareEngineer", "dan@gmail.com"); 
 console log (Profile); 


/* 28/06/ 2024 
1. HOISTING: Raising to the top of 
2. FULLY HOISTING 

1. GLOBAL SCOPE : The function or variable declared are accessible anywhere. 
2. FUNCTIONAL SCOPE The function or variable declared in the local or inside the function are not accessible anywhere outside. 


/*scope: 
1.Global : The function is accessible on the programme
any variable outside the function is global  */

/*
2. Functional scope : Local scope: Not accessible outside  
let email : shere 
trying to accesing outside the function  { inside the function inside the funtion are inside the scope 
}
Variable and fucntional declared in global scope are accessible anywhere 
while 
variable  made in the local or function are not able to be accessible global.
*/ 

// Functional scope 
function greet(){
  console.log (name); 
  let email = "sherlyne@gmail.com"
  console.log(email); // will bring sherlyner@gmail.com 
}

console.log (name);//sherlyne@email 
console.log(email); // john
// Global : 
let name= "mark"; 
console.log(name); // mark because its outside 
let email = "sherlyne@email.com" ; 

// Hosting: eg function can be called withoug initializing them 
