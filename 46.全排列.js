/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (71.12%)
 * Likes:    380
 * Dislikes: 0
 * Total Accepted:    46.8K
 * Total Submissions: 65.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return [nums];
  }
  let result = [];
  nums.forEach((num, idx) => {
    let subnums = nums.slice();
    subnums.splice(idx, 1);
    let subresult = permute(subnums);
    result.push(...subresult.map(res => [num, ...res]));
  })
  return result;
};
// @lc code=end
