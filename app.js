const btnPlayer1 = document.querySelector("#playerOneButton");
const btnPlayer2 = document.querySelector("#playerTwoButton");
const btnReset = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let score1 = 0;
let score2 = 0;
let winningScore = 3;
let isGameOver = false;

btnPlayer1.addEventListener("click", function () {
  if (!isGameOver) {
    score1 += 1;
    if (score1 === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      btnPlayer1.disabled = true;
      btnPlayer2.disabled = true;
    }
  }
  p1Display.textContent = score1;
});

btnPlayer2.addEventListener("click", function () {
  if (!isGameOver) {
    score2 += 1;
    if (score2 === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      btnPlayer1.disabled = true;
      btnPlayer2.disabled = true;
    }
  }
  p2Display.textContent = score2;
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  btnPlayer1.disabled = false;
  btnPlayer2.disabled = false;
}
btnReset.addEventListener("click", reset);
