//const tinderUser = new Object() --> singleton object

const tinderUser = {} // literal object

tinderUser.id = "123abc"
tinderUser.name = "caffiene"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {

    email: "abc@gmail.com",

    fullName: {    // ----------------------> nested object
        userFullName: {
            firstName: "Sumit",
            LastName: "Kumar"
        }
    }
}
console.log(regularUser.fullName.userFullName); // access nested object

// combine two object--->

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj0 = Object.assign({},obj1,obj2,obj3)

// console.log(obj0);


// const obj4 = { ...obj1, ...obj2, ...obj3 }  // spred operator

// console.log(obj4);



const user = [
    {
        id: 1,
        email: "@123"
    },
    {
        id: 2,
        email: "@234"
    },
    {
        id: 3,
        email: "@567"
    }
]

user[1].id

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return array of keys
// console.log(Object.values(tinderUser)); // return array of values
// console.log(Object.entries(tinderUser)); // return array of entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor: teacher } = course  //destructure

// console.log(courseInstructor)
console.log(teacher)