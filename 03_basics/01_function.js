// function addNumbers(){
//     console.log(3+2)
// }
// addNumbers()

// function addition(number1, number2){
//     console.log(number1+number2);
// }
// addition(2,3)

// function findEvennumber(number){
//     if (number%2 == 0) {
//         console.log("The number is Even");
        
//     }
//     else{
//         console.log("The number is odd");
//     }
// }
// findEvennumber(7)


// function nameAdd(firstname,lastname){
//     return firstname+lastname
// }
// let result = nameAdd("Harsh", " Patel")
// console.log("My name is", result);

function userIogin(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    else{
        return `${username} welcome to website`
    }
}
let welcomeUser = userIogin("Harsh")
console.log(welcomeUser);