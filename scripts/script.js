const acts = document.querySelectorAll('.act');
const roundTitle = document.getElementById('main-act-title');
const compSelection = document.getElementById('computer-selection');
const roundResult = document.getElementById('round-result');
const roundScore = document.getElementById('round-score');
const finalResult = document.getElementById('final-result');
const finalScore = document.getElementById('final-score');

const startBtn = document.getElementById('start');
const options = document.querySelectorAll('.option');
const nextBtn = document.getElementById('next');
const playAgainBtn = document.getElementById('play-again');

let currentRound;
let totalRounds;
let playerScore;
let computerScore;
let computerSelection;

startBtn.addEventListener('click', () => {
  let rounds = document.getElementById('round-qty-selector').value;
  startGame(rounds);
});

options.forEach(option => {
  option.addEventListener('click', (event) => {
    toggleSelection(event.target);
    toggleOptions();
    let playerSelection = event.target.getAttribute('id');
    playRound(playerSelection);
  });
});

nextBtn.addEventListener('click', () => {
  toggleSelection();
  toggleOptions();
  startRound();
});

playAgainBtn.addEventListener('click', () => {
  finalResult.classList.add('lost');
  setStage('opening');
});

function startGame(rounds) {
  setStage('main');
  currentRound = 0;
  totalRounds = rounds;
  playerScore = 0;
  computerScore = 0;
  startRound();
}

function finishGame() {
  finalResult.classList.remove('win', 'lost');
  setStage('closing');
  if (playerScore > computerScore) {
    finalResult.classList.add('win');
    finalResult.textContent = 'You won the game!';
  } else if (playerScore < computerScore) {
    finalResult.textContent = 'You lost the game.';
    finalResult.classList.add('lost');
  } else {
    finalResult.textContent = 'The game is a tie!';
  }
  finalScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

function startRound() {
  currentRound++;
  if (currentRound <= totalRounds) {
    roundTitle.textContent = `Round ${currentRound} of ${totalRounds}`;
    compSelection.classList.add('off');
    roundResult.classList.add('off');
    nextBtn.classList.add('off');
  } else {
    roundScore.classList.add('off');
    finishGame();
  }
}

function playRound(playerSelection) {
  let resultText = '';
  computerSelection = getComputerSelection();
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
  finishRound(resultText);
}

function finishRound(resultText) {
  compSelection.classList.remove('off');
  compSelection.textContent = `The computer picked ${computerSelection}.`;
  roundResult.classList.remove('off');
  roundResult.textContent = resultText;
  roundScore.classList.remove('off');
  roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  nextBtn.classList.remove('off');
}

function setStage(nextAct) {
  acts.forEach(act => {
    if (act.getAttribute('id') === nextAct) {
      act.classList.remove('off');
    } else {
      act.classList.add('off');
    }
  });
}

function toggleSelection(selection) {
  options.forEach(option => {
    if (option.children[0] === selection) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });  
}

function toggleOptions() {
  options.forEach(option => {
    option.disabled = !option.disabled;
  });
}

function getComputerSelection() {
  const computerChoices = [`rock`, `paper`, `scissors`];
  return computerChoices[Math.floor(Math.random() * 3)];
}