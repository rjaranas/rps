document.addEventListener(`DOMContentLoaded`, () => {
const userChoice = document.getElementById('user-choice');
const resultsOutcome = document.getElementById('results-outcome');
let userScores = document.getElementById('user-score')
let compScores = document.getElementById('computer-score')
let userOption = document.getElementById('user-option');
let computerOption = document.getElementById('computer-option');
let computerScore = 0;
let userScore = 0;
let rounds = 0;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 2:
            computerOption.innerText = "Paper";
            break;
        case 3:
            computerOption.innerText = "Scissors";
            break;
        default:
            computerOption.innerText = "Rock";
            break;
            
    }
}

const getHumanChoice = () => {
    const event = window.prompt('Rock, Paper, Scissors?')
    switch(event.toLowerCase()) {
        case "rock":
            userOption.innerText = "Rock";
            break;
        case "paper":
            userOption.innerText = "Paper";
            break;
        case "scissors":
            userOption.innerText = "Scissors";
            break;
        default:
            alert("Not an option");
            break;
    }
}

const playRound = (human, computer) => {
    if (computerOption.innerText === userOption.innerText) {
        resultsOutcome.innerText = "It's a draw!"
    }
    if ((computerOption.innerText === "Rock" && userOption.innerText === "Scissors") || (computerOption.innerText === "Paper" && userOption.innerText === "Rock") || (computerOption.innerText === "Scissors" && userOption.innerText === "Paper")) {
        computerScore = computerScore + 1;
        resultsOutcome.innerText = `You lose! ${computerOption.innerText} beats ${userOption.innerText}`
    }
    if ((userOption.innerText === "Rock" && computerOption.innerText === "Scissors") || (userOption.innerText === "Paper" && computerOption.innerText === "Rock") || (userOption.innerText === "Scissors" && computerOption.innerText === "Paper")) {
        userScore = userScore + 1;
        resultsOutcome.innerText = `You Win! ${userOption.innerText} beats ${computerOption.innerText}`
    }

}




const playGame = () => {
    
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        rounds++;
    }
    userScores.innerText = `User Score: ${userScore}`
    compScores.innerText = `Computer Score: ${computerScore}`
    if (rounds <= 5) {
        if (userScore > computerScore) {
            resultsOutcome.innerText = `Game concluded - User Wins!`
        } else if (userScore < computerScore) {
            resultsOutcome.innerText = `Game concluded - Computer Wins!`
        } else {
            resultsOutcome.innerText = `Game concluded - Draw!`
        }
    }
}

playGame();
})