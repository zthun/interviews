/**
 * Takes a list of interval pairs and merges overlapping pairs.
 *
 * Note here that the intervals array is considered immutable.
 *
 * @param intervals The intervals to merge.
 *
 * @returns A new array such that no intervals overlap.
 */
export function merge(intervals: number[][]): number[][] {
  const input = intervals.slice();
  const output = [];

  if (!input?.length) {
    return output;
  }

  // A brute force solution would basically give you O(n^2) where each
  // item in the input array would be compared to each other item.
  // However, we can actually reduce this to an O(n*log(n)) solution
  // by having a sorted input based on the lower bound number.
  input.sort((x, y) => x[0] - y[0]);

  // We always want the first one and this is our starting pair.
  //
  // We have 3 possible options for any pair, [x, y], [n, m]
  // 1.  x <= n <= y < m. Overlap case of [x, n, y, m].  Take [x, m].
  // 2.  x <= n <= m <= y.  Contained case of [x, n, m, y].  Take [x, y].
  // 3.  x <= y < n <= m. Outside range.  Add [n, m] to the list of outputs.
  //
  // Notice here that the other cases are not really possible since the list is
  // sorted.  There is no way for x > y or m > n, and we know for any adjacent pairs,
  // there's no possible way for x > n since that would contradict our sort precondition.

  output.push(input[0]);

  for (let i = 1, j = 0; i < input.length; ++i) {
    const currentPair = output[j];
    const pair = input[i];

    if (currentPair[1] >= pair[0]) {
      currentPair[1] = Math.max(currentPair[1], pair[1]);
    } else {
      output.push(pair);
      ++j;
    }
  }

  return output;
}
