// // grab the div 
    // const newDiv = document.getElementById("js-birthday");
    
    // // div element with id of logo 
    // const logo = document.createElement("div");
    // logo.id ="logo";

    // // image creation 
    // const img = document.createElement("img");
    // img.className="img"; 
    // img.src = "/images/pexels-vidalbalielojrfotografia-14457389.jpg"; 
    // img.alt="IMAGE OF ALICE"; 
    // img.height = "250";
    // img.width= "300"

    // logo.append(img); 
    // divBirthday.appendChild(logo);
}


// calling the logo 
image(); 



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










