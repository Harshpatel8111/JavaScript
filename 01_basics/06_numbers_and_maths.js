const age = 5 // First way to define number
//console.log(age);

// Second way 

const score = new Number(50)
// console.log(score);

// console.log(score.toString());
// console.log(score.toString().length);

const newNumber = 50.555
// console.log(newNumber.toFixed(2));

// console.log(newNumber.toPrecision(3));

const money = 10000000
// console.log(money.toLocaleString('en-IN'));

// MATHS ......... MATHS..........MATHS

// console.log(Math.PI)
// console.log(Math.abs(-5));// convert - to +
// console.log(Math.round(5.5));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.2));
// console.log(Math.sqrt(9));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);

