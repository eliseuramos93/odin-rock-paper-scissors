                        //=== GAME LOGIC ===//

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice(randomInt) {
  if (randomInt === 0) {
    return "Charmander";
  } else if (randomInt === 1) {
    return "Squirtle";
  } else if (randomInt === 2) {
    return "Bulbasaur"
  } else {
    return "Error - Problem in the RNG"
  };
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return null;

  } else if (
    (computerSelection === "Charmander" && playerSelection === "Squirtle") ||
    (computerSelection === "Squirtle" && playerSelection === "Bulbasaur") ||
    (computerSelection === "Bulbasaur" && playerSelection === "Charmander")) {  
      return true;

  } else {
    return false;
  };
}

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
    resultsBox.innerHTML = 
    `${playerSelection} is super effective v. ${computerSelection}! 
    The score now is: 
    <br><br>You ${playerScore} x ${computerScore} RIVAL`;

  } else if (roundResults === false) {
    resultsBox.innerHTML = `${playerSelection} is not every effective v. ${computerSelection}... 
    The score now is: 
    <br><br>You ${playerScore} x ${computerScore} RIVAL`;

  } else if (roundResults === null) {
    resultsBox.innerHTML = 
    `You both chose ${playerSelection}, it's a tie!
    The score now is: 
    <br><br>You ${playerScore} x ${computerScore} RIVAL`;

  } else {
    resultsBox.textContent = 'Game error: debug the code.';
  };
}

let playerScore = 0;
let computerScore = 0;

function game(playerButton) {

  let scoreArray = [playerScore, computerScore];
  let keepGoing = true;
  let computerSelection;
  let playerSelection = playerButton;
  let roundResults;

    computerSelection = getComputerChoice(generateRandomNumber());
    roundResults = playRound(playerSelection, computerSelection);
    score = updateScore(roundResults, scoreArray);
    playerScore = scoreArray[0];
    computerScore = scoreArray[1];

    showScore(
      playerSelection, 
      computerSelection, 
      playerScore, 
      computerScore, 
      roundResults);
   
  if (playerScore > 4) {
    resultsBox.textContent = 'PKMN TRAINER RIVAL was defeated!';
  } else if (computerScore > 4) {
    resultsBox.textContent = "You're out of usable POKÉMON!";
  }
}

                      //=== USER INTERFACE ===//
const header = document.querySelector('#header');
const container = document.querySelector('#pokemon-selection');
const resultsBox = document.querySelector('#results-box');
header.classList.add('text-box');
container.classList.add('choose-pokemon');
resultsBox.classList.add('text-box');

// CTA text display;
function showOakMessage() {
  header.textContent = "OAK: Choose your starter!";  
}
showOakMessage();

// show pokedex info on mouseover;
function showPokedexInfo(pokemon) {
  if (pokemon === "bulbasaur") {
    header.textContent = "BULBASAUR: A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.";
  } else if (pokemon === "charmander") {
    header.textContent = "CHARMANDER: Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.";
  } else if (pokemon === "squirtle") {
    header.textContent = "SQUIRTLE: After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.";
  };
}

// create pokemon buttons
const grassButton = document.createElement('div');
grassButton.classList.add('bulbasaur', 'pokemon');
const fireButton = document.createElement('div');
fireButton.classList.add('charmander', 'pokemon');
const waterButton = document.createElement('div');
waterButton.classList.add('squirtle', 'pokemon');

grassButton.innerHTML = "<img src=\"./img/bulbasaur.png\" height=\"300px\">";
fireButton.innerHTML = "<img src=\"./img/charmander.png\" height=\"300px\">";
waterButton.innerHTML = "<img src=\"./img/squirtle.png\" height=\"300px\">";

container.appendChild(grassButton);
container.appendChild(fireButton);
container.appendChild(waterButton);


// animated CTA text box
const pokemons = document.querySelectorAll('.pokemon');
pokemons.forEach(pokemon => pokemon.addEventListener(
  "mouseover", () => {
    const pokemonName = pokemon.classList[0];
    showPokedexInfo(pokemonName);}
));

// return cta text on mouseout
pokemons.forEach(pokemon => pokemon.addEventListener('mouseout', showOakMessage));


















// run game on click
grassButton.addEventListener('click', () => game("Bulbasaur"));
fireButton.addEventListener('click', () => game("Charmander"));
waterButton.addEventListener('click', () => game("Squirtle"));
