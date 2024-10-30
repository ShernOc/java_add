
// id = greetings
//class = banner
// changes the header to "DEMO OF JAVASCRIPT"


function changeHeader() {
    const ids = document.getElementById("greeting");
    // gets the element with id of greetings 
    ids.textContent = "DEMO OF JAVASCRIPT DOM";
    console.log(ids);
}


changeHeader();
// getting class: 
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

// CREATING AND INSERTING DOM NODES 
/*
Create DOM elements programmatically
Add elements to the DOM
Update elements using innerHTML
Change properties on DOM nodes
Remove elements from the DOM 
*/



// header section
// create a div. 
function firstDiv() {
    // get the element with id demo 
    const demo = document.getElementById("demo");
    const newdemo = document.createElement("div.newdemo");
    newdemo.textContent = "New Div"
    // appended the newdemo to demo id 
    demo.append(newdemo)
}
firstDiv();

// HAPPY BIRTHDAY!
function header() {
    const alice = document.getElementById("alice");

    const divo = document.createElement("div");
    
    // append the divo div to alice. 
    alice.append(divo);

    // created h1 element with 
    const h1 = document.createElement("h1");

    // creating new Content 
    h1.textContent = "HAPPY BIRTHDAY ALICE";
    // append the h1 to the div element. 
    divo.append(h1);
}

header(); // calling the header function. 

// Main section. 
function mainsection() {
    const mains = document.createElement("main");
    // created paragraph
    const paragraph = document.createElement("p");

    // Created content for the paragraph
    paragraph.textContent = "OMG ARE YOU NOW 29 YEAR OLD";

    // append the work 
    mains.append(paragraph);

    const alice = document.getElementById("alice");

    alice.append(mains);
}
mainsection();


// const footer = document.createElement("footer.footer");

//Element.classList / remove/add 

className.classList.remove("banner");
className.classList.add("Yess");






