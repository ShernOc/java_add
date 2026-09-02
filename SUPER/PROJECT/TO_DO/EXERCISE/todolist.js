/*
STEPS (ALGORITHM)
1. Create an empty array to store the to do list 
2. When we click Add button the value is added to the array: (array.push)
3. Get text from textbox(input)
4. Add it to the empty array. 
5. Console.log()the array or return them
6.Display the schedule list on the website 
  */

const emptyArray = [];
//FIRST TODO1: 
function addList() {
  // input 
  const user_Input = document.querySelector(".js-user-input1");
  const input_name = user_Input.value;
  emptyArray.push(input_name);
  console.log(emptyArray) // return the list
  user_Input.value = ''; // resets the input value 

}

// SECOND TODO2 : LOOPS INCLUDED
const mySchedule = ['Workout', 'Run', 'Shower'];
renderTodoList();

function renderTodoList() {
  let todoListHtml = ''; // accumulator pattern 
  // LOOP through the schedule 
  for (let i = 0; i < mySchedule.length; i++) {
    const todo = mySchedule[i];
    // create a html element to hold the list 
    const html = `<p>${todo}</p>`;
    todoListHtml += html; // add to the variable todoList
  }
  console.log(todoListHtml);

  document.querySelector('.js-display-list').innerHTML = todoListHtml;
}

function mainList() {
  // input 
  const user_Input = document.querySelector(".js-main-user-input2");
  const input_name = user_Input.value;
  mySchedule.push(input_name);
  console.log(mySchedule) // return the list
  user_Input.value = ''; // resets the input value 
  // Every time we add a todoList, we are also going to display the list again
  renderTodoList();
}

// THIRD TODO3 : LOOPS INCLUDED
// Changed array to an object 
const mySchedule3 = [{ name: 'Create video', dueDate: '10-08-2026' }, { name: 'Make Dinner', dueDate: '10-08-2026' }]
renderTodoList3(); // Run the function

function renderTodoList3() {
  let todoListHtml = ''; // accumulator pattern 
  // LOOP through the schedule 
  for (let i = 0; i < mySchedule3.length; i++) {
    const todo = mySchedule3[i];
    // create a html element code to hold the list 
    const { name, dueDate } = todo;
    const html = `
      <div> ${name}</div>
      <div> ${dueDate}</div>
      <button onclick = "mySchedule3.splice(${i},1);
      renderTodoList3();" class="delete-todo-button">Delete
        </button>`;
    todoListHtml += html; // add to the variable todoList
  }

  // console.log(todoListHtml); // shows the to do list: 
  document.querySelector('.js-todo-list3').innerHTML = todoListHtml;
}

function mainAddDeleteButton() {
  // input 
  const nameInputElement = document.querySelector(".js-user-input3");
  const name = nameInputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  mySchedule3.push({ name, dueDate });

  // console.log(mySchedule3) // return the list
  nameInputElement.value = ''; // resets the input value 
  // Every time we add a todoList, we are also going to display the list again
  renderTodoList3();
}


// MAIN TO DO LIST 

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
const emptyTodoList4 = [{ name: 'Workout', dueDate: '10-08-2026' }, { name: 'Run', dueDate: '20-08-2026' }];
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
  for (let i = 0; i < emptyTodoList4.length; i++) {
    const todoObject = emptyTodoList4[i];
    // create a html code. // generating the html code
    // We are adding a button 
    // we want to get the name and due date out of the todoObject
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // Deconstructing 
    const { name, dueDate } = todoObject;
    const html = `
        <!-- we are going to insert the dueDate, and name : we use the splice method to allow to remove one value at a certain index[i]-->
      <div> ${name}</div>
      <div> ${dueDate} </div>
      <button onclick = "emptyTodoList4.splice(${i},1);
        renderTodoList();" class="delete-todo-button" >Delete
        </button>`;
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
//    renderTodoList(); // call the function again to display the list again. 
// }
// Looping through an array(): going through each value of an array. 

// Update 
function addTodoList() {
  const nameInputElement = document.querySelector(".js-name-input");
  // get the text out
  const name = nameInputElement.value;
  // add the class for due date to the javascript 
  const dateInputElement = document.querySelector('.js-due-date-input');
  // get the dueDate out of the js element. 
  const dueDate = dateInputElement.value;

  // WHEN we add todoList, we also add a name, dueDate object property values : 
  // emptyTodoList.push({name:name, dueDate:dueDate}); // still the same as below
  emptyTodoList4.push({ name, dueDate }) // push the list to the empty array list.  

  nameInputElement.value = ''; // returns an empty list again 
  renderTodoList(); // call the function again to display 
}

// Next create a remove button 
// Store them properly:

// Creating a todo list with  Date, Add and delete button in each 
/* 1. CREATE A DELETE BUTTON next to the html list
2. Add an onclick event listener on the delete button 
onclick"todoList.splice(${i},1);
3. Render the todoList again
3. Add an input with type = "date": this will display a calendar
4. ADD an input element to add the date (dueDate): input type="date"
4. Add an object property: that is change an array to an object the array: that has variables of name and due date: TodoList = [{name: 'workout', dueDate:'10-08-2026'},{name: 'run', dueDate:'20-08-2026'} ]

Remember to remove the console log: 
6. Work on the CSS! 
*/





