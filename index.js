document.addEventListener(`DOMContentLoaded`, () => {
    const buttonContainer = document.getElementById('buttons-container')
    const startGame = document.getElementById('play-button')
    const resultDiv = document.getElementById('result-div')
    const userChoice = document.getElementById('user-choice');
    const computerChoice = document.getElementById('computer-choice')
    const resultsOutcome = document.getElementById('results-outcomes');
    const rpsButtons = document.querySelectorAll('.rps-btns')
    let userScores = document.getElementById('user-score')
    let compScores = document.getElementById('computer-score')
    let roundCount = document.getElementById('current-rounds')
    let computerScore = 0;
    let userScore = 0;
    let rounds = 0;

    const getComputerChoice = () => {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        switch(randomNumber) {
            case 2:
                computerChoice.innerText = "Paper";
                break;
            case 3:
                computerChoice.innerText = "Scissors";
                break;
            default:
                computerChoice.innerText = "Rock";
                break;
                
        }
    }

    




    const playGame = () => {

        rpsButtons.forEach((button) => {
            button.addEventListener('click', () => {
                userChoice.innerText = button.innerText
                getComputerChoice();
                if (computerChoice.innerText === userChoice.innerText) {
                    rounds++;
                    resultsOutcome.innerText = "It's a draw!"
                }
                if ((computerChoice.innerText === "Rock" && userChoice.innerText === "Scissors") || (computerChoice.innerText === "Paper" && userChoice.innerText === "Rock") || (computerChoice.innerText === "Scissors" && userChoice.innerText === "Paper")) {
                    rounds++;
                    computerScore++
                    resultsOutcome.innerText = `You lose! ${computerChoice.innerText} beats ${userChoice.innerText}`
                }
                if ((userChoice.innerText === "Rock" && computerChoice.innerText === "Scissors") || (userChoice.innerText === "Paper" && computerChoice.innerText === "Rock") || (userChoice.innerText === "Scissors" && computerChoice.innerText === "Paper")) {
                    rounds++
                    userScore++;
                    resultsOutcome.innerText = `You Win! ${userChoice.innerText} beats ${computerChoice.innerText}`
                }
                roundCount.innerText = `Rounds Played: \n${rounds}`
                userScores.innerText = `User Score: \n${userScore}`
                compScores.innerText = `Computer Score: \n${computerScore}`
                if (userScore === 5 || computerScore === 5) {
                    if (userScore === 5) {
                        resultDiv.classList.add('hidden');
                        startGame.classList.remove('hidden')
                        let outcome = document.createElement('p');
                        outcome.textContent = `You Win! \nPlay again?`
                        outcome.classList.add('outcome')
                        buttonContainer.insertBefore(outcome, startGame)
                        startGame.textContent = `Play again`
                    } else {
                        resultDiv.classList.add('hidden');
                        startGame.classList.remove('hidden')
                        let outcome = document.createElement('p');
                        outcome.classList.add('outcome')
                        outcome.textContent = `You lose! \nPlay again?`
                        buttonContainer.insertBefore(outcome, startGame)
                        startGame.textContent = `Play again`
                    } 
                }
            })
        })
    }
    playGame();
    startGame.addEventListener('click', () => {
        computerScore = 0;
        userScore = 0;
        rounds = 0;
        let outcome = document.querySelector('.outcome')
            if (outcome) {
                outcome.remove();
            }
        
        resultDiv.classList.remove('hidden');
        startGame.classList.add('hidden');
        
    })

})