#
# @lc app=leetcode.cn id=117 lang=python3
#
# [117] 填充每个节点的下一个右侧节点指针 II
#
# https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/description/
#
# algorithms
# Medium (39.75%)
# Likes:    148
# Dislikes: 0
# Total Accepted:    21.5K
# Total Submissions: 44K
# Testcase Example:  '[1,2,3,4,5,null,7]'
#
# 给定一个二叉树
# 
# struct Node {
# ⁠ int val;
# ⁠ Node *left;
# ⁠ Node *right;
# ⁠ Node *next;
# }
# 
# 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
# 
# 初始状态下，所有 next 指针都被设置为 NULL。
# 
# 
# 
# 进阶：
# 
# 
# 你只能使用常量级额外空间。
# 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
# 
# 
# 
# 
# 示例：
# 
# 
# 
# 输入：root = [1,2,3,4,5,null,7]
# 输出：[1,#,2,3,#,4,5,7,#]
# 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。
# 
# 
# 
# 提示：
# 
# 
# 树中的节点数小于 6000
# -100 <= node.val <= 100
# 
# 
# 
# 
# 
# 
# 
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if root is None is None:
            return root
        
        curLevel = [root]

        while True:
            curLevelLength = len(curLevel)
            if curLevelLength == 0:
                return root
            if curLevelLength > 1:
                for curIdx in range(curLevelLength - 1):
                    curLevel[curIdx].next = curLevel[curIdx + 1]
            
            for curIdx in range(curLevelLength):
                if curLevel[curIdx].left is not None:
                    curLevel.append(curLevel[curIdx].left)
                if curLevel[curIdx].right is not None:
                    curLevel.append(curLevel[curIdx].right)
            
            curLevel = curLevel[curLevelLength:]
        
# @lc code=end

