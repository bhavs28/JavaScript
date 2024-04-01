//"use strict";//treats all the JS code as newer version

//alert(3+3);//gives error because this is node ,not browser

/*
    for documentation,mdn and tc39.es websites are used,the 2nd one is the standard one (very deep)
 */


//number=>2 to the power 53
//bigint
//string=>""
//boolean=>true/false
//undefined=>value not assigned
//null=>Standalone value
    //=>It is the representation of an empty value 
//symbol=>unique

//object

console.log(typeof "bhavya"); //string
console.log(typeof undefined);//undefined
console.log(typeof null);//object

// When JavaScript was first created, the typeof operator was designed to return 'object'
// for any value that is a reference type (e.g., arrays, functions, objects). At the time, null was internally represented 
// as the null pointer, which in many systems was represented as the zero bit pattern, or all zero bits. 
// Since the lower bits of any reference type in JavaScript were always zero (due to memory alignment), typeof null ended up returning 'object'.
