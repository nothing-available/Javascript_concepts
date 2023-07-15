// for each

const coding = ['js','ruby','cpp','ruby','']
// call_back fun has no name
coding.forEach( function (item) {
    console.log(item);
})
//another way of function dec
coding.forEach( (val) => {
    console.log(val);
})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})


// for each loop on array of object
const myCoding = [
    {
        langName : "js",
        langFile : 'js'
    },
    {
        langName : "python",
        langFile : 'py'
    },
    {
        langName : "C++",
        langFile : 'cpp'
    },
    ]
    
myCoding.forEach((item)=>{
    console.log(item.langName);
})

