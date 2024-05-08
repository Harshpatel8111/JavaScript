// MAP 
// let exNum = [1,2,3,4]
// let myExample = exNum.map(function (num) {
//     return num

// })
// console.log(myExample);

//Multiple map and filter
// let exNum = [1,2,3,4]
// let myExample = exNum.map((num)=>num*10)
//                      .map((num)=>num+10)
//                      .filter((num)=>num>20)

// console.log(myExample);

// let exNum = [1,2,3,4]
// let myExample = exNum.map(function (num) {return num*10})
//                      .map(function (num) { return num+10})
//                      .filter(function (num){ return num>20})

// console.log(myExample);

//Reduce
// Use ful in cart 
let myArr = [1,2,3,4,5]
let finalTotal=myArr.reduce(function (acc,curr) {
    return acc+curr
    
},0)
// console.log(finalTotal);

let scoreCard = [
    {
        name:"A",
        score:30
    },
    {
        name:"B",
        score:60
    },
    {
        name:"C",
        score:50
    },
    {
        name:"D",
        score:90
    },
    {
        name:"E",
        score:10
    }
]
let totalScore=scoreCard.reduce(function (acc,run) {
    return run.score + acc
}, 0)
console.log(`Team scored ${totalScore} runs`);

