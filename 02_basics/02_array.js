const cricketBat = ["SG","MRF","ADIDAS"]
const cricketBall = ["SG","DUKE","TENNIS"]

cricketBat.push(cricketBall)
console.log(cricketBat);         

// let newArr = cricketBall.concat(cricketBat)
// console.log(newArr);

// let newArr1 = [...cricketBat,...cricketBall]
// console.log(newArr1); // Effective method

let mixedArray = [1,2,3,4,[5,6,7],2,3,[1,2,3,[6,8,[1]]]]
let simpleArray = mixedArray.flat(2)
console.log(simpleArray)

// console.log(Array.isArray("Harsh")); //flase
// console.log(Array.isArray([1,2,3])); // true
console.log(Array.from("Harsh")); // string to array
// console.log(Array.from({name : "Harsh"})); // it give output as a empty array becuase we have to specify whether we want to give key or value

let var1 = 500
let var2 = 50
let var3 = 5

console.log(Array.of(var1,var2,var3)) // create an array