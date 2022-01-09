import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleElement = document.querySelector(".puzzle");
const statusElement = document.getElementById("left-attempts");
const restButton = document.getElementById("reset-btn");
let game;

const renderGame = () => {
  puzzleElement.innerHTML = "";
  statusElement.textContent = game.statusMessage;
  for (const e of game.puzzle) {
    const charElement = document.createElement("span");
    charElement.textContent = e;
    if (e === " ") charElement.style.borderBottom = "none";

    puzzleElement.appendChild(charElement);
  }
};

const startGame = async () => {
  const puzzle = await getPuzzle(2);
  console.log(puzzle);
  game = new Hangman(puzzle, Math.floor(Math.random() * 3) + 3);
  renderGame();
};

startGame();

document.addEventListener("keypress", (e) => {
  game.makeGusse(e.key);
  renderGame();
});

restButton.addEventListener("click", startGame);
