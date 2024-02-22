//Promise is an object that represents eventual completion(or failure) of an asynchronous operation

//creating a promise
//we can create directly without storing in variable also

const promiseOne=new Promise(function(resolve,reject){
    console.log('task1 done');
    resolve()
})
//resolve is linked with .then(),if resolve() is mentioned in the promise and .then() later..only then we can consume the promise
promiseOne.then(()=>{
    console.log('Promise consumed');
})

//promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 2 completed');
        resolve()
    },3000)//if this function is resolved only then consumed function will be executed
}).then(function(){
    console.log('promise 2 consumed');
})

//resolve and reject takes paramaters too
//lets take an obj parameter
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Bhavyasri',password:'anu123'})//passed on to .then()
    },1000)
}).then((user)=>{
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve()
        }
        else{
            reject('4:ERROR')
        }
    },1000)
})
.then(()=>{
    console.log('No error and  4 resolved');
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('The promise is either resolved or rejected');
})