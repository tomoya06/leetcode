# ##剑指offer#二叉树##levele
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        self.flag = True

        def lengthOfTree(node):
            if not node:
                return 0
            if not self.flag:
                return 0
            left = lengthOfTree(node.left)
            right = lengthOfTree(node.right)
            if abs(left - right) > 1:
                self.flag = False
            return max(left, right) + 1

        lengthOfTree(root)
        return self.flag
 