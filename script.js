const areas = document.querySelectorAll('.area');
const startBtn = document.getElementById('start-btn');
const roundTitle = document.getElementById('round-title');
const options = document.querySelectorAll('.option');
let currentRound = 0;
let totalRounds = 0;
let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener('click', (event) => {
  totalRounds = document.querySelector('select').value;
  enableArea('round-area');
  updateRound('');
});

options.forEach(option => {
  option.addEventListener('click', event => {
    let playerSelection = event.target.getAttribute('id');
    let computerSelection = getComputerSelection();
    let result = playRound(playerSelection, computerSelection);
    updateRound(result);
  });
})

function enableArea(selectedArea) {
  areas.forEach(area => {
    if (area.getAttribute('id') === selectedArea) {
      area.classList.remove('off');
    } else {
      area.classList.add('off');
    }
  });
}

function updateRound(result) {
  currentRound++;
  if (currentRound <= totalRounds) {
    roundTitle.textContent = `Round ${currentRound} of ${totalRounds}`;
    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  } else {
    enableArea('game-over-area');
    const finalScore = document.createElement('p');
    finalScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    const gameOverArea = document.getElementById('game-over-area');
    gameOverArea.appendChild(finalScore);
  }
}

function getComputerSelection() {
  const computerChoices = [`rock`, `paper`, `scissors`];
  return computerChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let result = '';
  if (playerSelection == 'rock' && computerSelection == 'rock') {
    result = 'It\'s a Tie!';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    result = 'You Lose! Paper beats Rock.';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    result = 'You Win! Rock beats Scissors.';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    result = 'You Win! Paper beats Rock.';
  } else if (playerSelection == 'paper' && computerSelection == 'paper') {
    result = 'It\'s a Tie!';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    result = 'You Lose! Scissors beats Paper.';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    result = 'You Lose! Rock beats Scissors.';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    result = 'You Win! Scissors beats Paper.';
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    result = 'It\'s a Tie!';
  }
  return result;
}