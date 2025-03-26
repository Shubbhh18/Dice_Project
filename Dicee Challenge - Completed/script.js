// Function to roll dice
function rollDice() {
  const diceImages = document.querySelectorAll('.dice img');
  diceImages.forEach((img) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    img.src = `images/dice${randomNumber}.png`;
    img.classList.add('roll-animation');
    setTimeout(() => img.classList.remove('roll-animation'), 500);
  });
}

// Add event listener to button
const rollButton = document.createElement('button');
rollButton.textContent = 'Roll Dice';
rollButton.addEventListener('click', rollDice);
document.querySelector('.container').appendChild(rollButton);

// Add animation class for dice roll
const style = document.createElement('style');
style.textContent = `
  .roll-animation {
    animation: shake 0.5s ease;
  }

  @keyframes shake {
    0%, 100% { transform: rotate(0); }
    25% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }
`;
document.head.appendChild(style);