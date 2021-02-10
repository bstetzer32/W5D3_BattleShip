const Board = require('./board.js');

class BattleshipGame {
  constructor(player1, player2, numRos, numCols, numShips) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    // this.numRos = numRos;
    // this.numCols = numCols;
    // this.numShips = numShips;
    this.player1 = player1;
    this.currentPlayer = player1;
    this.board = new Board(numRos, numCols, numShips);;
    this.turns = 0;
  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
  }

  processMove() {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
  }
}

module.exports = BattleshipGame;
