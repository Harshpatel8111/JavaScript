//for of loop for array and map

let myArr = [1,2,3,4,5]
for (const iterator of myArr) {
    // console.log(iterator)
    
}

let str = "Hello World"
for (const i of str) {
    if(i != " "){
        // console.log(`Alphabet in the string ${i}`);
    }
    
}

// Intro to map
// map : it holds key value pair and it is iteratable , It also give output in sequencial manner. Lasty, it does not print duplicate

let map = new Map()
map.set("India","Ruppes")
map.set("USA","Us Dollar")
map.set("UK","Pound")

// console.log(map);
for(let [key, value] of map){
    console.log(key,"-",value);
}

let myObj = {
    name : "Harsh",
    Age:22
}

// console.log(myObj);
// for (const [key, vlaue] of myObj) {
//     // console.log(key,"-",vlaue);// It will give error 
    
// }

// To slove above problem we have for in loop : use for object
let myObject = {
    "Name": "Harsh",
    "age":22,
    
}
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

// Array , Map => Use for of
// Object => Use for in