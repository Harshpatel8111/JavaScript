// if 
// operators = >,<,>=,<=,=(assignment),==(comparison),===(check datatype and compare),!=,!
// let value = 100
// if (value>50) {
//     console.log(`${value} is valid`);
// }else{
//     console.log("The value is invalid");
// }


let temprature = -1
let wind = 40

if (temprature<=3) {
    let jacket = "winterjacket"
    console.log(`${jacket} is required`);
}
// console.log(jacket); // This will give an error becuse of out of scope

//if Else

// let marks = 80
// if (marks<=100 && marks>=90) {
//     console.log("A+");
// }else if(marks<90 && marks>=80){
//     console.log("A");
// }else if(marks<80 && marks>=65){
//     console.log("B");
// }else if(marks<65&& marks>60){
//     console.log("C");
// }else{
//     console.log("fail");
// }


let userLoggedin = true
let debitDetails = true
let loggedinFromGoogle = true
let loggedinFromEmail = false 

// if (userLoggedin && debitDetails) {
//     console.log("You can shop now!");
    
// }else{
//     console.log("Please enter valid details");
// }

if (loggedinFromEmail || loggedinFromGoogle){
    console.log("Welcome");
}
else{
    console.log("Please login form your email or google ");
}

// Truthy and falsy value

// falsy value:
// // false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy value:
// // true, "0", {},[]," ",function(){}

let usermail= []

// if(usermail.length==0){
//     console.log("Enter usermail");
// } check empty array


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){  
//     console.log("Empty Object");
// } check empty obj
// Object.keys(emptyObj) == array 

// Nullish coalesing operater (??): specialliy design to deal with null and undefined
// if we need fetch info from database and we donot want to null value then it is use

// let var1;
// // var1 = 10 ?? 5 // Ans 10
// var1 = null ?? 5 // Ans 5, prioritize value rather than null
// var1 = undefined ?? 10 // Ans 10, prioritize value rather than undefined
// console.log(var1);

// terniary operator
// condition ? true : false
//example
let mark = 80
mark>60 ? console.log("pass") : console.log("fail");