import { isPalindrome } from './is-palindrome.function';

describe('isPalindrome', () => {
  function assertIsPalindrome(expected: boolean, num: number) {
    // Arrange
    // Act
    const actual = isPalindrome(num);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should be a palindrome if 0 is passed.', () => {
    assertIsPalindrome(true, 0);
  });

  it('should be a palindrome if read same forward and backward.', () => {
    assertIsPalindrome(true, 121);
  });

  it('should not be a palindrome if read different backward and forward.', () => {
    assertIsPalindrome(false, 10);
  });

  it('should not be a palindrome if the number is negative.', () => {
    assertIsPalindrome(false, -101);
  });
});
