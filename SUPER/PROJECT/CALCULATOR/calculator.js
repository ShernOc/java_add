// Calculator; 

// update calculator function
let calculation = ""; 
// sign is the parameter = ('8')
  // parseFloat(): converts string to numbers 
function updateCalculator(sign){
  let number = calculation += sign;
  return number;
  
}

// console.log(updateCalculator('+'))

function equalSign(){
  let calculations = parseFloat((eval(calculation))); // two decimal points 
  console.log(`Total= ${calculations}`)
}


// Display the results // DOM manipulation 
function display(){
  const showCalc = document.querySelector('.js-calculator').innerText = `Results:\n Show the calculation down here such as \n 2+3 = 5: `
  return showCalc; 
}

console.log(display());

// TO DO: 
// How do i do the delete button: 
// Display the Calculator on the website; and not the console? 

//Small discovery: 
function calcDivide(number){
  // parseFloat(convert string to number)
    //.toFixed(3): specifies how many decimal here (3)
    number = parseFloat(number).toFixed(2)
    if (!isNaN(number) && number !==0){
       return results = calculation /= number;
    }    
}
//
