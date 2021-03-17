// Button selectors
const buttonOne = document.querySelector("#button-1");
const buttonTwo = document.querySelector("#button-2");
const buttonThree = document.querySelector("#button-3");
const buttonReset = document.querySelector("#button-reset");
// Score display selectors
const scoreDisplay = document.querySelector(".score-display");
const playerOneDisplay = document.querySelector("#playerOneDisplay");
const playerTwoDisplay = document.querySelector("#playerTwoDisplay");

// Score limit selector:
// const scoreLimit = document.querySelector("#playTo");

// Player score variables:
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 5;
let isSeriesFinish = false;

// Button click event handlers:
buttonOne.addEventListener("click", (e) => {
  if (!isSeriesFinish) {
    playerOneScore += 1;
    if (playerOneScore === winningScore) {
      isSeriesFinish = true;
    }
    p1DTC();
  }
});
buttonTwo.addEventListener("click", (e) => {
  if (!isSeriesFinish) {
    playerTwoScore += 1;
    if (playerTwoScore === winningScore) isSeriesFinish = true;
  }
  p2DTC();
});
buttonThree.addEventListener("click", (e) => {
  if (!isSeriesFinish) {
    playerOneScore += 0.5;
    playerTwoScore += 0.5;
    if (playerOneScore === winningScore || playerTwoScore === winningScore)
      isSeriesFinish = true;
  }

  p1DTC();
  p2DTC();
});
buttonReset.addEventListener("click", (e) => {
  playerOneScore = 0;
  playerTwoScore = 0;
  isSeriesFinish = false;
  p1DTC();
  p2DTC();
});
