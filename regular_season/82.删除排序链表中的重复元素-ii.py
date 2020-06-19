#
# @lc app=leetcode.cn id=82 lang=python3
#
# [82] 删除排序链表中的重复元素 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        cur = head
        visited = dict()

        while cur is not None:
            if str(cur.val) in visited:
                visited[str(cur.val)] = 1
            else:
                visited[str(cur.val)] = 0
        
        cur = head
        lastNode = None
        newHead = None
        while cur is not None:
            if visited[str(cur.val)]:
                if lastNode is None:
                    pass
                else:
                    lastNode.next = cur.next
            else:
                if lastNode is None:
                    lastNode = cur
                    if newHead is None:
                        newHead = cur
                else:
                    lastNode.next = cur
            lastNode = cur.next
        
        return newHead

        
# @lc code=end

