/*to transform each element of an array or iterable using a provided function and then returns a new array or iterable containing the transformed elements.*/

const nums=[1,2,3,4,5,6,7,8,9,10]
const any=nums.map((num)=>{
    return num+10;
})
console.log(any);

//chaining

const newnums=nums.map((num)=>num+10)
                  .map((num)=>num*10).filter((num)=>num>150)
console.log(newnums);