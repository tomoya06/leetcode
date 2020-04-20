/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (53.64%)
 * Likes:    159
 * Dislikes: 0
 * Total Accepted:    22.8K
 * Total Submissions: 42.1K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 *
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort();

  function premuExe(nums) {
    if (nums.length === 1) return [nums];
    let result = [];
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === nums[i + 1]) {
        continue;
      }
      let subnums = [...nums.slice(0, i), ...nums.slice(i + 1)];
      for (let c of premuExe(subnums)) {
        result.push([nums[i], ...c]);
      }
    }
    return result;
  }

  return premuExe(nums);
};
// @lc code=end
