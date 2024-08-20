const user = {
    username: "Harsh patel",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}// Object literal
// console.log(user.loginCount);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date() // Here new keyword is a consructor function which allows to create multiple instances through single object literals

function User(username, loginCount, isLoggedin){
    this.username = username; // Here LHS -- Variable
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin
    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }

    return this // Object Passed OPTIONAL
}

const userOne = new User("Harsh", 8, true)
const userTwo = new User("HP", 8, false)
// console.log(userOne);// userTwo will overwrite userOne Value so it will give userTwo output so to avoid this add new keyword

// What happened if we use new keyword
// 1. Create empty new obj.
// 2. Constructor function called due to new keyword -> Packed argument and give us
// 3. Inject Argument 
// 4. We got output

// console.log(userTwo);

// Abstraction : Showing neccessary things
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log(`${this.make}'s Engine has started`);
    }
  
    stopEngine() {
      console.log(`${this.make}'s Engine has stopped`);
    }
  }
  
  const myCar = new Car('Toyota', 'Camry', 2021);
  myCar.startEngine();
  myCar.stopEngine();
  