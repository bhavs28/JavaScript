const accountId=123;
let accountName="BhavyaSri Kanchi";
var accountPassword="Anu@bhavs1";
acccountCity="Karimnagar";
let email;

console.table([accountId,accountName,accountPassword,acccountCity,email]);
//accountId=345;//assignment to constant vriable error

/*
 Avoid using var
 because of the block scope ..it can be changes even in blocks also
 so frequently use let for variable 
 dont use variables without any key word also like accountcity in the example
*/

accountName="BhavyaSri";
accountPassword="Anu1";
acccountCity="Hyderabad";
email="itzbhavyasri@gmail.com";
console.table([accountId,accountName,accountPassword,acccountCity,email]);