//console.log("Hello world!");



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

//Point Keeping Variables
let playerScore = 0;
let computerScore = 0;

function playRound ( playerSelection, computerSelection ) {

    //Normalize player string into easy variable
    let normalizedPlayerSelection = playerSelection.toLowerCase();

//    console.log(typeof normalizedPlayerSelection);
//    console.log(typeof "rock");

//    console.log(normalizedPlayerSelection);

//    console.log( normalizedPlayerSelection !== "rock" );

    //Type check player variable against known variables
 //   if (normalizedPlayerSelection != "rock" || 
 //       normalizedPlayerSelection != "paper" || 
 //       normalizedPlayerSelection != "scissors") {
 //       return "Error! Please select Rock, Paper, or Scissors!";
 //   }

    //Decision Tree for game logic
    if ( computerSelection === "Rock") {

        if ( normalizedPlayerSelection === "rock" ) {
            return "It's a draw! Rock ties Rock";
        } else if ( normalizedPlayerSelection === "paper") {
            playerSelection++;
            return "You win! Paper beats Rock!";
        } else {
            computerScore++;
            return "You lose! Scissors lose to Rock!";
        }

    } else if (computerSelection === "Paper") {

        if ( normalizedPlayerSelection === "rock" ) {
            computerScore++;
            return "You lose! Rock loses to Paper!";
        } else if ( normalizedPlayerSelection === "paper") {
            return "It's a draw! Paper ties Paper";
        } else {
            playerScore++;
            return "You win! Scissors beats Paper!";
        }

    } else {

        if ( normalizedPlayerSelection === "rock" ) {
            playerScore++;
            return "You win! Rock beats Scissors!";
        } else if ( normalizedPlayerSelection === "paper") {
            computerScore++;
            return "You lose! Paper loses to Scissors!";
        } else {
            return "It's a draw! Scissors ties Scissors";
        }

    }

    throw "playRound Exception! Reached outside of decision tree without return! Perhaps playerSelection wasn't type checked?";
        
}

//Test case
//const playerSelection = "rOCk";
//const computerSelection = computerPlay();
//console.log(playRound( playerSelection, computerSelection ));


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
        window.alert("Did you make a type? Please select ONLY Rock, Paper, or Scissors (case insensitive!)");
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

game();
