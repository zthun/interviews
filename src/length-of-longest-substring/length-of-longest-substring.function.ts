export function lengthOfLongestSubstring(str: string): number {
  const lookup: { [key: string]: number } = {};
  let left = 0;
  let right = 0;
  let len = 0;
  str = str || '';

  while (right < str.length) {
    const r = str.charAt(right);
    lookup[r] = lookup[r] || 0;
    lookup[r]++;

    while (lookup[r] > 1) {
      const l = str.charAt(left);
      lookup[l]--;
      left++;
    }

    len = Math.max(len, right - left + 1);
    right++;
  }

  return len;
}
