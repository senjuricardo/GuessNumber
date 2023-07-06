'use strict';

const myGuess = document.querySelector('.guess');
const button = document.querySelector('.check');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
let score = document.querySelector('.score');
const buttonAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
var body = document.body;

var randomNumber = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', function () {
    var inputValue = parseInt(myGuess.value);
    if (inputValue <= 20) {
        let currentScore = parseInt(score.textContent);
        if (myGuess.value < randomNumber) {
            message.textContent = 'to low...'
            let newScore = currentScore - 1;
            score.textContent = newScore;
            if (score.textContent <= 0) {
                score.textContent = 0
            }
        }
        else if (myGuess.value > randomNumber) {
            message.textContent = 'to high...'
            let newScore = currentScore - 1;
            score.textContent = newScore;
            if (score.textContent <= 0) {
                score.textContent = 0
            }
        }
        else {
            message.textContent = 'Correct!'
            body.style.backgroundColor = 'green';
            button.disabled = true
            if (currentScore > parseInt(highscore.textContent)) {
                highscore.textContent = currentScore
            }
        }
    }
    else alert('only between 1 and 20')
});

buttonAgain.addEventListener('click', function () {
    if (message.textContent === 'Correct!' || score.textContent == 0) {
        randomNumber = Math.floor(Math.random() * 20) + 1;
        message.textContent = 'Start guessing...'
        score.textContent = 20
        guess.value = ''
        button.disabled = false
        body.style.backgroundColor = '#222';
    }
    else alert('please finish this first')
});



