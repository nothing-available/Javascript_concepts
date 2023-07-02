const user = {
    username : "Sumit",
    price : 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // this is used in current context mean in this scope
        console.log(this);
    }
}

user.welcomeMessage()

user.username = "sam"   //contexr change

user.welcomeMessage()

console.log(this); //this show empty b/c nothing in context

function chai(){
    let username = "Sumit"
    console.log(this.username);
}
chai()

const chai1 = function(){
    let username = "Sumit"
    console.log(this.username);
}
chai1()

//-----------------arow function ---------------

const chai2 = () =>{
    let username = "Sumit"
    console.log(this.username);
}

chai2()


// const addTwo = (num1,num2) => {
//     return num1 + num2 
// }
// console.log(addTwo(3,4))

// implicit return --> for single line statement return

const addTwo = (num1,num2) => ( num1 + num2 )

console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]

// myArray.forEach(function () {})







