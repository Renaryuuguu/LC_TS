/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stk: string[] = [];
  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") {
      stk.push(c);
    } else if (c === ")") {
      if (stk.pop() !== "(") return false;
    } else if (c === "]") {
      if (stk.pop() !== "[") return false;
    } else if (c === "}") {
      if (stk.pop() !== "{") return false;
    }
  }
  return stk.length === 0;
}
// @lc code=end
