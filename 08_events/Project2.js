const randomColor = function(){
    const hex = '123456789ABCDEF';
    let colorCode = '#';
    for(i=0; i<6; i++){
        colorCode += hex[Math.floor(Math.random()*16)]
    }
    return colorCode;

};
let setInt;
const changeColorInterval = function(){
    if(!setInt){
        setInt = setInterval(startChangingColor,1000);

    }
    function startChangingColor(){
        document.body.style.backgroundColor = randomColor();
    }
};


const stopChangeColorInterval = function(){
    clearInterval(setInt)
    setInt = null;
};


document.querySelector('#start').addEventListener('click', changeColorInterval)
document.querySelector('#stop').addEventListener('click',stopChangeColorInterval)