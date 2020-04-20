/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (27.24%)
 * Likes:    294
 * Dislikes: 0
 * Total Accepted:    41.3K
 * Total Submissions: 149.6K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * 假设一个二叉搜索树具有如下特征：
 * 
 * 
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  return isValidBSTFunc(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);  

  /**
   * @param {TreeNode} root 
   * @param {number} min 
   * @param {number} max 
   * @return {boolean}
   */
  function isValidBSTFunc(root, min, max) {
    if (root.left) {
      const leftMin = min;
      const leftMax = root.val;
      if (root.left.val >= leftMax || root.left.val <= leftMin) return false;
      if (!isValidBSTFunc(root.left, leftMin, leftMax)) return false;
    }
    if (root.right) {
      const rightMin = root.val;
      const rightMax = max;
      if (root.right.val >= rightMax || root.right.val <= rightMin) return false;
      if (!isValidBSTFunc(root.right, rightMin, rightMax)) return false;
    }
    return true;
  }
};
// @lc code=end

