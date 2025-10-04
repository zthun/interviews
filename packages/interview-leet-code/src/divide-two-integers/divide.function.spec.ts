import { divide } from './divide.function';

describe('Divide', () => {
  function assertDivide(expected: number, dividend: number, divisor: number) {
    // Arrange
    // Act
    const actual = divide(dividend, divisor);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should divide the dividend by the devisor (e1).', () => {
    assertDivide(3, 10, 3);
  });

  it('should divide the dividend by the devisor (e2).', () => {
    assertDivide(-2, 7, -3);
  });

  it('should divide the dividend by the devisor (e3).', () => {
    assertDivide(0, 0, 1);
  });

  it('should divide the dividend by the devisor (e4).', () => {
    assertDivide(1, 1, 1);
  });

  it('should divide the dividend by the devisor (e5).', () => {
    assertDivide(8, 100, 12);
  });

  it('should divide the dividend by the devisor (e6).', () => {
    assertDivide(5, 100, 20);
  });

  it('should divide the dividend by the devisor (e7).', () => {
    assertDivide(-1, 1, -1);
  });

  it('should divide the dividend by the devisor (e8).', () => {
    assertDivide(2, -2, -1);
  });

  it('should divide (e9)', () => {
    assertDivide(715827882, -2147483648, -3);
  });

  it('should calculate to maximum positive.', () => {
    assertDivide(2147483647, 2147483648, 1);
  });

  it('should calculate to maximum negative.', () => {
    assertDivide(-2147483648, -2147483649, 1);
  });
});
