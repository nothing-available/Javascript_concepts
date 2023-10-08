let a = 10
const b = 20
var c = 30

{ } // --> Block Scope

console.log(a, b, c) // 10 20 30





function one() { // --> Function Scope

    const username = "sumit"

    function two() {

        const age = 20

        console.log(username)

    }

    // console.log(age) // ReferenceError: age is not defined --> so age is not accessible outside of two() function
    two()

}

one()


if (true) { // --> Block Scope

    const username = "sumit"

    if (username === "sumit") {

        const website = " google.com"

        console.log(username + website)
    }

    // console.log(website) // ! ReferenceError: website is not defined --> so website is not accessible outside of if() block

}
// console.log(username) // ! ReferenceError: username is not defined --> so username is not accessible outside of if() block


