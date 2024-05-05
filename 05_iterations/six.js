// filter 
// Why we need filter 
let myArr = ["Harsh","Patel"]

let myVar= myArr.forEach((name)=>{
    return name
})
//console.log(myVar);// Here if we want to return any variable then it is not possible in foreach so that we use filter

// Ex of fiter

//let myNum = [1,2,4,5,3,6]
// let numbers = myNum.filter((num)=>{
//     return num>=5
// })
// console.log(numbers);

//if we want to user foreach for above example then 

let myNum = [1,2,3,4,5,6,7,8]
let newArr = []// Empty array to push the numbers
let number=myNum.forEach((num)=>{
    if(num>=5){
        newArr.push(num)
    }
})
//console.log(newArr);

//Example
let books = [
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925,
        genre: "Fiction",
        pages: 180
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        year: 1960,
        genre: "Fiction",
        pages: 281
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        year: 1951,
        genre: "Dystopian Fiction",
        pages: 328
    },
    { 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        year: 1813,
        genre: "Romance",
        pages: 279
    },
    { 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        year: 1951,
        genre: "Coming-of-age Fiction",
        pages: 277
    }
];

//let book = books.filter((bk)=>bk.year>1900)
let book = books.filter((bk)=>{
    if(bk.genre==="Fiction"&& bk.year>1900)
    return bk
})
console.log(book);
