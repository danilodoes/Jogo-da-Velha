

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let symbols = ["o", "x"];
function move(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbols[playerTime];
    gameOver = isWin();
    if (gameOver == false) {
      if (playerTime == 0) { // Comparando a vez do player
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  } else {
    if (playerTime == 0) {
      alert("Lyana, esse quadrado já foi escolhido mulher!\nEscolha outro quadrado!");
    } else {
      alert("Danilo, você penou, mas conseguiu!\nEscolha outro quadrado!");
    }
  }
  return gameOver;
};
function isWin() { // Aqui serve pra conferir se tem um ganhador. Ele considera todas as posições possíveis de combinação
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
      return true;
    }
  }
  return false;
};

