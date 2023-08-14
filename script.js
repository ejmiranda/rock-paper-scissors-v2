
function getComputerSelection() {
  const computerChoices = [`Rock`, `Paper`, `Scissors`];
  return computerChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;
  if (playerSelection == `rock` && computerSelection == `rock`) {
    result = `It's a Tie!`;
  } else if (playerSelection == `rock` && computerSelection == `paper`) {
    result = `You Lose! Paper beats Rock.`;
  } else if (playerSelection == `rock` && computerSelection == `scissors`) {
    result = `You Win! Rock beats Scissors.`;
  } else if (playerSelection == `paper` && computerSelection == `rock`) {
    result = `You Win! Paper beats Rock.`;
  } else if (playerSelection == `paper` && computerSelection == `paper`) {
    result = `It's a Tie!`;
  } else if (playerSelection == `paper` && computerSelection == `scissors`) {
    result = `You Lose! Scissors beats Paper.`;
  } else if (playerSelection == `scissors` && computerSelection == `rock`) {
    result = `You Lose! Rock beats Scissors.`;
  } else if (playerSelection == `scissors` && computerSelection == `paper`) {
    result = `You Win! Scissors beats Paper.`;
  } else if (playerSelection == `scissors` && computerSelection == `scissors`) {
    result = `It's a Tie!`;
  }
  return result;
}

function playGame() {  
  let rounds;
  let isInvalidRoundsValue = true;
  let playerScore = 0;
  let computerScore = 0;

  console.log(`Ladies and gentlemen, welcome to the 74th Hunger Games.`);

  do {
    console.log(`How many rounds do you want to play?`);
    rounds = +prompt(`How many rounds do you want to play?`);
    console.log(`You want to play ${rounds} rounds?`);
    if (rounds > 0 && rounds <= 5) {
      isInvalidRoundsValue = false;
      console.log(`Excellent!`);
      console.log(`Happy Hunger Games and may the odds be ever in your favor.`);    
    } else {
      console.log(`Now, now, didn't we agree to never lie to one another.`);
      console.log(`Try again, but let's keep it between 1 and 5 this time, shall we?`);
    }  
  }
  while (isInvalidRoundsValue);

  for (let i = 1; i <= rounds; i++) {
   console.log(`Round ${i} -> Player: ${playerScore}, Computer: ${computerScore}`);
   console.log("Rock, Paper or Scissors?");
   let playerSelection = prompt("Rock, Paper or Scissors?");
   playerSelection =  playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
   console.log(`You chooose ${playerSelection}.`);
   let computerSelection = getComputerSelection();
   console.log(`The computer chooose ${computerSelection}.`);
   let result = playRound(playerSelection,computerSelection); 
   if (result.includes(`Win`)) {
    playerScore++;
   } else if (result.includes(`Lose`)) {
    computerScore++;
   }
   console.log(result);

  }

  console.log(`The final score is Player: ${playerScore}, Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log(`We have a new victor!`);
  } else if (playerScore < computerScore) {
    console.log(`Oh, well... It's only death.`);
  } else {
    console.log(`It's a tie!`);
  }

} 