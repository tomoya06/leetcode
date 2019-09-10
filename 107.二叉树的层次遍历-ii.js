/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
  const queue = [];
  const travel = [];
  if (!root) return travel;
  queue.push([root, 0]);
  while (queue.length > 0) {
    const [currentNode, currentFloor] = queue.shift();
    if (currentNode.left) queue.push([currentNode.left, currentFloor + 1]);
    if (currentNode.right) queue.push([currentNode.right, currentFloor + 1]);
    if (travel.length > currentFloor) {
      travel[travel.length - currentFloor - 1].push(currentNode.val);
    } else {
      travel.unshift([currentNode.val]);
    }
  }
  return travel;
};

