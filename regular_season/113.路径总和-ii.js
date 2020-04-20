/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode-cn.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (56.77%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 29.7K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \    / \
 * ⁠       7    2  5   1
 * 
 * 
 * 返回:
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const results = [];
  const curRoute = [];
  if (!root) {
    return results;
  }
  let curSum = 0;
  travel(root);

  return results;

  function travel(node) {
    // count in a node
    curSum += node.val;
    curRoute.push(node);
    if (!node.left && !node.right) { // A leaf is founded;
      if (curSum === sum) {
        results.push(curRoute.map((node) => node.val));
      }
    } else {  // not a leaf yet;
      if (!!node.left) {
        travel(node.left);
      }
      if (!!node.right) {
        travel(node.right);
      }
    }
    // count out the current leaf
    curRoute.pop();
    curSum -= node.val;
  }
};
// @lc code=end

