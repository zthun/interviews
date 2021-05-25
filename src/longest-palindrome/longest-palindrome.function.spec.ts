import { longestPalindrome } from './longest-palindrome.function';

/* eslint-disable require-jsdoc */
describe('LongestPalindrome', () => {
  function assertLongestPalindrome(expected: string, input: string) {
    // Arrange
    // Act
    const actual = longestPalindrome(input);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should return the longest palindrome (e1).', () => {
    assertLongestPalindrome('aba', 'babad');
  });

  it('should return the longest palindrome (e2).', () => {
    assertLongestPalindrome('bb', 'cbbd');
  });

  it('should return the longest palindrome (e3).', () => {
    assertLongestPalindrome('a', 'a');
  });

  it('should return the longest palindrome (e4).', () => {
    assertLongestPalindrome('c', 'ac');
  });

  it('should return the longest palindrome (e5).', () => {
    assertLongestPalindrome('', null);
  });

  it('should return the longest palindrome (e6).', () => {
    assertLongestPalindrome('cabbac', 'cabbac');
  });

  it('should return the longest palindrome (e7).', () => {
    assertLongestPalindrome('ddtattarrattatdd', 'babaddtattarrattatddetartrateedredividerb');
  });
});
