let humanScore = 0
let computerScore = 0

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
    while (humanChoice === computerChoice) {
      humanChoice = prompt("Draw! Please choose again.");
      humanChoice = humanChoice.toLowerCase();
      while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") 
      {
        humanChoice = prompt("Please enter a valid choice of Rock, Paper, or Scissors")
        humanChoice = humanChoice.toLowerCase()
      }
      computerChoice = getComputerChoice();
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") ||(humanChoice === "paper" && computerChoice === "rock"))
    {
        console.log("You Won! " + humanChoice + " beats " + computerChoice)
        humanScore++;
    }
    else
    {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice)
        computerScore++;
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }
    if(humanScore > computerScore)
    {
        console.log("You Won!")
    }
    else
    {
        console.log("You Lost!")
    }
}

playGame()