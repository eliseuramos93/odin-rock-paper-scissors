/*==============================================================================
choose rock, paper or scissors for computer => getComputerChoice();
  [OK] make computer choose a random number from 0 to 2 
  => getComputerRandomNumber();
  [OK] create rule to correlate each value to an option (rock, paper or 
  scissors) => 0 is Paper, 1 is Rock, 2 is Scissors (alphabetical order)
  [OK] assign the number to an option => if inside getComputerChoice();
  [OK] store the computer's choice in a variable => let computerSelection*/
//==============================================================================

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice(randomInt) {
  if (randomInt === 0) {
    return "paper";
  } else if (randomInt === 1) {
    return "rock";
  } else if (randomInt === 2) {
    return "scissors"
  } else {
    return "Error - Problem in the RNG"
  };
}

/*==============================================================================
get choice from player => getPlayerChoice();
  [OK] ask the user if he wants rock, paper or scissors
  [OK] transform input to lowercase to avoid case-sensitive issues;
  [OK] remove trailing and following spaces w/ trim
  [OK] check if player made a correct input (rock, paper or scissors) 
  => let validChoice;
    [OK] if not, keep asking until they get it right => while loop, 
    sentry invalidInput
  [OK] store the players choice in a variable => let playerSelection;*/
//==============================================================================

function getPlayerChoice() {
  let invalidInput = true;
  let playerInput;

  while (invalidInput === true) {
    playerInput = prompt("Make a choice: Rock, paper or scissors?");
    playerInput = playerInput.toLowerCase();
    playerInput = playerInput.trim();
  
    if (playerInput === "rock" || playerInput === "paper" || 
        playerInput === "scissors") {

      invalidInput = false;
    } else {
      alert("Invalid option. Choose only between rock, paper and scissors.");
    }
  }

  return playerInput;
}

/*============================================================================== 
compare player and computer's choices [playRound()]
  [OK]if equal, it's a tie
    [OK] if tied, store NULL in a variable;
  [OK]else if different, apply a rule to determine the winner;
    [OK]if player won, store TRUE in a variable
    [OK]if player lost, store FALSE in a variable*/
//==============================================================================

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return null;

  } else if (
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "rock")) {  
      return true;

  } else {
    return false;
  };
}
// =============================================================================
/* create a function game() to play a 5-round game that keeps score and reports 
a winner at the end*/
  // [OK] create a variable playerScore that starts at 0;
  // [OK] create a variable computerScore that starts at 0;
  // [OK] play a round of the game [playRound];
  // [OK] update the score after the round [updateScore];
  // [OK] display the results and the updated score to the player [showScore];
  // [OK] repeat the game until either the player or computer reaches 3 points;
// =============================================================================

function updateScore(roundResults, score) {
  if (roundResults === true) {
    score[0] += 1
    // player won

  } else if (roundResults === false) {
    score[1] += 1;
    // computer won
  }

  return score;
}

function showScore(
  playerSelection, 
  computerSelection, 
  playerScore, 
  computerScore, 
  roundResults) {

  if(roundResults === true) {
    alert(`Yes, ${playerSelection} beats ${computerSelection}, you WON! 
    The score now is: You ${playerScore} x ${computerScore} CPU`);

  } else if (roundResults === false) {
    alert(`Oh no, ${playerSelection} loses to ${computerSelection}, you LOST! 
    The score now is: You ${playerScore} x ${computerScore} CPU`);

  } else if (roundResults === null) {
    alert(`You both chose ${playerSelection}, it's a tie! 
    The score now is: You ${playerScore} x ${computerScore} CPU`);

  } else {
    alert('Game error: debug the code.');
  };
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let scoreArray = [playerScore, computerScore];
  let keepGoing = false;
  let computerSelection;
  let playerSelection;
  let roundResults;

   do {
    computerSelection = getComputerChoice(generateRandomNumber());
    playerSelection = getPlayerChoice();
    roundResults = playRound(playerSelection, computerSelection);
    score = updateScore(roundResults, scoreArray);
    playerScore = scoreArray[0];
    computerScore = scoreArray[1];

    if (playerScore > 2 || computerScore > 2) {
      keepGoing = false;
    }
    showScore(
      playerSelection, 
      computerSelection, 
      playerScore, 
      computerScore, 
      roundResults);
  } while (keepGoing)

  if (playerScore > computerScore) {
    alert('YOU WON THE GAME!');
  } else {
    alert ('You lost the game...');
  }
}

game();

