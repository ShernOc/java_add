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
  i += 1 /* loop increment */) {

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

const todoList3 = ['clean shoes']
// Looping through an array 
for (i = 0; i < todoList3.length; i++) // they are the same
for (index = 0; index <= todoList3.length - 1; index++) {
    const value = todoList3[index] // access the index of the value (in each index )
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
  total = total + num; /* total += num*/  // adding each num to the total. 
}
console.log(total) // will display 5. ;

const array = [3,4,5,6,7]
const mul = []; // store the multiplied numbers
// shortcut to loop through an array. 
for(let i=0; i<array.length; i+=1){
  const multiplyByTwo =  array[i]*2; 
  mul.push(multiplyByTwo); 
}
console.log(mul); //  [6, 8, 10, 12, 14]

//  Accumulator pattern by pushing through an empty array. 
const mynum = [2,4,5] // we want to find doubled number
const numsDoubled = []; // this is used to accumulate/ store the doubled numbers [4,8,10]

// to loop through an array
for (let i =0; i< mynum.length; i++){
  // access the array 
  const numb = mynum[i];
  numsDoubled.push(numb *2) // take empty array and push the indexed items *2 
}
console.log(numsDoubled) //  [4, 8, 10]


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

// To do practice 1. 

// create an accumulator to store the results 
const emptyTodoList= ['workout', 'run' ]; 
renderTodoList(); 

function renderTodoList(){
    // combine html and put it on the page use the accumulator 
    let todoListHtml = ``; 
    // loop through the array. 
    for(let i = 0; i<emptyTodoList.length; i++){
      const todo = emptyTodoList[i]; 
      // create a html code. 
      const html =`<ul><li>${todo}</li></ul>`; 
      todoListHtml += html; 
    }
    // console.log(todoListHtml); 
    // DOM  display the website
    document.querySelector('.js-todo-list').innerHTML = todoListHtml; // will show the list into the document. 
}

function addTodoList(){
  const inputElement = document.querySelector(".js-name-input");
   // get the text out
   const name = inputElement.value ; 
   emptyTodoList.push(name) // push the list to the empty array list.  
   console.log(emptyTodoList); 
   inputElement.value =''; // returns an empty list again 
   renderTodoList(); // call the function again to display 
}

// Next create a remove button 
// Store them properly: 

// exercise
// 11a. 
const nums = [10,20,30]
nums[2]=99
console.log(nums) // [10,20,99]

//11b. 
function getLastValue(array){
  const lastValue = array.splice(-1)
  return lastValue;
}
console.log(getLastValue([34,56,45])) // [45]

//11c
function arraySwap(array){
  const reverseArray= array.reverse();
  return reverseArray;
}
console.log(arraySwap([34,56,45])); //[45, 56, 34]

//11d. 

for(let i=0; i<=10; i+=2){
  console.log(i)
}

// 11e. countdown from 5 to 0
for(let i=5; i>=0; i-=1){
  console.log(i)
}

// llfd while loop
let t=0;
while(t<=10){
  console.log(t)
  t+=2;
}

//11fe
let r=5;
while(r>=0){
  console.log(r);
  i-=1
}
// 11g 8:42



