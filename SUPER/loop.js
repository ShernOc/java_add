// ARRAY AND LOOPS
//Array is a list of values in a bracket 
const myArray = [12, 13, "sherlyne", 78]
console.log(myArray[2]) // will return the value of the index 2 which is the position. 

// To change the value of a index which represents the position of a value
myArray[2] = 'Sultan'
console.log(myArray) // (4) [12, 13, 'Sultan', 78]

// length of an array 
console.log(myArray.length) // 4
console.log(myArray.push('Tiger')) // adds at the end 
console.log(myArray)

// .splice removes a value from an array (index, number of values)
myArray.splice(1, 1)
console.log(myArray)
myArray.splice(4, 1)
console.log(myArray)
myArray.splice(-2)
myArray.splice(1)
console.log(myArray)


//CALCULATE THE SUM: 

const prices = [19.99, 25.50, 12.75]
const totals = prices.reduce((totals, price) => totals + price, 0)
console.log(totals); // Result: 58.24

// Calculate total sum
const Sums = [5, -1, 6];
const totalSum = Sums.reduce((totalSum, sumarray) => totalSum + sumarray, 0);
console.log(totalSum); // 10

// Algorithm
/* Create an array to store todos 
When we click 'ADD' we call it in the button element
Get text from text box 
Add it to array
*/

// WHILE AND FOR LOOP
// LOOP while the condition is true keep running the code. 

// 1.  WHILE LOOP : Non-standard loop : used to generate Random numbers. 

//WHILE LOOP
/* let i = 1 // loop variable 
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
// EXAMPLE 1 
let y = 1; // create a variable
while (y <= 10) { // if condition is true the code will continuously run (loop condition)
  console.log(y) // (loop body)
  y = y + 1; // increase the index value by one, two or three( run the code 10 times)
}

//Example: Create a for loop that counts down from 5 to 0. hello 
let u = 5;
while (u >= 0) {
  console.log(u)
  u -= 1;
} // 5,4,3,2,1 0 

let i = 1;
while (i <= 5) {
  console.log(i)
  i += 1.
} // 1,2,3,4,5,

// 2. FOR LOOP : Used for standard loop. shorter and more organized

for (
  let i = 1;/* loop variable */
  i <= 5; /* loop condition*/
  i += 1 /* loop increment */) {

  /* loop body*/
  console.log(i)
} // 1,2,3,4,5,

for (i = 1; i <= 10; i += 2) {
  console.log('sherlyne is amazing')
} //'sherlyne is amazing'

for (let z = 5; z >= 0; z -= 1) {
  console.log(z)
} // 5,4,3,2,1 0 

//3. GENERATE RANDOM NUMBER: variable to store the random number 
// try to use the while loop to create a random number: 

let randomNumber = 0;
/* We are going to keep running the loop until the number is 0.5, the loop will end */
while (randomNumber < 0.5) {
  randomNumber = Math.random();
}
console.log(randomNumber);

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

const array = [3, 4, 5, 6, 7]
const mul = []; // store the multiplied numbers
// shortcut to loop through an array. 
for (let i = 0; i < array.length; i += 1) {
  const multiplyByTwo = array[i] * 2;
  mul.push(multiplyByTwo);
}
console.log(mul); //  [6, 8, 10, 12, 14]

//  Accumulator pattern by pushing through an empty array. 
const mynum = [2, 4, 5] // we want to find doubled number
const numsDoubled = []; // this is used to accumulate/ store the doubled numbers [4,8,10]

// to loop through an array
for (let i = 0; i < mynum.length; i++) {
  // access the array 
  const numb = mynum[i];
  numsDoubled.push(numb * 2) // take empty array and push the indexed items *2 
}
console.log(numsDoubled) //  [4, 8, 10]

// To do practice 1. 
const todoList3 = ['clean shoes']
// Looping through an array 
for (i = 0; i < todoList3.length; i++) // they are the same
  for (index = 0; index <= todoList3.length - 1; index++) {
    const value = todoList3[index] // access the index of the value (in each index )
    console.log(value); // do something in each value 
  }

// create an accumulator to store the results 

// const emptyTodoList= ['workout', 'run' ]; 
// renderTodoList(); 

// Change the array to an object
const emptyTodoList = [
  { name: 'workout', dueDate: '10-08-2026' },
  { name: 'run', dueDate: '20-08-2026' }];

renderTodoList();

// function renderTodoList(){
//     // combine html and put it on the page use the accumulator 
//     let todoListHtml = ``; 
//     // loop through the array. 
//     for(let i = 0; i<emptyTodoList.length; i++){
//       const todo = emptyTodoList[i]; 
//       // create a html code. // generating the html code
//       // We are adding a button 
//       const html =`
//       <ul>
//       <li>
//       ${todo} 
//       <button onclick = "emptyTodoList.splice(${i},1);
//       renderTodoList();
//       " >Delete</button>
//       </li>
//       </ul>`; 
//       todoListHtml += html; 
//     }
//     // console.log(todoListHtml); 
//     // DOM  display the website
//     document.querySelector('.js-todo-list').innerHTML = todoListHtml; // will show the list into the document. 
// }

function renderTodoList() {
  // combine html and put it on the page use the accumulator 
  let todoListHtml = ``;
  // loop through the array. 
  for (let i = 0; i < emptyTodoList.length; i++) {
    const todoObject = emptyTodoList[i];
    // create a html code. // generating the html code
    // We are adding a button 
    // we want to get the name and due date out of the todoObject
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // Deconstructing
    const { name, dueDate } = todoObject;
    const html = `
      <ul>
      <li>
      <!-- we are going to insert the dueDate, and name -->
      ${name} ${dueDate}
      <button onclick = "emptyTodoList.splice(${i},1);
      renderTodoList();
      " >Delete</button>
      </li>
      </ul>`;
    todoListHtml += html;
  }

  // DOM  display the website
  document.querySelector('.js-todo-list').innerHTML = todoListHtml; // will show the list into the document. 
}

// function addTodoList(){
//   const inputElement = document.querySelector(".js-name-input");
//    // get the text out
//    const name = inputElement.value ; 
//    emptyTodoList.push(name) // push the list to the empty array list.  
//    console.log(emptyTodoList); 
//    inputElement.value =''; // returns an empty list again 
//    renderTodoList(); // call the function again to display 
// }
// Looping through an array(): going through each value of an array. 

// Update 
function addTodoList() {
  const nameInputElement = document.querySelector(".js-name-input");
  // get the text out
  const name = nameInputElement.value;
  // add the class for due date
  const dateInputElement = document.querySelector('.js-due-date-input');
  // get the dueDate out of the element
  const dueDate = dateInputElement.value;

  // WHEN we add todolist, we also add a name, dueDate object property values 
  emptyTodoList.push({ name, dueDate }) // push the list to the empty array list.  

  nameInputElement.value = ''; // returns an empty list again 
  renderTodoList(); // call the function again to display 
}

// Next create a remove button 
// Store them properly: 

// Creating a todo list with  Date, Add and delete button in each 
/* 1. CREATE A DELETE BUTTON next to the html list
2. Add an onclick event listener on the delete button 
onclick"todolist.splice(${i},1);
3. Add an input with type = "date": this will display a calendar
4. Add an object to the array: that has variables of name and due date: TodoList = [{name: 'workout', dueDate:'10-08-2026'},{name: 'run', dueDate:'20-08-2026'} ]

6. Work on the CSS! 


*/











