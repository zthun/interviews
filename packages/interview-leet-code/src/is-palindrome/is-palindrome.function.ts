/**
 * Returns true if x is a palindrome number.
 *
 * @param x The number to check.
 *
 * @returns True if x is a palindrome, false otherwise.
 */
export function isPalindrome(x: number): boolean {
  // So funny thing here is that the conversion to a string is much
  // simpler and is actually faster that not using the string.
  return +x.toString().split('').reverse().join('') === x;

  /*

  // This solution is how you can do it without converting to a string.
  // It's actually slower than the string conversion and more complex, but
  // if you want to know how to do it, this is a way.

  if (x < 0) {
    return false;
  }

  let reverse = 0;
  const _x = x;

  do {
    const y = x % 10;
    reverse *= 10;
    reverse += y;
    x = Math.floor(x / 10);
  } while (x > 0);

  return reverse === _x;
  */
}
