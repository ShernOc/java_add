console.log('VARIABLE HTML')

// Cart quantity 

let cartQuantity = 0; 

function ShowQuantity(){
  console.log(`Cart quantity:${cartQuantity}`)

}
// Add to Cart
let results = ''; 

function AddCart(results){
  // reassigned a cart quantity
  // if items are 10 
  // ShowQuantity(); // updates the quantity so we 
  const maxItems = 30; // maximum items in the cart 
  if(cartQuantity + results > maxItems){
    return alert(`you have ${cartQuantity} items in a cart`)
  }else if (cartQuantity + results < 0){
    return alert(`You have ${cartQuantity} \n add items in your cart `)
  }else {cartQuantity = cartQuantity + results}
  
  console.log(`Cart quantity: ${cartQuantity}`) ; 
}

