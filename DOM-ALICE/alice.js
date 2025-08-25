// DOMContentLoaded event listener 
document.addEventListener('DOMContentLoaded',()=>{  
    // changed the background color: 
    document.body.style.background = "black";
    
    // replacing id = js-main-div to js-birthday
    function changeMainDiv(){
        // header  element with a  class id alice.
            const mainDiv = document.getElementById("js-main-div");

            // new div
            mainDiv.id="js-birthday";
        }
   
    // grab the header; 
    function header() {
        // calling the Main div 
        changeMainDiv(); 

        // grab the element first div
        const newDiv =document.getElementById("js-birthday"); 
    
        // created a header for the page / by appending a header child
        const firstHeader = document.createElement("h1");
        
        // header id 
        firstHeader.id="first-header";
        firstHeader.className ="js-first-header"; 
        newDiv.appendChild(firstHeader)

        // New Header 
        firstHeader.textContent = "GUESS THE DAY!";

        // Styling the font color of h1
        firstHeader.style.color = "#f765b8";
    }

    // calling the header function 
console.log(header());


// image section 
function image(){
    // calling the header: 
    // header();
    // get the h1 element
    const newHeader = document.querySelector('.js-first-header');

    // create an image element
    const firstImage = document.createElement('img');
    firstImage.className='js-cake-image';
    firstImage.src="images/cake.png";
    firstImage.alt="IMAGE OF A CAKE"; 
    firstImage.height = "250";
    firstImage.width= "300"
    
    // append the image below the firstHeader
    newHeader.append(firstImage);
}

// calling the image
image(); 


// main element
function mainInfo(){
// get the main div
    const mainDiv = document.getElementById("js-birthday");
    const newMainElement = document.createElement("main");
    newMainElement.id = "main";
    newMainElement.className = 'js-new-main'

    // create an p element with id of info that holds all the info
    const firstParagraph = document.createElement("p");
    firstParagraph.className ="js-first-paragraph";
    firstParagraph.id='info'
    
    firstParagraph.innerHTML = "OMG!! You are 30 years old! <br> You don’t understand how special you are for me my sister. You are one of those persons in my life that I, with my whole heart trust you."
    
    // append the main and the paragraph
    newMainElement.appendChild(firstParagraph);
    mainDiv.appendChild(newMainElement);  

    //event listener on mouseover/mouseout on the main paragraph 
    // show the paragraph 
    firstParagraph.addEventListener("click", showPara);

    function newPara(){
    // New paragraph that holds the birthday text. 
    const p2 = document.createElement("p"); 
    p2.className= "js-second-paragraph"; 
    p2.textContent = "HAPPY BIRTHDAY ALICE"; 
    p2.style.color = "#f765b8"; 
    p2.fontSize = "40px"; 
    p2.fontWeight ="bold";
    p2.style.display = "block"; 
    
    e.target.appendChild(p2);  //appending the p2 to main paragraph 
    }

    
    // event handler: 
    function showPara(e){
        let m = document.querySelector('.js-second-paragraph');
        for(let m = 0; m<=3;){
        e.target.ChildNode.remove();
    } 
}

    console.log(showPara(newPara));
    
    for(let m=0; m<=1; m++){
    return e.target.appendChild(p2)
}

}

//calling now the main. 
mainInfo(); 


const comment = ()=>{
    const comments = document.querySelectorAll(".comments");
    comments.innerHTML='Wow your are amazing'
    
}

comment();

// footer element with class of footer





});













