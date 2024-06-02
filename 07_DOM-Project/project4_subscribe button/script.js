

const button = document.querySelector('button')
let count = 0;
// console.log(count);
// console.log(button);
button.addEventListener('click',function(){
// console.log('click');
const counter = document.querySelector('#counter');
// console.log(counter);
count++;
counter.innerHTML = `You subscriber count is ${count}`;


})