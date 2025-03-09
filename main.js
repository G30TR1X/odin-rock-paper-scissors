let humanScore = 0
let computerScore = 0

const result = document.querySelector("#result");

function getComputerChoice()
{
    let choice = Math.floor(Math.random()*10) % 3;
    if(choice == 0)
    {
        return "rock";
    }
    else if(choice == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let choice = prompt("Rock, Paper, or Scissors");

    while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors")
    {
        choice = prompt("Please enter a valid choice of Rock, Paper, or Scissors")
    }

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    const paragraph = document.createElement("p")
    if (humanChoice === computerChoice)
    {
        paragraph.textContent = "It's a tie!"
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") ||(humanChoice === "paper" && computerChoice === "rock"))
    {
        paragraph.textContent = "You Won! " + humanChoice + " beats " + computerChoice
        humanScore++;
    }
    else
    {
        paragraph.textContent = "You Lose! " + computerChoice + " beats " + humanChoice
        computerScore++;
    }
    result.appendChild(paragraph);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function endGame()
{
    const paragraph = document.createElement("p")
    if (humanScore > 5)
    {
        paragraph.textContent = "Human Won!"
    }
    else if (computerScore > 5)
    {
        paragraph.textContent = "Computer Won!"
    }

    const button = document.createElement("button")
    button.textContent = "Play Again"
    button.addEventListener("click", () => {
        location.reload();
    })
    result.appendChild(paragraph);
    result.appendChild(button)
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    if (humanScore > 5 || computerScore > 5) endGame()
})
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    if (humanScore > 5 || computerScore > 5) endGame()
})
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    if (humanScore > 5 || computerScore > 5) endGame()
})