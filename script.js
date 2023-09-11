const areas = document.querySelectorAll('.area');
const startBtn = document.getElementById('start-btn');
const roundTitle = document.getElementById('round-title');
const options = document.querySelectorAll('.option');
const compSelection = document.getElementById('computer-selection');
const roundResult = document.getElementById('round-result');
const roundScore = document.getElementById('round-score');
const nextBtn = document.getElementById('next-btn');
const gameOverArea = document.getElementById('game-over-area');
const finalResult = document.getElementById('final-result');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again');
let currentRound = 0;
let totalRounds = 0;
let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener('click', (event) => {
  totalRounds = document.querySelector('select').value;
  enableArea('round-area');
  prepareRound();
});

function enableArea(selectedArea) {
  areas.forEach(area => {
    if (area.getAttribute('id') === selectedArea) {
      area.classList.remove('off');
    } else {
      area.classList.add('off');
    }
  });
}

function prepareRound() {
  currentRound++;
  if (currentRound <= totalRounds) {
    roundTitle.textContent = `Round ${currentRound} of ${totalRounds}`;
    removeOptionSelection();
    compSelection.classList.add('off');
    roundResult.classList.add('off');
    nextBtn.classList.add('off');
  } else {
    enableArea('game-over-area');
    if (playerScore > computerScore) {
      finalResult.textContent = 'You won the game!';
    } else if (playerScore < computerScore) {
      finalResult.textContent = 'You lost the game.';
    } else {
      finalResult.textContent = 'The game is a tie!';
    }
    finalScore.textContent = roundScore.textContent;
  }
}

options.forEach(option => {
  option.addEventListener('click', event => {
   console.log(event.target)
    event.target.classList.add('selected');
    toggleOptionsBtns();
    let playerSelection = event.target.getAttribute('id');
    let computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
  });
})

nextBtn.addEventListener('click', (event) => {
  toggleOptionsBtns();
  prepareRound();
});

playAgainBtn.addEventListener('click', (event) => {
  currentRound = 0;
  totalRounds = 0;
  playerScore = 0;
  computerScore = 0;
  enableArea('intro-area');
  document.querySelector('select').selectedIndex = 0;
  roundScore.classList.add('off')
});

function toggleOptionsBtns() {
  options.forEach(option => {
    if (option.disabled === true) {
      option.disabled = false;
    } else {
      option.disabled = true;
    }
  });
}

function getComputerSelection() {
  const computerChoices = [`rock`, `paper`, `scissors`];
  return computerChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  compSelection.classList.remove('off');
  compSelection.textContent = `The computer picked ${computerSelection}.`;
  let resultText = '';
  if (playerSelection == 'rock' && computerSelection == 'rock') {
    resultText = 'It\'s a Tie!';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    resultText = 'You Lose! Paper beats Rock.';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    resultText = 'You Win! Rock beats Scissors.';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    resultText = 'You Win! Paper beats Rock.';
  } else if (playerSelection == 'paper' && computerSelection == 'paper') {
    resultText = 'It\'s a Tie!';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    resultText = 'You Lose! Scissors beats Paper.';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    resultText = 'You Lose! Rock beats Scissors.';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    resultText = 'You Win! Scissors beats Paper.';
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    resultText = 'It\'s a Tie!';
  }
  if (resultText.includes('Win')) {
    playerScore++;
  } else if (resultText.includes('Lose')) {
    computerScore++;
  }
  roundResult.classList.remove('off');
  roundResult.textContent = resultText;
  roundScore.classList.remove('off');
  roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  nextBtn.classList.remove('off');
}