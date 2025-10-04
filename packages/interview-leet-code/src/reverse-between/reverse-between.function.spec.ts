import { arrayToList, listToArray } from './list-node';
import { reverseBetween } from './reverse-between.function';

describe('ReverseBetween', () => {
  function assertReversed(expected: number[], input: number[], left: number, right: number) {
    // Arrange
    const head = arrayToList(input);
    // Act
    const updated = reverseBetween(head, left, right);
    const actual = listToArray(updated);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should reverse between two node positions (e1).', () => {
    assertReversed([1, 4, 3, 2, 5], [1, 2, 3, 4, 5], 2, 4);
  });

  it('should reverse between two node positions (e2).', () => {
    assertReversed([5], [5], 1, 1);
  });

  it('should reverse between two node positions (e3).', () => {
    assertReversed([5, 3], [3, 5], 1, 2);
  });

  it('should reverse between two node positions (e4)', () => {
    assertReversed([5, 4, 3, 2, 1], [1, 2, 3, 4, 5], 1, 5);
  });
});
