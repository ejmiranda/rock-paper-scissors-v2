const areas = document.querySelectorAll('.area');
const startBtn = document.getElementById('start-btn');
const roundTitle = document.getElementById('round-title');
const options = document.querySelectorAll('.option');
const computerSelectionPara = document.getElementById('computer-selection');
const result = document.getElementById('result');
const score = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
let currentRound = 0;
let totalRounds = 0;
let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener('click', (event) => {
  totalRounds = document.querySelector('select').value;
  enableArea('round-area');
  startRound();
});

options.forEach(option => {
  option.addEventListener('click', event => {
    toggleOptionsBtns(event.target.getAttribute('id'));
    let playerSelection = event.target.getAttribute('id');
    let computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
  });
})

function toggleOptionsBtns() {
  options.forEach(option => {
    if (option.disabled === true) {
      option.disabled = false;
    } else {
      option.disabled = true;
    }
  })
}

nextBtn.addEventListener('click', (event) => {
  toggleOptionsBtns();
  startRound();
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

function startRound() {
  currentRound++;
  if (currentRound <= totalRounds) {
    roundTitle.textContent = `Round ${currentRound} of ${totalRounds}`;
    computerSelectionPara.classList.add('off');
    result.classList.add('off');
    nextBtn.classList.add('off');
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
  computerSelectionPara.classList.remove('off');
  computerSelectionPara.textContent = `The computer picked ${computerSelection}.`;
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
  result.classList.remove('off');
  result.textContent = resultText;
  score.classList.remove('off');
  score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  nextBtn.classList.remove('off');
}