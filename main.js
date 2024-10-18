// id = greetings
//class = banner
// changes the header to "DEMO OF JAVASCRIPT"
function changeHeader() {
    const ids = document.getElementById("greeting") // gets the element with id of greetings 
    greeting.textContent = "DEMO OF JAVASCRIPT DOM";
    console.log(greeting)
}
changeHeader();

// class element: banner 

function changeClass() {
    const section = document.getElementsByClassName("banner"); // class selector of banner. 
    const schild = section[1]; // second class of banner. 
    const h1 = schild.getElementsByTagName("h1")[0]; // i want to change the contect of h1 in the second banner class. : of sup heading: 
    h1.textContent = "About me"; // from sup to about me. 
    console.log(h1);
}
changeClass(); // calling but not 

// main element holding div children with p tags of hello 
//1. main is a tag
const main = document.getElementsByTagName("main")[0];

// to get the child of main(div) by main.children 
const secondchild = main.children[1]; // second child is at the index of 1. 

// to get the second paragraph of the second div
const p = secondchild.getElementsByTagName("p")[0]// directly on the secondchild
p.textContent = "I just changed the content "

console.log(p); 