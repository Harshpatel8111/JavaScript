const userDetails = {
    Username : "Harsh",
    price:9999,

    welcomeMessage: function(){
        console.log(`${this.Username} welcome to website`);
        console.log(this);
    }
      

}
// userDetails.welcomeMessage() it refer Harsh
// userDetails.Username = "Patel"
// userDetails.welcomeMessage() // it refer Patel


//console.log(this);// It will give empty object
// But if you run on browser then it will give window object because it is a global object (i.e)Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// function hello(){
//   const Username="Harsh"
//   console.log(`${this.Username}`); // Undefined 
// }
// hello()

//..........Explicit Return................................................
// const addition = (num1, num2) => {

//     return num1+num2
// }
// console.log(addition(1,2));


//..........................Implicit Return................................
const addition = (num1,num2) => ( num1 + num2 )
console.log(addition(2,3));

//Object
const name = () => ({username:"Harsh"}) 
console.log(name());

