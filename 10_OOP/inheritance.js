// class userInfo {
//     constructor(username){
//         this.username = username
//     }
//     logme(){
//         console.log(`Username is ${this.username}`);
        
//     }
// }

// class Teacher extends userInfo{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`${this.username} added a course`)
//     }
// }

// const harsh = new Teacher("Harsh","Harsh@gmail.com","123")
// harsh.addCourse()

class User{
    constructor(UserID, Username, Password){
        this.UserID = UserID
        this.Username = Username
        this.Password = Password
    }
    loginInfo(){
        console.log(`${this.Username} is available`);
        
    }
}

class employee extends User{
    constructor(UserID,Username,Password){
        super(UserID, Username,Password)
        
    }
    loginCred(){
        console.log(`UserID is : ${this.UserID}`);
        console.log(`UserPassword is : ${this.Password}`);
        
    }
}

const Harsh = new employee("HP123","Harsh","123")
Harsh.loginCred()
