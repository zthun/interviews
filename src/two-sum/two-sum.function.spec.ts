/* eslint-disable require-jsdoc */
import { twoSum } from './two-sum.function';

describe('TwoSum', () => {
  function assertReturnsCorrectTuple(expected: [number, number], numbers: number[], target: number) {
    // Arrange
    // Act
    const actual = twoSum(numbers, target);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should return undefined if none of the item add up to the target.', () => {
    assertReturnsCorrectTuple(undefined, [2, 4, 1], 7);
  });

  it('should return the tuple of index that add up to the target (e1).', () => {
    assertReturnsCorrectTuple([0, 1], [2, 7, 11, 15], 9);
  });

  it('should return the tuple of index that add up to the target (e2).', () => {
    assertReturnsCorrectTuple([1, 2], [3, 2, 4], 6);
  });

  it('should return the tuple of index that add up to the target (e3).', () => {
    assertReturnsCorrectTuple([0, 1], [3, 3], 6);
  });
});
