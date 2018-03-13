"use strict";
//Rock, paper, scissors
//John Burns

const rules = {"Rock": {"Rock": "draw", "Paper": "lose", "Scissors": "win"},
        "Paper": {"Rock": "win", "Paper": "draw", "Scissors": "lose"},
        "Scissors": {"Rock": "lose", "Paper": "win", "Scissors": "draw"}};
const valid_choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    return valid_choices[n];
}

//Validate player input - reduce to lower case, capitalise the first letter, check it against
//array valid_choices.
function validatePlayerInput(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1);

    if (valid_choices.includes(playerSelection)) {
        return playerSelection;
    } else {
        return null;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = validatePlayerInput(playerSelection);
    if (!playerSelection) {
        return "Error! playerSelection must be one of rock, paper or scissors!";
    }

    let result = rules[playerSelection][computerSelection];
    let result_string;

    switch (result) {
    case "win":
        result_string = "You win! " + playerSelection + " beats " + computerSelection + "!";
        break;
    case "draw":
        result_string = "Draw!";
        break;
    case "lose":
        result_string = "You lose! " + computerSelection + " beats " + playerSelection + "!";
        break;
    }
    return result_string;
}



