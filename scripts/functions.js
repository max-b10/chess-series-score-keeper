// Player Score Display:
const p1DTC = () => {
  playerOneDisplay.textContent = `Player 1: ${playerOneScore}`;
};
const p2DTC = () => {
  playerTwoDisplay.textContent = `Player 2: ${playerTwoScore}`;
};
function reset() {
  playerOneScore = 0;
  playerTwoScore = 0;
  isSeriesFinish = false;
  p1DTC();
  p2DTC();
}
