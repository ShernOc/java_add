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

// Algorithmm
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

const emptyTodoList2 = []; 
function addTodoList2(){
  const inputElement = document.querySelector(".js-name-input2");
   // get the text out
   const name = inputElement.value ; 
   emptyTodoList2.push(name) // push the list to the empty array list.  
   console.log(emptyTodoList2); 
   inputElement.value =''; // returns an empty list again 
}

// LOOP while the condition is true keep running the code. 
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
let i=5; 
while(i>=0){
    console.log(i)
    i-=1;
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


let randNumber = 0; 
while(randNumber > 0.5){
  randNumber = Math.random(); 
}

console.log(randNumber)


function randomNumber(){
    const randomNumber = Math.random()
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber<1/3){
         computerMove = 'Rock';
    }else if (randomNumber>=1/3 && randomNumber<2/3 ){
        computerMove ='Paper';
    }else if(randomNumber>= 2/3 && randomNumber < 1){
        computerMove = 'Scissor';
    }
    
    return computerMove; 
}

// try to use the while loop to create a random number: 

// functions using the while loop in rock paper
// Question can you have conditional operators in a while loop?
function whileLoop(){
  let randoNum = Math.random()
  let comp ='';
  while(randoNum >=0 && randoNum <1/3){
    comp = 'rock'; 
  }
   while(randoNum >=1/3 && randoNum <2/3){
    comp = 'paper'; 
  }
   while(randoNum >= 2/3 && randoNum <1){
    comp = 'scissors'; 
  }

  return comp;

  console.log(randoNum)
}
console.log(whileLoop())






























 



