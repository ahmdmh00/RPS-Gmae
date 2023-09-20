const choices = ["Rock", "Paper", "Scissors"];
const buttonContainer = document.getElementById('button-container');
const playerChoiceDiv = document.getElementById('player-choice').querySelector('span');
const computerChoiceDiv = document.getElementById('computer-choice').querySelector('span');
const resultDiv = document.getElementById('result').querySelector('span');
const playAgainButton = document.getElementById('play-again');

choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => playGame(choice));
    buttonContainer.appendChild(button);
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = decideWinner(playerChoice, computerChoice);
    playerChoiceDiv.textContent = playerChoice;
    computerChoiceDiv.textContent = computerChoice;
    resultDiv.textContent = winner === 'player' ? "You win!" : winner === 'computer' ? "You lose, sucker!" : "It's a tie!";
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function decideWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || 
        (playerChoice === 'Paper' && computerChoice === 'Rock') || 
        (playerChoice === 'Scissors' && computerChoice === 'Paper')) return 'player';
    return 'computer';
}

playAgainButton.addEventListener('click', () => {
    playerChoiceDiv.textContent = '';
    computerChoiceDiv.textContent = '';
    resultDiv.textContent = '';
});
