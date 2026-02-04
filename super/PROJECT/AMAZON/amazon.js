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
    {id: 3, item:"t-shirt",price:799,quantity:0, 
        rating:{
        stars:2.1,
        count:20
    }},
    {id: 4, item:"toaster",price:1899,quantity:0, 
        rating:{
        stars:3.2,
        count:60
    }}, 
    {id: 5, item:"Television", price:3000,quantity:0, 
        rating:{
        stars:5,
        count:100
    }}
]

// To access the products we use the dot notation in an array 

 console.log(products.id)

// Want to get the products, 1, 

// Amazon Products 
// const shoe = 1090;
// const basket = 2095;
// const toaster = 1899; 
// const t_shirt = 799;
// const shipping_cost = 499;
// const tax = 0.1

// tried to created storeProduct object 
const amazonProducts = 
    {id: 1, 
    item:"shoes",
    price:1090,
    quantity:0, 
    rating:{
        stars:4.5,
        count:87
    },

    id: 2, 
    item:"basket",
    price:2090,
    quantity:0, 
    rating:{
    stars:3.2,
    count:30},

    id: 3, item:"t-shirt",price:799,quantity:0, 
        rating:{
        stars:2.1,
        count:20
    },

    id: 4, item:"toaster",price:1899,quantity:0, 
        rating:{
        stars:3.2,
        count:60
    },

    id: 5, item:"Television", price:3000,quantity:0, 
        rating:{
        stars:5,
        count:100
        }
    }

/*MAIN AMAZON PRODUCT 
 I want to display the quantity that have pressed on the button  * the price of the item  
// once an item is selected it now able be added as an item.

*/



//Variable for Quantity 
let cartQuantity = 0;

// simple storeProduct Object 

// const storeProducts = {
//     shoe:1090/100,
//     basket:2095/100,
//     toaster:1899/100,
//     t_shirt:799/100,
   
// }

// store the items permanently

let storeProducts = JSON.parse(localStorage.getItem('items'))

if (storeProducts === null){
    storeProducts = {
    shoe:1090/100,
    basket:2095/100,
    toaster:1899/100,
    t_shirt:799/100,
   
} }

console.log(storeProducts) // 10.9 


// Display items:
 function displayItems(){
    const basket_span = document.querySelector('.js-basket-span').innerText = `Price:$ ${storeProducts.basket}`;
    const shoe_span = document.querySelector('.js-shoe-span').innerText = ` Price $ ${storeProducts.shoe}`;
    const toaster_span = document.querySelector('.js-toaster-span').innerText =` Price $ ${storeProducts.toaster}`;
    const t_shirt_span = document.querySelector('.js-shirt-span').innerText = `Price $ ${storeProducts.t_shirt}`;

    return basket_span,shoe_span,toaster_span,t_shirt_span;
 }

 console.log(displayItems())


//This shows the quantity 
function displayQuantity(){
    const item = document.querySelector('.js-show-quantity').innerText = `Cart quantity: ${cartQuantity}`;
    return item;
}
console.log(displayQuantity())

// Display the cart quantity
function amazonCart(items){
    const maxItems = 10; // maximum items in the cart
    // times (number of times (+1,-1,) its a parameter that hols +1,-2, ...)

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

// console.log(amazonCart(0))

// Calculate the prices 
// Take the number of quantity in the amazon cart, 
function amazonCalculation(){
  // Pass the quantity from amazon cart
    const quantity = cartQuantity;
    // const quantity = cartQuantity;
    console.log(quantity) // 

    const shipping_cost = 499/100; 
    const tax = 0.1
   
 // calculate the items * amount of the item 
//  let items = ''; 
//     if (items === storeProducts.shoe){
//         quantity*storeProducts.shoe; 
//     }else if (items === storeProducts.basket){
//         quantity*storeProducts.basket; 
//     }else if (items === storeProducts.toaster){
//         quantity*storeProducts.toaster; 
//     }else if(items=== storeProducts.t_shirt){
//        quantity*storeProducts.t_shirt; 
//     }; 

// save the score permanently 
localStorage.setItem('storeProducts', JSON.stringify(storeProducts))

// Main Code 
    let items =quantity*storeProducts.shoe; 
    console.log(items);

    // //Array of items
    // const items_array = [shoe_item] 
    // //Total cost shoe + basket
    // const items = items_array.reduce((a,b)=>a+b,0) 
    // console.log(items)//4275

    // // Show items in an array 
    // const size = items_array.length 
    // console.log(size)
    
// Main Calculation 
// Total + shipping 
    const t_shipping = items + shipping_cost;
    console.log(t_shipping)//4774 
    
    // tax 
    const total_tax = (t_shipping * tax) ;
    console.log(total_tax.toFixed(2))// 477.4000 

    // Total payment 
    const total_payment = (Math.round(t_shipping + total_tax));
    console.log(total_payment) //5251.3


//DISPLAY IN THE ORDER SUMMARY IN THE DOM  
    // how to pass the items of a functions to the current function: 
    //totalItem(); 
    const size_items = document.querySelector('.js-items').innerHTML = `Items (${quantity}): $${items}`;
    const ship = document.querySelector('.js-ship').innerText = `Shipping & handling: $${shipping_cost}`;
    const b_cost = document.querySelector('.js-before-tax').innerText = `Total before tax: $${t_shipping}`;
    const taxe = document.querySelector('.js-tax').innerHTML = `Estimated tax(10%): $${total_tax.toFixed(2)}`; 
    const total_cost = document.querySelector('.js-total').innerHTML =`Order total: $${total_payment.toFixed(2)}`;

    return size_items ;// 52.51
}

console.log(amazonCalculation(storeProducts.shoe))






