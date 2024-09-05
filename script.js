const printDict = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
}

// First dimension is user choice, second dimension is CPU choice.
const messageList = [["Tie! You both pick Epstein and molest each other equally!", // Both ROCK
    "CPU Wins! Dahmer slurps up Epstein and cuddles him with love!", // User ROCK, cpu PAPER
    "You win! Epstein shoves the scissor down where the sun don't shine!"], // User ROCK, cpu SCISSORS
    ["You win! Dahmer slurps up Epstein and cuddles him with love!", // User PAPER, cpu ROCK
    "Tie! Dahmer and Dahmer roofie each other and have a nice nap!", // Both PAPER
    "CPU Wins! The scissors beat the SHIT out of Dahmer!"], // User PAPER, cpu SCISSORS
    ["CPU wins! Epstein shoves the scissor down where the sun don't shine!", // User SCISSORS, cpu ROCK
    "You Win! The scissors beat the SHIT out of Dahmer!", // User SCISSORS, cpu PAPER
    "Tie! You both picked scissors!"]] // Both SCISSORS

let userScore = 0, cpuScore = 0, roundCount = 0;

const options = document.querySelectorAll(".btn");

const resultMessage = document.querySelector("#result-message")
const userScoreElement = document.querySelector("#user-score")
const cpuScoreElement = document.querySelector("#cpu-score")

options.forEach(option => {
    option.addEventListener('mousedown', () => {
        playRound(option.id);
    });
});

function playRound(userChoice) {
    userChoice = printDict[userChoice]
    let cpuChoice = getCpuChoice()

    if ((userChoice - cpuChoice) % 3 == 1) // Modular arithmetic, user wins
    {
        userScore++;
        roundCount++;
    }
    else if (!(userChoice == cpuChoice)) {
        cpuScore++;
        roundCount++;    
    }

    resultMessage.textContent = messageList[userChoice][cpuChoice]
    
    cpuScoreElement.textContent = cpuScore
    userScoreElement.textContent = userScore

    if (roundCount > 4) {
        winner = (userScore > cpuScore) ? "You win!" : "CPU wins!"
        resultMessage.textContent = winner + " Scores are now reset!"
        userScore = 0;
        cpuScore = 0;
        roundCount = 0;
    }
}

function getCpuChoice() {
    return Math.floor(Math.random() * 3);
}
