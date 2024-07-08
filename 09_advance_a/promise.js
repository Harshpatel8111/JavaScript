const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Hello');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promised Finished');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async TWO');
        resolve()
    },1000)

}).then(function(){
    console.log('Async TWO finished');
})

const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:'Harsh',
            Age:'22'
        })
    },1000)
})
promiseThree.then(function(userdata){
    console.log(userdata);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        err = false;
        if(!err){
            resolve({
                course:'JS',
                price:'$200'
            })
        }else{
            reject('ERROR: Data is not retrived successfully')
        }
    }, 1000);
})

promiseFour.then(function(coursename){
    return coursename.price
})
.then(function (price) {
    console.log(price);
})
.catch(function(err){
    console.log(err);
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        err = false;
        if(!err){
            resolve({
                course:'React',
                price:'$200'
            })
        }else{
            reject('ERROR: Data is not retrived successfully')
        }
    }, 1000);
})

async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (err) {
        console.log(err);
    }
    
}
consumePromise()

// async function getUserData() {
//     try{
//         const response = await fetch('https://api.github.com/users/Harshpatel8111')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }
// getUserData()

fetch('https://api.github.com/users/Harshpatel8111')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function (err) {
    console.log(err);
})