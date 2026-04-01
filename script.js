console.log("hey guys")
let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    rnum = Math.random()
    if (rnum < 0.33333) {
        return "Paper"
    }
    else if (rnum > 0.66666) {
        return "Rock"
    }
    else {
        return "Scissor"
    }
}

function getHumanChoice() {
    const name = prompt("Enter Your Move:")
    return name
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    if (humanChoice == "scissor") {
        if (computerChoice == "scissor") {
            console.log("Tie") 
        }
        else if (computerChoice == "rock") {
            console.log("Computer Wins")
            computerScore++
        }
        else {
            console.log("Player Wins") 
            humanScore++
        }
    }
    if (humanChoice == "rock") {
        if (computerChoice == "scissor") {
            console.log("Player Wins") 
            humanScore++
        }
        else if (computerChoice == "rock") {
            console.log("Tie") 
        }
        else {
            console.log("Computer Wins")
            computerScore++
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "scissor") {
            console.log("Computer Wins")
            computerScore++
        }
        else if (computerChoice == "rock") {
            console.log("Player Wins") 
            humanScore++
        }
        else {
            console.log("Tie") 
        }
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  