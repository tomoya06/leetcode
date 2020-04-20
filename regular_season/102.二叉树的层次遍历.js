/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (58.02%)
 * Likes:    283
 * Dislikes: 0
 * Total Accepted:    46.9K
 * Total Submissions: 79.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */

// @lc code=start
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
var levelOrder = function (root) {
  let levelStack = [];
  const results = []
  if (!root) return results;
  levelStack.push(root);
  while (levelStack.length > 0) {
    const newLevel = [];
    const curLen = levelStack.length;
    for (let i = 0; i < curLen; i += 1) {
      const curNode = levelStack.shift();
      if (curNode.left) {
        levelStack.push(curNode.left);
      }
      if (curNode.right) {
        levelStack.push(curNode.right);
      }
      newLevel.push(curNode.val);
    }
    results.push(newLevel);
  }
  return results;
};
// @lc code=end

