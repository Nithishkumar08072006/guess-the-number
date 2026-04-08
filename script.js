const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function makeGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    attempts++;
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.';
    } else {
        message.textContent = 'Too high! Try a lower number.';
    }
}