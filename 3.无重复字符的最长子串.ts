/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const index = new Array(128).fill(-1);
  let maxLength = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const chCode = s.charCodeAt(r);
    l = Math.max(l, index[chCode] + 1);
    maxLength = Math.max(maxLength, r - l + 1);
    index[chCode] = r;
  }
  return maxLength;
}
// @lc code=end
