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
            
            computerHands(this.textContent, computerChoice);
            
            playerHand.src = `./assets/img/${this.textContent}.png`;
            computerHand.src = `./assets/img/${computerChoice}.png`;
        });
    });
    
}
playMatch();

//Compare Hands Function
function computerHands(playerChoice, computerChoice){
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a Tie';
        return;
    }
    if(playerChoice === 'rock'){// checking for rock
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'paper'){// checking for paper
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
    }
    if(playerChoice === 'scissors'){// checking for scissors
        if(computerChoice === 'rock'){
            winner.textContent = 'Computer Wins';
            cScore++;
            updateScore();
            return;
        }
        else{
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        }
    }
}

/* $('#rock,#paper,#scissors').on('click', function () {
    const user = $(this).html();
    $('#player').html(user);
    
    gameplay(user)
});

let pts_user = 0;
let pts_cpu = 0;

function gameplay(player_game) {
    let cpu_game = Math.random() * 3;
    if (cpu_game < 1) {
        cpu_game = 'Rock'
    }
    else if (cpu_game < 2) {
        cpu_game = 'Paper'
    }
    else {
        cpu_game = 'Scissors'
    }
    const winner = $('#winner');
    if (player_game == 'Rock') {
        if (cpu_game == 'Rock') {
            winner.html("I'ts a tie!");
        }
        else if (cpu_game == 'Paper') {
            winner.html('You lose!')
            pts_cpu++
        }
        else {
            winner.html('You win!!')
            pts_user++
        }
    }
    else if (player_game == 'Paper') {
        if (cpu_game == 'Rock') {
            winner.html('You win!!');
            pts_user++
        }
        else if (cpu_game == 'Paper') {
            winner.html("I'ts a tie!")
        }
        else {
            winner.html('You lose!')
            pts_cpu++
        }
    }
    else if (player_game == 'Scissors') {
        if (cpu_game == 'Rock') {
            winner.html('You lose!');
            pts_cpu++
        }
        else if (cpu_game == 'Paper') {
            winner.html('You win!!')
            pts_user++
        }
        else {
            winner.html("I'ts a tie!")
        }
    }

    $('#cpu').html(cpu_game);

    show_score()
}

function show_score () {
    console.log('por terminar...')
}
 */