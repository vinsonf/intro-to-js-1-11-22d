let activePlayer = undefined;
let stars = 5;
let coins = 10;


function getButton(num) {
    return document.querySelectorAll('button')[num];
}

const player1Button = getButton(0);
const player2Button = getButton(1);
const starButton = getButton(2);
const coinButton = getButton(3);
const player1ScoreButton = getButton(4);
const player2ScoreButton = getButton(5);


const player1 = {
    name: 'player1',
    score: 0,
    collectStar: function() {
        this.score += stars;
        
    },
    collectCoin: function() {
        this.score += coins;
        
    },
    updateScore() {
        player1ScoreButton.innerHTML = this.score;
    }
};

const player2 = {
    name: 'player2',
    score: 0,
    collectStar: function() {
        this.score += stars;
       
    },
    collectCoin: function() {
        this.score += coins;
        
    },
    updateScore() {
        player2ScoreButton.innerHTML = this.score;
    }
}

player1Button.addEventListener('click', () => {
    activePlayer = player1;
    player1Button.classList.add('active');
    player2Button.classList.remove('active');
});

player2Button.addEventListener('click', () => {
    activePlayer = player2;
    player2Button.classList.add('active');
    player1Button.classList.remove('active');
});

starButton.addEventListener('click', () => {
    if (activePlayer) {
        activePlayer.collectStar();
        activePlayer.updateScore();
        console.log(activePlayer)
    } else {
        console.log('chose player first');
    }
});
coinButton.addEventListener('click', () => {
    if (activePlayer) {
        activePlayer.collectCoin();
        activePlayer.updateScore();
        console.log(activePlayer)
    } else {
        console.log('chose player first');
    }
})