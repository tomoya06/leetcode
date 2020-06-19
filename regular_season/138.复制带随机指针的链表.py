#
# @lc app=leetcode.cn id=138 lang=python3
#
# [138] 复制带随机指针的链表
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def __init__(self):
        self.visited = dict()

    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head:
            return head
        
        if head in self.visited:
            return self.visited[head]
                
        clonedNode = Node(head.val, None, None)
        self.visited[head] = clonedNode

        if head.next is not None:
            clonedNode.next = self.copyRandomList(head.next)
        if head.random is not None:
            clonedNode.random = self.copyRandomList(head.random)
        
        return clonedNode
        
# @lc code=end

