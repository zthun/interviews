import { maxArea } from './max-area';

describe('maxArea', () => {
  function assertMaxArea(expected: number, heights: number[]) {
    // Arrange.
    // Act.
    const actual = maxArea(heights);
    // Assert.
    expect(actual).toEqual(expected);
  }

  it('should return the max area (e1).', () => {
    assertMaxArea(49, [1, 8, 6, 2, 5, 4, 8, 3, 7]);
  });

  it('should return the max area (e2).', () => {
    assertMaxArea(1, [1, 1]);
  });

  it('should return the max area (e3).', () => {
    assertMaxArea(1000, [1, 1, 1, 1, 20, 1, 1, 1, 1000, 1000, 1, 1, 1, 1, 1, 1]);
  });
});
