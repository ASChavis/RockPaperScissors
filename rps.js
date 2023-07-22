//Computer's Choice
const options= ['rock', 'paper', 'scissors'];

//Function to decide a random value
function computerChoice() {

    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
    

}

//User's selection
function pickRock() {
    const randomValue = computerChoice();
    const resultElement = document.getElementById('result');

    if (randomValue === "scissors") {
        resultElement.textContent = "You win!";
    } 
    else if (randomValue === "paper") {
        resultElement.textContent = "You lose!";
    } 
    else {
        resultElement.textContent = "It's a tie!";
    }

    displayComputerChoice (randomValue);

}

function pickPaper() {
    const randomValue = computerChoice();
    const resultElement = document.getElementById('result');

    if (randomValue ===  "rock") {
        resultElement.textContent ="You win!";
    } 
    else if (randomValue === "scissors") {
        resultElement.textContent = "You lose!";
    } 
    else {
        resultElement.textContent = "It's a tie!"
    }

    displayComputerChoice (randomValue);

}

function pickScissors() {
    const randomValue = computerChoice();
    const resultElement = document.getElementById('result');

    if (randomValue === "paper") {
        resultElement.textContent = "You win!";
    } 
    else if (randomValue === "rock") {
        resultElement.textContent = "You lose!";
    } 
    else {
        resultElement.textContent = "It's a tie!";
    }
    displayComputerChoice(randomValue);
}

//display computer's choice

function displayComputerChoice (randomValue) {
    const computerChoiceResult = computerChoice ();
    const computerChoiceElement = document.getElementById('computerChoice');
    
    computerChoiceElement.textContent= "Computer's Choice: " + computerChoiceResult;

}
