//>,<,>=,<=,==,!=

console.log(null>0);
console.log(null==0);
console.log(null>=0);

//reason is that the equality check(==) and comparisions (>,<,>=,<=)work differently
//comparisions convert null to a number treating it as 0
//therefore:1=>false,2=>false and 3=>true

//=== this is strict check, checks the datatype also

console.log("2"==2);//true
console.log("2"===2);//false

/* overall,comparisions between different datatypes is a bit troublesome and should be avoided and also cant be predicted which is why typescript is better ...hehe */