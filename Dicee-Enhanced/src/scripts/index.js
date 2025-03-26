// JavaScript logic for the Dicee game
// This script handles rolling the dice, determining the winner, and adding animations

// Function to roll the dice
function rollDice() {
    // Generate random numbers for both players
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; // Player 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2

    // Update the dice images based on the random numbers
    document.querySelector(".img1").setAttribute("src", `assets/images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `assets/images/dice${randomNumber2}.png`);

    // Determine the winner and display the result
    const resultText = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        resultText.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        resultText.textContent = "Player 2 Wins! 🚩";
    } else {
        resultText.textContent = "It's a Draw!";
    }
}

// Add event listener to roll the dice on page load
window.onload = rollDice;