/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums: number[], left: number, right: number) {
  const mid = partition(nums, left, right);
  if (left < mid - 1) quickSort(nums, left, mid - 1);
  if (mid + 1 < right) quickSort(nums, mid + 1, right);
}

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
// @lc code=end
