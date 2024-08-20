const myName = "Harsh  "
const myName1 = "Patel    "// How to find true length of these two strings

const cars = ["BMW", "Mercedes"]
const myCars = {
    name:"BMW",
    Feature:"Comfort",// Properties
    getfeature: function(){
        console.log(`BMW has ${this.Feature}`);// Method
    }
}
Object.prototype.harsh = function(){
    console.log(`harsh is present in all objects`);
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says hello`);
}

cars.harsh()
myCars.harsh()
cars.heyHarsh()
//myCars.heyHarsh()

//Inheritance
const user = {
    name : "Harsh",
    canAccess:true
}
const teacher = {
    makeVideo : true
}
const Assistant = {
    createAssignment : true,
    __proto__ : teacher
}
teacher.__proto__ = user
 
// MOdern
Object.setPrototypeOf(teacher, user)

let oneStr = "Harsh   "

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`true length of the string is ${this.trim().length}`);
}
oneStr.truelength()
"Patel ".truelength()
"HP".truelength()