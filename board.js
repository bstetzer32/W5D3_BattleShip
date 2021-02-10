class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    this.numRos=numRos
    this.numCols=numCols
    this.numShips=numShips
    this.grid = this.populateGrid()

  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = []
    for (let index = 0; index < this.numRos; index++) {
      let subArr = []
      for (let index = 0; index < this.numCols; index++) {
        subArr.push(null)
      }
      grid.push(subArr)
    }

    let randomIndex = 0;
    while (randomIndex < this.numShips) {
        const randomCol = Math.floor(Math.random() * this.numCols);
        const randomRow = Math.floor(Math.random() * this.numRos);
        if (grid[randomRow][randomCol] !== "s") {
          grid[randomRow][randomCol] = "s";
          randomIndex++
        }
    }
    // //
    // grid[1][1] = "h";
    // grid[0][0] = "h";
    // grid[2][2] = "h";
    // //
    return grid;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    let displayGrid = []

    for (let row = 0; row < this.grid.length; row++) {
      let subArray =[];

      for (let column = 0; column < this.grid[row].length; column++){
        let position = this.grid[row][column]
        if (position === "s") {
          subArray.push(null)
        } else {
          subArray.push(position)
        }
      }
      displayGrid.push(subArray)
    }
    console.table(displayGrid)
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    let counter = 0;
    this.grid.forEach(row => {
      row.forEach(square => {
        if (square === "h") {
        counter += 1;
      }
      });
    });
    return this.numShips - counter;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    if (this.grid[pos[0]][pos[1]] === null || this.grid[pos[0]][pos[1]] === "s") {
      return true;
    } else {
      return false;
    }
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    return this.count() === 0;
  }

  attack(pos) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    if (!this.isValidMove(pos)) return

    if (this.grid[pos[0]][pos[1]] === "s") {
      this.grid[pos[0]][pos[1]] = 'h'
    } else {
      this.grid[pos[0]][pos[1]] = 'x'
    }
  }
}



module.exports = Board;


// let testBoard = new Board(3, 3, 4);
// testBoard.attack([0,0])
// testBoard.attack([1,1])
// testBoard.attack([2,2])
// testBoard.display();
// console.table(testBoard.grid);

// console.log(testBoard.count());
// console.log(testBoard.isValidMove([1,0]))
// console.log(testBoard.isGameOver())
