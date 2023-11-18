function makeAClick(gameBoard, nextPlayerSymbol, move) {
  const newGameBoard = [...gameBoard];
  newGameBoard[+move] = nextPlayerSymbol;
  return newGameBoard;
}

function hasLastMoverWon(lastMove, gameBoard) {
  let winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let [i1, i2, i3] of winnerCombos) {
    if (
      gameBoard[i1] === lastMove &&
      gameBoard[i1] === gameBoard[i2] &&
      gameBoard[i1] === gameBoard[i3]
    ) {
      return true;
    }
  }
  return false;
}

function isGameWon(gameBoard, currentPlayerSymbol) {
  // check if there is a winner
  if (hasLastMoverWon(currentPlayerSymbol, gameBoard)) {
    return true;
  }

  return false;
}

function isGameDraw(gameBoard) {
  // check if the board is full
  if (gameBoard.every((element) => element !== null)) {
    return true;
  }

  return false;
}

let gameBoard = new Array(9).fill(null);
let currentPlayerSymbol = "X";

for (const $button of document.querySelectorAll(".js-button")) {
  function doClick(event) {
    // only allow unclicked cells to be chosen
    if ($button.textContent !== "-") {
      return 1;
    }

    // check if game has already been finished
    const $winner = document.querySelector(".js-winner");
    if ($winner.textContent !== "") {
      return 1;
    }

    // change invisible game board for bookkeeping
    gameBoard = makeAClick(gameBoard, currentPlayerSymbol, $button.id);

    // handle click
    clickHandler(event, currentPlayerSymbol, $button.id);

    // check if game is over
    if (isGameWon(gameBoard, currentPlayerSymbol)) {
      const $winner = document.querySelector(".js-winner");
      $winner.textContent =
        "Congrats! " + currentPlayerSymbol + " has won the game.";
      const $player = document.querySelector(".next-player");
      $player.textContent = "";
    } else if (isGameDraw(gameBoard)) {
      const $winner = document.querySelector(".js-winner");
      $winner.textContent = "Game is a draw.";
      const $player = document.querySelector(".next-player");
      $player.textContent = "";
    } else {
      currentPlayerSymbol = currentPlayerSymbol === "X" ? "O" : "X";
      const $player = document.querySelector(".next-player");
      $player.textContent = "Next player:" + currentPlayerSymbol;
    }
  }

  function clickHandler(event, currentPlayerSymbol, buttonId) {
    $button.textContent = currentPlayerSymbol;
  }

  $button.addEventListener("click", doClick);
}

