//LESSON 1. 
const shirt = 10;
const socks = 8; 
const plate = 20;

console.log(typeof(shirt))

function Total_cost(){
    total = (shirt+socks+plate);
    return total
}
console.log(Total_cost())

// How i spend the money
const bank = 100; 
const lunch = 20;
const dinner = 50; 
const earn = 200; 

// Use the Array.reduce to add ([].reduce((a+b)=>a+b,0))

function moneyHave(){
    // const lif= bank+lunch+dinner+earn
    // return lif
    const sum = [bank,lunch,dinner,earn].reduce((partialSum,a)=> partialSum +a,0);
    return sum;
}
console.log(moneyHave())//370

function page(){
   const doc= document.body.innerHTML = alert('blank');
   return doc
}

// console.log(page())

//LESSON 2 
// convert temperature to celsius and Fahrenheit; 
let temperature= 0; 
function celsius(temperature){
    const F = (temperature* 9/5) + 32; 
    const C = (temperature-32)*5/9
    return F;
}
console.log(celsius(-5))

//LESSON 3: 
function string(){
    const names ='Sherlyne';
    alert(`my name is ${names}`);
    return names;
} 

console.log(string())

function order(){
    let coffee = 5.99;
    let bag = 3.98; 
    const total = alert(`Total cost: $${coffee + bag}\n Thank you, come again!`);
    return total
}

console.log(order())

// LESSON 4 
































