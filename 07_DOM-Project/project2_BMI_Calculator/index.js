const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight=parseInt(document.querySelector('#weight').value);
    const height=parseInt(document.querySelector('#height').value);
    const result=document.querySelector('#result');

    if(height===''||height<0||isNaN(height)){
        result.innerHTML = `${height} is not valid`;
    }else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML = `${weight} is not valid`;
    }else{
        const bmi = (weight/(height*height)*10000).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6){
            // console.log("You are underweight");
            result.style.color = 'Red'
            result.innerHTML = `<span>${bmi}</span> </br>You are underweight`;
        }
        else if (bmi>18.6&&bmi<24.9){
            // console.log("Normal Weight");
            result.style.color = 'Green'
            result.innerHTML =  `<span>${bmi}</span> </br>Normal Weight`;
        }
        else if(bmi>24.9){
            // console.log('You are overweight');
            result.style.color = 'Red'
            result.innerHTML = ` <span>${bmi}</span> </br>You are overweight`;
        }
    }
   






})


