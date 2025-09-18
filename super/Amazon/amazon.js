// AMAZON CART 

// have 2 socks
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
 function displayItems(){
    const basket_span = document.querySelector('.js-basket-span').innerText = ` Price: $ ${basket/100}`;
    const shoe_span = document.querySelector('.js-shoe-span').innerText = ` Price $ ${shoe/100}`;
    const toaster_span = document.querySelector('.js-toaster-span').innerText =` Price $ ${toaster/100}`;
    const t_shirt_span = document.querySelector('.js-shirt-span').innerText = `Price $ ${t_shirt/100}`;

    const bt = document.querySelector('.js-input').innerHTML = `${console.log(cartQuantity)}`

    return basket_span;

 }

 console.log(displayItems())
    

function amazonCalculation(){
    //How to add the quantity to the application. 
    // Calculate the quantity
    const mes = cartQuantity * shoe
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

console.log(amazonCalculation())


//SHOW QUANTITY

/*add to cart = (+=1);
+2 
remove from cart = (-=1)
*/

function amazonCart(){
    const item = document.querySelector('.js-show-quantity').innerText = `Quantity ${cartQuantity}`;
    
        if(cartQuantity<=10){
        return cartQuantity +=1;
        }else if(cartQuantity>=10){
        return cartQuantity -=1;
        }else{
        return alert('cart is full'),
        console.log(item)
    
    }


}
console.log(amazonCart());


// How to remove the (dots in the li(elements))






























