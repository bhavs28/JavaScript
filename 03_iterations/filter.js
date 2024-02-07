//for each doesnot return anything
//filter returns
/* in JavaScript, the .filter() method expects a callback function that returns a boolean value indicating whether the element should be included in the filtered array or not.*/

const nums=[1,2,3,4,5,6,7,8,9,10]

const mynums=nums.filter((n)=>n>4)
console.log(mynums);

const an=nums.filter((n1)=>{
    return n1+1
})//this cant fiter out the array
console.log(an);

