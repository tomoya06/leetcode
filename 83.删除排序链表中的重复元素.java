/*
 * @lc app=leetcode.cn id=83 lang=java
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) {
            return head;
        }
        ListNode newHead = new ListNode(head.val);
        ListNode pivot = newHead;
        head = head.next;
        while (head != null) {
            if (head.val != pivot.val) {
                ListNode newNode = new ListNode(head.val);
                pivot.next = newNode;
                pivot = pivot.next;
            }
            head = head.next;
        }
        return newHead;
    }
}

