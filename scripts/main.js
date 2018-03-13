"use strict";
//Rock, paper, scissors
//John Burns

//We can play a round by looking up the result as follows:
//result = rules[playerChoice][computerChoice];
//The rules object is just a result table:
//            Rock    Paper    Scissors
//  Rock      draw    lose     win
//  Paper     win     draw     lose
//  Scissors  lose    win      draw
const rules = {"Rock": {"Rock": "draw", "Paper": "lose", "Scissors": "win"},
        "Paper": {"Rock": "win", "Paper": "draw", "Scissors": "lose"},
        "Scissors": {"Rock": "lose", "Paper": "win", "Scissors": "draw"}};
const valid_choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    return valid_choices[n];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

//Validate player input - reduce to lower case, capitalise the first letter, check it against
//array valid_choices. Return null if the player entered an invalid choice.
function validatePlayerInput(playerSelection) {
    playerSelection = capitalize(playerSelection);

    if (valid_choices.includes(playerSelection)) {
        return playerSelection;
    } else {
        return null;
    }
}

function buildResultString(result, playerSelection, computerSelection) {
    let result_string;
    switch (result) {
        case "win":
            result_string = "You win! " + playerSelection + " beats " + computerSelection + "!";
            break;
        case "draw":
            result_string = "Draw! You both chose " + playerSelection + ".";
            break;
        case "lose":
            result_string = "You lose! " + computerSelection + " beats " + playerSelection + "!";
            break;
        }
    return result_string;
}

//Play a single round and show the result
function playRound(playerSelection, computerSelection) {
    playerSelection = validatePlayerInput(playerSelection);
    if (!playerSelection) {
        return "Error! playerSelection must be one of rock, paper or scissors!";
    }

    let result = rules[playerSelection][computerSelection];

    return buildResultString(result, playerSelection, computerSelection);
}

//Play a game of 5 rounds and show the result. Does not make use of playRound as the rules array
//makes it unnessecary.
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for ( let round = 0; round < 5; round++ ) {
        let playerSelection = null;
        let computerSelection = computerPlay();

        while(!playerSelection){
            playerSelection = validatePlayerInput(window.prompt("Enter rock, paper or scissors:"));
        }

        let result = rules[playerSelection][computerSelection];

        if(result === "win") {
            playerWins++;
        } else if (result === "lose") {
            computerWins++;
        }
        
        console.log("Round " + (round + 1));
        console.log("    " + buildResultString(result, playerSelection, computerSelection));
    }
    showWinner(playerWins, computerWins);
}

function showWinner(playerWins, computerWins) {
    if (playerWins > computerWins){
        console.log("Congratulations! You won " + playerWins + " games to " + computerWins);
    } else if (computerWins > playerWins) {
        console.log("Sorry! You were beaten " + computerWins + " games to " + playerWins);
    } else {
        console.log("It's a draw!");
    }
}



