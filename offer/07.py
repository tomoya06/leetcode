# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if len(preorder) == 0:
            return None
        if len(preorder) == 1:
            return TreeNode(preorder[0])
        root = TreeNode(preorder[0])
        in_idx = inorder.index(root.val)
        left_tree_preorder = preorder[1:in_idx+1]
        left_tree_inorder = inorder[0:in_idx]
        right_tree_preorder = preorder[in_idx+1:]
        right_tree_inorder = inorder[in_idx+1:]
        root.left = self.buildTree(left_tree_preorder, left_tree_inorder)
        root.right = self.buildTree(right_tree_preorder, right_tree_inorder)
        return root
