 // Test the work
  // const new_h1 = document.body.innerHTML = 'SHERLYNE SUCKS '; 
  // console.log(new_h1); 
  // // Create the array of all the list that we need to do. 
  /*
STEPS (ALGORITHM)
  1. Create an empty array to store the to do list 
  2. When we click add, 
  3. Get text from textbox(input)
  4. Add it to array 
  5. Console.log()the array or return them
   */

// SECOND TODO2 : LOOPS INCLUDED
// display the schedule list 
// call the display function 

const mySchedule =  ['Code','Run']
function displayList(){ 
  let todoListHtml = ''; // accumulator pattern 

  // LOOP 
    for(let i = 0; i< mySchedule.length; i++){
      const todo= mySchedule[i]; 
      // create a html element to hold the list 
      const htmlElement= `<li> ${todo}</li>`; 
      todoListHtml += htmlElement;

    }

    document.querySelector('.js-list-here').innerHTML = todoListHtml;

  };

 // FIRST TODO1. 
  // 1. Create an Empty Array to store the todo list 
  const empty_list = []; 
  // const new_list = empty_list.push('Mary')
  // console.log(empty_list)
  // console.log(empty_list.push("sherlyne")); // adds a value at the end of an array : Use the Push
  // console.log(empty_list.unshift("tiger")); // add at the start/beginning 
  // console.log(empty_list);
  
  function addList(){ 
      // The user input using the DOM. 
      const user_Input = document.querySelector(".js-user-input");
      const the_Input = user_Input.value; 
      // console.log(the_Input); 
      // 2. Push the user_input into the empty array 
      // take the empty array and push the user input 
      empty_list.push(the_Input); // adds at the end of array
        // empty_list.unshift(the_Input); adds at the start 
        //Return the new list
      console.log(empty_list)// This will return all the values that have been added to the array 

      // reset the input value text box : make it equal to a string
      user_Input.value =''; 
    
      // we are going to show/display and run the list too.  
  };

  // every time we add 
