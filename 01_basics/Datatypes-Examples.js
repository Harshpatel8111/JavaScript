// // Two Types

// // 1. Primitive datatype (call by value):
// // 7 types
// // Number, String, Boolean, BigInt, null, undefined, Symbol
// num, str, bool, symbol, un, bigint, null
let score = 5
// console.log(typeof score);

let User = "HARSH"
// console.log(typeof User);

let temprature = null
console.log(typeof temprature);// null give output as an Object

 let City;
// console.log(typeof City);

let loggedIn = false
// console.log(typeof loggedIn);

let bigNumber = 12321324124242n
// console.log(typeof bigNumber);

// 2. NOn primitive (Call by reference) :

// Array, Object, Function

let userList = ['Harsh', 'Patel', 'Bhole']
// console.log(typeof userList); // Object

let userInfo = {
    Name : "Harsh",
    Age : 22
}
// console.log(userInfo);
// console.log(typeof userInfo);

let myFunction = function myFun(params) {
    console.log("HII");   
}

// console.log(typeof myFunction);

// ----------------------------------------------------

// Memory in JS

// 1. stack : stack memory use in primitive
// we get copy 


// 2. Heap : heap memory in Nonprimitive store in
// we get reference

let myName = "Harsh"
//console.log(myName);

let FirstName = myName
console.log(FirstName);
FirstName = "Patel"
console.log(myName);
console.log(FirstName);


let useNote = {
    Name: "Harsh",
    Age: 22

}
//console.log(useNote);
let useNote2 = useNote
console.log(useNote2);

useNote2.Name = "Patel"

console.log(useNote);
console.log(useNote2);

// In heap the value will change according to reference variable whereas in stack the value remain same as per variable.