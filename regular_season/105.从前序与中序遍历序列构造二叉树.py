#
# @lc app=leetcode.cn id=105 lang=python3
#
# [105] 从前序与中序遍历序列构造二叉树
#
# https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
#
# algorithms
# Medium (60.48%)
# Likes:    248
# Dislikes: 0
# Total Accepted:    25K
# Total Submissions: 40.5K
# Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
#
# 根据一棵树的前序遍历与中序遍历构造二叉树。
# 
# 注意:
# 你可以假设树中没有重复的元素。
# 
# 例如，给出
# 
# 前序遍历 preorder = [3,9,20,15,7]
# 中序遍历 inorder = [9,3,15,20,7]
# 
# 返回如下的二叉树：
# 
# ⁠   3
# ⁠  / \
# ⁠ 9  20
# ⁠   /  \
# ⁠  15   7
# 
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def build(preorder, inorder):
            if len(preorder) == 0: return None
            if len(preorder) == 1: return TreeNode(preorder[0])
            curRoot = preorder[0]
            curRootNode = TreeNode(curRoot)        
            inorderIdx = inorder.index(curRoot)
            preorderLeft, inorderLeft, preorderRight, inorderRight = preorder[1:inorderIdx+1], inorder[:inorderIdx], preorder[inorderIdx+1:], inorder[inorderIdx+1:]
            curRootNode.left = build(preorderLeft, inorderLeft)
            curRootNode.right = build(preorderRight, inorderRight)
            return curRootNode
        
        root = build(preorder, inorder)
        return root
        

        
# @lc code=end

