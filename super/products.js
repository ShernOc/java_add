// object: They group values together
const wow = {
  name:'Vaseline', 
  price: 2000,
  name: 'Shoes', 
  price: 1090,
  name: 'Basket', 
  price: 2095,
  name: 'toaster', 
  price: 1890, 
  name: 'T-shirt', 
  price: 799,

  // method that will display the type of animal. 
  displayType0(){console.log(this.name);}

};

// Array: take the prices, Take each price divide by 1000 and then return each product of the work. 
/* 
1. Create a constructor function
2. */


class Prod{
  constructor(name, price, store) {
    this.name = name; 
    this.price = price; 
    this.store= store;
  }
}

// The now specific products 

const myProduct = new Prod('Shoes', '2345', 'Walmart')

console.log(myProduct.name); 

//Using Object.create()method

// const fish = Object.create(wow);
// fish.name = 'Salmon';
// fish.displayType0();

// delete wow.name[2];
// console.log(wow.name);

//for the prices in wow return prices/100: 

/*function prices(){
  for (price in wow){
console.log(`${wow[price]}`)
  }
}

console.log(prices());*/

console.log(wow)


const produce = {
  name: 'socks', 
  price: 1090,
  name: 'basket ball',
  price: 5690
}


console.log(produce)

const product3= {
  name: 'shirt'

}


console.log(product3)








