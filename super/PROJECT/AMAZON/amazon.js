// AMAZON CART 

// Store the product in an array/object
// added a nested objects that checks the rating of items
let products = [
    {id: 1, item:"shoes",price:1090,quantity:0, 
        rating:{
        stars:4.5,
        count:87
    }},

    {id: 2, item:"basket",price:2090,quantity:0, 
        rating:{
        stars:3.2,
        count:30
    }},
    {id: 2, item:"t-shirt",price:799,quantity:0, 
        rating:{
        stars:2.1,
        count:20
    }},
    {id: 2, item:"toaster",price:1899,quantity:0, 
        rating:{
        stars:3.2,
        count:60
    }}, 
    {id: 2, item:"Television", price:3000,quantity:0, 
        rating:{
        stars:5,
        count:100
    }}
]

// To access the products we use the dot notation in an array 

console.log(products.rating.count)

// Want to get the products, 1, 


// products
const shoe = 1090;
const basket = 2095;
const toaster = 1899; 
const t_shirt = 799;
const shipping_cost = 499;
const tax = 0.1

//Variable for Quantity 
let cartQuantity =0;

// Function for top section: 
// Display items: 

 function totalItems(){
    const basket_span = document.querySelector('.js-basket-span').innerText = ` Price: $ ${basket/100}`;
    const shoe_span = document.querySelector('.js-shoe-span').innerText = ` Price $ ${shoe/100}`;
    const toaster_span = document.querySelector('.js-toaster-span').innerText =` Price $ ${toaster/100}`;
    const t_shirt_span = document.querySelector('.js-shirt-span').innerText = `Price $ ${t_shirt/100}`;

    return basket_span;
 }

 console.log(totalItems())
    
// I want to display the quantity that have pressed on the button  * the price of the item  
// once an item is selected it now able be added as an item.


//BUTTONS CALCULATION 
function displayQuantity(){
    const item = document.querySelector('.js-show-quantity').innerText = `Cart quantity: ${cartQuantity}`;
    return item;
}
console.log(displayQuantity())

const maxItems = 10; // maximum items in the cart
// times (number of times (+1,-1,) its a parameter that hols +1,-2, ...)
function amazonCart(items){
    displayQuantity();// updates the quantity in the paragraph, 
    if(cartQuantity + items > maxItems){
        return alert('Cart is full maximum items = 10')
    }else if (cartQuantity + items < 0){
         alert("Cart cannot be zero");
        return cartQuantity;
    }
    
    cartQuantity += items ; 
    amazonCalculation(); // the total calculations or quantities
    return cartQuantity;
}

console.log(amazonCart(0))

// Take the number of quantity in the amazon cart, 
function amazonCalculation(){
    // Pass the amazon cart that updates the items; 
    // Calculate the quantity
    const quantity = cartQuantity;
    console.log(quantity) // 
   
    // calculate the items * amount of the item 
    let shoe_item =quantity *shoe; 
    console.log(shoe_item);

    // //Array of items
    // const items_array = [shoe_item] 
    // //Total cost shoe + basket
    // const items = items_array.reduce((a,b)=>a+b,0) 
    // console.log(items)//4275

    // // Show items in an array 
    // const size = items_array.length 
    // console.log(size)


// Total + shipping 
    const t_shipping = (shoe_item + shipping_cost)/100;
    console.log(t_shipping)//4774 
    
    // tax 
    const total_tax = (t_shipping * tax) ;
    console.log(total_tax.toFixed(2))// 477.4000 

    // Total payment 
    const total_payment = (Math.round(t_shipping + total_tax));
    console.log(total_payment) //5251.3


//JS DISPLAY IN THE DOM  
     // how to pass the items of a functions to the current function: 
    //totalItem(); 
    const size_items = document.querySelector('.js-items').innerHTML = `Items (${quantity}): $${shoe_item/100}`;
    const ship = document.querySelector('.js-ship').innerText = `Shipping & handling: $${shipping_cost/100}`;
    const b_cost = document.querySelector('.js-before-tax').innerText = `Total before tax: $${t_shipping}`;
    const taxe = document.querySelector('.js-tax').innerHTML = `Estimated tax(10%): $${total_tax.toFixed(2)}`; 
    const total_cost = document.querySelector('.js-total').innerHTML =`Order total: $${total_payment.toFixed(2)}`;

    return total_payment ;// 52.51
}

console.log(amazonCalculation())


































