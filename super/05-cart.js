// Mediate friendly: 

// Cart Quantity:

// 1. increases the quantity  of items and displays them in the console;

// 2. Display the items in on the website: so the use can see. 

let cartQuantity =0; 

// Max quantity in the cart = 10:  
const maxItems =10; 

function maxCartItems(items){
  if(cartQuantity + items > maxItems){
    alert('Cart if full');
    return cartQuantity
  }else if(cartQuantity + items < 0){ 
    alert('Add items in cart cart is empty')
    return cartQuantity;
  }

    cartQuantity+=items;

    return cartQuantity;
  }


// this was the previous code in the button: but we are getting undefined: 
// cartQuantity +=4; 
//  if (cartQuantity<=10){
//     console.log(`Cart quantity:${cartQuantity}`) 
//   }else{
//     alert('The Cart is full')
//   }

  






  










