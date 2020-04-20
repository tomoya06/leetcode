/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (51.03%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    19.1K
 * Total Submissions: 36.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层次遍历如下：
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  // false: left to right; true: right to left
  let flag = false;
  const result = []
  let row1 = [root], row2 = [];
  while (row1.length > 0) {
    if (!flag) {
      result.push(row1.slice(0).map((item) => item.val));
    } else {
      result.push(row1.slice(0).reverse().map((item) => item.val));
    }
    flag = !flag;
    while (row1.length > 0) {
      row2.push(row1[0].left);
      row2.push(row1[0].right);
      row1.shift();
    }
    row1 = row2.slice(0).filter((child) => !!child);
    row2.splice(0);
  }

  return result;
};

