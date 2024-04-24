const myArray = [1,2,3,4,5]
const Cricketers = ["Dhoni","Kohli","Raina","Rohit"]

//  console.log(typeof(myArray));

const myArr = new Array(1,2,3,4,5)
// console.log(typeof(myArr));
console.log(myArr[1]);

// METHODS
myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(0) // add value at begining use in to do list to add the task
// console.log(myArr);

myArr.shift() // remove value from beigning
// console.log(myArr);

// console.log(myArr.indexOf(1));
const newArr = myArr.join()
// console.log(typeof newArr);//convert string

console.log("A ", myArr);
const newArr1 = myArr.slice(1,3) // only return the value 
console.log(newArr1);

console.log(myArr);

const newArr2 = myArr.splice(1,3) // splice manipulate whole main array and return the value
console.log(myArr); // o/p : [1,5]
console.log(newArr2); // [2,3,4]
// console.log(myArr);
console.log(myArr.indexOf(2));



