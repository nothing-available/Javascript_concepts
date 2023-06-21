// Singleton object
//const tinderUser = new Object()


 //non singleton object
 const tinderUser = {}
 
 tinderUser.id = "123abc"
 tinderUser.name = "Caffiene"
 tinderUser.isLoggedIn = false
 
//  console.log(tinderUser);

const regularUser = {
    
    email : "abc@gmail.com",
    
    fullName : {
        userFullName :{
            firstName : "Sumit",
            LastName : "Kumar"
        }
    }
}
console.log(regularUser.fullName.userFullName.LastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)

// console.log(obj4);


const obj4 = {...obj1,...obj2,...obj3}  // spred operator

console.log(obj4);

const user = [
    {
        id :1,
        email : "@123"
    },
    {
        id : 2,
        email:"@234"
    },
    {
        id:3,
        email:"@567"
    }
]

user[1].id

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
const {courseInstructor : teacher } = course  //destructure
console.log(teacher)





 

 
 
