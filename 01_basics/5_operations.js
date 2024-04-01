let value=5
let negvalue=-value;
//console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

// console.log(1+'2');-->12
// console.log('1'+2 );-->12
// console.log('1'+'1');-->11
// console.log('1'+2+3)-->123
// console.log(2+3+'1')-->51
//If both operands are numbers, it performs addition. 
//If one or both operands are strings, it performs concatenation.(from left to right)

console.log(+true)//not recommended coz confusing (o/p:1)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
