// ES 6

class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    } // Constructor called when we initialize the object means when we use new keyword
    encryptPassword(){
        return `${this.password}abc`
    }

    usernameCapital(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne = new user("Harsh", "Harsh@gmail.com", "123")

console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.usernameCapital());

// IF WE DONT HAVE CLASS FUNCTIONALITY THEN WE DO USING BELOW FUNCTION METHOD

function userCreation(usename, email, password){
    this.username = username
    this.email = email
    this.password = password
}

userCreation.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
userCreation.prototype.usernameCapital = function(){
    return `${this.username.toUpperCase()}`    
}

const userTwo = new user("Harsh1", "Harsh1@gmail.com", "1234")

console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.usernameCapital());