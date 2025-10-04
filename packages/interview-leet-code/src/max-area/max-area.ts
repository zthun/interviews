export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  let max = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);

    area = minHeight * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
