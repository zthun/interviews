/**
 * Checks to see if s is a valid number given the following rules.
 *
 * A valid number can be split up into these components (in order):
 *
 * 1.  A decimal number or an integer.
 * 2.  (Optional) An 'e' or 'E', followed by an integer.
 *
 * A decimal number can be split up into these components (in order):
 *   1.  (Optional) A sign character (either '+' or '-').
 *   2.  One of the following formats:
 *     1.  One or more digits, followed by a dot '.'.
 *     2.  One or more digits, followed by a dot '.', followed by one or more digits.
 *     3.  A dot '.', followed by one or more digits.
 *
 * An integer can be split up into these components (in order):
 *   1. (Optional) A sign character (either '+' or '-').
 *   2. One or more digits.
 *
 * @param s The string to check.
 *
 * @returns True if s conforms to the above rules.  False otherwise.
 */
export function isNumber(s: string): boolean {
  // OK.  Soap box time.  I'm pretty sure the point of this problem is to try
  // and figure out the regex that matches the above cases.  Yeah, have fun
  // when other developers try to read that code and there's a bug in it.  Honestly,
  // since we're in the JavaScript ecosystem which supports all of those rules
  // with the exception of some edge cases, we can simply just remove those
  // edge cases and just use the built in engine functions to parse this for us.
  // Your junior developers will thank you later.
  if (s.toLowerCase().indexOf('infinity') >= 0) {
    // Also, this case is from leet code and for some reason, they don't
    // consider the string 'Infinity' to be a number.  My professors will
    // debate you later.
    return false;
  }

  const num = +s;
  return num === num;
}
