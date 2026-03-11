/*
- An array that stores our items.
- Create an elements for each item.
Append an element
*/

const shoppingListArray = ['chapati','rice','flour','Cocoa']

// console.log(shoppingListArray.length); // wanting to know the length/no of items in the array. it will console //(4)

// //To Acess the Array, using the bracket notation 
// console.log(shoppingListArray[0]); // It will Acess // chapati

// // To change or modify one particular array to different array 
// shoppingListArray[1] = "Mayai" // It will subtitute chapati to Mayai. 
// console.log (shoppingListArray); 


function renderItems(){
  shoppingListArray.forEach((item)=>{
    const li = document.createElement('li')
li.innerHTML = item
container.appendChild(li)
  })
}

/*
- Access the user's input
- Rerieve the value entered ( access the value of the input)

- Add the value to the array ( shoppingListArray )
- we call the render items function
*/ 

/* Captures the userinput and used the add.EventLister  */


let Input = [];
function userInputItems(){
document.getElementById("boxInput").addEventListener("Add");
let boxInput= document.getElementById("boxInput").value.trim();
if (userInputItems!== ''){
  input.push(userInputItems);
  renderItems(); 
  boxInput.value = ''; 
}
}


const Addbutton = document.getElementById("boxInput").addEventListener("Add");

//Event handler
buttonAdd.addEventListener("click", userInputItems); 

// added or or removed ; 
buttonClear.componentRemoved("buttonClear", userInputItems); 
// An HTML input field was changed
//An HTML button was clicked



// allow user to add items at the start of items list  we use the push(). && unshipt()

//   UserListArray.forEach((item)=>{
//     const li = document.getElement('li')
// li.innerHTML = item
// container.appendChild(li)
//   })
// }

/* User Input : Three ways 
1. the prompt method

let userInput= prompt ("Add food items"); 
if (userInput!== null){
 return shoppingListArray.push(''); 
 }else if (){
 }
}

2. Leveraging addEventListener(): 
let Shopping= document.getElementById("Shopping"); 
 add event listener to User input element
Shopping.addEventListener("constainer", function(event)){
let userInput = even.target.value; 

}

/*3. Employing eventlisterner on HTML forms to capture user input.  ( this is the one we will use. )
1. Changed the input section on html to form 
<script>

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    console.log("Submitted username:", username);

- add button: OK button 
- marked purchase button
- cancel button. */
// function userInput(){
//   if (userInput!== '' ){
//     return shoppingListArray.push(''); 
//   }else if ()}

// added or or removed ; 

// An HTML input field was changed
//An HTML button was clicked
// newUserArray.forEach((items)=>{const li = document.createElement('li')
// }
