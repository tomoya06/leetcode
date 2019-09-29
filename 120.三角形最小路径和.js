/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (61.13%)
 * Likes:    218
 * Dislikes: 0
 * Total Accepted:    23.3K
 * Total Submissions: 37.8K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * 例如，给定三角形：
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 说明：
 * 
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--)
    for (let j = 0; j < triangle[i].length; j++)
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
  return triangle[0][0]
}
/**
 * 下面这个方法空间复杂度为O(2n)
 */
// var minimumTotal = function (triangle) {
//   let lastResults = [0];
//   let results = [];
//   for (let i = 0; i < triangle.length; i += 1) {
//     for (let j = 0; j < triangle[i].length; j += 1) {
//       if (j === 0) {
//         results[j] = lastResults[j] + triangle[i][j];
//       } else if (j === triangle[i].length - 1) {
//         results[j] = lastResults[j - 1] + triangle[i][j];
//       } else {
//         results[j] = Math.min(lastResults[j - 1], lastResults[j]) + triangle[i][j];
//       }
//     }
//     lastResults = results.slice(0);
//     results = [];
//   }
//   return Math.min(...lastResults);
// }
/**
 * 下面这个方法超时了
 */
// var minimumTotal = function (triangle) {
//   const depth = triangle.length;
//   let curMinSum = undefined;
//   let curSum = 0;
//   if (triangle.length === 0) return curMinSum;
//   travel(0, 0);
//   return curMinSum;

//   function travel(curDepth, curIdx) {
//     curSum += triangle[curDepth][curIdx];
//     if (curDepth === depth - 1) {
//       if (typeof curMinSum === 'undefined') {
//         curMinSum = curSum;
//       } else {
//         curMinSum = Math.min(curSum, curMinSum);
//       }
//     } else {
//       travel(curDepth + 1, curIdx);
//       travel(curDepth + 1, curIdx + 1);
//     }
//     curSum -= triangle[curDepth][curIdx];
//   }
// };

