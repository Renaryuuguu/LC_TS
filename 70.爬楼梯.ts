/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // let dp = new Array(n + 1).fill(0);
  // dp[0] = 1;
  // dp[1] = 1;
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];
  let a = 1; // i - 2
  let b = 1; // i - 1

  for (let i = 2; i <= n; i++) {
    const sum = a + b; // i
    // [a, b] = [b, a + b];
    a = b; // i - 2
    b = sum; // i - 1
  }
  return b;
}
// @lc code=end
