/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (36.03%)
 * Likes:    276
 * Dislikes: 0
 * Total Accepted:    24.1K
 * Total Submissions: 66.1K
 * Testcase Example:  '[1,2,0]'
 *
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,0]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,4,-1,1]
 * 输出: 2
 * 
 * 
 * 示例 3:
 * 
 * 输入: [7,8,9,11,12]
 * 输出: 1
 * 
 * 
 * 说明:
 * 
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let idx;
  for (let i = 0; i < nums.length; i += 1) {
    // nums[i] should be i + 1, otherwise swap it to its location, that is nums[i] - 1
    while (nums[i] !== i + 1) {
      if (nums[i] < 0 || nums[i] > nums.length || nums[i] === nums[nums[i] - 1]) {
        break;
      }
      idx = nums[i] - 1;
      nums[i] = nums[idx];
      nums[idx] = idx + 1;
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
// @lc code=end

