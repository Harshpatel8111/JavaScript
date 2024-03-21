// Decalre singleton object
// const instagramUser = new Object()
// console.log(instagramUser);

const instagramUser = {} 

instagramUser.id = 1
instagramUser.email = "hp@gmail.com"
instagramUser.isLoggedin = false

// console.log(instagramUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// let obj3 = Object.assign({},obj1,obj2)// here obj1 and obj2 will store into {}
// console.log(obj3);

let obj3 = {...obj1,...obj2} // Preferred way
// console.log(obj3);



// Nested Object

let youtubeUser= {
    email:"hpatel@google.com",
    name:{
        firstname : "Harsh",
        lastname : "Patel"
    }

}
// console.log(youtubeUser.name.lastname); // access the value

// console.log(Object.keys(instagramUser));
// console.log(Object.values(instagramUser));

// console.log(Object.entries(instagramUser))// convert array

// console.log(instagramUser.hasOwnProperty("id"));

const users = [
    
    {
        name : "hp",
        id:"1"
    },
    {
        name : "hp",
        id:"1"
    },
    {
        name : "hp",
        id:"1"
    }
]






