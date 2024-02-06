//Immediately Invoked Function Expressions(IIFE)
//creating a new scope so that they are no longer a part of global scope
//()()

//1st ()=>function definition 
//2nd ()=>function execution

(function sayhello(){
    //named iife
    console.log(`Hello Everyone`);
})();
//semi colon is mandatory to end an iffe otherwise the next iffe cannot be executed and throws an error

( (name)=>{
    //name is the argument
    //unname iife
    console.log(`This is ${name} from karimnagar`);
})('BhavyaSri Kanchi')//just as we pass parameters while execution