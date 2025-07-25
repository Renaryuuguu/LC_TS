/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let res: number[] = [];
  let next = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  // 把next也放在条件判断里面不用额外写
  while (i >= 0 || j >= 0 || next) {
    let x = i >= 0 ? Number(num1[i]) : 0;
    let y = j >= 0 ? Number(num2[j]) : 0;
    let sum = x + y + next;
    res.push(sum % 10);
    next = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res.reverse().join("");
}
// @lc code=end
