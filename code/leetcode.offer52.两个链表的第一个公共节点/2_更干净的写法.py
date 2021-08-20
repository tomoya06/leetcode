# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        curA, curB = headA, headB

        while curA != curB:
            curA = headB if curA is None else curA.next
            curB = headA if curB is None else curB.next
        
        return curA
