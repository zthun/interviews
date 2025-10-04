import { maxSubArray } from './maximum-subarray.function';

describe('MaximumSubarray', () => {
  function assertMaximumSum(expected: number, numbers: number[]) {
    // Arrange
    // Act
    const actual = maxSubArray(numbers);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should return the largest sum (e1).', () => {
    assertMaximumSum(6, [-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  });

  it('should return the largest sum (e2).', () => {
    assertMaximumSum(1, [1]);
  });

  it('should return the largest sum (e2).', () => {
    assertMaximumSum(23, [5, 4, -1, 7, 8]);
  });

  it('should return the largest sum (e4).', () => {
    assertMaximumSum(0, []);
  });

  it('should return the largest sum (e5).', () => {
    assertMaximumSum(4, [-4, -1, 4]);
  });
});
