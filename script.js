const ROCK = "ROCK",
      PAPER = "PAPER",
      SCISSORS = "SCISSORS",
      PLAYER = "PLAYER",
      COMPUTER = "COMPUTER";

// elements
const scoreOutput = document.querySelector(".score");
const roundResultOutput = document.querySelector(".round-result");
const finalResultOutput = document.querySelector(".final-result");

// global variables
let playerScore = 0,
    computerScore = 0,
    requireReset = false;

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    finalResultOutput.textContent = "";
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;

    switch (random) {
        case 0:
            choice = ROCK;
            break;
        case 1:
            choice = PAPER;
            break;
        default:
            choice = SCISSORS;
        }

    return choice;
}

// takes uppercased player and computer choice and return winner
function getWinner(playerSelection, computerSelection) {
    let winner = null;

    if (playerSelection == ROCK) {
        if (computerSelection == PAPER) {
            winner = COMPUTER;
        } else if (computerSelection == SCISSORS) {
            winner = PLAYER;
        }
    } else if (playerSelection == PAPER) {
        if (computerSelection == ROCK) {
            winner = PLAYER;
        } else if (computerSelection == SCISSORS) {
            winner = COMPUTER;
        }
    } else {
        if (computerSelection == PAPER) {
            winner = PLAYER;
        } else if (computerSelection == ROCK) {
            winner = COMPUTER;
        }
    }

    return winner;
}

// add score, output score and round result
function afterRound(winner, playerSelection, computerSelection) {
    if (winner == PLAYER) {
        roundResultOutput.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    } else if (winner == COMPUTER) {
        roundResultOutput.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    } else {
        roundResultOutput.textContent = "It's Tie!";
    }

    scoreOutput.textContent = `Player ${playerScore} - Computer ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
    const winner = getWinner(playerSelection, computerSelection);

    afterRound(winner, playerSelection, computerSelection);
}

function handleGameOver() {
    if (playerScore >= 5) {
        finalResultOutput.textContent = `Congratulations! You Won!`;
    } else if (computerScore >= 5) {
        finalResultOutput.textContent = `You Lose!`;
    } else {
        return;
    }

    requireReset = true;
}

// play round on click
function selectBtnHandler() {
    if (requireReset) {
        resetGame();
        requireReset = false;
    }

    const playerSelection = this.dataset.select;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    handleGameOver();
}

// add events for select buttons
const selectButtons = document.querySelectorAll(".select-btn");

selectButtons.forEach(el => {
    el.addEventListener("click", selectBtnHandler);
});
