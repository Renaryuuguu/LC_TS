/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  let stk: [string, number][] = [];
  let result = "";
  let mutil = 0;
  for (let c of s) {
    if (c === "[") {
      // stk种result记录的是括号外的字符串
      stk.push([result, mutil]);
      // result重新赋值为空串记录括号内的字符串
      [result, mutil] = ["", 0];
    } else if (c === "]") {
      let [last_res, last_multi] = stk.pop()!;
      result = last_res + result.repeat(last_multi);
      // 分别处理字符和数字的处理逻辑
    } else if (c.localeCompare("0") >= 0 && c.localeCompare("9") <= 0) {
      mutil = mutil * 10 + +c;
    } else {
      result += c;
    }
  }
  return result;
}
// @lc code=end
