const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice //global
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{   //e for event
    userChoice = e.target.id // whatever you click, you want the  ID
}))