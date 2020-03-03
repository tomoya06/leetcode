/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 *
 * https://leetcode-cn.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (64.69%)
 * Likes:    212
 * Dislikes: 0
 * Total Accepted:    16.1K
 * Total Submissions: 24.9K
 * Testcase Example:  '[2,2,3,2]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,3,2]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [0,1,0,1,0,1,99]
 * 输出: 99
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const store = {};
  const possibleNum = new Set();
  nums.forEach(num => {{
    store[`${num}`] = !store[`${num}`] ? 1 : store[`${num}`] + 1;
    if ((store[`${num}`]) === 1) {
      possibleNum.add(num);
    } else {
      possibleNum.delete(num);
    }
  }})
  return [...possibleNum][0];
};
// @lc code=end

