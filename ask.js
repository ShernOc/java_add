const  name = prompt("What is your name? ");
const age = Number(prompt("How old are you? "))

function user(name, age ){
    console.log(`Your ${name} is beautiful`)
    if(age>30){console.log("Try something else to study")
    }else{
console.log("Kindly stick to javascript")
    }
} 
console.log(user("sherlyne", 23));


