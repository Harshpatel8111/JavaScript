class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`${this.username}is logged in`);
        
    }
    static createID(){ 
        return 123
    } // Here static keyword will not not allow to access the createID() function to everyone
}
const Harsh = new User("HarshPatel")
console.log(Harsh.createID())