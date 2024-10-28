// Function that updates the day of the week. 
const UpdateWeekday = (day) => {
    let h2 = document.querySelector("h2");
    h2.innerText = day
    h2.id = "day";
    h2.className = day.toLowerCase()
}
console.log(UpdateWeekday("Sunday"))// changes the day from Monday to Sunday


const addImage = (img_url) => {
    let image = document.querySelector("img");
    image.src = img_url;
    image.alt = "cow image";
    image.height = 250;
    image.width = 300;
}
console.log(addImage("/images/pexels-vidalbalielojrfotografia-14457389.jpg"));


// Add an event listerner that takes the submited input text and appends it at the paragraph element feed list;

document.addEventListener('DOMContentLoaded',()=>{
    // grap the form 
    const form = document.querySelector("#todoform");
    const subutton = document.querySelector('.submitbtn');
    const input = document.querySelector('#addtodo')

    subutton.disabled = true; 

    // change the input field  
    // subutton.disabled= input.value.trim()==="";
    input.addEventListener('input',()=>{
        if(input.value.trim()===""){
            subutton.disabled = true; 
            return;
        }
    }
    );

    // Event hander ; form 
    form.addEventListener('submit',(e)=>{ 
        e.preventDefault();
        AddTodo(e.target.addtodo.value); // addtodo is the id of the form  
        // reset the form 
        


        form.reset(); 
        }) 

        
        
});




// create a function that handles toadd list 

const  AddTodo= (todo)=>{ // passes 
    // create the p element that handles the addlist. 
    const ol = document.createElement("ol");
    
    // we have to create a button 
    const btn = document.createElement("button");

    // create a handleevent for the button 
    btn.addEventListener('click',handleDeletebtn)

    btn.textContent= "done"; // the button will be named done 
    const li = document.createElement("li");
    ol.appendChild(li);
    li.textContent = `${todo}`;
    li.appendChild(btn); // append the button to the p element. 
    ol.id= "ordered list";  
    document.querySelector('#addcontainer').appendChild(ol) // appends/ adds p element to the div: todocontainer 
   
};

// created a handledelete event (pass the event, get the parent Node and call in the remove()
function handleDeletebtn(e){
    e.preventDefault();
    e.target.parentNode.remove();

}