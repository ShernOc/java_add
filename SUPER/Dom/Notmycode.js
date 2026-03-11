document.addEventListener('DOMContentLoaded', function(){
    const shoppingList = document.getElementById("shoppingList"); // input button 
    const inputForm = document.getElementById("form"); // form that has input 
    const resetButton = document.getElementById("resetButton"); // clear button
    const newItemInput = document.getElementById("newItem"); // add button 

    function createButtonContainer2(){
        const buttonContainer2 = document.createElement("div");
        buttonContainer2.classList.add("buttonContainer2");
        
        const editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.classList.add("edit-button");
        
        const purchaseButton = document.createElement("button"); // Corrected element creation
        purchaseButton.textContent = "purchase";
        purchaseButton.classList.add("purchase-button");

        buttonContainer2.appendChild(editButton);
        buttonContainer2.appendChild(purchaseButton); // Corrected appending of purchaseButton

        return buttonContainer2;
    }

    function addNewItem(event){
        event.preventDefault();
        const newItemText = newItemInput.value.trim(); // Corrected accessing input value
        
        if(newItemText === ''){
            alert("Please enter a valid input");
            return;
        }
        // 
        if (newItemText!== ''){
  input.push(newItemText);
  //Put the Array); 
  newItemInput.value = ''; 
}
        
        const newItem = document.createElement("li");
        newItem.textContent = newItemText;

        const buttonContainer2 = createButtonContainer2();
        
        buttonContainer2.querySelector(".edit-button").addEventListener("click", function(){
            const newInput = prompt("Edit", newItem.firstChild.textContent.trim());  
            if (newInput !== null){
                newItem.firstChild.textContent = newInput.trim();
            }
        });
        
        buttonContainer2.querySelector(".purchase-button").addEventListener("click", function(){
            if (newItem.classList.contains("purchased")) {
                newItem.classList.remove("purchased");
            } else {
                newItem.classList.add("purchased");
            }
        });

        newItem.appendChild(buttonContainer2);
        shoppingList.appendChild(newItem);

        newItemInput.value = ''; // Clear input after adding item
    }

    inputForm.addEventListener("submit", addNewItem);

    resetButton.addEventListener("click", function(){ // Corrected resetButton event listener
        shoppingList.innerHTML = '';
    });
});