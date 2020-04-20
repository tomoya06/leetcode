'''
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        head = ans = ListNode(0)
        while l1 is not None or l2 is not None:
            d1 = 0 if l1 is None else l1.val
            d2 = 0 if l2 is None else l2.val
            da = 0 if ans is None else ans.val
            ds = d1 + d2 + da
            ans.val = ds % 10
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next
            if ds >= 10 or (l1 is not None or l2 is not None):
                up = ListNode(ds // 10)
                ans.next = up
                ans = ans.next
        
        return head
            
            