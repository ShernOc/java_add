//Amazon Cart : 
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

// console.log(amazonCart(times))



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

// Get to have this on the books: for blog creation: 
const products = [
    {id: 1, Subjet:"shoes",price:1090,quantity:0},
    {id: 2, product:"basket",price:2090,quantity:0},
    {id: 2, product:"t-shirt",price:799,quantity:0},
    {id: 2, product:"toaster",price:1899,quantity:0}, 
    {id: 2, product:"Television", price:3000,quantity:0}
]













































