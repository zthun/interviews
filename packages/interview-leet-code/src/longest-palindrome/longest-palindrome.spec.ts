import { describe, expect, it } from "vitest";
import { longestPalindrome } from "./longest-palindrome.mjs";

describe("LongestPalindrome", () => {
  function assertLongestPalindrome(expected: string, input: string | null) {
    // Arrange
    // Act
    const actual = longestPalindrome(input);
    // Assert
    expect(actual).toEqual(expected);
  }

  it("should return the longest palindrome (e1).", () => {
    //cspell:ignore babad
    assertLongestPalindrome("aba", "babad");
  });

  it("should return the longest palindrome (e2).", () => {
    //cspell:ignore cbbd
    assertLongestPalindrome("bb", "cbbd");
  });

  it("should return the longest palindrome (e3).", () => {
    assertLongestPalindrome("a", "a");
  });

  it("should return the longest palindrome (e4).", () => {
    assertLongestPalindrome("c", "ac");
  });

  it("should return the longest palindrome (e5).", () => {
    assertLongestPalindrome("", null);
  });

  it("should return the longest palindrome (e6).", () => {
    //cspell:ignore cabbac
    assertLongestPalindrome("cabbac", "cabbac");
  });

  it("should return the longest palindrome (e7).", () => {
    //cspell:ignore ddtattarrattatdd
    //cspell:ignore babaddtattarrattatddetartrateedredividerb
    assertLongestPalindrome(
      "ddtattarrattatdd",
      "babaddtattarrattatddetartrateedredividerb",
    );
  });
});
