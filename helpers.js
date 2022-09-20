import { playerX_Winner, playerO_Winner, EMPATE } from "./constans.js";
export const createTable = (cells) => {
  let table = [];
  for (let index = 0; index < cells; index++) {
    table.push("");
  }
  return table;
};
export const validatorAction = (square) => {
  return !(square.innerText === "X" || square.innerText === "O");
};
export const alertResult = (type) => {
  let resp;
  switch (type) {
    case playerX_Winner:
      resp = '<span class="PlayerX">GANO X</span>';
      break;
    case playerO_Winner:
      resp = '<span class="PlayerO">GANO O</span>';
      break;
    case EMPATE:
      resp = '<span class="PlayerO">Jugando...</span>';
      break;
    default:
      break;
  }
  return resp;
};
