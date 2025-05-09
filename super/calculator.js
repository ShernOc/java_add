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


