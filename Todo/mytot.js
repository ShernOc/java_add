
// Callback function : passing an event handling 
function addtodo(e) {
    e.preventDefault(); // Stops the form from submitting
    // grap the input element 
    const todoInput = document.getElementById("addtodo");
    const todoText = todoInput.value;

    //grap the p element that will store our inputs 
    const p = document.getElementById("p");

    // Appends the new text to the existing content 
    // textContent directly affects updates the text of p element. 
    const ul = document.createElement("ul")
    p.append(ul);
    const li = document.createElement("li")
    li.textContent = `${todoText.toUpperCase()}`;
    ul.append(li);

    // clear the input after adding the text 
    todoInput.value = "";
  
    
    if (todoText.trim()===""){
        alert("enter text");
    }else{
        e.preventDefault();
    }


    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Done";
    deleteButton.className = "delete-btn";

    // click event 
    deleteButton.addEventListener("click", () => {
        ul.removechild();
    })




};

// // eventlisterner for the submit button/ 

// const submitButton = document.querySelector(".submitbtn");
// submitButton.addEventListener('click', addtodo);
// console.log(submitButton);

// function submitnot(){
//     if (todoInput.value ===null){
//             e.preventDefault();
//         }
        
//     }

// // The div element that will have the button
// const addDiv = (addtodo) => {
//     const newAddDiv = document.createElement("div");
//     newAddDiv.className = "todolist";




//     //p element to hod the do-list 
//     const newP = document.createElement("p");
//     newP.className = "newP";

//     // in order to hold the text 
//     newP.textContent = todoText;

//     const addbutton = document.createElement("button");
//     addbutton.classList = "addbutton";
//     addbutton.name = "done";
//     li.append(addbutton);
// }



// const doneTasks = () => {
//     const done = document.getElementById("done");
//     const doneT = document.createElement("div");
//     done.append(doneT);
//     const newUl = document.createElement("ul");
//     // li elements 
//     const newList = () => {
//         for (let i = 0; i < 3; i++) {
//             const li = document.createElement("li");
//             li.textContent = ("I have created a list");
//             newUl.append(li)
//         }
//     };
//     // calling in the newList (li-items) 
//     newList();
//     doneT.append(newUl);

//     // remove the ul element: 
//     const secondChild = doneT.querySelector("ul"); doneT.remove(secondChild);
// }
// console.log(doneTasks());








// const List = [
//     "Pray", "BrushTeeth", "WashFace", "MakeBed", "Shower", "Breakfast", "Study", "CleanRoom"
// ];

// function ToDo(Todo) {
//     return (Todo);
// }

// console.log(ToDo(List));
// console.log(ToDo(List[5])); //  Breakfast 

// List[0]="life is great"; // this will update prayer to "life is great"
// List.push("Lunch")// Adds lunch at the end of the list 
// List.unshift("Wakeup")// adds the element to the beginning of an array

// console.log(ToDo(List))

// List.slice(2)
// // console.log(Todo(List)); 

// // schedule: 

// const schedule = [
//     "Pray", "BrushTeeth", "WashFace", "MakeBed", "Shower", "Breakfast", "Study", "CleanRoom"
// ];

// function workout(){
//     console.log("Do your jumps"); 
// }

// function pray(){
//     console.log("Prayer time ");
// }

// function study(lesson){
//     console.log(`Today you are studying ${lesson}`);
// }


// // to cut down the information we need to summarize by each day: 

// function Monday(){
//     workout();
//     pray(); 
//     study(); 
// }

// // taking an function as a parameter 
// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();  }