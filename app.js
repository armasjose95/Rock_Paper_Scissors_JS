const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice //global
let computerChoice //global
let result //global


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{   //e for event
    userChoice = e.target.id // whatever you click, you want the  ID
    userChoiceDisplay.innerHTML= userChoice   //displays whatever option you click
    generateComputerChoice()
    getResult() 
}))

function generateComputerChoice() {   //want a random number here
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1//(pc.len)will return 3. +1 so it doesn't start at 0. Math floor to round down to a full integer.
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice // shows computer screen
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You Win!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You Lose!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You Win!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You Lose!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You Win!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You Lose!"
    }
    resultDisplay.innerHTML = result // show result on screen
}