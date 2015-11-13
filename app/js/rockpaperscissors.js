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
        console.log("The result is a tie!");
        return winner;
    } 
    if(playerMove === "rock"){
        if(computerMove === "scissors"){
            console.log("rock wins");
            return winner;
        }
        else{
            console.log("paper wins");
            return winner;
        }     
    }
    if(playerMove === "paper"){
        if(computerMove === "rock"){
            console.log("paper wins");
            return winner;
        }
        else{
            console.log("scissors wins");
            return winner;
        }
    }
    if (playerMove === "scissors"){
        if(computerMove === "rock"){
            console.log("rock wins");
            return winner;
        }
        else{
            console.log("scissors wins");
            return winner;
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
        getWinner();
            if (getWinner == getInput) {
                playerWins += 1;
            } else if (getWinner == getComputerMove) {
                computerWins += 1;
            } else{
                return "tie!";
            };
    }; 
    return [playerWins, computerWins];
}

//MY OWN VERSION OF ROCK, PAPER, SCISSORS  

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }
// var compare = function(choice1,choice2){
//   if(choice1 === choice2){
//     return "The result is a tie!";
//   }
//   if(choice1 === "rock"){
//     if(choice2 === "scissors"){
//         return "rock wins";
//     }
//     else{
//         return "paper wins";
//     }
//   }
//   if(choice1 === "paper"){
//       if(choice2 === "rock"){
//           return "paper wins";
//       }
//       else{
//           return "scissors wins";
//       }
//   }
//   if (choice1 === "scissors"){
//       if(choice2 === "rock"){
//           return "rock wins";
//       }
//       else{
//           return "scissors wins";
//       }
//   }
//   if(choice1 !== "rock", "paper", "scissors"){
//       return "You only have 3 choices rock, paper, scissors.";
//   };
// };
// compare(userChoice, computerChoice);