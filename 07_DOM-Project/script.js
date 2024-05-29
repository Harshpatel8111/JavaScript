const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
// console.log(body);
buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);
        
        switch (e.target.id==='grey') {
            case body.style.backgroundColor=e.target.id:
            break;
        }
        switch (e.target.id==='white') {
            case body.style.backgroundColor=e.target.id:
            break;
        }
        switch (e.target.id==='black') {
            case body.style.backgroundColor=e.target.id:
            break;
        }
        switch (e.target.id==='yellow') {
            case body.style.backgroundColor=e.target.id:
            break;
        }
        switch (e.target.id==='purple') {
            case body.style.backgroundColor=e.target.id:
            break;
        }
    });

});