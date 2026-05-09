/*
STEPS (ALGORITHM)
 1. Create an empty array to store the to do list 
 2. When we click add, 
 3. Get text from textbox(input)
 4. Add it to the empty array. 
 5. Console.log()the array or return them
 6.Display the schedule list on the website 
  */

// SECOND TODO2 : LOOPS INCLUDED

const mySchedule = ['Make bed', 'Shower'] // empty array
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

  document.querySelector('.js-list-here').innerHTML = todoListHtml;
}


function addList() {
  // input 
  const user_Input = document.querySelector(".js-user-input");
  const input_name = user_Input.value;
  mySchedule.push(input_name);
  console.log(mySchedule) // return the list
  user_Input.value = ''; // resets the input value 
  // Every time we add a todolist, we are also going to display the list again
  renderTodoList();

}




