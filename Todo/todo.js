/*Once you've got the required deliverables working, you may want to try to implement one or more of the following:

A delete function that will remove tasks from your list
A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
An additional input field (e.g. user, duration, date due)
Ability to edit tasks
Something of your choice! The main objective is to add a feature that allows the user's input to affect the 

ll*/

document.addEventListener('DOMContentLoaded', () => {
// Function that updates the day of the week. 
const UpdateWeekday = (day) => {
    let h2 = document.querySelector("h2");
    h2.innerText = day
    h2.id = "day";
    h2.className = day.toLowerCase()
}
console.log(UpdateWeekday("Tuesday"))// changes the day from Monday to Sunday

const addImage = (img_url) => {
    let image = document.querySelector("img");
    image.src = img_url;
    image.alt = "cow image";
    image.height = 250;
    image.width = 300;
}
console.log(addImage("/images/pexels-vidalbalielojrfotografia-14457389.jpg"));

// Add an event listerner that takes the submited input text and appends it at the paragraph element feed list;

    // grap the form 
    const form = document.querySelector("#todoform");

    // Event listener for the form 
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent default behavior 
        AddTodo(e.target.addtodo.value); // addtodo is the id input that we are grabbing 

        // reset the form 
        form.reset();
    })

// create a function that handles toadd list 
const ol = document.createElement("ol");
const AddTodo = (todo) => { // passes 
    // create the p element that handles the addlist. 
    let p = document.createElement('p'); // 
    document.querySelector('#addcontainer').appendChild(p) // appends/ adds p element to the div: todocontainer 
  
    p.appendChild(ol);
    const li = document.createElement("li");
    ol.id = "ordered list";
    ol.appendChild(li);

    // create a button that will be used to delete the items. 
    const btn = document.createElement("button");

    // create a handle event for the delete button 
    btn.addEventListener('click', handleDeletebtn)

    // the button will be named done 
    btn.textContent = "Done";

    // li that holds the todo text. 
    li.textContent = `${todo}`;

    // append the button to the p element. 
    li.appendChild(btn);

};
AddTodo;

// created a handledelete event (pass the event, get the parent Node and call in the remove() 
// This will activate delete action. 
   // create ol/p element to handle the done list. 

   const donP = document.createElement('ol');
   function handleDeletebtn(e) {
    e.preventDefault();
    const doneDiv = document.querySelector("#done"); 
   
   donP.className = "donelist"; 
   doneDiv.appendChild(donP);

   // li element is created. 
    const toList = document.createElement('li');

   // Removes the button from the list item. 
    const removetask = e.target.parentNode;

    // Where the list item will be stored. 
    toList.textContent =removetask.textContent.replace("Done", "");//replacing "Done" with an empty string.

    // Append the p element to div. 
    removetask.remove();
    donP.appendChild(toList); 
    e.target.parentNode.remove(); //Task is removed from the list 
}
handleDeletebtn;


function footerSection(){
const footer = document.getElementById('footercopyright');
if(footer){
    const PresentYear = new Date().getFullYear();
    const text = ` Copyright &copy;${PresentYear}, All rights reserved `;
    footer.innerHTML = text; 
}
}
footerSection;

});
