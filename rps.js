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
        resultElement.textContent = "You win! Rock beats scissors.";
    } 
    else if (randomValue === "paper") {
        resultElement.textContent = "You lose! Paper beats rock.";
    } 
    else {
        resultElement.textContent = "It's a tie!";
    }

    displayComputerChoice (randomValue);

    function displayComputerChoice () {
        const computerChoiceResult = randomValue;
        const computerChoiceElement = document.getElementById('computerChoice');
        
        computerChoiceElement.textContent= "Computer's Choice: " + computerChoiceResult;
    
    }
}

function pickPaper() {
    const randomValue = computerChoice();
    const resultElement = document.getElementById('result');

    if (randomValue ===  "rock") {
        resultElement.textContent ="You win! Paper beats rock.";
    } 
    else if (randomValue === "scissors") {
        resultElement.textContent = "You lose! Scissors beats paper.";
    } 
    else {
        resultElement.textContent = "It's a tie!"
    }

    displayComputerChoice (randomValue);

    function displayComputerChoice () {
        const computerChoiceResult = randomValue;
        const computerChoiceElement = document.getElementById('computerChoice');
        
        computerChoiceElement.textContent= "Computer's Choice: " + computerChoiceResult;
    
    }

}

function pickScissors() {
    const randomValue = computerChoice();
    const resultElement = document.getElementById('result');

    if (randomValue === "paper") {
        resultElement.textContent = "You win! Scissors beats paper.";
    } 
    else if (randomValue === "rock") {
        resultElement.textContent = "You lose! Rock beats scissors.";
    } 
    else {
        resultElement.textContent = "It's a tie!";
    }
    displayComputerChoice (randomValue);

    function displayComputerChoice () {
        const computerChoiceResult = randomValue;
        const computerChoiceElement = document.getElementById('computerChoice');
        
        computerChoiceElement.textContent= "Computer's Choice: " + computerChoiceResult;
    
    }
}

//display computer's choice
/*
function displayComputerChoice () {
    const computerChoiceResult = randomValue;
    const computerChoiceElement = document.getElementById('computerChoice');
    
    computerChoiceElement.textContent= "Computer's Choice: " + computerChoiceResult;

}
*/
