let calculation ="";

function calculator(number) {
    const adds = calcAdd(number);
    //const mins = calcMinus(number);
    // const multip = calcMultiply(number)

    return adds;
  }

console.log(calculator('1'))

function calcAdd(number) {
    return (calculation += number);
  }

  function calcMinus(number) {
    return (calculation -= number);
 }

  function calcMultiply(number) {
    return (calculation *= number);
  }

  function calcModulus(number) {
    return (calculation %= number);
  }

  function calcMultiply(number) {
    return (calculation *= number);
  }

  function calcDivide(number) {
    return (calculation /= number);
  }



  // functions
function calcAdd(number){
    return calculation += number;
}

function calcMinus(number){
    return calculation -= number;
}

function calcTimes(){
    return calculation *=number;
}

function calcDivide(number){
    number = parseFloat(number)
    if (!isNaN(number) && number !==0){
       return results = calculation /= number;
    }    
}

// delete button
function calcDelete(calculation){
    results = calculation;
}

function calcPercentage(number){
    return results = calculation %=number;
}

// total 
function calcTotal(calculation){
    calculation = eval(calculation);
}




// console.log(calcAdd(2));//17
// console.log(calcMinus(2));//13
// console.log(calcTimes(2));//30
// console.log(calcDivide(5));//3






