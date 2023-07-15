// for in --> for object
const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'by apple'
}

for (const key in myObj){
    
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// for in for array

const programming = [ 'js','cpp','java']

for(const key in programming){
    console.log(programming[key])
}

// for in for map --> not iterable

// const map = new Map()
// map.set('IN', "india")
// map.set('USA', "America")
// map.set('Fr', "France")
// map.set('IN', "india")

// for(const key in map){
//     console.log(key)
// }

