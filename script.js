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
