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

