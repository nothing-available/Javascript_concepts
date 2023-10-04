let a = 100


// {} ---> scope

if (true){
   let a = 10
   const b = 22 
   console.log("Inner:",b,a)
}
console.log(a);


function one(){
    const username = "Sumit"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

if(true){
    const username = "Sumit"
    if(username === "Sumit"){
        const website = " my web"
        console.log(username + website)
    }
    // console.log(website)
    
}
// console.log(username)

//++++++++++++ interesting +++++++++++++++++
console.log(addone(5))
function addone(num){//----------> basic fun
    return num + 1
}
 
 
console.log(addtwo(5)) //----> not run b/c before decleration not possible
 const addtwo = function(num){ //----> expression
     return num + 2
}
