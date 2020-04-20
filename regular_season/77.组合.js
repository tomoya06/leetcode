/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (69.92%)
 * Likes:    165
 * Dislikes: 0
 * Total Accepted:    20.2K
 * Total Submissions: 28.7K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const one2n = '0'.repeat(n).split('').map((_val, idx) => idx + 1);

  /**
   * @param {number[]} useable
   * @param {number} k 
   * @return {Set<number>[]}
   */
  const combineFunc = function(useable, k) {
    if (useable.length === 0) {
      return [];
    }
    if (k === 1) {
      return useable.map(num => [num]);
    }
    const result = [];
    useable.forEach((num, idx) => {
      const subUserable = useable.slice(idx + 1);
      const subCombine = combineFunc(subUserable, k - 1);
      subCombine.forEach(cob => result.push([num, ...cob]));
    })
    return result;
  }

  return combineFunc(one2n, k);
};
// @lc code=end

