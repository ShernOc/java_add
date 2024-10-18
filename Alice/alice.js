//HAPPY BIRTHDAY ALICE 
// header  element with a  class id alice.

// Background color of website using javascript. 
document.body.style.background = "#27fdf5";

function header() {
    const alice = document.getElementById("alice");
    const header = document.createElement("header");
    
    header.div="header";

    const h1header = document.createElement("h1");
    
    h1header.className = "h1header"; 

    // Styling the font of header 
    h1header.style.color = "#f765b8";
    
    h1header.textContent = "HAPPY BIRTHDAY ALICE";


    // appending the work 
    header.append(h1header);
    alice.append(header);
}

header();

// image/ log section 
function logo(){
    const alice = document.getElementById("alice");
    
    // div element with id of logo 
    const logo = document.createElement("div");
    logo.id ="logo";

    // image createion 
    const img = document.createElement("img");
    img.className="img"; 
    img.src = "/images/cofee2.jpg"; 
    img.alt="IMAGE OF ALICE"; 
    img.height = "250";
    img.width= "300"

    logo.append(img); 
    alice.append(logo);

}

logo(); // calling the logo 

// main element with id of main 
function main(){
    const alice = document.getElementById("alice");
    const main = document.createElement("main");
    main.div = "div"
    
    // p element with id of info
    const p = document.createElement("p");
    
    p.className ="psection";

    main.append(p);

    p.innerHTML = "OMG!! You are 29 years! <br> You don’t understand how special you are for me my sister. You are one of those persons in my life that I with my whole heart trust you. Wishing you best 29th birthday to you!"

    // background color 
    p.style.color="black";
    //font size 
     p.style.fontSize="26px";

    alice.append(main); 
}

main();

// footer element with class of footer










