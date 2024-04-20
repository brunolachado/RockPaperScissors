//Funcao criada com as opcoes que o player e computador vao poder jogar, o computador vai buscar um valor random dentro do array pois estamos a fazer math.random x o numero de valores dentro da array
const getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";
    }
    else {
        return "Its a tie!"
    }
}

//Pontos 
let playerScore = 0;
let computerScore = 0;

prompt("Rock, Paper, Scissors").toLowerCase();

//Valors da ronda vao para estas variaveis 
const playerSelection = "";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame(roundsLeft) {
    if (roundsLeft === 0) {
        return "Game over!";
        return "Player Score", playerScore;
        return "Computer Score", computerScore;
    }
    playGame(roundsLeft - 1);
}
playGame(5);