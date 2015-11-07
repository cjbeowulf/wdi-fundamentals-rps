////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;

    if (move === undefined || move === null) {
        getInput();
    }
    else {
        return move;
    };
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;

    if (move === undefined || move === null) {
        randomPlay();
    }
    else {
        return move;
    };
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    var winner;
    if(playerMove === computerMove){
    return "The result is a tie!";
    } 
    if(playerMove === "rock"){
        if(computerMove === "scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }     
    }
    if(playerMove === "paper"){
        if(computerMove === "rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if (playerMove === "scissors"){
        if(computerMove === "rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        } 
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var games = 0;
    while (games < 6){
        getPlayerMove();
        getComputerMove();
        if(playerMove === computerMove){
            return "The result is a tie!";
        }
        if(playerMove === "rock"){
            if(computerMove === "scissors"){
                return "rock wins";
                playerWins += 1;
            }
            else{
                return "paper wins";
                computerWins +=1;
            }     
        }
        if(playerMove === "paper"){
            if(computerMove === "rock"){
                return "paper wins";
                playerWins += 1;
            }
            else{
                return "scissors wins";
                computerWins +=1;
            }
        }
        if (playerMove === "scissors"){
            if(computerMove === "rock"){
                return "rock wins";
                computerWins +=1;
            }
            else{
                return "scissors wins";
                playerWins += 1;
            } 
        }
    }; 
    return [playerWins, computerWins];
}

