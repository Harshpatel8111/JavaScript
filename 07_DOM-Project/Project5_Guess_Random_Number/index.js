let random_num = parseInt(Math.random()*100+1);

const userinput = document.querySelector('#guessfield');
// console.log(userinput);
const submit = document.querySelector('#subt');
const guessSlot  = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.result');
const margin = document.querySelector('.lowOrhi');

const p = document.createElement('p');

let previousGuesses = [];
let numGuess = 1;

let playgame = true;

if (playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        console.log('Enter valid number')
    }
    else if(guess<1){
        console.log('Enter number 1 or greater than one')
    }
    else if(guess>100){
        console.log('Enter number less than 100');

    }
    else{
        previousGuesses.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`GameOver. The random number was ${random_num}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess==random_num){
        displayMessage('You guesses Right number');
        endGame()
    }
    else if(guess>random_num){
        displayMessage('Too High Guess');
    }
    else if(guess<random_num){
        displayMessage('Too low Guess');
    }
}

function displayGuess(guess){
    userinput.value='';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    margin.innerHTML = `${message}`
}

function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame"> Start New Game</h1>`;
    startOver.appendChild(p);
    playgame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        random_num = parseInt(Math.random()*100+1);
        previousGuesses = [];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame=true;
    });
}