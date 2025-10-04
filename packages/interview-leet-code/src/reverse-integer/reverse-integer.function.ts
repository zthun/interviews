/**
 * Reverses the number.
 *
 * @param x The number to reverse.
 *
 * @returns The reverse of x or 0 if x overflows on a number.
 */
export function reverse(x: number): number {
  const multiplier = x < 0 ? -1 : 1;
  x = Math.abs(x);

  // The original problem makes the assumption that we can't have
  // long values, which this is a bit difficult to do in TypeScript since
  // it doesn't even really have the concept of a integer values, JavaScript
  // numbers are all floating point numbers.  I would take this solution with
  // an * because it's not really possible to make this fail if it overflows.
  // Note that the stack pop solution has a similar runtime of O(l) where l
  // is the number of digits in x.  In TypeScript, I will pick this solution
  // over that one since this one is easier for non experts to understand and
  // grasp and it's easier for people to debug and read.
  const s = x.toString().split('').reverse().join('');
  const n = +s;

  if (n > 2147483647 || n < -2147483648) {
    return 0;
  }

  return multiplier * n;
}
