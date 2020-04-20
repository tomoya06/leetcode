/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (54.86%)
 * Likes:    466
 * Dislikes: 0
 * Total Accepted:    76.4K
 * Total Submissions: 138.1K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4,5]
 * 输出: 4
 * 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 
 * 示例 3:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitMatrix = null;
var allPrices = [];
var maxProfit = function (prices) {
  allPrices = prices
  const length = prices.length;
  if (length <= 1) {
    return 0;
  }
  maxProfitMatrix = '0'.repeat(length).split('').map(_ => '');
  const maxTem = findMaxProfit(0);
  return maxTem;
};

var findMaxProfit = function (k) {
  if (k >= allPrices.length) return 0;
  if (maxProfitMatrix[k] !== '') {
    return maxProfitMatrix[k];
  }
  let maxTem = 0;
  for (let i = k; i < allPrices.length - 1; i++) {
    for (let j = i + 1; j < allPrices.length; j++) {
      const deltaProfit = allPrices[j] - allPrices[i];
      if (deltaProfit <= 0) continue;
      const curProfit = deltaProfit + findMaxProfit(j + 1);
      if (curProfit > maxTem) {
        maxTem = curProfit;
      }
    }
  }
  maxProfitMatrix[k] = maxTem;
  return maxTem;
}

/**
 * 实际上，就算是当天卖出也可以当天继续买入，所以直接就是，后一天比当天高价，当天就买入:(
 */
// var maxProfit = function(prices) {
//   let diff = 0
//   if (prices.length > 0) { // []
//       prices.reduce((acc, next) => {
//           if (next > acc) {
//               diff += next - acc
//           }
//           return next
//       })
//   }
//   return diff
// };

