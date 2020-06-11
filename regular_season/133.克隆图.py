#
# @lc app=leetcode.cn id=133 lang=python3
#
# [133] 克隆图
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val, neighbors):
        self.val = val
        self.neighbors = neighbors
"""
class Solution:
    def __init__(self):
        self.visited = dict()
    
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return node
        if node in self.visited:
            return self.visited[node]
        clonedNode = Node(node.val, [])
        self.visited[node] = clonedNode

        if node.neighbors:
            clonedNode.neighbors = [self.cloneGraph(nei) for nei in node.neighbors]
        
        return clonedNode

# @lc code=end

