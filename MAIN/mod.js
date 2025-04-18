

describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(num3).to.be.a('number'),
      expect(num4).to.be.a('number')
      expect(mod).to.eq(4)
    });
  });

// MOD
function mod (num3, num4){
 let equation = num3 % num4 ;  
 return equation 
}
console.log(mod(16,6)); // Returns num3 is not defined. and is not passing . 

// Used and passed: 
let num3 = 16; 
let num4 = 6; 
let mod = num3 % num4 

console.log(mod); 

/* Also this works 
let randoms = 10
let num3 = 24
let num4 = 5
let mod = num3 % num4

console.log(randoms(num3,num4)); */

// Why is it not running? 
const mod = function Modequation(num3, num4){
  return num3 % num4; 
}
mod(16,6);

