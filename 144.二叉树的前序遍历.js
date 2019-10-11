/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (61.09%)
 * Likes:    156
 * Dislikes: 0
 * Total Accepted:    42.9K
 * Total Submissions: 69.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var preorderTraversal1 = function (root) {
  const results = [];
  travel(root);
  return results;

  /**
   * @param {TreeNode} node 
   */
  function travel(node) {
    if (!node) {
      return;
    }
    results.push(node.val);
    if (!!node.left) {
      travel(node.left);
    }
    if (!!node.right) {
      travel(node.right);
    }
  }
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const queue = [];
  const results = [];
  queue.push(root);

  while (queue.length > 0) {
    const curNode = queue.pop();
    results.push(curNode.val);
    if (!!curNode.right) {
      queue.push(curNode.right);
    }
    if (!!curNode.left) {
      queue.push(curNode.left);
    }
  }

  return results;
}
// @lc code=end

