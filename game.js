class Board {
  constructor(output) {
    this.board = [
      ['_','_','_'],
      ['_','_','_'],
      ['_','_','_'],
    ];
    this.marks = ['X','O'];
    this.current = 1;
  }
  next() {
    return this.current ^= 1;
  }
  play(row, col) {
    if (this.board[row][col] === '_') {
      this.board[row][col] = this.marks[this.current];      
    }
  }
  _checkRows(mark) {
    return (this.board.some(row => row.filter(value => value === mark).length === 3)) ? mark : false;
  }
  _checkCols(mark) {
    for (let col = 0; col < 3; col++) {
      let count = 0;
      for (let row = 0; row < 3; row++) {
        if (this.board[row][col] === mark) count++;
      }
      if (count === 3) return mark;
    }
    return false;
  }
  _checkDiagonals(mark) {
    const board = this.board;
    let diag1 = [ board[0][0], board[1][1], board[2][2] ];
    let diag2 = [ board[0][2], board[1][1], board[2][0] ];
    return (diag1.filter(value => value === mark).length === 3 || 
            diag2.filter(value => value === mark).length === 3) ? mark : false; 
  }
  hasWon() {
    for (let i = 0; i < this.marks.length; i++) {
      let mark = this.marks[i];
      if (this._checkRows(mark) || this._checkCols(mark) || this._checkDiagonals(mark)) {
        return mark;
      }
    }
    return false;
  }
}

module.exports = Board;