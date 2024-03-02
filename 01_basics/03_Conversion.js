// let score = 50
let score = "50"



console.log(typeof score);

let valueInNUmber = Number(score)

console.log(typeof valueInNUmber);

// "50" -> convert string to number
// "50abc" ->  connot convert o/p - NaN
//true -> 1, false-> 0

// let isLoggedIn = 1
let isLoggedIn = "Harsh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1-> true
// 0-> false
// ""->false
// "Harsh"->true

let exampleNum = 50
let stringNumber = String(exampleNum)
console.log(stringNumber);