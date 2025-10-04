export function findMedianSortedArrays(
  numbers1: number[] | null,
  numbers2: number[] | null,
): number {
  numbers1 = numbers1 || [];
  numbers2 = numbers2 || [];

  let l = 0;
  let r = 0;
  let numbers = numbers1.concat(numbers2);
  numbers = numbers.length ? numbers : [0];
  numbers.sort((x, y) => x - y);

  if (numbers.length % 2 === 1) {
    const m = Math.floor(numbers.length / 2);
    return numbers[m];
  }

  const m = numbers.length / 2;
  l = numbers[m - 1];
  r = numbers[m];
  return (l + r) / 2;
}
