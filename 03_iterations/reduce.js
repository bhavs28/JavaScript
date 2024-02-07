/**
 It is used to reduce an array to a single value by executing a reducer function on each element of the array.
 */

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
//0 is the initializer,the initial value of the accu
console.log(sum); // Output: 15

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalprice=shoppingCart.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(totalprice);