//Loops on arrays and strings
//apart from basic if else ,for and while loops
//for of,for in,for each on arrays

const arr=['1','bhavya',3,4,5]
for (const num of arr) {
    //console.log(num);
}

for (const key in arr) {
    //console.log(arr[key]);
}

//console.log('using nrml function as call back');
arr.forEach(function (key){//call back function doesnt have name
    //console.log(key);
})

//console.log('using array function as call back');
arr.forEach( (item) => {
    //console.log(item);
})

//passing the callback function as a parameter
function printarr(item){
    //console.log(item);
}
arr.forEach(printarr);//only reference should be 

arr.forEach( (item,ind,a)=>{
    //console.log(item,ind,a);
})//value,index and array can be printed(that order only)


//can be used on strings too(for in and for of)
const str='Bhavyasri'
for (const i of str) {
    //console.log(i);
}

for (const key in str) {
    //console.log(str[key]);
}

