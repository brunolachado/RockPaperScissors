//Funcao criada com as opcoes que o player e computador vao poder jogar, o computador vai buscar um valor random dentro do array pois estamos a fazer math.random x o numero de valores dentro da array
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// add comentario 
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        const computer = document.getElementById('computerScore');
        computer.innerHTML = 'Computer score: ' + computerScore;

    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;

        const player = document.getElementById('playerScore');
        player.innerHTML = 'Player score: ' + playerScore;

    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        const player = document.getElementById('playerScore');
        player.innerHTML = 'Player score: ' + playerScore;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        const computer = document.getElementById('computerScore');
        computer.innerHTML = 'Computer score: ' + computerScore;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        const computer = document.getElementById('computerScore');
        computer.innerHTML = 'Computer score: ' + computerScore;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        const player = document.getElementById('playerScore');
        player.innerHTML = 'Player score: ' + playerScore;
    }
    else {
        tie++;
        const tieElement = document.getElementById('tie');
        tieElement.innerHTML = 'Tie: ' + tie;
    }

    rounds--;
    if (rounds === 0) {
        if (playerScore === computerScore) {
            alert('tie');
        } else if (playerScore > computerScore) {
            alert('player win')
        } else {
            alert('computer win');
        }

        let buttonsDiv = document.getElementById('buttonDiv');

        const resetButton = document.createElement('button');
        resetButton.textContent = "reset";

        buttonsDiv.appendChild(resetButton);
        buttonsDiv.addEventListener('click', e => {
            reset();
        })
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    rounds = 5;

    const computer = document.getElementById('computerScore');
    computer.innerHTML = 'Computer score: ' + computerScore;

    const player = document.getElementById('playerScore');
    player.innerHTML = 'Player score: ' + playerScore;

    const tieElement = document.getElementById('tie');
    tieElement.innerHTML = 'Tie: ' + tie;
}

//Pontos 
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let rounds = 5;

//Valors da ronda vao para estas variaveis 
let playerSelection;

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
    playerSelection = "rock";

    let computerSelection = getComputerChoice();
    console.log('you choose ' + playerSelection + ' computer choose ' + computerSelection)
    playRound(playerSelection, computerSelection);
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
    playerSelection = "paper";

    let computerSelection = getComputerChoice();
    console.log('you choose ' + playerSelection + ' computer choose ' + computerSelection)
    playRound(playerSelection, computerSelection);
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";

    let computerSelection = getComputerChoice();
    console.log('you choose ' + playerSelection + ' computer choose ' + computerSelection)
    playRound(playerSelection, computerSelection);
});

function playGame(roundsLeft) {
    if (roundsLeft === 0) {
        return "Game over!";
        return "Player Score", playerScore;
        return "Computer Score", computerScore;
    }
    playGame(roundsLeft - 1);
}

playGame(5);