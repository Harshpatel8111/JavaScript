// Ways of declaring objects
// 1. Literals : not produce singleton 
// 2. Constructor : //Object.create 

// Singleton : when we create object through Constructor this means only one object 

// Objects literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Harsh Patel",
    [mySymbol]: "mykey1",
    age: 23,
    location:"India",
    isLoggedin: false,
    loginHistory:["Monday","Saturday","Tuesday"] 
}

 console.log(jsUser["location"]);// Access the value
 console.log(typeof(jsUser[mySymbol])); // how to define symbol in object IMP.


jsUser.name = "HARSH PATEL"// Change the value of key of object


console.log(jsUser);

//Object.freeze(jsUser)// lock the object
// jsUser.age = 5 // Not change due to freeze

// Function 

// jsUser.greetings = function(){
//     console.log(`Hello, ${this.name}`);
// }

// console.log(jsUser.greetings());

jsUser.details = function(){
    console.log(`My name is ${this.name} and my age is ${this.age}`)
}
 console.log(jsUser.details());

const symbol1 = Symbol("mysymbol")

const newObj = {
    [symbol1]: "key1"
}
console.log(typeof newObj[symbol1]);

jsUser.fname = function(){
    console.log(`my name is ${this.name}`);
}
console.log(jsUser.fname());


