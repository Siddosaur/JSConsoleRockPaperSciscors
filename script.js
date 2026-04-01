console.log("hey guys")
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
console.log(getComputerChoice())