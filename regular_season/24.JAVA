/**
  给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

  你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

  两个方案都是抄的，因为都挺巧妙
  方案一用递归，递归关键在于弄清楚三个步骤：
  1. 什么时候退出
  2. 返回什么
  3. 单次任务做什么
  在这里，每次只对两个相连节点操作，那么，单次返回后续列表的头部，本次任务是交换两个节点，当两个节点有null的时候退出

  方案二就是逐步扫描，因为出现了一次运行时间为0ms的提交，所以还是值得一看。
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution1 {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode next = head.next;
        head.next = swapPairs(next.next);
        next.next = head;
        return next;
    }
}

class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode a = head;
        if (a == null) {
            return a;
        }
        ListNode b = a.next;
        if (b == null) {
            return a;
        }
        ListNode pre = new ListNode(0);
        ListNode tmp = pre;
        tmp.next = a;
        while (a != null && b != null) {
            a.next = b.next;
            b.next = a;
            tmp.next = b;
            tmp = a;
            a = tmp.next;
            if (a == null) {
                break;
            }
            b = a.next;
        }
        return pre.next;
    }
}
