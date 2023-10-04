function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}
sayMyName()

// function addTwoNum(num1, num2){  //num2,num1 --> parameters
//     console.log(num1 + num2);
// }
// const result = addTwoNum(3,null) //3,null ---> arguments

function addTwoNum(num1, num2){  
    
    // let result = num1 + num2
    
    // return result
    
    return num1 + num2
}
const result = addTwoNum(3,5) 

console.log("Result : ", result);


function loginuser(username){
    return `${username} just logged in`
}

console.log(loginuser("Sumit")) 


function calCartPrice(...num1){ //... -> rest operator
    return num1
}
console.log(calCartPrice(2,4,32,111))
/////////
const user = {
    username : "Sumit",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username : "Sumit",
    price : 123
})

const myNewArray = [200,300,384]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))
