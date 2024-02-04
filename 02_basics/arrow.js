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

console.log(this);//gives an empty obj but in browser console it will be window object

// function showry(){
//     console.log(this);//something is there in 'this'
// }
// showry()

// function showry(){
//     const user='shahriyaar'
//     console.log(this.user);//gives undefined
// }
// showry()