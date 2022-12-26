// Players
const firstPlayer = document.querySelector('.first-player');
const secondPlayer = document.querySelector('.second-player');

// Scores
const score1 = document.querySelector('.score-1');
const score2 = document.querySelector('.score-2');

// Current Scores
const currentScore1 = document.querySelector('.current-score-1');
const currentScore2 = document.querySelector('.current-score-2');

// Results
const diceResult1 = document.querySelector('.result-1');
const diceResult2 = document.querySelector('.result-2');

// Btns
const newGameBtn = document.querySelector('.new-game-btn');
const rollDiceBtn = document.querySelector('.roll-dice-btn');
const holdBtn = document.querySelector('.hold-btn');

// Dice Image Class
const diceImage = document.querySelector('.dice-image')

// Varibales
// Current Playing Player
const scores = [0, 0];
let playingPlayer = 0;
let value;
let img = `images/1.jpeg`;
let playerScore1 = 0;
let playerScore2 = 0;
let results1 = [];
let results2 = [];

// Functions
// 1. Roll Dice
const rollDiceFun = () => {
    value = Math.trunc(Math.random() * 6 + 1);
    console.log('Value: ' + value);
    // diceResult1.textContent = '{' + results1 + '}';
    // diceResult2.textContent = '{' + results2 + '}';

    if (value === 1) {
        if (playingPlayer === 0) {
            results1.push(value);
            score1.textContent = parseInt(score1.textContent) + playerScore1;
            playerScore1 = 0;
            currentScore1.textContent = 0;
        } else {
            results2.push(value);
            score2.textContent = parseInt(score2.textContent) + playerScore2;
            playerScore2 = 0;
            currentScore2.textContent = 0;
        }
        // console.log(playingPlayer);
        playingPlayer = (playingPlayer === 0) ? 1 : 0;
        console.log('Player Playing: ' + playingPlayer);
    } else {
        img = `images/${value}.jpeg`;
        diceImage.src = img;

        if (playingPlayer === 0) {
            currentScore1.textContent = value;
            results1.push(value);
            playerScore1 += value;
        } else {
            currentScore2.textContent = value;
            results2.push(value);
            playerScore2 += value;
        }
    }
};

// 2. Hold
const holdFun = () => {
    if (playingPlayer === 0) {
        score1.textContent = parseInt(score1.textContent) + playerScore1;
        playerScore1 = 0;
        currentScore1.textContent = 0;
        playingPlayer = 1;
    } else {
        score2.textContent = parseInt(score2.textContent) + playerScore2;
        playerScore2 = 0;
        currentScore2.textContent = 0;
        playingPlayer = 0;
    }
};

// Logical Code
rollDiceBtn.addEventListener('click', rollDiceFun);

holdBtn.addEventListener('click', holdFun);