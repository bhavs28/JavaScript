//this-->refers to the current state
const user={
    name:'bhavya',
    price:999,
    welcomemsg:function(){
        // console.log(`${this.name},Welcome to our course`);
        // console.log(this);
    }
}
user.welcomemsg();
user.name='anunya'
user.welcomemsg()

//console.log(this);//gives an empty obj but in browser console it will be window object

// function showry(){
//     console.log(this);//something is there in 'this'
// }
// showry()

const chai=function(){
    username='bhavs'
    //console.log(this);
    console.log(this.username);
}
chai()

const arrowfun=()=>{
    username='kanchi';
    console.log(this.username);
}
arrowfun()

const add=(num1,num2)=> num1+num2;//implicit return
const add1=(num1)=>(num1+1)//using brackets ..another way
//eg:- ({dsakjd:bdkcsdh})without () it wont return the obj
console.log(add1(2));