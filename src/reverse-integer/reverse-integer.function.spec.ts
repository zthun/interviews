import { reverse } from './reverse-integer.function';

describe('Reverse integer', () => {
  function assertReversed(expected: number, input: number) {
    // Arrange
    // Act
    const actual = reverse(input);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should reverse the numbers (e1).', () => {
    assertReversed(321, 123);
  });

  it('should reverse the numbers (e2).', () => {
    assertReversed(-321, -123);
  });

  it('should reverse the numbers (e3).', () => {
    assertReversed(21, 120);
  });

  it('should reverse the numbers (e4).', () => {
    assertReversed(0, 0);
  });

  it('should return 0 on overflow.', () => {
    assertReversed(0, 8463847412);
  });

  it('should return 0 on overflow negative.', () => {
    assertReversed(0, -9463847412);
  });
});
