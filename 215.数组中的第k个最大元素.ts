/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start


function findKthLargest(nums: number[], k: number): number {
  function quickSelect(
    left: number,
    right: number,
  ): number {
    function partition(left: number, right: number): number {
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
    if (left === right) return nums[left];
    const mid = partition(left, right);
    if (mid === n - k) return nums[mid];
    if (mid < n - k) return quickSelect(mid + 1, right);
    else return quickSelect(left, mid - 1);
  }
  const n = nums.length;
  return quickSelect(0, n - 1);
}
// @lc code=end
