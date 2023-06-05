const ROCK = "ROCK",
      PAPER = "PAPER",
      SCISSORS = "SCISSORS",
      PLAYER = "PLAYER",
      COMPUTER = "COMPUTER";


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

const checkSelection = selection =>
    selection == ROCK ||
    selection == PAPER ||
    selection == SCISSORS;

// get player choice, loop until it is valid, return null if canceled
function getPlayerChoice() {
    let promptMessage = "Your pick";

    while (true) {
        let choice = prompt(promptMessage);

        if (choice === null) {
            return null;
        }

        choice = choice.toUpperCase();
        const isValid = checkSelection(choice);
        if (isValid) {
            return choice;
        }

        promptMessage = "You can pick only ROCK, PAPER or SCISSORS";
    }
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

// print result and add score
function afterRound(winner, playerSelection, computerSelection) {
    if (winner == PLAYER) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
        playerScore++;
    } else if (winner == COMPUTER) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
    } else {
        console.log("It's Tie!");
    }
}

function playRound(playerSelection, computerSelection) {
    const winner = getWinner(playerSelection, computerSelection);

    afterRound(winner, playerSelection, computerSelection);
}
