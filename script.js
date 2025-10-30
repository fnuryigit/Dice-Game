const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollBtn = document.getElementById("roll-btn");
const result = document.getElementById("result");
const usernameInput = document.getElementById("username");
const playerName = document.getElementById("player-name");

usernameInput.addEventListener("input", () => {
  playerName.textContent = usernameInput.value || "Player 1";
});

rollBtn.addEventListener("click", () => {
  result.textContent = "Zarlar atılıyor...";
  rollBtn.disabled = true;

  let rolling = setInterval(() => {
    let r1 = Math.floor(Math.random() * 6) + 1;
    let r2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `images/dice${r1}.png`;
    dice2.src = `images/dice${r2}.png`;
  }, 100);

  setTimeout(() => {
    clearInterval(rolling);

    let r1 = Math.floor(Math.random() * 6) + 1;
    let r2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `images/dice${r1}.png`;
    dice2.src = `images/dice${r2}.png`;

    if (r1 > r2) {
      result.innerHTML = `${playerName.textContent} Kazandı! 🥳`;
    } else if (r1 < r2) {
      result.innerHTML = `Player 2 Kazandı! 😎`;
    } else {
      result.innerHTML = `Draw! 🤝`;
    }

    rollBtn.disabled = false;
  }, 3000);
});
