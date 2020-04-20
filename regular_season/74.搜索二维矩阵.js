/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (35.69%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    17.1K
 * Total Submissions: 47.8K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || !matrix[0]) {
    return false;
  }
  const firstCol = matrix.map((row) => row[0]);
  let rowIdx = biSeachLeft(firstCol, target);
  if (firstCol[rowIdx] === target) {
    return true;
  }
  rowIdx -= rowIdx === 0 ? 0 : 1;
  return biSearch(matrix[rowIdx], target) >= 0;

  /**
   * @param {number[]} list 
   * @param {number} target 
   */
  function biSearch(list, target) {
    let left = 0, right = list.length - 1;
    let mid;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (list[mid] === target) {
        return mid;
      } else if (list[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  /**
   * @param {number[]} list 
   * @param {number} target 
   */
  function biSeachLeft(list, target) {
    let left = 0, right = list.length;
    let mid;
    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (list[mid] === target) {
        right = mid;
      } else if (list[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
};

