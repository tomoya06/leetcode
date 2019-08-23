/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  // const queue = [];
  // if (!!root) {
  //   queue.push([root, 1]);
  // }
  // let depth = 0;
  // while (queue.length > 0) {
  //   const [curNode, curDepth] = queue.shift();
  //   if (!!curNode) {
  //     depth = Math.max(depth, curDepth);
  //     queue.push([curNode.left, curDepth + 1]);
  //     queue.push([curNode.right, curDepth + 1]);
  //   }
  // }
  // return depth;
};

