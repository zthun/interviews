import { lengthOfLongestSubstring } from './length-of-longest-substring.function';

/* eslint-disable require-jsdoc */
describe('LengthOfLongestSubstring', () => {
  function assertLengthOfLongestSubstring(expected: number, input: string) {
    // Arrange
    // Act
    const actual = lengthOfLongestSubstring(input);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should calculate the length of the longest substring (e1).', () => {
    assertLengthOfLongestSubstring(3, 'abcabcbb');
  });

  it('should calculate the length of the longest substring (e2).', () => {
    assertLengthOfLongestSubstring(1, 'bbbbb');
  });

  it('should calculate the length of the longest substring (e3).', () => {
    assertLengthOfLongestSubstring(3, 'pwwkew');
  });

  it('should calculate the length of the longest substring (e4).', () => {
    assertLengthOfLongestSubstring(5, 'pwwwkewui');
  });

  it('should calculate the length of the longest substring (e5).', () => {
    assertLengthOfLongestSubstring(3, 'dvdf');
  });

  it('should calculate a length of 0 for falsy.', () => {
    assertLengthOfLongestSubstring(0, '');
  });
});
