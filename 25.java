/**
  给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。

  k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

  递归大法好
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
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode tmp = head;
        for (int i=0; i<k; i++) {
            if (tmp == null) {
                return head;
            }
            tmp = tmp.next;
        }
        ListNode[] tmpList = new ListNode[k];
        ListNode cur = head;
        for (int i=0; i<k; i++) {
            ListNode next = cur.next;
            cur.next = null;
            ListNode curNode = cur;
            tmpList[i] = curNode;
            cur = next;
        }
        
        for (int i=k-1; i>0; i--) {
            tmpList[i].next = tmpList[i-1];
        }
        tmpList[0].next = reverseKGroup(tmp, k);
        return tmpList[k-1];
    }
}