/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.42%)
 * Likes:    244
 * Dislikes: 0
 * Total Accepted:    42.1K
 * Total Submissions: 101.2K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // const sortedNums = nums.sort();
  // const length = nums.length;
  // let minSum = sortedNums[0] + sortedNums[1] + sortedNums[2];
  // for (let i = 0; i < length - 2; i++) {
  //   let l = i + 1, r = length - 1;
  //   while (l < r) {
  //     const curSum = sortedNums[i] + sortedNums[l] + sortedNums[r];
  //     if (Math.abs(curSum - target) < Math.abs(minSum - target)) {
  //       minSum = curSum;
  //     }
  //     if (curSum > target) {
  //       r -= 1;
  //     } else if (curSum < target) {
  //       l += 1;
  //     } else {
  //       return curSum;
  //     }
  //   }
  // }
  // return minSum;

  // 暴力试一下
  let minSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const curSum = nums[i] + nums[j] + nums[k];
        if (Math.abs(minSum - target) > Math.abs(curSum - target)) {
          minSum = curSum;
        }
      }
    }
  }
  return minSum;
};

