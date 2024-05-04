//foreach loop for array

let cities = ["Ahemdabad","Mumbai","Delhi","Chennai","Shrinagar"]
// cities.forEach( function (item) {
//     // console.log(item);
    
// })

// cities.forEach( (name)=>{
//     console.log(name);
    
// })

function cityName(item){
    console.log(item);
}
// cities.forEach(cityName)

cities.forEach( (j, index, arr)=>{
    // console.log(j, index, arr);
})


//array of object

let newArray = [
    {
        name : "Harsh",
        score:50
    },
    {
        name : "Dhoni",
        score:100
    },
    {
        name : "kohli",
        score:150
    },
]
newArray.forEach( (items)=>{
    console.log(items.score);
})