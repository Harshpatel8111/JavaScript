// Immediately Invoked Function Expression
(function hello(){
    console.log("Hello World");
})();// Named IIFE
// To solve global scope pollution we can use IIFE

// const userDetails = {
//     username:"mehal"
// }

// function welcome(anyobject) {
//         return `Welcome ${anyobject.username}`
        
//     }
// const hello = welcome(userDetails)
// console.log(hello);

(
    ()=>{
        console.log("Hello")
    }
)()  // Unnamed IIFE
