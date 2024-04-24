// // var a = 10 // DO NOT USE 
// // let b= 20
// // const c = 30
// var a = 100// replaced by 10
// if(true){
//     var a = 10 // DO NOT USE 
//     let b= 20
//     const c = 30
//     console.log(a);

// }
// console.log(a);//accessible
// console.log(b);// Not accessible because of block scope
// console.log(c);// Not accessible because of block scope

function one(){
    const name = 'Harsh'
    // console.log(`I am ${name} and my age is ${age} : One`) // Not accesible becuse age is in block 
        function two() {
            const age = 22
            // console.log(`I am ${name} and my age is ${age}: two`) // Accessible because name can be accessible in local
        }
        two()

}
one() 

if (true){
    const name = 'Harsh'
    if(name == 'Harsh'){
        const age = 22
        // console.log(`Inner if: ${name} and ${age}`);//Access
    }
    // console.log(`Outerif : ${name} and ${age}`);// Not access
}
// console.log( `Outer : ${name} and ${age}`);//Not accessible because of local scope

addOne(5)
function addOne(value){
    return value+1
}

addtwo()// Error because num is not defined
const num = function addtwo(val) {
    return val+2
    
}


