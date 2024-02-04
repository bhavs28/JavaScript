function add2nums(num1,num2){
    return num1+num2;
}
// console.log(add2nums(1,2));
// console.log(add2nums(1,'2'));
// console.log(add2nums(1,'a'));//therefore we need to specify
// console.log(add2nums(1,null)); //conditions
// console.log(add2nums(1,undefined));
// console.log(add2nums(6,true));

const seriesheroes={
    2521:'nam joo hyuk',
    truebeauty:'hwang in youp',
    samdalri:'ji chang wook',
}

function handleobj(anyobject){
    console.log(`The male lead in 2521 is ${anyobject[2521]} and that of true beauty is ${anyobject.truebeauty}`);
}

//handleobj(seriesheroes);

handleobj({
    2521:'nam joo hyuk',
    truebeauty:'hwang youp',
    samdalri:'ji chang wook',
})

function calculatecartvalue(val1,...num1){
    return num1;
}

console.log(calculatecartvalue(100,200,300))