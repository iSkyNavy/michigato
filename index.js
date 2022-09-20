import {
  createTable,
  validatorAction,
  alertResult as getAlertResult,
} from "./helpers.js";
import {
  playerX_Winner,
  playerO_Winner,
  EMPATE,
  conditionsToWin,
} from "./constans.js";
window.addEventListener("DOMContentLoaded", () => {
  const squares = Array.from(document.querySelectorAll(".Square"));
  const playerActive = document.querySelector(".PlayerActive");
  const resetButton = document.querySelector(".Reset");
  const winner = document.querySelector(".Winner");
  const savePlayersButton = document.querySelector(".SavePlayersButton");
  const namePlayerX = document.querySelector(".NamePlayerX");
  const namePlayerO = document.querySelector(".NamePlayerO");
  let currentPlayer = "X";
  let gameRunning = true;
  let table = createTable(9);
  const validatorResult = () => {
    let gameWon = false;
    for (const element of conditionsToWin) {
      const conditionToWin = element;
      const a = table[conditionToWin[0]];
      const b = table[conditionToWin[1]];
      const c = table[conditionToWin[2]];
      const positions = [a, b, c];
      if (positions.includes("")) {
        continue;
      }
      if (a === b && b === c) {
        gameWon = true;
        break;
      }
    }
    if (gameWon) {
      alertResult(currentPlayer === "X" ? playerX_Winner : playerO_Winner);
      gameRunning = false;
      return;
    }
    if (table.includes("")) {
      alertResult(EMPATE);
    }
  };
  const updateTable = (index) => {
    table[index] = currentPlayer;
  };
  const alertResult = (type) => {
    winner.innerHTML = getAlertResult(type);
    winner.classList.remove("hide");
  };
  const changePlayer = () => {
    playerActive.classList.remove(`Player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerActive.innerText = currentPlayer;
    playerActive.classList.add(`Player${currentPlayer}`);
  };
  const action = (square, index) => {
    if (validatorAction(square) && gameRunning) {
      square.innerText = currentPlayer;
      square.classList.add(`Player${currentPlayer}`);
      updateTable(index);
      validatorResult();
      changePlayer();
    }
  };
  const resetTable = () => {
    table = createTable(9);
    gameRunning = true;
    winner.classList.add("hide");
    if (currentPlayer === "O") {
      changePlayer();
    }
    squares.forEach((square) => {
      square.innerText = "";
      square.classList.remove("PlayerX");
      square.classList.remove("PlayerO");
    });
    validatorResult();
  };
  squares.forEach((square, index) => {
    square.addEventListener("click", () => action(square, index));
  });
  resetButton.addEventListener("click", resetTable);

  const savePlayersName = () => {
    const nameX = namePlayerX.value;
    const nameO = namePlayerO.value;
    alert(nameX);
  };
  savePlayersButton.addEventListener("click", savePlayersName);
});
