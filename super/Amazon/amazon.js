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
const toaster = 1899; 
const t_shirt = 799;
const shipping_cost = 499;
const tax = 0.1
let Quantity =0;

// Function for top section: 
// Display items: 
 function displayItems(){
    const basket_span = document.querySelector('.js-basket-span').innerText = `$ ${basket/100}`;
    const shoe_span = document.querySelector('.js-shoe-span').innerText = `$ ${shoe/100}`;
    const toaster_span = document.querySelector('.js-toaster-span').innerText =`$ ${toaster/100}`;
    const t_shirt_span = document.querySelector('.js-shirt-span').innerText = `$ ${t_shirt/100}`;

    const bt = document.querySelector('.js-input').innerHTML = `${console.log(Quantity)}`

 }

 console.log(displayItems())
    

function totalItem(){
    //How to add the quantity to the application. 
    // Calculate the quantity
    const mes = Quantity * shoe
    console.log(mes)
   
    let shoe_item = 2*shoe; 
    let bask_item = 2*basket;
    //Array of items
    const items_array = [bask_item,bask_item,toaster,t_shirt,shoe_item]
    
    //Total cost shoe + basket
    const items = items_array.reduce((a,b)=>a+b,0) 
    console.log(items)//4275

    // Show items in an array 
    const size = items_array.length 
    console.log(size)


// Total + shipping 
    const t_shipping = (items + shipping_cost)/100;
    console.log(t_shipping)//4774 
    
    // tax 
    const total_tax = (t_shipping * tax) ;
    console.log(total_tax)// 477.4000 

    // Total payment 
    const total_payment = (Math.round(t_shipping + total_tax));
    console.log(total_payment) //5251.3


//JS DISPLAY IN THE CONSOLE 
     // how to pass the items of a functions to the current function: 
    //totalItem(); 
    const size_items = document.querySelector('.js-items').innerHTML = `Items (${size}): $${items/100}`;
    const ship = document.querySelector('.js-ship').innerText = `Shipping & handling: $${shipping_cost/100}`;
    const b_cost = document.querySelector('.js-before-tax').innerText = `Total before tax: $${t_shipping}`;
    const taxe = document.querySelector('.js-tax').innerHTML = `Estimated tax(10%): $${total_tax}`; 
    const total_cost = document.querySelector('.js-total').innerHTML =`Order total: $${total_payment}`;







    return size_items,ship,b_cost,taxe,total_cost,total_payment ;// 52.51




}

console.log(totalItem())

// How to remove the (dots in the li(elements))




























