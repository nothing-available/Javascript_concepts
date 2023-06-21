const mySym = Symbol("smt")
const user = {
    name : "Sumit",
    [mySym] : "abc",
    "Full Name" : "Sumit kumar",
    age : 18,
    location : "Begusarai",
    email : "smtkur31@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(user.email)
console.log(user["Full Name"])
console.log(user[mySym])

user.email = "imcaffiene@gmail.com"

console.log(user)

user.greeting = function(){
    console.log("heelo");
}
user.greeting2 = function(){
    console.log(`heelo,${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());
