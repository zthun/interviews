/* eslint-disable require-jsdoc */

export function twoSum(numbers: number[], target: number): [number, number] {
  // [2, 7, 11, 15], 9

  const lookup: { [key: number]: number } = {};

  // O(n) ish
  for (let i = 0; i < numbers.length; ++i) {
    const num = numbers[i];
    const wanted = target - num;

    if (lookup[wanted] != null && lookup[wanted] !== i) {
      return [lookup[wanted], i];
    }

    lookup[num] = i;
  }

  /*
  // O(n^2)
  for (let i = 0; i < numbers.length; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      const n1 = numbers[i] + numbers[j];

      if (n1 === target) {
        return [i, j];
      }
    }
  }*/

  return undefined;
}
