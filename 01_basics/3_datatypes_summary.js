/*
    JavaScript is a ****dynamically typed language****. This means that variable types are determined at runtime, and you can assign values of different types to the same variable without explicitly specifying the variable's type.
 */

//primitive
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100//number
const scorevalue=100.3//number

const isLoggedIn=false//boolean
const temperature=null//null--->typeof:object
let Email;//undefined

const id=Symbol('123');
const anotherId=Symbol('123');//returns a new unique symbol value
console.log(id===anotherId);


//References(Non primitive)
//Arrays,Objects,Functions
//return type of non primitive types will be object

const mysticfalls=['vampires','warewolves','witches','hybrid','originals']

let myobj={
    name:"Bhavya",
    age:18,
}//key value pairs.Can be any type even obj or func or array

const myfunc=function(){
    console.log("Hello World");
}
console.log(myfunc());