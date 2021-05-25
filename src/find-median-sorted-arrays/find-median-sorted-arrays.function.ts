/* eslint-disable require-jsdoc */

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  nums1 = nums1 || [];
  nums2 = nums2 || [];

  let l = 0;
  let r = 0;
  let nums = nums1.concat(nums2);
  nums = nums.length ? nums : [0];
  nums.sort((x, y) => x - y);

  if (nums.length % 2 === 1) {
    const m = Math.floor(nums.length / 2);
    return nums[m];
  }

  const m = nums.length / 2;
  l = nums[m - 1];
  r = nums[m];
  return (l + r) / 2;
}
