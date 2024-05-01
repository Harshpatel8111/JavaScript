// for loop

// for(let index=0 ; index<10; index++){
//     let elements = index
//     if (index == 5){
//         console.log("This is 5");
//     }
//     console.log(elements);
// }

// for (let i=1 ; i<=10; i++){
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`inner loop ${j}`);
        
//     }
// }

for (let i=1 ; i<=5; i++){
    
    for (let j = 1; j <= 10; j++) {
        // console.log(i + "*" + j + "=" + i*j);
        
    }
}


let cricHeros = ["Dhoni","Sachin","Kohli"]
for (let index = 0; index < cricHeros.length; index++) {
    const element = cricHeros[index];
    // console.log(element);
    
}

//Break and continue

for (let index = 1; index <=10; index++) {
    if(index==5){
        // console.log("5 is detected");
        break // Break the loop when 5 is detected
    }
    // console.log(index);

    
}
for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log("5 is detected");
        continue // continue will not print 5 but it will continue loop from 6
    }
    console.log(index);

    
}

