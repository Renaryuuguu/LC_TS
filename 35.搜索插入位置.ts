/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  // 当r和l 相差很近时 Math.floor 在做 Math.floor(（l + r） / 2)时一定会保留低值
  // [1,3,5] target=2 -> [1,3] 此时nums[mid]为1 -> [1] -> 一定保留低值 -> r = mid - 1
  // 若无 nums[mid] === target的情况
  // 一定会触发r = mid - 1来跳出循环
  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }
  return l;
}
// @lc code=end
