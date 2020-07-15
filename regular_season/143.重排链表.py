#
# @lc app=leetcode.cn id=143 lang=python3
#
# [143] 重排链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reorderList2(self, head: ListNode) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        if not head:
            return

        allNodes = []
        prev, cur = None, head
        while cur:
            allNodes.append(cur)
            prev, cur = cur, cur.next
            prev.next = None

        cur = None
        while allNodes:
            h = allNodes.pop(0)
            if cur is None:
                cur = h
            else:
                cur.next = h
                cur = cur.next
            if allNodes:
                t = allNodes.pop()
                cur.next = t
                cur = cur.next     

    def reorderList(self, head: ListNode) -> None:
        if not head:
            return 

        mid, tail = head, head
        while tail and tail.next:
            mid = mid.next
            tail = tail.next.next
        p = mid.next
        mid.next = None
        while p:
            r = p.next
            p.next = mid.next
            mid.next = p
            p = r
        
        p, r = head, mid.next
        mid.next = None

        while r:
            s = r.next
            r.next = p.next
            p.next = r
            p = r.next
            r = s      

# @lc code=end

