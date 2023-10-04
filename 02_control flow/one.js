//if
const isuserLoggedIn = true
const temp = 31
if(temp === 31){
    console.log("less than 40")
}
else{
    console.log("greater than 40")
}

//If the condition is false then code under the scope is not executed

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

// --------- shorthand notation

const balance = 1000

if(balance > 500) console.log("test");


if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


