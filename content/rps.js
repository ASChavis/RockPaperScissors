const game= ['rock', 'paper', 'scissors'];

function getRandomValue() {
    const randomIndex = Math.floor(Math.random() * game.length);

    const randomValue = game[randomIndex];

    const resultElement= document.getElementById('result');
    resultElement.textContent = `${randomValue}`;

}
