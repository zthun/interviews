import { myAtoi } from './string-to-integer.function';

describe('StringToInteger', () => {
  function assertStringToInteger(expected: number, input: string) {
    // Arrange
    // Act
    const actual = myAtoi(input);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should return 42.', () => {
    assertStringToInteger(41, '41');
  });

  it('should return 42 with the positive symbol.', () => {
    assertStringToInteger(42, '+42');
  });

  it('should return negative 42 with the negative symbol.', () => {
    assertStringToInteger(-42, '-42');
  });

  it('should return 0 on falsy.', () => {
    assertStringToInteger(0, null);
  });

  it('should return 0 on non numbers.', () => {
    assertStringToInteger(0, 'not-a-number');
  });

  it('should ignore leading spaces.', () => {
    assertStringToInteger(42, '      42');
  });

  it('should treat non space white space characters as part of the alphabet.', () => {
    assertStringToInteger(0, '\r\n42');
  });

  it('should return the max positive integer in the case of positive overflow.', () => {
    assertStringToInteger(2147483647, '2147483648');
  });

  it('should return the max negative integer in the case of negative overflow.', () => {
    assertStringToInteger(-2147483648, '-2147483649');
  });
});
