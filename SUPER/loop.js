//Array is a list of values in a bracket 
const myArray = [12,13,"sherlyne", 78]
console.log(myArray[2]) // will return the value of the index 2 which is the position. 

// To change the value of a index which represents the position of a value
myArray[2] = 'Sultan'
console.log(myArray) // (4) [12, 13, 'Sultan', 78]

// length of an array 
console.log(myArray.length) // 4
console.log(myArray.push('Tiger')) // adds at the end 
console.log(myArray)

// .splice removes a value from an array (index, number of values)
myArray.splice(1,1)
console.log(myArray)
myArray.splice(4,1)
console.log(myArray)
myArray.splice(-2)
myArray.splice(1)
console.log(myArray)

// Algorithm
/* Create an array to store todos 
When we click 'ADD' we call it in the button element
Get text from text box 
Add it to array
*/

const emptyTodoList = []; 
function addTodoList(){
  const inputElement = document.querySelector(".js-name-input");
   // get the text out
   const name = inputElement.value ; 
   emptyTodoList.push(name) // push the list to the empty array list.  
   console.log(emptyTodoList); 
   inputElement.value =''; // returns an empty list again 
}

//LOOP THROUGH THE ARRAY: 
const emptyTodoList2 = ['find tiger', 'make dinner' ]; 
// create an accumulator to store the results 

let todoList 

function addTodoList2(){
  const inputElement = document.querySelector(".js-name-input2");
   // get the text out
   const name = inputElement.value ; 
   // Loop through 
   for(let i = 0; i<emptyTodoList2.length; i++){
    const todo = emptyTodoList2[i]; // get item 
    // create a html code for each todo 
    const html = `<p>${todo}</p`; 
    emptyTodoList2.push(html) // push the list to the empty array list.  
   }

   console.log(emptyTodoList2); 
   inputElement.value =''; // returns an empty list again 
}








// LOOP while the condition is true keep running the code. 

// 1.  WHILE LOOP : Non-standard loop : used to generate Random numbers. 
let i = 1;
while (i <= 50) {
  console.log(i)
  i += 1.
}

// 2. FOR LOOP : Used for standard loop. shorter and more organized

for (
  let i = 1;/* loop variable */
  i <= 5; /* loop condition*/
  i += 1 /* loop increament */) {

  /* loop body*/
  console.log(i)
}

for (i = 1; i <= 10; i += 2) {
  console.log('sherlyne is amazing')
}

//3. GENERATE RANDOM NUMBER: variable to store the random number 

let randomNumber = 0;
/* We are going to keep running the loop until the number is 0.5, the loop will end */
while (randomNumber < 0.5) {
  randomNumber = Math.random();
  console.log(randomNumber);
}

// Looping through an array 
const todoList = [
  'make dinner', 'wash dishes', 'watch youtube'
]

for (i = 0; i < todoList.length; i++) // they are the same
  for (index = 0; index <= todoList.length - 1; index++) {
    // for each index of array 
    // console.log(index) // will count from 0 to 2.  but we want to access the value
    const value = todoList[index] // access the index of the value (in each index )
    console.log(value); // do something in each value 
  }

//4.  ACCUMULATOR PATTERN 
// accumulator pattern used in looping through an array. 
// to Calculate the total or an array 

const numbs = [1, 1, 3];
// create a variable 
let total = 0; // will store the results. 

for (let i = 0; i < numbs.length; i++) {
  const num = numbs[i]; // saved in a variable 
  total = total + num; /* total += num*/  // adding each nums to the total. 
}
console.log(total) // will display 5. ;

//WHILE LOOP
/* let i = 3 // loop variable 
while(loop condition is true){
run this code(loop body)
i=i+1; increment step
}
*/

// let i=2; // Make the variable i and its equal to one 
// while(i<=10){ // if the condition is true, the computer will keep running over and over again the code 
//   console.log(i)
// i += 2 ; // we will increase the index by one 
// }

//Create a for loop that counts down from 5 to 0. hello please tengeneza. 

let u=5; 
while(u>=0){
    console.log(i)
    u-=1;
}


let y = 1; // create a variable
while(y<=10){ // if condition is true the code will continuously run (loop condition)
  console.log(y) // (loop body)
  y= y+1; // increase the index value by one, two or three( run the code 10 times)
}

// FOR LOOP 
for(let z=5; z>=0; z-=1){
  console.log(z)
}

// let randNumber = 0; 
// while(randNumber > 0.5){
//   randNumber = Math.random(); 
// }

// console.log(randNumber)


// function randomNumber(){
//     const randomNumber = Math.random()
//     let computerMove = '';

//     if(randomNumber >= 0 && randomNumber<1/3){
//          computerMove = 'Rock';
//     }else if (randomNumber>=1/3 && randomNumber<2/3 ){
//         computerMove ='Paper';
//     }else if(randomNumber>= 2/3 && randomNumber < 1){
//         computerMove = 'Scissor';
//     }
    
//     return computerMove; 
// }

// // try to use the while loop to create a random number: 

// // functions using the while loop in rock paper
// // Question can you have conditional operators in a while loop?
// function whileLoop(){
//   let randoNum = Math.random()
//   let comp ='';
//   while(randoNum >=0 && randoNum <1/3){
//     comp = 'rock'; 
//   }
//    while(randoNum >=1/3 && randoNum <2/3){
//     comp = 'paper'; 
//   }
//    while(randoNum >= 2/3 && randoNum <1){
//     comp = 'scissors'; 
//   }

//   return comp;

//   console.log(randoNum)
// }
// console.log(whileLoop())


// Looping through an array(): going through each value of an array. 

const todoList1 =[
  'make dinner', 'clean dishes', 'make a code', 'make food']

// use a for loop 
for(let i = 0; i<= todoList1.length-1 ; i+=1){
  // for each index we can do something. 
  // const me = todoList *2; 
  // console.log(me); 
  // [i] = index 
  todoList1[i] // this will access whats on that index: on each index. 
  const value = todoList1[i].toUpperCase();  // in each index make it uppercase 
  console.log(value); 
}


const array = [3,4,5,6,7]
// shortcut to loop through an array. 
for(let i=0; i<array.length; i+=1){
  const multiplyByTwo =  array[i]*2; 
  console.log(multiplyByTwo)
}

//  Accumulator pattern

const shernu = [2,4,5] // we want to find doubled number
const doubled = []; // this is used to accumulate/ store the doubled numbers [4,8,10]

// to loop through an array
for (let i =0; i< shernu.length; i++){
  // access the array 
  const access = shernu[i]; // shernu[i]*2 // this is also correct 
  // const d = doubled.push(access * 2);  this is also correct 
  // console.log(d) // this is also correct 
  doubled.push(access * 2)
}
console.log(doubled)




































 



