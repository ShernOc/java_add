console.log("Hello world"); 
// get element by ID
const header= document.getElementById("header");  
console.log(header);

// get element by ClassName 

const sections = document.getElementsByClassName("section"); 
console.log(sections.length); 

// get element by TagName 
const div = document.getElementsByTagName("div")[2];
console.log(div);

//We'd get back a list of nodes corresponding to:<li>1</li>, <li>2</li>, <li>10</li>, <li>11</li>

const main = document.getElementById("app").querySelectorAll("ul.ranked-list li");

console.log(main);

/* to create a new DOM node element in javascript you call :  
1. const element = document.createElement("tagName") tag is valid HTML tag. 
1.You call :  const element = document.createElement("div");
2. You Append : To get the element to appear in DOM you append by append(), append element ( div, h1, p ) to body to stard 
eg: document.body.append(element); 

// All this is done at the console 
1. const element = document.createElement("div"); // we created a div element. 
2. document.body.append(element); // appending the div element to the body element. 
3. const ul = document.createElement("ul"); // created an ul (unordered list ) element. 
4. for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li); // append/ put the li under the ul. 
}
5.element.append(ul); // Append the ul to the div

6. to change the li element we use the (textContent) :li.textContent = "Hi there!";

element.remove() = ul.remove();will remove everything from uls 

removeChild()  // will remove a particular section 
someElement.removeChild(someChildElement); */

const firstHeading = document.querySelector("#firstHeading");

  What code would you need to write to delete the h1#firstHeading element?