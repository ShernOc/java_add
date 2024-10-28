//HAPPY BIRTHDAY ALICE 
// header  element with a  class id alice.

// Background color of website using javascript. 
document.body.style.background = "black"
// "#27fdf5", black 
// get the div element. 



// replacing alice id to birthday id
function changeIdAlice(){
   const alice = document.getElementById("alice");
   alice.id="birthday"

    
}

changeIdAlice(); 

function header() {
    const birthday=document.getElementById("birthday"); 

    const header = document.createElement("header");
    
    header.id="header";

    const h1header = document.createElement("h1");
    
    h1header.className ="h1header"; 

    // Styling the font of header 
    h1header.style.color = "#f765b8";
    
    h1header.textContent = "GUESS THE DAY!";


    // appending the work 
    header.append(h1header);
    birthday.append(header);
}

header();

// image/ log section 
function logo(){
    const birthday = document.getElementById("birthday");
    
    // div element with id of logo 
    const logo = document.createElement("div");
    logo.id ="logo";

    // image createion 
    const img = document.createElement("img");
    img.className="img"; 
    img.src = "/images/pexels-vidalbalielojrfotografia-14457389.jpg"; 
    img.alt="IMAGE OF ALICE"; 
    img.height = "250";
    img.width= "300"

    logo.append(img); 
    birthday.append(logo);

}

logo(); // calling the logo 

// main element with id of main   


   // function that holds in the paragraph upon click 
function para(){
    const birthday= document.getElementById("birthday");
    const newpara = document.createElement("p"); 
    newpara.className= "newpara"; 
    newpara.textContent = "HAPPY BIRTHDAY ALICE"; 
    newpara.style.color = "#f765b8"; 
    newpara.fontSize = "30px"; 
    newpara.fontWeight ="bold";

    birthday.append(newpara); 
    }
// main element

function main(){
    const birthday = document.getElementById("birthday");
    const main = document.createElement("main");
    main.id = "main"
    
    // p element with id of info
    const p = document.createElement("p");
    
    p.className ="psection";
    
    p.innerHTML = "OMG!! You are 29 years! <br> You don’t understand how special you are for me my sister. You are one of those persons in my life that I with my whole heart trust you."

    // background color 
    p.style.color="pink";
    //font size 
    p.style.fontSize="26px";
    
    
    // event listener on click
    p.addEventListener("click", para); 


    main.append(p);
    birthday.append(main); 
}

main();

const comment = ()=>{
    const comments = document.querySelectorAll(".comments");
    comments.textContent

}

// footer element with class of footer










