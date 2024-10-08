let gridSize = 3;
let currentPlayer = "X";
let boardRef = document.querySelector(".tic-tac-toe");
let boardArr = Array.from({ length: gridSize }, () =>
  Array(gridSize).fill(undefined)
);

function changePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";

    return;
  }

  currentPlayer = "X";
  return;
}

function createBoard() {
  for (let r = 0; r < gridSize; r++) {
    let rowRef = document.createElement("div");
    rowRef.className = "row";

    // for 1 Row -> 3 Cells
    for (let c = 0; c < gridSize; c++) {
      let cellRef = document.createElement("div");
      cellRef.className = "cell";

      // adding cell index(r,c) in data attribute
      cellRef.setAttribute("data-row", r);
      cellRef.setAttribute("data-cell", c);

      // push it in row
      rowRef.appendChild(cellRef);
    }

    boardRef.appendChild(rowRef);
  }
}

function addListener() {
  boardRef.addEventListener("click", function (e) {
    // already filled; return
    if (e.target.innerText) return;

    // for minesweeper
    let value = getMineSweepOptions();
    console.log({ value });

    let printValue = value === "*" ? value : currentPlayer;

    // adding player
    e.target.innerText = printValue;

    // updating the board array
    let rowId = e.target.dataset.row;
    let colId = e.target.dataset.cell;

    updateBoardData(rowId, colId, currentPlayer);

    // after adding change the player
    if (value !== "+") {
      // we will change the player for all except '+'
      changePlayer();
    }
  });
}

function checkLine(arr) {
  return arr.every(
    (item) => item === arr[0] && item !== undefined && item !== "*"
  );
}

function getWinner() {
  // rows
  for (let r = 0; r < boardArr.length; r++) {
    if (checkLine(boardArr[r])) {
      return true;
    }
  }

  // cols
  for (let i = 0; i < boardArr.length; i++) {
    let column = boardArr.map((row) => row[i]);

    if (checkLine(column)) {
      return true;
    }
  }

  // diagonal
  let diagonal = [];
  for (let r = 0; r < boardArr.length; r++) {
    for (let c = 0; c < boardArr[0].length; c++) {
      if (r == c) {
        diagonal.push(boardArr[r][c]);
      }
    }
  }

  if (checkLine(diagonal)) {
    return true;
  }

  // reverse diagonal
  let revDiagonal = [];
  for (let r = 0; r < boardArr.length; r++) {
    for (let c = 0; c < boardArr[0].length; c++) {
      if (r + c === boardArr.length - 1) {
        revDiagonal.push(boardArr[r][c]);
      }
    }
  }

  if (checkLine(revDiagonal)) {
    return true;
  }
}

function updateBoardData(row, col, currentPlayer) {
  boardArr[row][col] = currentPlayer;

  if (getWinner()) {
    console.log("Winner found !!");

    return;
  }
}

function getMineSweepOptions() {
  let options = ["*", "+", "-"];

  let randomOption = Math.floor(Math.random() * 10) % 3;

  return options[randomOption];
}

createBoard();
addListener();
