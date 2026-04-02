// grab the form 
document.addEventListener("DOMContentLoaded", () => {
    
  const form = document.querySelector("#create-task-form"); 
    // event listener for form 
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      handleInputButton(e.target.addtodo.value);//passing what the user-input value will input 
    
      // reset the form 
      form.reset();
    
    }); 
    
    // handle-input event / that holds the input and the button
    function handleInputButton(todo){
    // grab the ul element
    // const divList = document.querySelector('#list')
    // divList.appendChild(ultag);
    const ul_Tag = document.querySelector("#tasks");
    const li_Tag = document.createElement('li');
    
    //litag will hold the contents 
    li_Tag.textContent = todo; 
    ul_Tag.appendChild(li_Tag); 
    
    // create a button: 
    const button = document.createElement('button'); 
    // named the button 
    button.textContent = 'Done';
    
    //event listener button 
    button.addEventListener('click', handleButton)
    
    //append the button to the li tag.l
    li_Tag.appendChild(button); 
    
    }
    
    // event handler for the button 
    function handleButton(e){
      e.target.parentNode.remove(); 
    }
    
    });