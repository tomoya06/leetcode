/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (62.24%)
 * Likes:    284
 * Dislikes: 0
 * Total Accepted:    32.8K
 * Total Submissions: 52.6K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const minSumStore = grid.map((row) => row.map((cell) => -1));

  for (let x = 0; x < grid.length; x += 1) {
    for (let y = 0; y < grid[0].length; y += 1) {
      if (!x && !y) {
        minSumStore[x][y] = grid[x][y];
      } else if (!x) {
        minSumStore[x][y] = minSumStore[x][y - 1] + grid[x][y];
      } else if (!y) {
        minSumStore[x][y] = minSumStore[x - 1][y] + grid[x][y];
      } else {
        minSumStore[x][y] = Math.min(minSumStore[x - 1][y], minSumStore[x][y - 1]) + grid[x][y];
      }
    }
  }

  return minSumStore[grid.length - 1][grid[0].length - 1];
};

