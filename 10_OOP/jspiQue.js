//  PI value == 3.14 Now if we want to convert this value to 3 or 4 then it is possible or not 
// Reason why it is possible or not

const description = Object.getOwnPropertyDescriptor(Math, "PI")// Gives description about the properties.
// console.log(description);

// Output :
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   } Here, these writable, enumerable, configurable are false that is why we cannot change the hardcoded value that is 3.14

console.log(Math.PI);
Math.PI == 5
// console.log(Math.PI);// This will not change the value.

const user ={
    Username:"Harsh Patel",
    Age:22,
    Role: "Backend Developer",

    Available: function () {
        console.log("AVAILABLE");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(user,"Age"));
// O/p : { value: 22, writable: true, enumerable: true, configurable: true } which means we can change the value.

// To change the behavior of the propeties

Object.defineProperty(user,"Age",{
    writable: false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(user,"Age")); // O/P: { value: 22, writable: false, enumerable: false, configurable: true }

//Now, I want to access these properties

for (const [key, value] of Object.entries(user)) {
    if(typeof value !== 'function')
    console.log(`${key}:${value}`);
    
    
}

//Object.entries(user) : To access properties of the object

//If we don't write  if(typeof value !== 'function') then the code is not proper because it will give the whole function.
