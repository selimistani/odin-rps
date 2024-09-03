let humanScore = 0, computerScore = 0, rounds = 0

while (rounds < 6) {
    
    if (rounds === 5) {
        let winner = (humanScore > computerScore) ? "Player" : "CPU"
        tempInput = prompt(`Game over! ${winner} victory! Type [Y/y] to play again!`, 'y')
        if (tempInput.toLowerCase() !== 'y') {
            throw new Error("User stopped script.");
        }
        humanScore = 0, computerScore = 0, rounds = 0;
    }

    playRound(getHumanChoice(), getComputerChoice())
    rounds++;
    console.log(`Player ${humanScore} - ${computerScore} CPU`)

}

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getHumanChoice() {
    validChoices = ['rock', 'paper', 'scissors']
    humanChoice = prompt(`Choose between ${validChoices}`, '').toLowerCase().trim()
    while (!validChoices.includes(humanChoice)) {
        console.log("Invalid choice")
        humanChoice = prompt(`Choose between ${validChoices}`, '').toLowerCase().trim()
    }
    return validChoices.indexOf(humanChoice)
}

function playRound(humanChoice, computerChoice) {
    
    printValues = {
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };

    if (humanChoice === computerChoice) {
        console.log(`Both picked ${printValues[humanChoice]}, tie!`)
        return
        rounds--;
    }
    else if (humanChoice > computerChoice && humanChoice !== 2) {
        console.log(`You win this round, ${printValues[humanChoice]} beats ${printValues[computerChoice]}!`)
        humanScore++;
        return
    }
    else if (computerChoice > humanChoice && computerChoice !== 2) {
        console.log(`You lose this round, ${printValues[computerChoice]} beats ${printValues[humanChoice]}!`)
        computerScore++;
        return
    }
    else if (humanChoice === 2) {
        console.log(`You win this round, ${printValues[humanChoice]} beats ${printValues[computerChoice]}!`)
        humanScore++;
        return
    }
    else {
        console.log(`You lose this round, ${printValues[computerChoice]} beats ${printValues[humanChoice]}!`)
        computerScore++;
        return        
    }
}
