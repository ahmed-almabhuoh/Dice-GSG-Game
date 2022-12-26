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
let winnerPlayer = 5;
let results1 = [];
let results2 = [];

// Functions
// 1. Roll Dice
const rollDiceFun = () => {
    value = Math.trunc(Math.random() * 6 + 1);
    // console.log('Value: ' + value);
    // diceResult1.textContent = '{' + results1 + '}';
    // diceResult2.textContent = '{' + results2 + '}';
    if (playingPlayer === 0) {
        firstPlayer.style.backgroundColor = 'rgb(10, 104, 104)';
        secondPlayer.style.backgroundColor = 'rgb(8, 133, 133)';
    } else {
        secondPlayer.style.backgroundColor = 'rgb(10, 104, 104)';
        firstPlayer.style.backgroundColor = 'rgb(8, 133, 133)';
    }

    winnerPlayer = winner(parseInt(score1.textContent), parseInt(score2.textContent));
    if (winnerPlayer === 0) {
        document.querySelector('.is-win-1').textContent = 'Winner Winner Checken Dinner';
        document.querySelector('.is-win-2').textContent = '';
        init();
    } else if (winnerPlayer === 1) {
        document.querySelector('.is-win-2').textContent = 'Winner Winner Checken Dinner';
        document.querySelector('.is-win-1').textContent = '';
        init();
    }

    img = `images/${value}.jpeg`;
    diceImage.src = img;

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
        // console.log('Player Playing: ' + playingPlayer);
    } else {
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
    winnerPlayer = winner(parseInt(score1.textContent), parseInt(score2.textContent));
    if (winnerPlayer === 0) {
        document.querySelector('.is-win-1').textContent = 'Winner Winner Checken Dinner';
        document.querySelector('.is-win-2').textContent = '';
        init();
    } else if (winnerPlayer === 1) {
        document.querySelector('.is-win-2').textContent = 'Winner Winner Checken Dinner';
        document.querySelector('.is-win-1').textContent = '';
        init();
    }
};

// 3. Initialization
const init = () => {
    playingPlayer = 0;
    value;
    img = `images/1.jpeg`;
    playerScore1 = 0;
    playerScore2 = 0;
    winnerPlayer = 5;
    results1 = [];
    results2 = [];

    score1.textContent = scores[0];
    score2.textContent = scores[1];

    currentScore1.textContent = playerScore1;
    currentScore2.textContent = playerScore2;
};

// 4. Check Who Win
const winner = (score1, score2) => {
    if (score1 >= score2) {
        if (score1 >= 30) {
            return 0;
        }
    } else if (score1 <= score2) {
        if (score2 >= 30) {
            return 1;
        }
    } else {
        return 5;
    }
};

// Logical Code
rollDiceBtn.addEventListener('click', rollDiceFun);

holdBtn.addEventListener('click', holdFun);

newGameBtn.addEventListener('click', init);