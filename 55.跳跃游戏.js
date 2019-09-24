/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (35.89%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    32.9K
 * Total Submissions: 91K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 从位置 0 到 1 跳 1 步, 然后跳 3 步到达最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function (nums) {
  const canJumpMarks = new Array(nums.length);
  canJumpMarks[canJumpMarks.length - 1] = true;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    testCanJump(i);
  }
  return canJumpMarks[0];

  function testCanJump(index) {
    if (index === nums.length - 1) {
      return true;
    }
    if (index >= nums.length) {
      return true;
    }
    if (typeof canJumpMarks[index] === 'boolean') {
      return canJumpMarks[index];
    }
    if (nums[index] === 0) {
      canJumpMarks[index] = false;
      return false;
    }
    for (let i = 1; i <= nums[index]; i += 1) {
      const nextStep = testCanJump(index + i);
      if (nextStep) {
        canJumpMarks[index] = true;
        return true;
      }
    }
    canJumpMarks[index] = false;
    return false;
  }
};
var canJump = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;
  while (idx <= target) {
    max = Math.max(max, nums[idx] + idx);
    if (max >= target) {
      return true;
    }
    if (max <= idx && nums[idx] === 0) {
      return false;
    }
    idx += 1;
  }
  return false;
}

