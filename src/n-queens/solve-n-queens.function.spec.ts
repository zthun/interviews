import { solveNQueens } from './solve-n-queens.function';

describe('SolveNQueens', () => {
  function assertSolutions(expected: string[][], n: number) {
    // Arrange
    // Act
    const actual = solveNQueens(n);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('solves n queens for 0', () => {
    assertSolutions([[]], 0);
  });

  it('solves n queens for 1', () => {
    assertSolutions([['Q']], 1);
  });

  it('solves n queens for 2', () => {
    assertSolutions([], 2);
  });

  it('solves n queens for 4.', () => {
    assertSolutions(
      [
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..']
      ],
      4
    );
  });
});
