/* eslint-disable require-jsdoc */

function _lengthOfPalindrome(s: string, l: number, r: number): number {
  while (l >= 0 && l < s.length && s.charAt(l) === s.charAt(r)) {
    --l;
    ++r;
  }

  return r - l - 1;
}

export function longestPalindrome(s: string): string {
  s = s || '';

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; ++i) {
    const len1 = _lengthOfPalindrome(s, i, i);
    const len2 = _lengthOfPalindrome(s, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
