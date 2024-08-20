function setusername(username){
    this.username = username
    console.log("Called");
    
}

function createUsername(username, email, password){
    setusername.call(this, username)  // Here as we want the reference of the above function to set a username we have to write setusername.call(this, username) otherwise it will not give proper output
    this.email = email
    this.password = password
    
}
const user = new createUsername("harsh","harsh@google.com","123")
console.log(user);
