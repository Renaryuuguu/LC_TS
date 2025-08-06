/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let len = s.length;
    if (len < 2) return s;
    let dp = Array.from({ length : len}, () => new Array(len).fill(false));
    let start = 0;
    let maxLength = 1;
    for (let i = 0; i < len; i++) {
      dp[i][i] = true;
    }
    for (let L = 2; L <= len; L++) {
      for (let i = 0; i < len; i++) {
        let j = i + L - 1;
        if (j >= len) break;
        if (s[i] === s[j]) {
          if (j - i < 3) {
            dp[i][j] = true;
          } else {
            dp[i][j] = dp[i + 1][j - 1];
          }
        }
        else {
          dp[i][j] = false;
        }
        if (dp[i][j] && j - i + 1 > maxLength) {
          maxLength = j - i + 1;
          start = i;
        }
      }
    }
    return s.substring(start, start + maxLength);
};
// @lc code=end

