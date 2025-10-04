export function maxSubArray(numbers: number[]): number {
  if (!numbers.length) {
    return 0;
  }

  let outer = numbers[0];
  let inner = numbers[0];

  for (let i = 1; i < numbers.length; ++i) {
    inner = Math.max(numbers[i], inner + numbers[i]);
    outer = Math.max(inner, outer);
  }

  return outer;
}
