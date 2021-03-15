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
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose R/P/S");
        playing = playRound(playerSelection, "");
        console.log(playing);
    }

    if (userPoints > computerPoints) {
        return ('User won!');
    }
    else if (userPoints < computerPoints) {
        return ("Computer won!");
    }
    else {
        return ("It's a draw!");
    }

}


trial = game();
console.log(trial);







