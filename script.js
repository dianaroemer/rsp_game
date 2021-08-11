//Point Keeping Variables
let playerScore = 0;
let computerScore = 0;

// Generate computer choice, returning a string
function computerPlay() {
    //Generate a random number between 1 and 3 using the Math.random() function
    let num = (Math.floor(Math.random() * 3) + 1) ;

    //Decision tree to determine return output based on num
    if( num === 1 ) {
        return 'Rock';
    } else if ( num === 2 ) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

    throw "Function computerPlay() reached unknown value!";
}



function playRound ( playerSelection, computerSelection ) {
    //Decision Tree for game logic


    if ( computerSelection === "Rock") {

        if ( playerSelection === "rock" ) {
            return "It's a draw! Rock ties Rock";
        } else if ( playerSelection === "paper") {
            playerScore++;
            return "You win! Paper beats Rock!";
        } else {
            computerScore++;
            return "You lose! Scissors lose to Rock!";
        }

    } else if (computerSelection === "Paper") {

        if ( playerSelection === "rock" ) {
            computerScore++;
            return "You lose! Rock loses to Paper!";
        } else if ( playerSelection === "paper") {
            return "It's a draw! Paper ties Paper";
        } else {
            playerScore++;
            return "You win! Scissors beats Paper!";
        }

    } else {

        if ( playerSelection === "rock" ) {
            playerScore++;
            return "You win! Rock beats Scissors!";
        } else if ( playerSelection === "paper") {
            computerScore++;
            return "You lose! Paper loses to Scissors!";
        } else {
            return "It's a draw! Scissors ties Scissors";
        }

    }

    throw "playRound Exception! Reached outside of decision tree without return! Perhaps playerSelection wasn't type checked?";
        
}


//Get player input and type check it against known variables
function playerPlay() {

    let playerInput = window.prompt("Please select Rock, Paper, or Scissors");

    playerInput = playerInput.toLowerCase();

    if( playerInput == "rock" ||
        playerInput == "paper" ||
        playerInput == "scissors" ) {
            return playerInput;
    } 
    else {
        window.alert("Did you make a typo? Please select ONLY Rock, Paper, or Scissors (case insensitive!)");
        return playerPlay();
    }

}


//Game Function
function game() {

    //Reinitialize scores to zero
    playerScore = 0;
    computerScore = 0;

    //Play Round 1, starting with player and computer input
    let playerInput = playerPlay();
    let computerInput = computerPlay();
    //Return Round 1 and current score standings
    console.log(playRound( playerInput, computerInput ));
    console.log("Round 1");
    console.log("Your score is: " + playerScore);
    console.log("The computer's score is :" + computerScore);

    //Play Round 2, starting with player and computer input
    playerInput = playerPlay();
    computerInput = computerPlay();
    //Return Round 2 and current score standings
    console.log(playRound( playerInput, computerInput ));
    console.log("Round 2");
    console.log("Your score is: " + playerScore);
    console.log("The computer's score is :" + computerScore);

    //Play Round 3, starting with player and computer input
    playerInput = playerPlay();
    computerInput = computerPlay();
    //Return Round 3 and current score standings
    console.log(playRound( playerInput, computerInput ));
    console.log("Round 3");
    console.log("Your score is: " + playerScore);
    console.log("The computer's score is :" + computerScore);

    //Play Round 4, starting with player and computer input
    playerInput = playerPlay();
    computerInput = computerPlay();
    //Return Round 4 and current score standings
    console.log(playRound( playerInput, computerInput ));
    console.log("Round 4");
    console.log("Your score is: " + playerScore);
    console.log("The computer's score is :" + computerScore);

    //Play Round 5, starting with player and computer input
    playerInput = playerPlay();
    computerInput = computerPlay();
    //Return Round 5 and current score standings
    console.log(playRound( playerInput, computerInput ));
    console.log("Round 5");
    console.log("Your score is: " + playerScore);
    console.log("The computer's score is :" + computerScore);

    //Log final scores and winnner/lose to console
    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (playerScore < computerScore) {
        console.log("Good try, but you lose!");
    } else {
        console.log("Well, I'll be! It's a Draw!");
    }

}

function gameResult(result) {
    const resultBanner = document.querySelector('#resultBanner');
    resultBanner.textContent = result;
    // resultBanner.appendChild(resultBanner);
}

function updateScoreboard() {

    const scoreboard = document.querySelector("#scoreboard");
    // This line is necessary so that the textContent will accept the newline characters
    scoreboard.setAttribute('style', 'white-space: pre;');
    scoreboard.textContent = "Your score is " + playerScore + ".\r\n The Computer\'s score is " + computerScore + ".\r\n First to five points wins!";

    
    if( playerScore >= 5 ) { 
        const div = document.createElement('h1');
        div.textContent = "Congratulations! You won! Refresh the page to play again!"
        scoreboard.appendChild(div);
    } else if ( computerScore >= 5 ) {
        const div = document.createElement('h1');
        div.textContent = "Ah dang! You lost! Refresh the page to play again!"
        scoreboard.appendChild(div);
    }

}

// Assigning event listeners to buttons
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissBtn = document.querySelector('#scissBtn');
rockBtn.addEventListener('click', () => { gameResult(playRound('rock', computerPlay())); updateScoreboard(); });
paperBtn.addEventListener('click', () => { gameResult(playRound('paper', computerPlay())); updateScoreboard(); });
scissBtn.addEventListener('click', () => { gameResult(playRound('scissors', computerPlay())); updateScoreboard(); });




// Event listener to image of rock
const rockImgBtn = document.querySelector('.rockImg');
rockImgBtn.addEventListener('click', () => { gameResult(playRound('rock', computerPlay())); updateScoreboard(); });
// Style rock image
rockImgBtn.setAttribute('style', 'width: 30%;');

const paperImgBtn = document.querySelector('.paperImg');
paperImgBtn.addEventListener('click', () => { gameResult(playRound('paper', computerPlay())); updateScoreboard(); });
paperImgBtn.setAttribute('style', 'width: 30%;');

const scissImgBtn = document.querySelector('.scissImg');
scissImgBtn.addEventListener('click', () => { gameResult(playRound('scissors', computerPlay())); updateScoreboard(); });
scissImgBtn.setAttribute('style', 'width: 30%;');