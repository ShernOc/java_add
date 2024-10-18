//HAPPY BIRTHDAY ALICE 
// header  element with a  class id alice.

function header() {
    const alice = document.getElementById("alice");
    const header = document.createElement("header");
    const h1header = document.createElement("h1");

    header.append(h1header);

    h1header.textContent = "HAPPY BIRTHDYA ALICE";

    alice.append(header);
}

header();

// main element with id of main 
function main(){
    const alice = document.getElementById("alice");
    const mainsection = document.createElement("main");
    
    // p element with id of info
    const psection = document.createElement("p");

    mainsection.append(psection);

    psection.textContent = "It must feel nice to be 29 years old Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores minima itaque magnam quaerat sit reprehenderit quae assumenda in, repudiandae quam nam laborum dolore repellendus, consectetur qui sed explicabo earum."

    alice.append(mainsection); 
}

main();

// div element with id of logo 

function logo(){
    const alice = document.getElementById("alice");
    const logo = document.createElement("div");
    logo.id ="logo";

    // image createion 
    const img = document.createElement("img");
    img.src = "images/cofee2.jpg"; 
    img.alt="IMAGE OF ALICE"; 

    logo.append(img); 


    alice.append(logo);

}

logo(); // calling the logo 


// footer element with class of footer










