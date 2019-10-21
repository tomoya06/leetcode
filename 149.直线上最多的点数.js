/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 *
 * https://leetcode-cn.com/problems/max-points-on-a-line/description/
 *
 * algorithms
 * Hard (18.21%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    5.4K
 * Total Submissions: 28.7K
 * Testcase Example:  '[[1,1],[2,2],[3,3]]'
 *
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * 
 * 示例 1:
 * 
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 解释:
 * ^
 * |
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出: 4
 * 解释:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let maxCount = 0;
  if (points.length <= 2) {
    return points.length;
  }
  points = points.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < points.length - 1; i += 1) {
    for (let k = i + 1; k < points.length; k += 1) {
      const ratio = (points[i][1] === points[k][1]) ? Number.MAX_SAFE_INTEGER : (points[i][0] - points[k][0]) / (points[i][1] - points[k][1]);
      let curCount = 2;
      for (let m = 0; m < points.length; m += 1) {
        if (m !== i && m !== k) {
          curCount += ratio === Number.MAX_SAFE_INTEGER && points[i][1] === points[m][1] ||
            (points[i][0] - points[m][0]) / (points[i][1] - points[m][1]) === ratio ||
            (points[i][0] === points[m][0] && points[i][1] === points[m][1]);
        }
      }
      maxCount = Math.max(maxCount, curCount);
    }
  }
  return maxCount;
};
// @lc code=end

