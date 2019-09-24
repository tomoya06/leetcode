/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (37.81%)
 * Likes:    188
 * Dislikes: 0
 * Total Accepted:    29.3K
 * Total Submissions: 76.3K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const results = [];
  results.push(intervals[0].slice(0));
  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i][0] >= results[results.length - 1][0] && intervals[i][0] <= results[results.length - 1][1]) {
      const lastResult = results.pop();
      const newRight = Math.max(lastResult[1], intervals[i][1]);
      results.push([lastResult[0], newRight]);
    } else {
      results.push(intervals[i].slice(0));
    }
  }
  return results;
};

