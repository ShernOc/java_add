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

// AMAZON CART 
// have 2 socks
const shoe = 1090;
const basket = 2095;
const shipping_cost = 499;
//const tax = 0.1

const stuff= shoe+basket+shipping_cost
console.log(stuff)

function totalItem(){
    let shoe_item = 2*shoe; 
    let tax = 0.1;

    //Total cost shoe + basket
    const items = [shoe_item,basket].reduce((a,b)=>a+b,0) 
    console.log(items)//4275
// Total + shipping 
    const t_shipping = items + shipping_cost
    console.log(t_shipping)//4774 
    
    // tax 
    const total_tax = t_shipping * tax 
    console.log(total_tax)// 477.4000 

    // Total payment 
    const total_payment = t_shipping + total_tax 
    console.log(total_payment) //5251.3

    return total_payment/100;
}
console.log(totalItem()) // 52.61




















