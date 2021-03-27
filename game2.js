function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * Math.floor(3))];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //rocks
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userPoints += 1;
        return ("You win! Rock beats scissors");

    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerPoints += 1;
        return ("You lose! Paper beats rock");
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return ("Draw! Rock and Rock");
    }

    //papers
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return ("Draw! Paper and Paper");
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userPoints += 1;
        return ("You win! Paper beats rock");
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerPoints += 1;
        return ("You lose! Scissors beats paper");
    }

    //scissors
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return ("Draw! Scissors and scissors");
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userPoints += 1;
        return ("You win! Scissors beats paper");
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerPoints += 1;
        return ("You lose! Rock beats scissors");
    }

}

function game() {
    userPoints = 0;
    computerPoints = 0;
    let playerSelection = "";
    const buttons = document.querySelectorAll("button");
    const userScore = document.createElement("div");
    const computerScore = document.createElement('div');
    const container = document.querySelector(".container");
    const won = document.createElement('div');
    const game = document.querySelector(".game");


    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            playerSelection = button.value;
            playing = playRound(playerSelection, "");
            game.appendChild(userScore);
            game.appendChild(computerScore);
            userScore.textContent = "User Points: " + String(userPoints);
            computerScore.textContent = "Computer Points: " + String(computerPoints);


            if (userPoints >= 5) {
                container.appendChild(won);
                won.textContent = "User won!";
            }
            else if (computerPoints >= 5) {
                container.appendChild(won);
                won.textContent = "Computer won!";
            }
        });
    });
}


trial = game();
console.log(trial);







