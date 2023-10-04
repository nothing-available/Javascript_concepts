// reduce

const myNum = [1,2,3,4]

const myTotal = myNum.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
},0)

console.log(myTotal)

//example

const shopingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'c++ course',
        price: 4999
    },
    {
        itemName: 'java course',
        price: 1999
    }
]

const total = shopingCart.reduce((acc,item)=> acc + item.price,0)

console.log(total);
