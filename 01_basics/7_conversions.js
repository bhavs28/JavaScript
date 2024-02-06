let age=33;
console.log("typeof age="+ typeof age);

let age1="33"
console.log("typeof age1="+typeof age1);

let ageinstring=String(age);
console.log("typepf age="+ typeof ageinstring);

let age1innum=Number(age1);
console.log("typepf age1="+typeof age1innum);

//let abc="bhavya"
//let abc=undefined
let abc=null 
let abcinnum=Number(abc);
console.log(typeof abcinnum);
console.log(abcinnum)

//to number conversions
//'33'=>number 
//'bhavya'=>NaN
//true=>1;false=>0
//null=>0
//undefined=>NaN

let something=1;
let boolsomething=Boolean(something);
console.log(boolsomething);

//empty string or 0 or null or undefined=>false
//non empty strings or 1=>true