
  

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

  // 1. Create an Empty Array to store the todo list 
  const empty_list = []; 
  // const new_list = empty_list.push('Mary')
  // console.log(empty_list)

  function AddList(){ 
    const User_input = document.querySelector(".js-user-input");
    const the_Input = User_input.value; 
    
    // console.log(the_Input); 
    // 2. Push the user_input into the empty array 
    // take the empty array and push the user input 
      empty_list.push(the_Input) ;

    // reset the input value: make it equal to a string
    User_input.value = ''; 
    
    //Return the new list
    console.log(empty_list)// This will return all the information that it has

    
   
  };

  const mySchedule =  ['Pray', 'Google class', 'Run/Walk', 'Shower', 'Code', 'Write', 'Lunch', 'Job application', 'Youtube', 'Walk', 'Dinner', 'Movie', 'Write', 'Knit', 'Sleep']









