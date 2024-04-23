// function addNumbers(){
//     console.log(3+2)
// }
// addNumbers()

// function addition(number1, number2){
//     console.log(number1+number2);
// }
// addition(2,3)
//................................................................................................
// function findEvennumber(number){
//     if (number%2 == 0) {
//         console.log("The number is Even");
        
//     }
//     else{
//         console.log(`The entered number${number} is odd`);
//     }
// }
// findEvennumber(7)

//....................................................................................................................
// function nameAdd(firstname,lastname){
//     return firstname+lastname
// }
// let result = nameAdd("Harsh", " Patel")
// console.log("My name is", result);
//...................................................................................................................................................
// function userIogin(username){
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     else{
//         return `${username} welcome to website`
//     }
// }
// let welcomeUser = userIogin("Harsh")
// console.log(welcomeUser);

//.............................................................................................................................................................
const userdetails = {
    Username: "Harsh",
    Price: 200
}
function calculateCartPrice(anyobject) {

    // return `${anyobject.Username} has purchased ${anyobject.Price}`

    console.log(`${anyobject.Username} has purchased ${anyobject.Price}`);
    
}
// const cart = calculateCartPrice(userdetails)
// console.log(cart);

calculateCartPrice({
    Username: "Patel",
    Price:3000
})  // Pass Object


let myArr = [1,2,3,4]

function arryHandle(anyarray) {
    return anyarray[1]

    
}

// console.log(arryHandle(myArr));
console.log(arryHandle([1,3,4,5,51]));





