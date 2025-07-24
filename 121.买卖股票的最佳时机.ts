/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minprice = Infinity;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (minprice > prices[i]) {
      // 每当新低就记录
      minprice = prices[i];
      // 大于 maxprofit就更新
    } else if (maxprofit < prices[i] - minprice) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
}
// @lc code=end
