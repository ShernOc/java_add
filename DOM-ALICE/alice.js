// DOMContentLoaded event listener 
document.addEventListener('DOMContentLoaded',()=>{  
    // background color: 
    document.body.style.background = "black";
    
    
    // replacing alice id to birthday id
    function changeFastDiv(){
        // header  element with a  class id alice.
            const alice = document.getElementById("js-main-div");

            alice.id="js-birthday";
        }
   
    // grab the header; 
    function header() {
        changeFastDiv(); 

        const divBirthday =document.getElementById("js-birthday"); 
    
        // header for alice 
        const header = document.createElement("header");
        header.id="js-header";
        divBirthday.appendChild(header)
    
        // h1 created
        const h1header = document.createElement("h1");
        h1header.className ="h1header"; 
        
        h1header.textContent = "GUESS THE DAY!";

        // Styling the font of header 
        h1header.style.color = "#f765b8";
        
        // appending the work 
        header.appendChild(h1header);
    }



console.log(header());


// image/ log section 
function logo(){
    const divBirthday = document.getElementById("js-birthday");
    
    // div element with id of logo 
    const logo = document.createElement("div");
    logo.id ="logo";

    // image creation 
    const img = document.createElement("img");
    img.className="img"; 
    img.src = "/images/pexels-vidalbalielojrfotografia-14457389.jpg"; 
    img.alt="IMAGE OF ALICE"; 
    img.height = "250";
    img.width= "300"

    logo.append(img); 
    divBirthday.appendChild(logo);
}
logo(); // calling the logo 

// main element
function main(){
    const divBirthday = document.getElementById("js-birthday");
    const main = document.createElement("main");
    main.id = "main";
    
    // p element with id of info
    const p = document.createElement("p");
    p.className ="psection";
    
    p.innerHTML = "OMG!! You are 29 years! <br> You don’t understand how special you are for me my sister. You are one of those persons in my life that I with my whole heart trust you."
    
    // append the main
    main.appendChild(p);
    divBirthday.appendChild(main);  

    
    //event listener on mouseover/mouseout on the main paragraph 
    // show the paragraph 
    p.addEventListener("click", showPara);

    function newPara(){
    // New paragraph that holds the birthday text. 
    const p2 = document.createElement("p"); 
    p2.className= "p2"; 
    p2.textContent = "HAPPY BIRTHDAY ALICE"; 
    p2.style.color = "#f765b8"; 
    p2.fontSize = "40px"; 
    p2.fontWeight ="bold";
    p2.style.display = "block"; 
    
    e.target.appendChild(p2);  //appending the p2 to main
    }

    // event handler: 
    function showPara(e){
        let m = document.querySelector('.p2');
    for(let m = 0; m<=3;){
        e.target.ChildNode.remove();
    } }

    console.log(showPara(newPara));
    
    // for(let m=0; m<=1; m++){
    // return e.target.appendChild(p2)
}

main(); //calling now the main. 

});


const comment = ()=>{
    const comments = document.querySelectorAll(".comments");
    comments.textContent

}

// footer element with class of footer










