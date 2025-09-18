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

console.log(page());


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
function doc(){
    const bod = document.body.innerHTML = alert('Welcome!');
    return bod;
}
console.log(doc());

// LESSON 5; 

// Variables: 
let quality = 0; // Allows us to save the variable 
let results = quality + 1 ; 

console.log(results)


//Amazon Cart
let quantity = 0; // starting
const maxItems = 10; // the Maximum items in a cart 
// times = number or increase or decrease (+1, -1) // parameter
function amazonCart(times){
    if (quantity + times> maxItems ){
        return alert('Cart is full')
    }else if (quantity + times <0){
        return alert('add an item')
    }else{
        return quantity += times }
}; 

console.log(amazonCart(times))



//Amazon Function
function amazonCalculation(){
    // Pass the display Quantity; 
    displayItems();
    //How to add the quantity to the application. 
    // Calculate the quantity
    const mes = displayItems() * shoe
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

console.log(amazonCalculation(displayItems))


//SHOW QUANTITY

/*add to cart = (+=1);
+2 
remove from cart = (-=1)
*/
// console.log(amazonCart());












































