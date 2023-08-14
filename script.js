
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  return computerChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;
  if (playerSelection == "rock" && computerSelection == "rock") {
    result = "It's a Tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = "You Lose! Paper beats Rock.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "You Win! Rock beats Scissors.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You Win! Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    result = "It's a Tie!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = "You Lose! Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = "You Lose! Rock beats Scissors.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "You Win! Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    result = "It's a Tie!";
  }
  return result;
}