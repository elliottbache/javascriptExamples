function getUserInput(nextPlayerSymbol, gameBoard) {
    let visualGameBoard = gameBoard.slice(); // initialize an array for visualizing current state of gameBoard
    for ( let index = 0; index < visualGameBoard.length; index++) {
        // if no player has placed their mark on the this position, then the coordinate position will show as the current state of the gameBoard
        visualGameBoard[index] = visualGameBoard[index] ?? index+1;
    }
    return +prompt(`Input integer from 1 to 9 representing next move:\n${visualGameBoard[0]} ${visualGameBoard[1]} ${visualGameBoard[2]}\n${visualGameBoard[3]} ${visualGameBoard[4]} ${visualGameBoard[5]}\n${visualGameBoard[6]} ${visualGameBoard[7]} ${visualGameBoard[8]}`);
}

function isMoveValid(coordinate, gameBoard) {
    // coordinate must be an integer
    if ( ! Number.isInteger(coordinate) ) {
        return false;
    }
    // coordinate must be between 1 and 9 inclusive
    if ( coordinate < 1 || coordinate > 9 ) {
        return false;
    }
    // If there is null at the coordinate, then the move is valid
    return gameBoard[coordinate-1] === null;
}

function makeAMove(gameBoard, nextPlayerSymbol) {
    // clone the game board before placing moves in it
    const newGameBoard = gameBoard.slice();
    let coordinate = '';
    do {
        coordinate = getUserInput(nextPlayerSymbol, gameBoard);
        console.log(coordinate);
    } while ( !isMoveValid(coordinate, gameBoard) );
    console.log('setting new coordinate');
    newGameBoard[coordinate-1] = nextPlayerSymbol;

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
        if (gameBoard[i1] === lastMove &&
            gameBoard[i1] === gameBoard[i2] && 
            gameBoard[i1] === gameBoard[i3] 
           ) {
            return true;
        }
    }
    return false;
}

function isGameOver(gameBoard, currentPlayerSymbol) {
    // 1. check if there is a winner 
    lastMove = currentPlayerSymbol;
    if (hasLastMoverWon(lastMove, gameBoard) ) {
        // Write a message that last mover has won the game
        alert(`Congratulations, ${currentPlayerSymbol} has won the game`);
        return true;
    }
    // 2. check if the board is full
    if (!gameBoard.some(element => element === null)) {
        alert('The game has resulted in a draw!')
        return true;
    }

    // Return: winner/draw OR game is still in progress
    return false;
}


function ticTacToe() {
    // State space 
    let gameBoard = new Array(9).fill(null);
    let players = ['X', 'O'];
    let nextPlayerIndex = 0;

    // Computations 
   do {
        nextPlayerIndex = 1 - nextPlayerIndex; 
        currentPlayerSymbol = players[nextPlayerIndex];
        gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
    } while ( !isGameOver(gameBoard, currentPlayerSymbol) );
    
    // Return value 
    // return undefined;
} 