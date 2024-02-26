const playBtn = document.querySelector('#start_btn');
const introScreen = document.querySelector('.intro');
const match = document.querySelector('.match');

let pScore = 0;
let cScore = 0;

playBtn.addEventListener('click', () => {
    introScreen.classList.add('unactive');
    match.classList.add('active');
})

// Play Match Function //
function playMatch(){
    const options = document.querySelectorAll('.options button');
    const computerOptions = ['rock', 'paper', 'scissors'];
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.cpu-hand');
    const hands = document.querySelectorAll('.hands img');

    options.forEach(option => {
        option.addEventListener('click', function(){
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                //call compare hands function
                computerHands(this.textContent, computerChoice);
            
                playerHand.src = `./assets/img/${this.textContent}.png`;
                computerHand.src = `./assets/img/${computerChoice}.png`;
            }, 2000);

            //Working on animation
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
        });
    });

    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = "";
        });
    });
}
playMatch();

//Compare Hands Function
function computerHands(playerChoice, computerChoice){
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = "It's a Tie!";
        return;
    }
    if(playerChoice === 'rock'){// checking for rock
        if(computerChoice === 'scissors'){
            winner.textContent = 'YOU WIN!';
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'YOU LOSE!';
            cScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'paper'){// checking for paper
        if(computerChoice === 'scissors'){
            winner.textContent = 'YOU LOSE!';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'YOU WIN!';
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'scissors'){// checking for scissors
        if(computerChoice === 'rock'){
            winner.textContent = 'YOU LOSE!';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'YOU WIN!';
            pScore++;
            updateScore();
            return;
        }
    }
}

//Score Function
function updateScore(){
    const playerScore = document.querySelector('.player_score p');
    const computerScore = document.querySelector('.cpu_score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}