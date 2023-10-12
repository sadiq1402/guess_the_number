"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = num => {
  document.querySelector(".number").textContent = num;
};
const displayScore = score => {
  document.querySelector(".score").textContent = score;
};
const bodyBgColor = color => {
  document.querySelector("body").style.backgroundColor = color;
};
const numberWidth = width => {
  document.querySelector(".number").style.width = width;
};

displayNumber("?");
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    bodyBgColor("#60b347");
    numberWidth("30rem");
    document.querySelector(".number").style.visibility = "none";
    displayNumber(secretNumber);
    document.querySelector(".highscore").textContent = score;

    // when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game");
      displayScore("0");
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  // style reset
  bodyBgColor("#222");
  numberWidth("15rem");

  // value reset
  score = 20;
  displayScore(score);
  displayMessage("Start guessing...");
  displayNumber("?");
  document.querySelector(".guess").value = null;

  // generate new value
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
