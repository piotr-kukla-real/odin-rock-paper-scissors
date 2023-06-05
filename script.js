const ROCK = "ROCK",
      PAPER = "PAPER",
      SCISSORS = "SCISSORS";

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
