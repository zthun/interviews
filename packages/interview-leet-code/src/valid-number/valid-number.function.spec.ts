import { isNumber } from './valid-number.function';

describe('ValidNumber', () => {
  function assertValid(expected: boolean, s: string) {
    // Arrange
    // Act
    const actual = isNumber(s);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should be valid for single digit.', () => {
    assertValid(true, '0');
  });

  it('should be valid if leading zeros are removed.', () => {
    assertValid(true, '.1');
  });

  it('should be valid for leading zeros.', () => {
    assertValid(true, '00899');
  });

  it('should be valid for negative numbers.', () => {
    assertValid(true, '-0.1');
  });

  it('should be valid for positive numbers with sign.', () => {
    assertValid(true, '+3.14');
  });

  it('should be valid for numbers that do not have decimal zeros.', () => {
    assertValid(true, '4.');
  });

  it('should be valid for negative decimals', () => {
    assertValid(true, '-.9');
  });

  it('should be valid for scientific notation', () => {
    assertValid(true, '2e10');
  });

  it('should be valid for scientific notation case insensitive.', () => {
    assertValid(true, '-90E3');
  });

  it('should be valid for signed scientific notation.', () => {
    assertValid(true, '3e+7');
  });

  it('should be valid for negative scientific notation.', () => {
    assertValid(true, '+6e-1');
  });

  it('should be valid for radix plus scientific notation.', () => {
    assertValid(true, '52.5e93');
  });

  it('should be valid for negative radix plus scientific notation.', () => {
    assertValid(true, '-123.456e789');
  });

  it('should be invalid for strings.', () => {
    assertValid(false, '-infinity');
  });

  it('should be invalid if there are string mixtures.', () => {
    assertValid(false, '1a');
  });

  it('should be invalid if the string ends on scientific notation.', () => {
    assertValid(false, '1e');
  });

  it('should be invalid if there is scientific notation only.', () => {
    assertValid(false, 'e3');
  });

  it('should be invalid if scientific notation has fractions.', () => {
    assertValid(false, '99e2.5');
  });

  it('should be invalid if there are two many positive or negative symbols.', () => {
    assertValid(false, '-+3');
  });

  it('should be invalid if there is magic characters in the middle of a valid number', () => {
    assertValid(false, '95a54e53');
  });

  it('should be invalid for non digits.', () => {
    assertValid(false, 'e');
  });

  it('should be invalid for just radix.', () => {
    assertValid(false, '.');
  });

  it('should be invalid for radix with scientific notation.', () => {
    assertValid(false, '.e1');
  });
});
