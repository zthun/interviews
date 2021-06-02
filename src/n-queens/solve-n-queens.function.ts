/**
 * Helper function that determines if the placement of a queen is safe.
 *
 * A safe queen is not being attacked by any other queen.
 *
 * @param row The potential row.
 * @param col The potential column.
 * @param board The current state of the board.
 *
 * @returns True if the placement of a queen at (row, col) on the current
 * board is safe.  False if it would be attacked.
 */
function _queenIsSafe(row: number, col: number, board: string[][]) {
  for (let r = row - 1; r >= 0; --r) {
    if (board[r][col] === 'Q') {
      return false;
    }
  }

  // Check the upper left diagonal.
  for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; --r, --c) {
    if (board[r][c] === 'Q') {
      return false;
    }
  }

  // Check the upper right diagonal.
  for (let r = row - 1, c = col + 1; r >= 0 && c < board.length; --r, ++c) {
    if (board[r][c] === 'Q') {
      return false;
    }
  }

  return true;
}

/**
 * The backtracking solution to the n queens problem.
 *
 * @param board The current board representation.
 * @param row The row at which we are placing queens
 * @param solved The current solutions that have been discovered.
 */
function _solveNQueens(board: string[][], row: number, solved: string[][]): void {
  if (row === board.length) {
    // If we've hit this case, then we've found a solution so we can add it to
    // list of solved boards.
    solved.push(board.map((b) => b.join('')));
    return;
  }

  for (let col = 0; col < board.length; ++col) {
    // We need to check to see if the queen placement is safe.  Remember that it is not necessary
    // to check below our current row since we haven't even begun placing queens there yet.  So
    // we only need to check the upper column, upper right diagonal, and upper left diagonal.

    // Check along the column.

    if (!_queenIsSafe(row, col, board)) {
      continue;
    }

    board[row][col] = 'Q';
    _solveNQueens(board, row + 1, solved);
    board[row][col] = '.';
  }
}

/**
 * Solves the n queens problem.
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order. Each
 * solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen
 * and an empty space, respectively.
 *
 * @param n The board size and number of queens to place.
 *
 * @returns A final board representation where the character '.' represents an empty space and 'Q' represents a queen placement.
 */
export function solveNQueens(n: number): string[][] {
  const board: string[][] = [];
  board.length = n;

  for (let r = 0; r < n; ++r) {
    board[r] = [];
    board[r].length = n;
    for (let c = 0; c < n; ++c) {
      board[r][c] = '.';
    }
  }

  const solved: string[][] = [];

  // This is a backtracking problem, so were going to start making some decisions at the upper left corner of the board. Since
  // the solution to this problem is recursive, we have to use a helper method to do this.
  _solveNQueens(board, 0, solved);
  return solved;
}
