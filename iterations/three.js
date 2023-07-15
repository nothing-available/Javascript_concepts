// for of

// ["","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5]
//syntax
// for(consy interator of object){
    
// }

for(const num of arr){
    console.log(num);
}

const greetings = "hello Sumit"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "india")
map.set('USA', "America")
map.set('Fr', "France")
map.set('IN', "india")

console.log(map)

for(const [key,value] of map){
    console.log(key,'-',value)
}




