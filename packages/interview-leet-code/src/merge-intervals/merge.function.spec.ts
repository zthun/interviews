import { merge } from './merge.function';

describe('MergeIntervals', () => {
  function assertMerged(expected: number[][], pairs: number[][]) {
    // Arrange
    // Act
    const actual = merge(pairs);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should return the empty array for empty.', () => {
    assertMerged([], []);
  });

  it('should merge overlapping pairs (e1).', () => {
    assertMerged(
      [
        [1, 6],
        [8, 10],
        [15, 18]
      ],
      [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
      ]
    );
  });

  it('should merge overlapping pairs (e2).', () => {
    assertMerged(
      [[1, 5]],
      [
        [1, 4],
        [4, 5]
      ]
    );
  });

  it('should merge overlapping pairs (e3).', () => {
    assertMerged(
      [[1, 4]],
      [
        [1, 4],
        [2, 3]
      ]
    );
  });
});
