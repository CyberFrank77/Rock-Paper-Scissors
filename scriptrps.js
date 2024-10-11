var humanScore = 0;
var computerScore = 0;


function getComputerChoice() {
    var random = Math.random();
    if (random < 0.33) {
        return "Rock";
    } else if(random < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



function getHumanChoice(choice) {
    if (choice == "rock") {
        return "Rock";
    } else if (choice == "paper") {
        return "Paper";
    } else if (choice == "scissors") {
        return "Scissors";
    }
}



function playRound(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        return "It's a TIE!";
    }
    if ((humanSelection == "Rock" && computerSelection == "Scissors") ||
        (humanSelection == "Scissors" && computerSelection == "Paper") ||
        (humanSelection == "Paper" && computerSelection == "Rock")
    ) {
        humanScore ++;
        return `You WON! ${humanSelection} beats ${computerSelection}`;
    } else {
        computerScore ++;
        return `You LOSE! ${computerSelection} beats ${humanSelection}`;
    }

}


function playGame(rounds) {
    for (let i = 0; i <= rounds; i++) {
        const computerSelection = getComputerChoice();
        var choice = prompt("Rock, Paper or Scissors? (or type 'exit' to quit)".toLowerCase());
        if (choice === "exit") {
            break
        }
        const humanSelection = getHumanChoice(choice);

        if (i <= rounds) {
            console.log(`You chose: ${humanSelection}`);
            console.log(`Computer chose: ${computerSelection}`);
            console.log(playRound(humanSelection, computerSelection));
            if (humanScore >= 3) {
                console.log("You WON!");
                break
            } else if (computerScore >=3) {
                console.log("Computer WON!");
                break
            } else if (i == 4 && humanScore == computerScore) {
                console.log("It's the FINAL TIE!");
                break
            } else if (i == 4 && humanScore > computerScore) {
                console.log("You WON!");
                break
            } else if (i == 4 && humanScore < computerScore) {
                console.log("Computer WON!");
                break
            }
        }
    }
}
playGame(4);

