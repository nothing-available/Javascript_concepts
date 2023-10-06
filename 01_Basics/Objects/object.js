const mySym = Symbol("smt") // use of symbol

// object delcaration
const user = {
    name: "Sumit",
    [mySym]: "abc", //declare symbol
    "Full Name": "Sumit kumar",
    age: 18,
    location: "Begusarai",
    email: "smtkur31@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(user.email) // access the property of object
console.log(user["Full Name"]) // access the property of object (another way)

console.log(user[mySym]) // acess the symbol

user.email = "imcaffiene@gmail.com" // update the property of object

console.log(user)

// Object.freeze(user) // freeze the object

user.greeting = function(){ 
    console.log("heelo");
}
user.greeting2 = function(){ // reference the name of object in function
    console.log(`heelo,${this.name}`);
}

console.log(user.greeting); // -->  this means fun isn't execute only fun reference is passed

console.log(user.greeting());

console.log(user.greeting2());
