const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//Assign works as:Copies the values of source objects to a target object. 
//Returns the target object.

//console.log(Object.assign(obj1,obj2));
//console.log(obj1);//everything will be added into obj1 since it is considered as target

console.log(Object.assign({},obj1,obj2));//therefore {} is given first to consider it as target
//console.log(obj1);

//other way ... spread operator

const obj3={...obj1,...obj2}
console.log(obj3);
console.log(obj1);

//basic way:but gives as two separate objects

// const obj3={obj1,obj2}
// console.log(obj3);

//const instausers={};
// const instausers=new Object();

// instausers.id='bhavs28';
// instausers.name='bhavyasri';
// instausers.isLoggedIn='yes';

const instausers={
    id:'bhavs28',
    name:'Bhavyasri',
    isLogggedIn:true,
}

console.log(instausers);
console.log(Object.keys(instausers));
console.log(Object.values(instausers));
console.log(Object.entries(instausers));

console.log(instausers.hasOwnProperty('isLogggedIn'));
console.log(instausers.hasOwnProperty('isLoggged'));

//many more methods and properties exist in objects..;we can take a look at the prototype in console to know more about it