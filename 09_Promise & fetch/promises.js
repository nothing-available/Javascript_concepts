const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptogarphy, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); // connect to .then
    },1000)
})

//consumption of promise

promiseOne.then(function(){
    console.log('promise consumed')
})

//--> another way of writing promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn takk 2")
        resolve();
    },1000)
}).then(function(){
    console.log('asyn 2 resolved')
})

//--> another way of writing promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username : 'imcaffiene',
            email : "smtkur31@gmail.com",
        });
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// --> another promisse

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username :'chutiya',
                password : "123"
            });
        }
        else{
            reject('error: chutiya saala')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('The promise is either resolve or rejected'))


// --> promise

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username :'javaScript',
                password : "abc123"
            });
        }
        else{
            reject('error: chutiya saala madharchod phir se try kar')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const user = await promiseFive;
        console.log(user);
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/nothing-available');
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log('E:',error);
//     }
// }
// getAllUsers();

// --> another way in .then and .catch method

fetch('https://api.github.com/users/nothing-available').then((response)=>{
    return response.json();
}).catch((error)=>{
    console.log('E:',error);
}).then(data=>{
    console.log(data);
})

/* fetch ------->web Browser /node --> network request 
     \
      \
       \---> (this comes first) data - reserve a space in memory for the data --> onfulfilled[resolve] /  and onrejected[reject]


       if network request is successfull --> onfulfilled[resolve] --> 

       if network request is failed --> onrejected[reject] -->
*/