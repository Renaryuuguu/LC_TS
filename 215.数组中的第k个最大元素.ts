/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function partition(nums: number[], left: number, right: number): number {
  let pivot = nums[left];
  while (left < right) {
    while (nums[right] > pivot && left < right) right--;
    if (left < right) nums[left++] = nums[right];
    while (nums[left] < pivot && left < right) left++;
    if (left < right) nums[right--] = nums[left];
  }
  nums[left] = pivot;
  return left;
}
function quickSelect(
  nums: number[],
  left: number,
  right: number,
  index: number
): number {
  if (left === right) return nums[left];
  const mid = partition(nums, left, right);
  if (mid === index) return nums[mid];
  if (mid < index) return quickSelect(nums, mid + 1, right, index);
  else return quickSelect(nums, left, mid - 1, index);
}
function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  return quickSelect(nums, 0, n - 1, n - k);
}
// @lc code=end
