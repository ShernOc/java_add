console.log('VARIABLE HTML')

// Cart quantity 
let cartQuantity = 0; 
// Items: 

const Vaseline = 4350;
const Shoes = 2000;
const cost = (Vaseline + Shoes)/100; 
console.log(`Cost ${cost}`); 
const tax = 0.1; 
const totalCost = cost + tax; 
console.log(`Total Cost: ${totalCost}`); 

// showQuantity and remove cart button 
function ShowQuantity(stuff){
  if(stuff > 0 ){
    console.log(`Cart quantity:${cartQuantity}`)
  }else if (stuff == 0 ){
    cartQuantity = 0 ; console.log(`Cart was reset \n Cart Quantity : ${cartQuantity}`);
    
  } else {console.log(`Cart Quantity: ${cartQuantity}`) ; 
  }}

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

// CALCULATOR 











let calculation = ''; 
function Calculation(){
  if(calculation + results){
    return calculation += results ;
  }else {
    return calculation -= results; 
  }
  console.log('life')
}



