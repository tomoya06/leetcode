'''
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

注意删除的节点是头节点的情况
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        h1, h2 = head, head
        for _ in range(n):
            h2 = h2.next
        if h2 is None:
            tmp = h1
            head = head.next
            del tmp
            return head
            
        while h2.next is not None:
            h1 = h1.next
            h2 = h2.next
        tmp = h1.next
        h1.next = h1.next.next
        del tmp
        return head