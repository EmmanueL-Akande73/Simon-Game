const colors = ['green', 'red', 'yellow', 'blue'];
let sequence = [];
let userSequence = [];
let level = 0;
let score = 0;
const buttons = document.querySelectorAll('.btn');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('player-score');
const playerName = document.getElementById('player-name');

function flashButton(color) {
    const button = document.querySelector(`.${color}`);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 500);
}

function playSequence() {
    userSequence = [];
    let i = 0;
    const interval = setInterval(() => {
        flashButton(sequence[i]);
        i++;
        if (i >= sequence.length) clearInterval(interval);
    }, 700);
}

function nextRound() {
    level++;
    score = level - 1;
    scoreDisplay.textContent = score;
    sequence.push(colors[Math.floor(Math.random() * 4)]);
    playSequence();
}

function checkUserInput() {
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== sequence[i]) {
            alert(`Game Over! Final Score: ${score}. Try again.`);
            sequence = [];
            level = 0;
            score = 0;
            scoreDisplay.textContent = score;
            return;
        }
    }
    if (userSequence.length === sequence.length) {
        setTimeout(nextRound, 1000);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        userSequence.push(color);
        flashButton(color);
        checkUserInput();
    });
});

startButton.addEventListener('click', () => {
    const player = prompt('Enter your name:');
    if (player) playerName.textContent = player;
    sequence = [];
    level = 0;
    score = 0;
    scoreDisplay.textContent = score;
    nextRound();
});
