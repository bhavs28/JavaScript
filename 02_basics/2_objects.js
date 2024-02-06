//can be decalred in 2 ways
//literals-->never singleton
//constructor-->always singleton obj is formed

//object literals

const mysym=Symbol("key")
const user={
    first_name:"Bhavyasri",
    'last name':"Kanchi",
    age:20,
    email:"itzbhavyasri@gmail.com",
    [mysym]:123,
}
console.log(user);
// console.log(user.email);
// console.log(user['last name']);

// Object.freeze(user);
// user['last name']='abcdbskfj'
// console.log(user['last name']);//no change ..will be kanchi only

user.greet=function(){
    console.log("Hello Everybody!");
}
//console.log(user.greet);//returns functions reference but doesnot get executed
console.log(user.greet());