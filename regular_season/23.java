/**
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
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
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) {
            return null;
        }
        List<Integer> allnodes = new ArrayList<>();
        for (int i=0; i < lists.length; i++) {
            ListNode head = lists[i];
            while (head != null) {
                allnodes.add(head.val);
                head = head.next;
            }
        }
        Collections.sort(allnodes);
        
        if (allnodes.size() == 0) {
            return null;
        }
        
        ListNode head = new ListNode(allnodes.get(0));
        ListNode tmp = head;
        
        for (int i=1; i<allnodes.size(); i++) {
            ListNode curNode = new ListNode(allnodes.get(i));
            head.next = curNode;
            head = head.next;
        }
        
        return tmp;
        
    }
}