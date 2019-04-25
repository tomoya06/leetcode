'''
合并两个有序链表
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        
        if l1.val < l2.val:
            head, l1 = self.cutHead(l1) 
        else:
            head, l2 = self.cutHead(l2)
            
        htmp = head
            
        while not (l1 is None and l2 is None):
            if (l1 is not None and l2 is None) or (l1 is not None and l2 is not None and l1.val < l2.val):
                head.next, l1 = self.cutHead(l1)
                head = head.next
            else:
                head.next, l2 = self.cutHead(l2)
                head = head.next
                
        return htmp

    def cutHead(self, l: ListNode):
        if l is not None:
            tmp = l
            l = l.next
            tmp.next = None
            return [tmp, l]
        else:
            return [None, None]