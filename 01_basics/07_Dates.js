let todayDate = new Date()
// console.log(todayDate);
// console.log(todayDate.toDateString());
// console.log(todayDate.toLocaleDateString());
// console.log(todayDate.toISOString());
// console.log(todayDate.toJSON());
// console.log(typeof todayDate);

// let myBirthday = new Date(2001, 10, 8)
// console.log(myBirthday);

// let myBirthday = new Date(2001, 10, 8, 8, 15)
// console.log(myBirthday.toLocaleString());

let myCreatedDate = new Date("11-08-2001")
console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now())/1000);

let newDate = new Date()
newDate.toLocaleString('default', {

    day:"2-digit"
})
console.log(newDate);
