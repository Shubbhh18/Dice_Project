document.getElementById("rollDice").addEventListener("click", function () {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

  const title = document.getElementById("title");
  if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 Wins! 🚩";
  } else {
    title.textContent = "It's a Draw!";
  }
});
