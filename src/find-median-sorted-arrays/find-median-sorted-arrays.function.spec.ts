/* eslint-disable require-jsdoc */

import { findMedianSortedArrays } from './find-median-sorted-arrays.function';

describe('FindMedianSortedArrays', () => {
  function assertMedian(expected: number, arr1: number[], arr2: number[]) {
    // Arrange
    // Act
    const actual = findMedianSortedArrays(arr1, arr2);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should find the median of sorted arrays (e1).', () => {
    assertMedian(2, [1, 3], [2]);
  });

  it('should find the median of sorted arrays (e2).', () => {
    assertMedian(2.5, [1, 2], [3, 4]);
  });

  it('should find the median of sorted arrays (e3).', () => {
    assertMedian(0, [0, 0], [0, 0]);
  });

  it('should find the median of sorted arrays (e4).', () => {
    assertMedian(1, [], [1]);
  });

  it('should find the median of sorted arrays (e5).', () => {
    assertMedian(2, [2], []);
  });

  it('should find the median of sorted arrays (e6).', () => {
    assertMedian(-1, [3], [-2, -1]);
  });

  it('should find the median of sorted arrays (e7).', () => {
    assertMedian(0, null, null);
  });
});
