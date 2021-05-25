export function twoSum(numbers: number[], target: number): [number, number] {
  const lookup: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; ++i) {
    const num = numbers[i];
    const wanted = target - num;

    if (lookup[wanted] != null && lookup[wanted] !== i) {
      return [lookup[wanted], i];
    }

    lookup[num] = i;
  }

  return undefined;
}
