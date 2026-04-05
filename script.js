console.log("hey guys")
let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    rnum = Math.random()
    if (rnum < 0.33333) {
        return "paper"
    }
    else if (rnum > 0.66666) {
        return "rock"
    }
    else {
        return "scissor"
    }
}

function getHumanChoice() {
    const name = prompt("Enter Your Move:")
    return name
}

let playerchoice = document.querySelectorAll('button');
function playRound(humanChoice, computerChoice) {
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


  playerchoice.forEach(btn => {
    btn.addEventListener('click', () => {
      const humanChoice = btn.dataset.choice; 
      const computerChoice = getComputerChoice();
  
      playRound(humanChoice, computerChoice);
  
      console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  
      if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
          console.log("PLAYER WINS GAME");
        } else {
          console.log("COMPUTER WINS GAME");
        }
      }
    });
  });
  